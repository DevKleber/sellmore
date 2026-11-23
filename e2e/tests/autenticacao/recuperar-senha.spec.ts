import {
	buildPasswordResetLink,
	expiredPasswordResetLink,
	MALFORMED_PASSWORD_RESET_LINK,
	passwordResetLinkSentByApi,
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

	// Hoje a API responde erro 500 para link com parâmetros inválidos e a tela mostra
	// "Erro interno no servidor! Server Error".
	test.fixme('link com parâmetros inválidos avisa que o link é inválido', async ({ recoverPasswordPage }) => {
		await recoverPasswordPage.gotoResetLink(MALFORMED_PASSWORD_RESET_LINK);

		await recoverPasswordPage.changePassword(NEW_PASSWORD);

		await recoverPasswordPage.alert.expectMessage(/link/i);
	});

	test('link expirado mostra "Link expirado"', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(expiredPasswordResetLink(account.credentials));

		await recoverPasswordPage.changePassword(NEW_PASSWORD);

		await recoverPasswordPage.alert.acknowledge('Link expirado');
	});

	test('link com token adulterado é recusado com a mensagem "Error"', async ({ recoverPasswordPage, account }) => {
		await recoverPasswordPage.gotoResetLink(tamperedPasswordResetLink(account.credentials));

		await recoverPasswordPage.changePassword(NEW_PASSWORD);

		await recoverPasswordPage.alert.acknowledge('Error');
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

		// Hoje o link que a API envia por e-mail leva sempre o id 1: para qualquer outro
		// vendedor a troca de senha dá erro 500 ("Erro interno no servidor!").
		test.fixme('o link no formato enviado pela API por e-mail troca a senha do vendedor', async ({ recoverPasswordPage, account }) => {
			await recoverPasswordPage.gotoResetLink(passwordResetLinkSentByApi(account.credentials));

			await recoverPasswordPage.changePassword(NEW_PASSWORD);

			await expect(recoverPasswordPage.page).toHaveURL('/');
		});
	});
});
