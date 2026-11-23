import { Locator, Page } from '@playwright/test';

/** Partes da tela principal que só existem (ou mudam de lugar) em telas estreitas. */
export class MobileLayout {
	readonly openSearchButton: Locator;
	readonly searchInput: Locator;
	readonly newLeadButton: Locator;
	readonly desktopThemeButton: Locator;
	readonly filterPills: Locator;

	constructor(private readonly page: Page) {
		this.openSearchButton = page.getByRole('button', { name: 'Abrir busca' });
		this.searchInput = page.getByPlaceholder('Buscar por nome ou telefone');
		this.newLeadButton = page.getByRole('button', { name: 'Novo lead' });
		this.desktopThemeButton = page.getByRole('button', { name: 'Tema escuro' });
		this.filterPills = page.getByRole('group', { name: 'Filtrar por status' });
	}

	/** Diferença entre a largura do conteúdo e a da janela; acima de zero a página rola de lado. */
	horizontalOverflow(): Promise<number> {
		return this.page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
	}

	positionOf(locator: Locator): Promise<string> {
		return locator.evaluate((element) => getComputedStyle(element).position);
	}
}
