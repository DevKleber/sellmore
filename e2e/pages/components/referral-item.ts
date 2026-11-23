import { expect, Locator, Page } from '@playwright/test';
import { CustomerEntry } from './customer-entry';
import { byHint } from './hints';

const PREFERENCE_HINT = 'Dar preferencia';
const SOLID_STAR = /(^|\s)fa(\s|$)/;
const OUTLINED_STAR = /(^|\s)far(\s|$)/;

/** Referido (indicado) listado dentro do card de um lead. */
export class ReferralItem extends CustomerEntry {
	readonly root: Locator;

	constructor(page: Page, card: Locator, name: string) {
		const root = card.locator('.children .item').filter({ has: page.locator('.contacto-name').getByText(name, { exact: true }) });
		super(page, root);
		this.root = root;
	}

	get phones(): Locator {
		return this.root.locator('.contacto-phone');
	}

	get preferenceStar(): Locator {
		return this.root.locator(byHint(PREFERENCE_HINT));
	}

	/** Estrela ao lado do nome, exibida para preferidos que já têm status. */
	get preferredMark(): Locator {
		return this.root.locator('.contacto-name .fa-star');
	}

	async open(): Promise<void> {
		await this.root.locator('.contacto').click();
	}

	async togglePreference(): Promise<void> {
		await this.preferenceStar.click();
	}

	async expectPreferred(preferred: boolean): Promise<void> {
		await expect(this.preferenceStar).toHaveClass(preferred ? SOLID_STAR : OUTLINED_STAR);
	}
}
