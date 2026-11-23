import { Locator, Page } from '@playwright/test';

/** Contadores do topo da tela principal ("N referidos à contactar", "N vendas"...). */
export class StatisticsPanel {
	readonly toContact: Locator;
	readonly sales: Locator;
	readonly callLater: Locator;
	readonly cardProblems: Locator;

	constructor(page: Page) {
		this.toContact = page.getByText(/^\s*\d+\s+referidos à contactar\s*$/);
		this.sales = page.getByText(/^\s*\d+\s+vendas?\s*$/);
		this.callLater = page.getByText(/^\s*\d+\s+ligar depois\s*$/);
		this.cardProblems = page.getByText(/^\s*\d+\s+problemas? com cartão\s*$/);
	}
}
