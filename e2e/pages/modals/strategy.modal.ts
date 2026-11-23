import { Locator, Page } from '@playwright/test';
import { Strategy } from '../../support/api/types';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Modal "Roteiro": texto da estratégia de venda e link de venda. */
export class StrategyModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalScriptAdd');
	}

	get stepsInput(): Locator {
		return this.root.getByPlaceholder('Estratégia');
	}

	get saleUrlInput(): Locator {
		return this.root.getByPlaceholder('Seu link para venda');
	}

	get saveButton(): Locator {
		return this.button('Salvar');
	}

	async fill({ steps, saleUrl }: Strategy): Promise<void> {
		await this.stepsInput.fill(steps);
		await this.saleUrlInput.fill(saleUrl);
	}

	async save(): Promise<void> {
		await this.saveButton.click();
	}
}
