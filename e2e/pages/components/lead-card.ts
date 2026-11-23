import { Locator, Page } from '@playwright/test';
import { ClosedStatusCode, STATUS_ACTION_HINT } from '../../support/data/customer-status';
import { CustomerEntry } from './customer-entry';
import { byHint } from './hints';
import { ReferralItem } from './referral-item';

/** Card de um lead na tela principal, com seus referidos. */
export class LeadCard extends CustomerEntry {
	readonly root: Locator;
	private readonly statusButtons: Locator;

	constructor(page: Page, name: string) {
		const root = page.locator('.customers').filter({ has: page.locator('.parent .name').getByText(name, { exact: true }) });
		super(page, root.locator('.parent'), root.locator('.info'));
		this.root = root;
		this.statusButtons = root.locator('.ws-statusbar');
	}

	/** Botões de status do lead, habilitados só enquanto ele aguarda o telefonema. */
	get waitingActions(): Locator {
		return this.root.locator('.ws-statusbar.waiting');
	}

	async markStatus(status: ClosedStatusCode): Promise<void> {
		await this.statusButtons.locator(byHint(STATUS_ACTION_HINT[status])).click();
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
