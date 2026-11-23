import { Locator, Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

export interface AttachedFile {
	name: string;
	mimeType: string;
	content: string;
}

/** Modal de importação dos contatos (.vcf) indicados por um lead. */
export class ImportContactsModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalImportContact');
	}

	get importButton(): Locator {
		return this.button('Importar');
	}

	get importedSummary(): Locator {
		return this.root.getByText(/^Importado \d+$/);
	}

	get duplicatedSummary(): Locator {
		return this.root.getByText(/^Indicado por outro lead \d+$/);
	}

	/** Seleciona o arquivo pela janela aberta no botão "Anexar arquivo". */
	async attach({ name, mimeType, content }: AttachedFile): Promise<void> {
		const fileChooser = this.page.waitForEvent('filechooser');
		await this.button('Anexar arquivo').click();
		await (await fileChooser).setFiles({ name, mimeType, buffer: Buffer.from(content, 'utf8') });
	}

	async import(): Promise<void> {
		await this.importButton.click();
	}
}
