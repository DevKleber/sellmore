import { CustomerStatus, STATUS_DESCRIPTION } from '../../support/data/customer-status';
import { uniqueName } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

const STATUS_SAVED = 'Status salvo!';
const SCHEDULE_REQUEST = 'Status atualizado para ligar depois. Agora agende um horario para entrar em contato!';

async function countFrom(text: Promise<string>): Promise<number> {
	return Number.parseInt(await text, 10);
}

test.describe('Status do atendimento', () => {
	for (const status of [CustomerStatus.ProblemasComCartao, CustomerStatus.NaoTemInteresse]) {
		test(`marcar um referido como "${STATUS_DESCRIPTION[status]}" mostra "Status salvo!" e o ícone do status`, async ({ home, api }) => {
			const lead = await api.createCustomer({ name: uniqueName('Lead') });
			const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
			await home.goto();
			const item = home.leadCard(lead.name).referral(referral.name);

			await item.markStatus(status);
			await home.alert.acknowledge(STATUS_SAVED);

			await expect(item.statusTag(status)).toBeVisible();
			await expect(item.waitingActions).toBeHidden();
			await home.reload();
			await expect(item.statusTag(status)).toBeVisible();
		});
	}

	test('vender para um referido mostra a animação de parabéns e soma uma venda no contador', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		const salesBefore = await countFrom(home.statistics.sales.innerText());
		const item = home.leadCard(lead.name).referral(referral.name);

		await item.markStatus(CustomerStatus.Comprou);

		await home.waitSaleCelebrationToEnd();
		await expect(item.statusTag(CustomerStatus.Comprou)).toBeVisible();
		await expect(home.statistics.sales).toHaveText(new RegExp(`^${salesBefore + 1} vendas?$`));
	});

	test('"Ligar depois" pede para agendar e abre a agenda com o referido escolhido', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		const item = home.leadCard(lead.name).referral(referral.name);

		await item.markStatus(CustomerStatus.LigarDepois);
		await home.alert.acknowledge(SCHEDULE_REQUEST);

		await home.calendar.expectOpen();
		await expect(home.calendar.selectedCustomer).toContainText(referral.name);
		await home.calendar.closeByClickingOutside();
		await expect(item.statusTag(CustomerStatus.LigarDepois)).toBeVisible();
	});

	test('o próprio lead do card também pode receber um status', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		await home.goto();
		const card = home.leadCard(lead.name);

		await card.markStatus(CustomerStatus.NaoTemInteresse);
		await home.alert.acknowledge(STATUS_SAVED);

		await expect(card.statusTag(CustomerStatus.NaoTemInteresse)).toBeVisible();
		await expect(card.waitingActions).toBeHidden();
	});

	test('no modal de ligação, muda o status e mostra o "Status atual"', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		const item = home.leadCard(lead.name).referral(referral.name);
		await item.open();
		await home.callModal.expectOpen();
		await expect(home.callModal.currentStatus).toBeHidden();

		await home.callModal.changeStatus(CustomerStatus.ProblemasComCartao);
		await home.alert.acknowledge(STATUS_SAVED);

		await expect(home.callModal.currentStatus).toHaveText(`Status atual: ${STATUS_DESCRIPTION.pc}`);
		await expect(home.callModal.statusOption(CustomerStatus.ProblemasComCartao)).toBeHidden();
		await home.callModal.closeByClickingOutside();
		await expect(item.statusTag(CustomerStatus.ProblemasComCartao)).toBeVisible();
	});
});
