import { expect, Locator, Page } from '@playwright/test';
import { AlertDialog } from './components/alert-dialog';

export interface NewAccount {
	name: string;
	email: string;
	password: string;
}

/** Formulário "Criar conta", aberto pelo botão "Crie sua conta" da tela de login. */
export class SignUpPage {
	readonly alert: AlertDialog;
	readonly heading: Locator;
	readonly nameInput: Locator;
	readonly emailInput: Locator;
	readonly passwordInput: Locator;
	readonly submitButton: Locator;
	readonly backToLoginButton: Locator;

	constructor(readonly page: Page) {
		this.alert = new AlertDialog(page);
		this.heading = page.getByRole('heading', { name: 'Criar conta' });
		this.nameInput = page.getByPlaceholder('Nome');
		this.emailInput = page.getByPlaceholder('E-mail');
		this.passwordInput = page.getByPlaceholder('Senha');
		this.submitButton = page.getByRole('button', { name: 'Crie sua conta' });
		this.backToLoginButton = page.getByRole('button', { name: 'Faça login' });
	}

	async expectVisible(): Promise<void> {
		await expect(this.heading).toBeVisible();
		await expect(this.nameInput).toBeVisible();
	}

	async fill({ name, email, password }: NewAccount): Promise<void> {
		await this.nameInput.fill(name);
		await this.emailInput.fill(email);
		await this.passwordInput.fill(password);
	}

	async submit(account: NewAccount): Promise<void> {
		await this.fill(account);
		await this.submitButton.click();
	}
}
