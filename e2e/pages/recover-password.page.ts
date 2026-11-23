import { Locator, Page } from '@playwright/test';
import { PasswordResetLink } from '../support/data/password-reset-link';
import { AlertDialog } from './components/alert-dialog';

const PATH = '/request-recover-password';

/**
 * Tela "/request-recover-password": sem parâmetros pede o e-mail ("Esqueceu sua senha?");
 * com `url` e `token` (link do e-mail) mostra a troca de senha ("Alterando a senha").
 */
export class RecoverPasswordPage {
	readonly alert: AlertDialog;

	readonly requestHeading: Locator;
	readonly emailInput: Locator;
	readonly requestButton: Locator;
	readonly backToLoginButton: Locator;

	readonly resetHeading: Locator;
	readonly newPasswordInput: Locator;
	readonly confirmPasswordInput: Locator;
	readonly changePasswordButton: Locator;

	constructor(readonly page: Page) {
		this.alert = new AlertDialog(page);

		this.requestHeading = page.getByText('ESQUECEU SUA SENHA?', { exact: true });
		this.emailInput = page.getByPlaceholder('E-mail');
		this.requestButton = page.getByRole('button', { name: 'Redefinir senha' });
		this.backToLoginButton = page.getByRole('button', { name: 'Faça login' });

		this.resetHeading = page.getByText('Alterando a senha', { exact: true });
		this.newPasswordInput = page.getByPlaceholder('Nova senha', { exact: true });
		this.confirmPasswordInput = page.getByPlaceholder('Confirme a nova senha');
		this.changePasswordButton = page.getByRole('button', { name: 'Alterar senha' });
	}

	async goto(): Promise<void> {
		await this.page.goto(PATH);
	}

	async gotoResetLink({ url, token }: PasswordResetLink): Promise<void> {
		const query = new URLSearchParams({ url, token });
		await this.page.goto(`${PATH}?${query.toString()}`);
	}

	async requestReset(email: string): Promise<void> {
		await this.emailInput.fill(email);
		await this.requestButton.click();
	}

	async changePassword(newPassword: string, confirmation = newPassword): Promise<void> {
		await this.newPasswordInput.fill(newPassword);
		await this.confirmPasswordInput.fill(confirmation);
		await this.changePasswordButton.click();
	}
}
