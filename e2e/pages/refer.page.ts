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
	readonly fileInput: Locator;
	readonly importNotice: Locator;
	readonly removeButtons: Locator;
	readonly help: Locator;

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
		this.fileInput = page.locator('.indicar-arquivo');
		this.importNotice = page.locator('.indicar-aviso');
		this.removeButtons = page.locator('.indicar-remover');
		this.help = page.locator('.ws-refer__help');
	}

	async goto(code: string): Promise<void> {
		await this.page.goto(`/indicar/${code}`);
	}

	/** Escolhe um arquivo de contatos (.vcf) com o conteúdo informado. */
	async importContacts(vCard: string): Promise<void> {
		await this.fileInput.setInputFiles({ name: 'contatos.vcf', mimeType: 'text/vcard', buffer: Buffer.from(vCard, 'utf8') });
	}

	async fillPerson(row: number, name: string, phone: string): Promise<void> {
		await this.nameInputs.nth(row).fill(name);
		await this.phoneInputs.nth(row).fill(phone);
	}
}
