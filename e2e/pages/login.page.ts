import { expect, Locator, Page } from '@playwright/test';
import { AlertDialog } from './components/alert-dialog';

interface Credentials {
	email: string;
	password: string;
}

/** Tela de login ("/login" e "/login/:destino"). */
export class LoginPage {
	readonly alert: AlertDialog;
	readonly heading: Locator;
	readonly emailInput: Locator;
	readonly passwordInput: Locator;
	readonly submitButton: Locator;
	readonly forgotPasswordLink: Locator;
	readonly createAccountButton: Locator;

	constructor(readonly page: Page) {
		this.alert = new AlertDialog(page);
		this.heading = page.getByText('Login', { exact: true });
		this.emailInput = page.getByPlaceholder('E-mail');
		this.passwordInput = page.getByPlaceholder('Password');
		this.submitButton = page.getByRole('button', { name: 'Entrar' });
		this.forgotPasswordLink = page.getByRole('link', { name: 'Esqueci a senha' });
		this.createAccountButton = page.getByRole('button', { name: 'Crie sua conta' });
	}

	async goto(path = '/login'): Promise<void> {
		await this.page.goto(path);
		await this.expectVisible();
	}

	async expectVisible(): Promise<void> {
		await expect(this.heading).toBeVisible();
		await expect(this.submitButton).toBeVisible();
	}

	async fill({ email, password }: Credentials): Promise<void> {
		await this.emailInput.fill(email);
		await this.passwordInput.fill(password);
	}

	async submit(credentials: Credentials): Promise<void> {
		await this.fill(credentials);
		await this.submitButton.click();
	}

	/** Entra e espera a tela principal abrir. */
	async login(credentials: Credentials): Promise<void> {
		await this.submit(credentials);
		await this.page.waitForURL((url) => url.pathname === '/');
	}
}
