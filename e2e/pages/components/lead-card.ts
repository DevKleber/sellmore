import { Locator, Page } from '@playwright/test';
import { CustomerEntry } from './customer-entry';
import { ReferralItem } from './referral-item';

/** Card de um lead na tela principal, com seus referidos. */
export class LeadCard extends CustomerEntry {
	readonly root: Locator;

	constructor(page: Page, name: string) {
		const root = page.locator('.customers').filter({ has: page.locator('.parent .name').getByText(name, { exact: true }) });
		super(page, root.locator('.parent'));
		this.root = root;
	}

	get phones(): Locator {
		return this.root.locator('.parent .contacto-phone');
	}

	get referralNames(): Locator {
		return this.root.locator('.children .contacto-name');
	}

	get referralCount(): Locator {
		return this.root.locator('.info').getByText(/referidos/);
	}

	referral(name: string): ReferralItem {
		return new ReferralItem(this.page, this.root, name);
	}

	async addReferral(): Promise<void> {
		await this.root.locator('.actionButton').click();
	}
}
