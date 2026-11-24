import { expect, Locator, Page } from '@playwright/test';
import { BRAZIL, PhoneNumber } from '../../support/data/phone';
import { BootstrapModal } from '../components/bootstrap-modal';

/** Modal "Adicionando telefone": país, número (com máscara do país) e switch de WhatsApp. */
export class PhoneModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalPhoneNumber');
	}

	private get countrySelect(): Locator {
		return this.root.locator('ng-select');
	}

	get selectedCountry(): Locator {
		return this.countrySelect.locator('.ng-value-label');
	}

	/** O campo do número não tem rótulo nem placeholder na tela. */
	get numberInput(): Locator {
		return this.root.locator('.inputText > input');
	}

	get whatsappCheckbox(): Locator {
		return this.root.locator('input[type="checkbox"]');
	}

	/** A lista de países abre numa camada sobre a página (CDK Overlay), fora do modal. */
	async selectCountry(name: string): Promise<void> {
		await this.countrySelect.click();
		await this.countrySelect.locator('input').fill(name);
		await this.page.getByRole('option', { name, exact: true, includeHidden: true }).click();
		await expect(this.selectedCountry).toHaveText(name);
	}

	async setWhatsapp(enabled: boolean): Promise<void> {
		if ((await this.whatsappCheckbox.isChecked()) === enabled) {
			return;
		}
		await this.root.locator('.onoffswitch-label').click();
		await expect(this.whatsappCheckbox).toBeChecked({ checked: enabled });
	}

	async add({ number, whatsapp, country = BRAZIL }: PhoneNumber): Promise<void> {
		await this.expectOpen();
		await this.selectCountry(country.name);
		await this.numberInput.fill(number);
		await this.setWhatsapp(whatsapp);
		await this.button('Salvar').click();
		await this.expectClosed();
	}
}
