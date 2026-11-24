import { Locator, Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Modal "Pedir indicações": link público do cliente e mensagem pronta para enviar. */
export class AskReferralModal extends BootstrapModal {
	readonly linkInput: Locator;
	readonly messageInput: Locator;
	readonly whatsappLinks: Locator;
	readonly copyLinkButton: Locator;
	readonly copiedNotice: Locator;

	constructor(page: Page) {
		super(page, 'modalPedirIndicacao');
		this.linkInput = this.root.locator('.indicacao-link');
		this.messageInput = this.root.locator('.indicacao-mensagem');
		this.whatsappLinks = this.root.locator('.indicacao-whatsapp');
		this.copyLinkButton = this.root.locator('.indicacao-copiar-link');
		this.copiedNotice = this.root.locator('.indicacao-copiado');
	}
}
