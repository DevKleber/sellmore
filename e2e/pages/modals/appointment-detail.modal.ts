import { Locator, Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Detalhe de um agendamento da agenda, com as opções de remoção. */
export class AppointmentDetailModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalDetailCalendar');
	}

	get heading(): Locator {
		return this.root.locator('h3');
	}

	get callButton(): Locator {
		return this.root.getByText('Ligar', { exact: true });
	}

	async remove(): Promise<void> {
		await this.button('Remover agendamento').click();
		await this.expectClosed();
	}

	async removeAndFilterCustomer(): Promise<void> {
		await this.button('Remover agendamento e filtrar referido').click();
		await this.expectClosed();
	}
}
