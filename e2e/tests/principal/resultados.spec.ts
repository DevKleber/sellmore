import { CustomerStatus } from '../../support/data/customer-status';
import { expect, test } from '../../support/fixtures';

const MONTHS_IN_HISTORY = 6;

test.describe('Meus resultados', () => {
	test.use({ accountScope: 'test' });

	test('conta nova tem tudo zerado', async ({ home }) => {
		await home.goto();

		await home.openResults();

		await expect(home.results.referrals).toHaveText('0');
		await expect(home.results.attended).toHaveText('0');
		await expect(home.results.sales).toHaveText('0');
		await expect(home.results.conversion).toHaveText('0%');
	});

	test('mostra indicações, atendidos, vendas e conversão nos três períodos', async ({ home, api }) => {
		const lead = await api.createCustomer();
		await api.createReferral(lead);
		await api.changeStatus(await api.createReferral(lead), CustomerStatus.Comprou);
		await api.changeStatus(await api.createReferral(lead), CustomerStatus.NaoTemInteresse);
		await home.goto();

		await home.openResults();

		for (const period of ['Este mês', 'Esta semana', 'Desde o início'] as const) {
			await home.results.choosePeriod(period);
			await expect(home.results.referrals).toHaveText('3');
			await expect(home.results.attended).toHaveText('2');
			await expect(home.results.sales).toHaveText('1');
			await expect(home.results.conversion).toHaveText('50%');
		}
		await expect(home.results.monthLabels).toHaveCount(MONTHS_IN_HISTORY);
		await home.results.close();
	});
});
