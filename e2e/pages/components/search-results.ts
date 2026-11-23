import { Locator, Page } from '@playwright/test';
import { ContextMenu } from './context-menu';
import { byHint, MENU_HINT } from './hints';

/** Cliente encontrado pela busca do cabeçalho. */
export class SearchResult {
	constructor(
		private readonly page: Page,
		readonly root: Locator,
	) {}

	/** "ATIVO" ou "INATIVO". */
	get activity(): Locator {
		return this.root.locator('.filtercreated_at');
	}

	get phones(): Locator {
		return this.root.locator('.filterPhone');
	}

	get status(): Locator {
		return this.root.locator('.filterstatus');
	}

	get createdAt(): Locator {
		return this.root.locator('.filterbo_ativo');
	}

	async openMenu(): Promise<ContextMenu> {
		await this.root.locator(byHint(MENU_HINT)).click();
		return new ContextMenu(this.page);
	}
}

/** Lista exibida no lugar dos cards enquanto há texto na busca. */
export class SearchResults {
	readonly summary: Locator;
	readonly total: Locator;
	readonly items: Locator;
	readonly noResults: Locator;

	constructor(private readonly page: Page) {
		this.summary = page.locator('.totalFilter');
		this.total = page.locator('.totalRegisterFilter');
		this.items = page.locator('.customersFilter');
		this.noResults = page.getByText('Nenhum resultado encontrado');
	}

	result(name: string): SearchResult {
		return new SearchResult(this.page, this.items.filter({ hasText: name }));
	}
}
