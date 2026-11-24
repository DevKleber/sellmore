import { Locator, Page } from '@playwright/test';

/** Página pública "/indicar/:codigo", onde o cliente de um vendedor informa quem indica. */
export class ReferPage {
	readonly heading: Locator;
	readonly nameInputs: Locator;
	readonly phoneInputs: Locator;
	readonly sendButton: Locator;
	readonly addPersonButton: Locator;
	readonly thanks: Locator;
	readonly referMoreButton: Locator;
	readonly unavailable: Locator;
	readonly error: Locator;

	constructor(readonly page: Page) {
		this.heading = page.getByRole('heading', { level: 1 });
		this.nameInputs = page.locator('.indicado-nome');
		this.phoneInputs = page.locator('.indicado-telefone');
		this.sendButton = page.locator('.indicar-enviar');
		this.addPersonButton = page.locator('.indicar-adicionar');
		this.thanks = page.locator('.indicar-obrigado');
		this.referMoreButton = page.locator('.indicar-mais');
		this.unavailable = page.locator('.indicar-indisponivel');
		this.error = page.locator('.indicar-erro');
	}

	async goto(code: string): Promise<void> {
		await this.page.goto(`/indicar/${code}`);
	}

	async fillPerson(row: number, name: string, phone: string): Promise<void> {
		await this.nameInputs.nth(row).fill(name);
		await this.phoneInputs.nth(row).fill(phone);
	}
}
