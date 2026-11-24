import { CustomerStatus } from '../../support/data/customer-status';
import { expect, test } from '../../support/fixtures';

const TOTAL_STEPS = 3;

test.describe('Primeiros passos', () => {
	test.use({ accountScope: 'test' });

	test('conta nova vê os três passos por fazer e o atalho para cadastrar o primeiro lead', async ({ home }) => {
		await home.goto();

		await expect(home.firstSteps.steps).toHaveCount(TOTAL_STEPS);
		await expect(home.firstSteps.doneSteps).toHaveCount(0);

		await home.firstSteps.startButton.click();

		await home.leadForm.expectOpen();
	});

	test('cada passo concluído fica marcado como feito', async ({ home, api }) => {
		const lead = await api.createCustomer();
		await api.createReferral(lead);

		await home.goto();

		await expect(home.firstSteps.doneSteps).toHaveCount(2);
		await expect(home.firstSteps.startButton).toHaveCount(0);
	});

	test('some quando os três passos estão concluídos e não volta depois de recarregar', async ({ home, api }) => {
		const lead = await api.createCustomer();
		await api.changeStatus(await api.createReferral(lead), CustomerStatus.Comprou);

		await home.goto();
		await expect(home.leadCard(lead.name).root).toBeVisible();
		await expect(home.firstSteps.root).toBeHidden();

		await home.reload();
		await expect(home.firstSteps.root).toBeHidden();
	});

	test('"Dispensar" esconde o guia de vez', async ({ home }) => {
		await home.goto();

		await home.firstSteps.dismissButton.click();
		await expect(home.firstSteps.root).toBeHidden();

		await home.reload();
		await expect(home.firstSteps.root).toBeHidden();
	});
});
