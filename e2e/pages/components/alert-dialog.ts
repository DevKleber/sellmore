import { expect, Locator, Page } from '@playwright/test';
import { accessibleName } from './accessible-name';

/** Caixa de mensagem/confirmação (SweetAlert) usada pela aplicação para todo retorno ao usuário. */
export class AlertDialog {
	readonly root: Locator;

	constructor(private readonly page: Page) {
		this.root = page.locator('.swal2-popup');
	}

	button(name: string): Locator {
		return this.root.getByRole('button', { name: accessibleName(name) });
	}

	async expectMessage(message: string | RegExp): Promise<void> {
		await expect(this.root).toBeVisible();
		await expect(this.root).toContainText(message);
	}

	/** Responde a uma confirmação; a resposta da API costuma abrir outra mensagem no lugar. */
	async choose(buttonName: string): Promise<void> {
		await this.button(buttonName).click();
	}

	async close(buttonName = 'OK'): Promise<void> {
		await this.button(buttonName).click();
		await expect(this.root).toBeHidden();
	}

	async acknowledge(message: string | RegExp): Promise<void> {
		await this.expectMessage(message);
		await this.close();
	}

	/** Clica no botão que recarrega a página e espera a recarga terminar. */
	async chooseAndWaitForReload(buttonName: string): Promise<void> {
		const reload = this.page.waitForEvent('load');
		await this.button(buttonName).click();
		await reload;
	}
}
