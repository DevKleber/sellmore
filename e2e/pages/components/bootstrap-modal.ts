import { expect, Locator, Page } from '@playwright/test';
import { accessibleName } from './accessible-name';

/** Ponto no canto da camada do modal, fora da caixa de diálogo: clicar ali fecha o modal. */
const OUTSIDE_DIALOG_POINT = { x: 5, y: 5 };

/**
 * Modal do Bootstrap 3. Ele mantém `aria-hidden="true"` mesmo aberto, por isso os botões
 * são buscados por papel com `includeHidden` e sempre dentro do próprio modal.
 */
export class BootstrapModal {
	readonly root: Locator;

	constructor(
		protected readonly page: Page,
		modalId: string,
	) {
		this.root = page.locator(`#${modalId}`);
	}

	button(name: string | RegExp): Locator {
		return this.root.getByRole('button', { name: accessibleName(name), includeHidden: true });
	}

	get title(): Locator {
		return this.root.locator('.modal-title');
	}

	async expectOpen(): Promise<void> {
		await expect(this.root).toBeVisible();
	}

	async expectClosed(): Promise<void> {
		await expect(this.root).toBeHidden();
	}

	async close(): Promise<void> {
		await this.button('Fechar').click();
		await this.expectClosed();
	}

	async closeByClickingOutside(): Promise<void> {
		await this.root.click({ position: OUTSIDE_DIALOG_POINT });
		await this.expectClosed();
	}
}
