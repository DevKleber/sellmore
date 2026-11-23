import { expect, Locator, Page } from '@playwright/test';
import { ALL_STATUSES, CustomerStatusCode, STATUS_FILTER_LABEL } from '../../support/data/customer-status';

/**
 * Switches "Em aberto", "Problemas com cartão"... da tela principal. O checkbox real fica
 * escondido (display: none); o usuário clica no desenho do switch ao lado dele.
 */
export class StatusFilters {
	constructor(private readonly page: Page) {}

	checkbox(status: CustomerStatusCode): Locator {
		return this.container(status).locator('input[type="checkbox"]');
	}

	async toggle(status: CustomerStatusCode): Promise<void> {
		await this.container(status).locator('.onoffswitch-label').click();
	}

	async set(status: CustomerStatusCode, enabled: boolean): Promise<void> {
		if ((await this.checkbox(status).isChecked()) === enabled) {
			return;
		}
		await this.toggle(status);
		await expect(this.checkbox(status)).toBeChecked({ checked: enabled });
	}

	async showOnly(...statuses: CustomerStatusCode[]): Promise<void> {
		for (const status of ALL_STATUSES) {
			await this.set(status, statuses.includes(status));
		}
	}

	async showAll(): Promise<void> {
		await this.showOnly(...ALL_STATUSES);
	}

	async hideAll(): Promise<void> {
		await this.showOnly();
	}

	private container(status: CustomerStatusCode): Locator {
		return this.page.locator('.showEachStatus > div').filter({ has: this.page.getByText(STATUS_FILTER_LABEL[status], { exact: true }) });
	}
}
