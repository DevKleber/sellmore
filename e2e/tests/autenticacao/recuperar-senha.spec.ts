import {
	buildPasswordResetLink,
	expiredPasswordResetLink,
	MALFORMED_PASSWORD_RESET_LINK,
	tamperedPasswordResetLink,
} from '../../support/data/password-reset-link';
import { nonExistentEmail } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

/**
 * A recuperação de senha só é exercitada com e-mail inexistente: o `.env` local da API usa o
 * SMTP de produção. A troca de senha pelo link é testada montando os parâmetros do link do
 * próprio vendedor de teste, sem e-mail nenhum.
 */
const NEW_PASSWORD = 'NovaSenha@E2e2026';
const WEAK_PASSWORD = '123456';
const INVALID_LINK = 'Link inválido ou já utilizado. Peça um novo.';

test.describe('Recuperar senha', () => {
	test.use({ authenticated: false });

	test('mostra "Esqueceu sua senha?" com o botão desabilitado até informar o e-mail', async ({ recoverPasswordPage }) => {
		await recoverPasswordPage.goto();
		await expect(recoverPasswordPage.requestHeading).toBeVisible();
		await expect(recoverPasswordPage.requestButton).toBeDisabled();

		await recoverPasswordPage.emailInput.fill(nonExistentEmail());

		await expect(recoverPasswordPage.requestButton).toBeEnabled();
	});

	test('e-mail não cadastrado mostra "Não encontrado"', async ({ recoverPasswordPage }) => {
		await recoverPasswordPage.goto();

		await recoverPasswordPage.requestReset(nonExistentEmail());

		await recoverPasswordPage.alert.acknowledge('Não encontrado');
	});

	// Hoje, depois do erro, o botão "Redefinir senha" some e só volta recarregando a página.
	test.fixme('depois de um erro o botão "Redefinir senha" continua disponível para tentar de novo', async ({ recoverPasswordPage }) => {
		await recoverPasswordPage.goto();

		await recoverPasswordPage.requestReset(nonExistentEmail());
		await recoverPasswordPage.alert.acknowledge('Não encontrado');

		await expect(recoverPasswordPage.requestButton).toBeVisible();
	});

	test('"Faça login" volta para a tela de login', async ({ recoverPasswordPage, loginPage }) => {
		await recoverPasswordPage.goto();

		await recoverPasswordPage.backToLoginButton.click();

		await expect(recoverPasswordPage.page).toHaveURL('/login');
		await loginPage.expectVisible();
	});
});

test.describe('Troca de senha pelo link do e-mail', () => {
	test.use({ authenticated: false });

	test('o link abre "Alterando a senha" com o botão desabilitado até preencher as duas senhas', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(buildPasswordResetLink(account.credentials));
		await expect(recoverPasswordPage.resetHeading).toBeVisible();
		await expect(recoverPasswordPage.changePasswordButton).toBeDisabled();

		await recoverPasswordPage.newPasswordInput.fill(NEW_PASSWORD);
		await expect(recoverPasswordPage.changePasswordButton).toBeDisabled();
		await recoverPasswordPage.confirmPasswordInput.fill(NEW_PASSWORD);

		await expect(recoverPasswordPage.changePasswordButton).toBeEnabled();
	});

	test('link com parâmetros inválidos avisa que o link é inválido', async ({ recoverPasswordPage }) => {
		await recoverPasswordPage.gotoResetLink(MALFORMED_PASSWORD_RESET_LINK);

		await recoverPasswordPage.changePassword(NEW_PASSWORD);

		await recoverPasswordPage.alert.acknowledge(INVALID_LINK);
	});

	test('link expirado mostra "Link expirado"', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(expiredPasswordResetLink(account.credentials));

		await recoverPasswordPage.changePassword(NEW_PASSWORD);

		await recoverPasswordPage.alert.acknowledge('Link expirado');
	});

	test('link com assinatura adulterada é recusado como inválido', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(tamperedPasswordResetLink(account.credentials));

		await recoverPasswordPage.changePassword(NEW_PASSWORD);

		await recoverPasswordPage.alert.acknowledge(INVALID_LINK);
	});

	test('senhas diferentes mostram "As senhas não conferem"', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(buildPasswordResetLink(account.credentials));

		await recoverPasswordPage.changePassword(NEW_PASSWORD, `${NEW_PASSWORD}-diferente`);

		await recoverPasswordPage.alert.acknowledge('As senhas não conferem');
	});

	test('senha fraca mostra "A senha informada é muito fraca"', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(buildPasswordResetLink(account.credentials));

		await recoverPasswordPage.changePassword(WEAK_PASSWORD);

		await recoverPasswordPage.alert.acknowledge('A senha informada é muito fraca');
	});

	test.describe('com link válido', () => {
		test.use({ accountScope: 'test' });

		test('troca a senha, entra na tela principal e a nova senha passa a valer no login', async ({ recoverPasswordPage, account, publicApi }) => {
			await recoverPasswordPage.gotoResetLink(buildPasswordResetLink(account.credentials));

			await recoverPasswordPage.changePassword(NEW_PASSWORD);

			await expect(recoverPasswordPage.page).toHaveURL('/');
			await expect(publicApi.login({ ...account.credentials, password: NEW_PASSWORD })).resolves.toBeTruthy();
			await expect(publicApi.login(account.credentials)).rejects.toThrow(/401/);
		});

		test('o mesmo link não troca a senha uma segunda vez', async ({ recoverPasswordPage, account, context }) => {
			const link = buildPasswordResetLink(account.credentials);
			await recoverPasswordPage.gotoResetLink(link);
			await recoverPasswordPage.changePassword(NEW_PASSWORD);
			await expect(recoverPasswordPage.page).toHaveURL('/');
			await context.clearCookies();
			await recoverPasswordPage.page.evaluate(() => localStorage.clear());

			await recoverPasswordPage.gotoResetLink(link);
			await recoverPasswordPage.changePassword(`${NEW_PASSWORD}-outra`);

			await recoverPasswordPage.alert.acknowledge(INVALID_LINK);
		});
	});
});
