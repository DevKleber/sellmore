import { Locator, Page } from '@playwright/test';
import { AlertDialog } from '../components/alert-dialog';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Modal "Minha conta": lembrete por e-mail, exportação, troca de senha e exclusão da conta. */
export class AccountModal extends BootstrapModal {
	readonly name: Locator;
	readonly email: Locator;
	readonly reminderCheckbox: Locator;
	readonly exportButton: Locator;
	readonly currentPasswordInput: Locator;
	readonly newPasswordInput: Locator;
	readonly confirmPasswordInput: Locator;
	readonly changePasswordButton: Locator;
	readonly deletePasswordInput: Locator;
	readonly deleteButton: Locator;

	constructor(page: Page) {
		super(page, 'modalMinhaConta');
		this.name = this.root.locator('.conta-nome');
		this.email = this.root.locator('.conta-email');
		this.reminderCheckbox = this.root.locator('.conta-lembrete');
		this.exportButton = this.root.locator('.conta-exportar');
		this.currentPasswordInput = this.root.getByPlaceholder('Senha atual');
		this.newPasswordInput = this.root.getByPlaceholder('Nova senha (mínimo de 6 caracteres)');
		this.confirmPasswordInput = this.root.getByPlaceholder('Repita a nova senha');
		this.changePasswordButton = this.root.locator('.conta-trocar-senha');
		this.deletePasswordInput = this.root.getByPlaceholder('Digite sua senha para confirmar');
		this.deleteButton = this.root.locator('.conta-excluir');
	}

	async changePassword(current: string, next: string): Promise<void> {
		await this.currentPasswordInput.fill(current);
		await this.newPasswordInput.fill(next);
		await this.confirmPasswordInput.fill(next);
		await this.changePasswordButton.click();
	}

	/** Informa a senha e confirma o aviso de que a exclusão não tem volta. */
	async deleteAccount(password: string): Promise<void> {
		await this.deletePasswordInput.fill(password);
		await this.deleteButton.click();
		await new AlertDialog(this.page).root.getByRole('button', { name: 'Excluir tudo' }).click();
	}
}
