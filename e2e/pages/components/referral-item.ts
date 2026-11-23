import { expect, Locator, Page } from '@playwright/test';
import { ClosedStatusCode, STATUS_FILTER_LABEL } from '../../support/data/customer-status';
import { CustomerEntry } from './customer-entry';

const PREFERENCE_OPTION = /preferência$/;

/** Referido (indicado) listado dentro do card de um lead. */
export class ReferralItem extends CustomerEntry {
	readonly root: Locator;
	private readonly card: Locator;
	private readonly name: string;

	constructor(page: Page, card: Locator, name: string) {
		const root = card.locator('.children .item').filter({ has: page.locator('.contacto-name').getByText(name, { exact: true }) });
		super(page, root, root);
		this.root = root;
		this.card = card;
		this.name = name;
	}

	/** O próprio item, enquanto o referido aguarda o telefonema. */
	get waitingActions(): Locator {
		return this.card.locator('.children .item.waiting').filter({ has: this.page.locator('.contacto-name').getByText(this.name, { exact: true }) });
	}

	/** O status do referido é escolhido no menu do item. */
	async markStatus(status: ClosedStatusCode): Promise<void> {
		const menu = await this.openMenu();
		await menu.choose(STATUS_FILTER_LABEL[status]);
	}

	get phones(): Locator {
		return this.root.locator('.contacto-phone');
	}

	/** Estrela ao lado do nome dos referidos preferidos. */
	get preferredMark(): Locator {
		return this.root.locator('.ws-ref__star');
	}

	async open(): Promise<void> {
		await this.root.locator('.contacto').click();
	}

	async togglePreference(): Promise<void> {
		const menu = await this.openMenu();
		await menu.choose(PREFERENCE_OPTION);
	}

	async expectPreferred(preferred: boolean): Promise<void> {
		await expect(this.preferredMark).toBeVisible({ visible: preferred });
	}
}
