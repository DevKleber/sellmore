import { Locator, Page } from '@playwright/test';
import { AlertDialog } from './components/alert-dialog';

/** Relatórios da tela de log de acesso, pelo título exibido acima de cada tabela. */
export const AccessReport = {
	AccessesToday: 'Acessos do dia',
	CustomersByUser: 'Clientes por usuário',
	SalesByUser: 'Vendas por usuário',
	AccessesByUser: 'Acessos por usuário',
	Resolution: 'Resolução',
	Browser: 'Navegador',
	Device: 'Dispositivo',
	Language: 'Idioma',
} as const;

export type AccessReportTitle = (typeof AccessReport)[keyof typeof AccessReport];

/** Tela "/access_log" (log de acesso e relatórios de uso). */
export class AccessLogPage {
	readonly alert: AlertDialog;
	readonly heading: Locator;
	readonly refreshButton: Locator;
	readonly homeLink: Locator;
	readonly accessRows: Locator;
	readonly dailyAccessValues: Locator;
	readonly weeklyFunnelCells: Locator;
	readonly recentAccountCells: Locator;

	constructor(readonly page: Page) {
		this.alert = new AlertDialog(page);
		this.heading = page.getByRole('heading', { name: 'Painel do administrador' });
		this.refreshButton = page.getByRole('button', { name: 'Atualizar lista' });
		this.homeLink = page.getByRole('link', { name: 'Wiseller' });
		this.accessRows = page.locator('.log-access tbody tr');
		this.dailyAccessValues = page.locator('.log-acessos-por-dia .ws-chart__values');
		this.weeklyFunnelCells = page.locator('.log-funil tbody td');
		this.recentAccountCells = page.locator('.log-contas-recentes tbody td');
	}

	/** Número de um indicador do painel, pela classe que o identifica (ex.: "hoje-vendas"). */
	metric(name: string): Locator {
		return this.page.locator(`.${name}`);
	}

	async goto(): Promise<void> {
		await this.page.goto('/access_log');
	}

	/** Título do relatório com a quantidade de linhas, ex.: "Navegador 2". */
	reportHeading(title: AccessReportTitle): Locator {
		return this.page.getByRole('heading', { name: new RegExp(`^${title} \\d+$`) });
	}

	/** Células do relatório, linha a linha (ex.: "Chrome", "25", "Firefox", "3"). */
	reportCells(title: AccessReportTitle): Locator {
		return this.page.locator('.log-report').filter({ has: this.reportHeading(title) }).locator('tbody td');
	}
}
