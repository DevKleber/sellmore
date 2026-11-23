import { Locator, Page } from '@playwright/test';
import { ClosedStatusCode, STATUS_ACTION_HINT } from '../../support/data/customer-status';
import { BootstrapModal } from '../components/bootstrap-modal';

const CUSTOMER_UPDATE_URL = /\/api\/customers\/\d+$/;

/** Modal "Ligando para ...": telefones com link do WhatsApp, status, observação, árvore e roteiro. */
export class CallModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalCall');
	}

	get whatsappLinks(): Locator {
		return this.root.getByTitle('Enviar link');
	}

	get saleLink(): Locator {
		return this.root.getByTitle('Fazer a venda.');
	}

	/** "Status atual: ...", exibido só para quem já tem status. */
	get currentStatus(): Locator {
		return this.root.locator('.filterstatus');
	}

	get dates(): Locator {
		return this.root.getByText(/Referido criado em:/);
	}

	get observationInput(): Locator {
		return this.root.getByPlaceholder('Observação');
	}

	/** Cada nível da "Árvores de indicações", do indicador mais próximo ao mais distante. */
	get referralTree(): Locator {
		return this.root.locator('.tree');
	}

	get strategy(): Locator {
		return this.root.locator('.strategy');
	}

	statusOption(status: ClosedStatusCode): Locator {
		return this.root.getByTitle(STATUS_ACTION_HINT[status]);
	}

	async changeStatus(status: ClosedStatusCode): Promise<void> {
		await this.statusOption(status).click();
	}

	/** A observação é salva sozinha (sem mensagem) quando o campo perde o foco. */
	async editObservation(text: string): Promise<void> {
		const saved = this.page.waitForResponse((response) => response.request().method() === 'PUT' && CUSTOMER_UPDATE_URL.test(response.url()));
		await this.observationInput.fill(text);
		await this.observationInput.blur();
		await saved;
	}
}
