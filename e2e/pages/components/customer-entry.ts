import { Locator, Page } from '@playwright/test';
import { ClosedStatusCode } from '../../support/data/customer-status';
import { ContextMenu } from './context-menu';
import { byHint, MENU_HINT } from './hints';

/** Cliente exibido na tela principal (lead do card ou referido), com etiqueta de status e menu. */
export abstract class CustomerEntry {
	protected constructor(
		protected readonly page: Page,
		/** Trecho que contém o botão de menu deste cliente (e não o de outros). */
		private readonly menuArea: Locator,
		/** Trecho onde aparece a etiqueta de status deste cliente. */
		private readonly statusArea: Locator,
	) {}

	/** Ações de quem ainda aguarda o telefonema; somem quando o atendimento ganha status. */
	abstract get waitingActions(): Locator;

	abstract markStatus(status: ClosedStatusCode): Promise<void>;

	/** Etiqueta exibida quando o atendimento já tem status. */
	statusTag(status: ClosedStatusCode): Locator {
		return this.statusArea.locator(`.ws-status[data-status="${status}"]`);
	}

	async openMenu(): Promise<ContextMenu> {
		await this.menuArea.locator(byHint(MENU_HINT)).click();
		return new ContextMenu(this.page);
	}
}
