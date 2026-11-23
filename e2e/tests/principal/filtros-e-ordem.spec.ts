import { Customer } from '../../support/api/types';
import { WisellerApi } from '../../support/api/wiseller-api';
import { ALL_STATUSES, CustomerStatus, CustomerStatusCode, STATUS_FILTER_LABEL } from '../../support/data/customer-status';
import { uniqueName, uniqueSuffix } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';
import { CardOrder } from '../../pages/components/ordering-menu';

type ReferralsByStatus = Record<CustomerStatusCode, Customer>;

const CARDS_PER_PAGE = 8;
const EXTRA_CARDS = 2;
const FIRST_PAGE = 1;

function isCustomersPage(url: string, page: number): boolean {
	const { pathname, searchParams } = new URL(url);
	return pathname.endsWith('/api/customers') && searchParams.get('page') === String(page) && searchParams.get('perPage') === String(CARDS_PER_PAGE);
}

/** Lead com um referido em cada status. */
async function leadWithOneReferralPerStatus(api: WisellerApi): Promise<{ lead: Customer; referrals: ReferralsByStatus }> {
	const lead = await api.createCustomer({ name: uniqueName('Lead') });
	const referrals = {} as ReferralsByStatus;
	for (const status of ALL_STATUSES) {
		referrals[status] = await api.createReferral(lead, { name: uniqueName(`Referido ${status}`) });
		await changeStatusUnlessOpen(api, referrals[status], status);
	}
	return { lead, referrals };
}

async function changeStatusUnlessOpen(api: WisellerApi, customer: Customer, status: CustomerStatusCode): Promise<void> {
	if (status === CustomerStatus.Aberto) {
		return;
	}
	await api.changeStatus(customer, status);
}

test.describe('Filtros de status', () => {
	test('cada filtro de status mostra só os referidos com aquele status', async ({ home, api }) => {
		const { lead, referrals } = await leadWithOneReferralPerStatus(api);
		await home.goto();
		const card = home.leadCard(lead.name);
		await expect(card.referralNames).toHaveCount(ALL_STATUSES.length);

		for (const status of ALL_STATUSES) {
			await test.step(`filtro "${STATUS_FILTER_LABEL[status]}"`, async () => {
				await home.filters.showOnly(status);
				await expect(card.referralNames).toHaveText([referrals[status].name]);
			});
		}
	});

	test('"Todos" volta a mostrar os referidos de todos os status', async ({ home, api }) => {
		const { lead } = await leadWithOneReferralPerStatus(api);
		await home.goto();
		const card = home.leadCard(lead.name);
		await home.filters.showOnly(CustomerStatus.Comprou);
		await expect(card.referralNames).toHaveCount(1);

		await home.filters.showAll();

		await expect(card.referralNames).toHaveCount(ALL_STATUSES.length);
	});

	test('a tela abre com "Todos" selecionado', async ({ home }) => {
		await home.goto();

		await home.filters.expectSelected(home.filters.allPill);
		await home.filters.expectNotSelected(home.filters.pill(CustomerStatus.Aberto));
	});

	test('os filtros escolhidos continuam valendo depois de recarregar a página', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const buyer = await api.createReferral(lead, { name: uniqueName('Comprador') });
		await api.changeStatus(buyer, CustomerStatus.Comprou);
		const waiting = await api.createReferral(lead, { name: uniqueName('Aguardando') });
		await home.goto();

		await home.filters.showOnly(CustomerStatus.Comprou);
		await home.page.reload();

		await home.filters.expectSelected(home.filters.pill(CustomerStatus.Comprou));
		await home.filters.expectNotSelected(home.filters.allPill);
		const card = home.leadCard(lead.name);
		await expect(card.referralNames).toHaveText([buyer.name]);
		await expect(card.referral(waiting.name).root).toHaveCount(0);
	});
});

test.describe('Ordem e paginação dos cards', () => {
	test.use({ accountScope: 'test' });

	/** Cadastra os leads nesta ordem: Bruno, Ana, Carla. */
	async function createLeadsInKnownOrder(api: WisellerApi) {
		const suffix = uniqueSuffix();
		const bruno = await api.createCustomer({ name: `Bruno ${suffix}` });
		const ana = await api.createCustomer({ name: `Ana ${suffix}` });
		const carla = await api.createCustomer({ name: `Carla ${suffix}` });
		return { ana: ana.name, bruno: bruno.name, carla: carla.name };
	}

	test('ordena por lançamento, do mais recente ao mais antigo e vice-versa', async ({ home, api }) => {
		const { ana, bruno, carla } = await createLeadsInKnownOrder(api);
		await home.goto();

		await home.ordering.choose(CardOrder.NewestFirst);
		await expect(home.leadNames).toHaveText([carla, ana, bruno]);

		await home.ordering.choose(CardOrder.OldestFirst);
		await expect(home.leadNames).toHaveText([bruno, ana, carla]);
	});

	test('ordena em ordem alfabética de A a Z e de Z a A e marca a opção escolhida', async ({ home, api }) => {
		const { ana, bruno, carla } = await createLeadsInKnownOrder(api);
		await home.goto();

		await home.ordering.choose(CardOrder.AToZ);
		await expect(home.leadNames).toHaveText([ana, bruno, carla]);

		await home.ordering.choose(CardOrder.ZToA);
		await expect(home.leadNames).toHaveText([carla, bruno, ana]);
		await home.ordering.open();
		await expect(home.ordering.selectedOption).toHaveText(CardOrder.ZToA);
	});

	test('mostra os primeiros 8 cards e carrega os demais ao rolar até o fim da página', async ({ home, api }) => {
		for (let created = 0; created < CARDS_PER_PAGE + EXTRA_CARDS; created++) {
			await api.createCustomer({ name: uniqueName('Lead') });
		}
		await home.goto();
		await expect(home.leadNames).toHaveCount(CARDS_PER_PAGE);

		await home.scrollToBottom();

		await expect(home.leadNames).toHaveCount(CARDS_PER_PAGE + EXTRA_CARDS);
	});

	test('a listagem é pedida à API uma página por vez', async ({ home, api }) => {
		for (let created = 0; created < CARDS_PER_PAGE + EXTRA_CARDS; created++) {
			await api.createCustomer({ name: uniqueName('Lead') });
		}
		const firstPage = home.page.waitForRequest((request) => isCustomersPage(request.url(), FIRST_PAGE));
		await home.goto();
		await firstPage;
		await expect(home.leadNames).toHaveCount(CARDS_PER_PAGE);

		const secondPage = home.page.waitForRequest((request) => isCustomersPage(request.url(), FIRST_PAGE + 1));
		await home.scrollToBottom();

		await secondPage;
		await expect(home.leadNames).toHaveCount(CARDS_PER_PAGE + EXTRA_CARDS);
	});

	test('a ordem escolhida continua depois de recarregar a página', async ({ home, api }) => {
		const { ana, bruno, carla } = await createLeadsInKnownOrder(api);
		await home.goto();

		await home.ordering.choose(CardOrder.AToZ);
		await home.reload();

		await expect(home.leadNames).toHaveText([ana, bruno, carla]);
	});
});
