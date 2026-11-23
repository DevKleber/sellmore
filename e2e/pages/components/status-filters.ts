import { expect, Locator, Page } from '@playwright/test';
import { CustomerStatusCode, STATUS_FILTER_LABEL } from '../../support/data/customer-status';

const ALL_LABEL = 'Todos';

/** Pílulas de filtro da tela principal: "Todos" ou um status por vez. */
export class StatusFilters {
	private readonly group: Locator;

	constructor(page: Page) {
		this.group = page.getByRole('group', { name: 'Filtrar por status' });
	}

	pill(status: CustomerStatusCode): Locator {
		return this.group.getByRole('button', { name: STATUS_FILTER_LABEL[status], exact: true });
	}

	get allPill(): Locator {
		return this.group.getByRole('button', { name: ALL_LABEL, exact: true });
	}

	async showOnly(status: CustomerStatusCode): Promise<void> {
		await this.pill(status).click();
		await this.expectSelected(this.pill(status));
	}

	async showAll(): Promise<void> {
		await this.allPill.click();
		await this.expectSelected(this.allPill);
	}

	async expectSelected(pill: Locator): Promise<void> {
		await expect(pill).toHaveAttribute('aria-pressed', 'true');
	}

	async expectNotSelected(pill: Locator): Promise<void> {
		await expect(pill).toHaveAttribute('aria-pressed', 'false');
	}
}
