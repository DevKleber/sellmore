import { TEST_ACCOUNT_PASSWORD } from '../../support/env';
import { uniqueName, uniqueTestAccountEmail } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

function newAccount() {
	return { name: uniqueName('Vendedor cadastrado pela tela'), email: uniqueTestAccountEmail(), password: TEST_ACCOUNT_PASSWORD };
}

test.describe('Cadastro de conta pela tela', () => {
	test.use({ authenticated: false });

	test('"Crie sua conta" abre o formulário "Create account" e "Faça login" volta ao login', async ({ loginPage, signUpPage }) => {
		await loginPage.goto();

		await loginPage.createAccountButton.click();
		await signUpPage.expectVisible();

		await signUpPage.backToLoginButton.click();
		await loginPage.expectVisible();
	});

	test('o botão "Crie sua conta" só habilita com nome, e-mail e senha', async ({ loginPage, signUpPage }) => {
		const account = newAccount();
		await loginPage.goto();
		await loginPage.createAccountButton.click();
		await expect(signUpPage.submitButton).toBeDisabled();

		await signUpPage.nameInput.fill(account.name);
		await signUpPage.emailInput.fill(account.email);
		await expect(signUpPage.submitButton).toBeDisabled();
		await signUpPage.passwordInput.fill(account.password);

		await expect(signUpPage.submitButton).toBeEnabled();
	});

	test('cria a conta e entra direto na tela principal com o novo vendedor', async ({ loginPage, signUpPage, home }) => {
		const account = newAccount();
		await loginPage.goto();
		await loginPage.createAccountButton.click();

		await signUpPage.submit(account);

		await expect(signUpPage.page).toHaveURL('/');
		await expect(home.versionNotice.root).toContainText(`Olá, ${account.name}, temos novidades.`);
		await home.versionNotice.dismiss();
		const menu = await home.openProfileMenu();
		await expect(menu.item(account.name)).toBeVisible();
	});

	test('e-mail já cadastrado mostra "E-mail indisponível"', async ({ loginPage, signUpPage, account }) => {
		await loginPage.goto();
		await loginPage.createAccountButton.click();

		await signUpPage.submit({ ...newAccount(), email: account.credentials.email });

		await signUpPage.alert.acknowledge('E-mail indisponível');
		await expect(signUpPage.page).toHaveURL('/login');
	});

	// Hoje, depois de um erro no cadastro, o botão "Crie sua conta" some e só volta
	// trocando para o login e de volta para o cadastro.
	test.fixme('depois de um erro no cadastro o botão "Crie sua conta" continua disponível', async ({ loginPage, signUpPage, account }) => {
		await loginPage.goto();
		await loginPage.createAccountButton.click();

		await signUpPage.submit({ ...newAccount(), email: account.credentials.email });
		await signUpPage.alert.acknowledge('E-mail indisponível');

		await expect(signUpPage.submitButton).toBeVisible();
	});
});
