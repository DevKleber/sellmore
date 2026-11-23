import { Locator, Page } from '@playwright/test';
import { ClosedStatusCode, STATUS_FORM_OPTION } from '../../support/data/customer-status';
import { PhoneNumber } from '../../support/data/phone';
import { BootstrapModal } from '../components/bootstrap-modal';
import { PhoneModal } from './phone.modal';

export interface LeadFormData {
	name: string;
	observation?: string;
	status?: ClosedStatusCode;
	phones?: PhoneNumber[];
}

/** Modal de cadastro/alteração de lead ou referido ("Novo referido", "Alterando referido"...). */
export class LeadFormModal extends BootstrapModal {
	readonly phoneModal: PhoneModal;

	constructor(page: Page) {
		super(page, 'modalStickyAdd');
		this.phoneModal = new PhoneModal(page);
	}

	get nameInput(): Locator {
		return this.root.getByPlaceholder('Nome');
	}

	get observationInput(): Locator {
		return this.root.getByPlaceholder('Observação');
	}

	get statusSelect(): Locator {
		return this.root.locator('select');
	}

	get selectedStatus(): Locator {
		return this.statusSelect.locator('option:checked');
	}

	get saveButton(): Locator {
		return this.button('Salvar');
	}

	get updateButton(): Locator {
		return this.button('Alterar');
	}

	/** Telefones já adicionados ao formulário ("+55(11) 91234-5678"). */
	get phones(): Locator {
		return this.root.locator('.card-input');
	}

	async fill({ name, observation, status, phones = [] }: LeadFormData): Promise<void> {
		await this.nameInput.fill(name);
		await this.observationInput.fill(observation ?? '');
		await this.selectStatus(status);
		for (const phone of phones) {
			await this.addPhone(phone);
		}
	}

	async selectStatus(status?: ClosedStatusCode): Promise<void> {
		if (!status) {
			return;
		}
		await this.statusSelect.selectOption({ label: STATUS_FORM_OPTION[status] });
	}

	async openPhoneModal(): Promise<void> {
		await this.button('Adicionar número de telefone').click();
		await this.phoneModal.expectOpen();
	}

	async addPhone(phone: PhoneNumber): Promise<void> {
		await this.openPhoneModal();
		await this.phoneModal.add(phone);
	}

	async removePhone(displayedNumber: string): Promise<void> {
		await this.phones.filter({ hasText: displayedNumber }).locator('.phone-remove i').click();
	}

	async save(): Promise<void> {
		await this.saveButton.click();
	}

	async update(): Promise<void> {
		await this.updateButton.click();
	}
}
