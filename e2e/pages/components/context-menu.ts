import { expect, Locator, Page } from '@playwright/test';
import { accessibleName } from './accessible-name';

/** Menu suspenso (Angular Material) aberto pelos ícones de "Menu", pela "Ordem" e pelo avatar do perfil. */
export class ContextMenu {
	readonly root: Locator;

	constructor(page: Page) {
		this.root = page.getByRole('menu');
	}

	get items(): Locator {
		return this.root.getByRole('menuitem');
	}

	item(name: string | RegExp): Locator {
		return this.root.getByRole('menuitem', { name: accessibleName(name) });
	}

	async choose(name: string | RegExp): Promise<void> {
		await this.item(name).click();
		await expect(this.root).toBeHidden();
	}
}
