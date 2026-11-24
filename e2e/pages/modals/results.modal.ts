import { Locator, Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

export type ResultsPeriod = 'Esta semana' | 'Este mês' | 'Desde o início';

/** Modal "Meus resultados": indicações, atendidos, vendas e conversão por período. */
export class ResultsModal extends BootstrapModal {
	readonly referrals: Locator;
	readonly attended: Locator;
	readonly sales: Locator;
	readonly conversion: Locator;
	readonly monthLabels: Locator;

	constructor(page: Page) {
		super(page, 'modalResultados');
		this.referrals = this.root.locator('.resultado-indicacoes');
		this.attended = this.root.locator('.resultado-atendidos');
		this.sales = this.root.locator('.resultado-vendas');
		this.conversion = this.root.locator('.resultado-conversao');
		this.monthLabels = this.root.locator('.ws-chart__label');
	}

	async choosePeriod(period: ResultsPeriod): Promise<void> {
		await this.button(period).click();
	}
}
