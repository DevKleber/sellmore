import { Locator, Page } from '@playwright/test';

/** Página "/not-found". */
export class NotFoundPage {
	readonly code: Locator;

	constructor(readonly page: Page) {
		this.code = page.getByText('404', { exact: true });
	}

	async goto(): Promise<void> {
		await this.page.goto('/not-found');
	}
}
