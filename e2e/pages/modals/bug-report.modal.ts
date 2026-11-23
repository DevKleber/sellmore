import { Locator, Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Modal "Enviar um relatório de erro (Bug)". */
export class BugReportModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalBug');
	}

	get titleInput(): Locator {
		return this.root.getByPlaceholder('Título');
	}

	get descriptionInput(): Locator {
		return this.root.getByPlaceholder('Descreva seu problema em detalhes');
	}

	get sendButton(): Locator {
		return this.button('Salvar');
	}

	async fill(title: string, description: string): Promise<void> {
		await this.titleInput.fill(title);
		await this.descriptionInput.fill(description);
	}
}

