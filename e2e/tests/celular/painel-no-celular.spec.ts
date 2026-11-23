import { MobileLayout } from '../../pages/components/mobile-layout';
import { CustomerStatus } from '../../support/data/customer-status';
import { uniqueBrazilianMobile, uniqueName } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

test.describe('Painel no celular', () => {
	test('a página não rola de lado e o botão "Novo lead" fica flutuando', async ({ home, api }) => {
		await api.createCustomer({ name: uniqueName('Lead') });
		const mobile = new MobileLayout(home.page);
		await home.goto();

		expect(await mobile.horizontalOverflow()).toBeLessThanOrEqual(0);
		expect(await mobile.positionOf(mobile.newLeadButton)).toBe('fixed');
	});

	test('o botão flutuante abre o cadastro de lead', async ({ home }) => {
		const mobile = new MobileLayout(home.page);
		await home.goto();

		await mobile.newLeadButton.click();

		await home.leadForm.expectOpen();
	});

	test('a busca fica recolhida e abre pelo ícone do cabeçalho', async ({ home, api }) => {
		const customer = await api.createCustomer({
			name: uniqueName('Buscado'),
			phones: [{ number: uniqueBrazilianMobile(), whatsapp: true }],
		});
		const mobile = new MobileLayout(home.page);
		await home.goto();
		await expect(mobile.searchInput).toBeHidden();

		await mobile.openSearchButton.click();
		await mobile.searchInput.fill(customer.name);

		await expect(home.searchResults.result(customer.name).root).toBeVisible();
	});

	test('tema, log e demais ações do cabeçalho ficam no menu da conta', async ({ home }) => {
		const mobile = new MobileLayout(home.page);
		await home.goto();
		await expect(mobile.desktopThemeButton).toBeHidden();
		await expect(home.reportBugButton).toBeHidden();

		const menu = await home.openProfileMenu();

		await expect(menu.item('Usar tema escuro')).toBeVisible();
		await expect(menu.item('Informar um problema')).toBeVisible();
		await expect(menu.item('Fazer uma doação')).toBeVisible();
		await menu.choose('Usar tema escuro');
		await expect(home.page.locator('html')).toHaveAttribute('data-theme', 'dark');
	});

	test('os filtros de status funcionam nas pílulas com rolagem', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const buyer = await api.createReferral(lead, { name: uniqueName('Comprador') });
		await api.changeStatus(buyer, CustomerStatus.Comprou);
		await api.createReferral(lead, { name: uniqueName('Aguardando') });
		await home.goto();

		await home.filters.showOnly(CustomerStatus.Comprou);

		await expect(home.leadCard(lead.name).referralNames).toHaveText([buyer.name]);
	});
});
