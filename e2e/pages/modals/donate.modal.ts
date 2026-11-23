import { Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Modal "Doar". */
export class DonateModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalDonate');
	}
}
