import { nonExistentEmail } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

const INVALID_CREDENTIALS_MESSAGE = 'Usuário ou senha inválida';

function encodedDestination(path: string): string {
	return Buffer.from(path).toString('base64');
}

test.describe('Login', () => {
	test.use({ authenticated: false });

	test('o botão Entrar fica desabilitado até preencher e-mail e senha', async ({ loginPage }) => {
		await loginPage.goto();
		await expect(loginPage.submitButton).toBeDisabled();

		await loginPage.emailInput.fill(nonExistentEmail());
		await expect(loginPage.submitButton).toBeDisabled();

		await loginPage.passwordInput.fill('qualquer-senha');
		await expect(loginPage.submitButton).toBeEnabled();
	});

	test('entra com e-mail e senha válidos e abre a tela principal', async ({ loginPage, home, account }) => {
		await loginPage.goto();
		await loginPage.login(account.credentials);

		await expect(loginPage.page).toHaveURL('/');
		await expect(home.searchInput).toBeVisible();
	});

	test('senha errada mostra "Usuário ou senha inválida" e continua no login', async ({ loginPage, account }) => {
		await loginPage.goto();
		await loginPage.submit({ email: account.credentials.email, password: 'senha-errada' });

		await loginPage.alert.acknowledge(INVALID_CREDENTIALS_MESSAGE);
		await expect(loginPage.page).toHaveURL('/login');
		await loginPage.expectVisible();
	});

	test('e-mail não cadastrado mostra "Usuário ou senha inválida"', async ({ loginPage }) => {
		await loginPage.goto();
		await loginPage.submit({ email: nonExistentEmail(), password: 'qualquer-senha' });

		await loginPage.alert.acknowledge(INVALID_CREDENTIALS_MESSAGE);
		await expect(loginPage.page).toHaveURL('/login');
	});

	test('abrir a tela principal sem estar logado redireciona para o login', async ({ page, loginPage }) => {
		await page.goto('/');

		await expect(page).toHaveURL('/login');
		await loginPage.expectVisible();
	});

	test('abrir o log de acesso sem estar logado redireciona para o login', async ({ page, loginPage }) => {
		await page.goto('/access_log');

		await expect(page).toHaveURL('/login');
		await loginPage.expectVisible();
	});

	test('a rota login/:destino mostra o login e, ao entrar, abre a tela principal', async ({ loginPage, account }) => {
		await loginPage.goto(`/login/${encodedDestination('/')}`);
		await loginPage.login(account.credentials);

		await expect(loginPage.page).toHaveURL('/');
	});

	// Hoje o destino informado em login/:destino é lido mas ignorado: o login sempre abre "/".
	test.fixme('ao entrar pela rota login/:destino, abre o destino informado', async ({ loginPage, account }) => {
		await loginPage.goto(`/login/${encodedDestination('/access_log')}`);
		await loginPage.submit(account.credentials);

		await expect(loginPage.page).toHaveURL('/access_log');
	});

	test('"Esqueci a senha" leva para a recuperação de senha', async ({ loginPage, recoverPasswordPage }) => {
		await loginPage.goto();
		await loginPage.forgotPasswordLink.click();

		await expect(loginPage.page).toHaveURL('/request-recover-password');
		await expect(recoverPasswordPage.requestHeading).toBeVisible();
	});
});

test.describe('Sessão', () => {
	test('continua logado ao recarregar a página (F5)', async ({ home }) => {
		await home.goto();
		await home.reload();

		await expect(home.page).toHaveURL('/');
	});
});

test.describe('Sair', () => {
	test.use({ accountScope: 'test' });

	test('"Sair" no menu do perfil volta ao login e a tela principal deixa de abrir', async ({ home, loginPage }) => {
		await home.goto();
		await home.logout();
		await loginPage.expectVisible();

		await home.page.goto('/');
		await expect(home.page).toHaveURL('/login');
	});
});
