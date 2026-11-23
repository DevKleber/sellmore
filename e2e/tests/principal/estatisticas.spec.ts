import { CustomerStatus } from '../../support/data/customer-status';
import { expect, test } from '../../support/fixtures';

test.describe('Contadores da tela principal', () => {
	test.use({ accountScope: 'test' });

	test('conta nova começa com todos os contadores zerados', async ({ home }) => {
		await home.goto();

		await expect(home.statistics.toContact).toHaveText('0 referidos à contactar');
		await expect(home.statistics.sales).toHaveText('0 venda');
		await expect(home.statistics.callLater).toHaveText('0 ligar depois');
		await expect(home.statistics.cardProblems).toHaveText('0 problema com cartão');
	});

	test('conta referidos à contactar, vendas, ligar depois e problemas com cartão', async ({ home, api }) => {
		const lead = await api.createCustomer();
		await api.createReferral(lead);
		for (const status of [CustomerStatus.Comprou, CustomerStatus.LigarDepois, CustomerStatus.ProblemasComCartao, CustomerStatus.ProblemasComCartao, CustomerStatus.NaoTemInteresse]) {
			await api.changeStatus(await api.createReferral(lead), status);
		}
		await home.goto();

		await expect(home.statistics.toContact).toHaveText('2 referidos à contactar');
		await expect(home.statistics.sales).toHaveText('1 venda');
		await expect(home.statistics.callLater).toHaveText('1 ligar depois');
		await expect(home.statistics.cardProblems).toHaveText('2 problemas com cartão');
	});

	test('arquivados deixam de ser contados, exceto as vendas', async ({ home, api }) => {
		const lead = await api.createCustomer();
		await api.archive(await api.createReferral(lead));
		const archivedBuyer = await api.createReferral(lead);
		await api.changeStatus(archivedBuyer, CustomerStatus.Comprou);
		await api.archive(archivedBuyer);
		await api.changeStatus(await api.createReferral(lead), CustomerStatus.Comprou);
		await home.goto();

		await expect(home.statistics.toContact).toHaveText('1 referidos à contactar');
		await expect(home.statistics.sales).toHaveText('2 vendas');
	});
});
