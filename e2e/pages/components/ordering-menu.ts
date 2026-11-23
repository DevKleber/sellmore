import { Locator, Page } from '@playwright/test';
import { ContextMenu } from './context-menu';
import { byHint } from './hints';

export const CardOrder = {
	NewestFirst: /Ordem de lançamento decrescente/,
	OldestFirst: /Ordem de lançamento crescente/,
	AToZ: /Ordem alfabética\s+A\s+Z/,
	ZToA: /Ordem alfabética\s+Z\s+A/,
} as const;

export type CardOrderOption = (typeof CardOrder)[keyof typeof CardOrder];

/** Menu "Ordem" da tela principal. */
export class OrderingMenu {
	private readonly menu: ContextMenu;

	constructor(private readonly page: Page) {
		this.menu = new ContextMenu(page);
	}

	async open(): Promise<ContextMenu> {
		await this.page.locator(byHint('Ordem')).click();
		return this.menu;
	}

	async choose(order: CardOrderOption): Promise<void> {
		await this.open();
		await this.menu.choose(order);
	}

	/** Opção marcada com o ícone de seleção (precisa do menu aberto). */
	get selectedOption(): Locator {
		return this.menu.items.filter({ has: this.page.locator('.checkOrder') });
	}
}
