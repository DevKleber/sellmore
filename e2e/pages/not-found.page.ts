import { Locator, Page } from '@playwright/test';

/** Página "/not-found". */
export class NotFoundPage {
	readonly code: Locator;
	readonly backLink: Locator;

	constructor(readonly page: Page) {
		this.code = page.getByText('404', { exact: true });
		this.backLink = page.getByRole('link', { name: 'Voltar para a tela principal' });
	}

	async goto(): Promise<void> {
		await this.page.goto('/not-found');
	}
}
