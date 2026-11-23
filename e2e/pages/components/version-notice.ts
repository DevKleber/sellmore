import { expect, Locator, Page } from '@playwright/test';
import { AlertDialog } from './alert-dialog';

/** Aviso "Nova versão X" exibido quando a versão da API muda desde o último acesso. */
export class VersionNotice {
	readonly root: Locator;
	private readonly alert: AlertDialog;

	constructor(page: Page) {
		this.alert = new AlertDialog(page);
		this.root = this.alert.root.filter({ hasText: /Nova versão/ });
	}

	async expectShown(version: string): Promise<void> {
		await expect(this.root).toBeVisible();
		await expect(this.root.getByRole('heading')).toHaveText(`Nova versão ${version}`);
	}

	/** "OK!" fecha o aviso e recarrega a página. */
	async dismiss(): Promise<void> {
		await expect(this.root).toBeVisible();
		await this.alert.chooseAndWaitForReload('OK!');
	}

	async openReleaseNotes(): Promise<void> {
		await this.alert.button('Ver as novidades!').click();
	}
}
