import { Locator, Page } from '@playwright/test';
import { ClosedStatusCode, STATUS_ACTION_HINT } from '../../support/data/customer-status';
import { ContextMenu } from './context-menu';
import { byHint, MENU_HINT } from './hints';

/** Ícone exibido quando o atendimento já tem status. */
const STATUS_ICON: Record<ClosedStatusCode, string> = {
	pc: '.fa-credit-card',
	ld: '.fa-headset',
	n: '.fa-thumbs-down',
	c: '.fa-thumbs-up',
};

/** Cliente exibido na tela principal (lead do card ou referido), com ações de status e menu. */
export abstract class CustomerEntry {
	protected constructor(
		protected readonly page: Page,
		private readonly actionsArea: Locator,
	) {}

	/** Ícones de ação de quem ainda aguarda o telefonema. */
	get waitingActions(): Locator {
		return this.actionsArea.locator('.waiting');
	}

	finishedIcon(status: ClosedStatusCode): Locator {
		return this.actionsArea.locator('.finished').locator(STATUS_ICON[status]);
	}

	async markStatus(status: ClosedStatusCode): Promise<void> {
		await this.actionsArea.locator(byHint(STATUS_ACTION_HINT[status])).click();
	}

	async openMenu(): Promise<ContextMenu> {
		await this.actionsArea.locator(byHint(MENU_HINT)).click();
		return new ContextMenu(this.page);
	}
}
