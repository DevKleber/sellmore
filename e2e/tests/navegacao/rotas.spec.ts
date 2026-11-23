import { expect, test } from '../../support/fixtures';

test.describe('Rotas públicas', () => {
	test.use({ authenticated: false });

	test('endereço inexistente redireciona para a página 404', async ({ page, notFoundPage }) => {
		await page.goto('/pagina-que-nao-existe');

		await expect(page).toHaveURL('/not-found');
		await expect(notFoundPage.code).toBeVisible();
	});

	test('"Voltar para a tela principal" na página 404 abre a tela principal, que sem login leva ao login', async ({ page, notFoundPage, loginPage }) => {
		await notFoundPage.goto();

		await notFoundPage.backLink.click();

		await expect(page).toHaveURL('/login');
		await loginPage.expectVisible();
	});

	test('F5 na página 404 continua na página 404', async ({ page, notFoundPage }) => {
		await notFoundPage.goto();
		await page.reload();

		await expect(page).toHaveURL('/not-found');
		await expect(notFoundPage.code).toBeVisible();
	});

	test('F5 no login continua no login', async ({ page, loginPage }) => {
		await loginPage.goto();
		await page.reload();

		await expect(page).toHaveURL('/login');
		await loginPage.expectVisible();
	});

	test('F5 na recuperação de senha continua na mesma tela', async ({ page, recoverPasswordPage }) => {
		await recoverPasswordPage.goto();
		await page.reload();

		await expect(page).toHaveURL('/request-recover-password');
		await expect(recoverPasswordPage.requestHeading).toBeVisible();
	});
});

test.describe('Rotas internas', () => {
	test('F5 no log de acesso continua no log de acesso', async ({ page, accessLogPage }) => {
		await accessLogPage.goto();
		await accessLogPage.alert.acknowledge('Sem permissão');
		await page.reload();

		await expect(page).toHaveURL('/access_log');
		await accessLogPage.alert.acknowledge('Sem permissão');
		await expect(accessLogPage.heading).toBeVisible();
	});

	test('F5 na tela principal continua na tela principal com os dados carregados', async ({ page, home, api }) => {
		const lead = await api.createCustomer();
		await home.goto();
		await page.reload();

		await expect(page).toHaveURL('/');
		await expect(home.leadCard(lead.name).root).toBeVisible();
	});
});
