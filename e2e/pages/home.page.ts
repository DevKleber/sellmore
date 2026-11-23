import { expect, Locator, Page } from '@playwright/test';
import { AlertDialog } from './components/alert-dialog';
import { ContextMenu } from './components/context-menu';
import { byHint } from './components/hints';
import { LeadCard } from './components/lead-card';
import { OrderingMenu } from './components/ordering-menu';
import { SearchResults } from './components/search-results';
import { StatisticsPanel } from './components/statistics-panel';
import { StatusFilters } from './components/status-filters';
import { VersionNotice } from './components/version-notice';
import { AppointmentDetailModal } from './modals/appointment-detail.modal';
import { BugReportModal } from './modals/bug-report.modal';
import { CalendarModal } from './modals/calendar.modal';
import { CallModal } from './modals/call.modal';
import { DonateModal } from './modals/donate.modal';
import { ImportContactsModal } from './modals/import-contacts.modal';
import { LeadFormModal } from './modals/lead-form.modal';
import { StrategyModal } from './modals/strategy.modal';

const CELEBRATION_TIMEOUT_MS = 15_000;
const SCROLL_TO_BOTTOM_PX = 20_000;

/** Tela principal ("/"): cabeçalho, contadores, filtros, cards de leads e rodapé. */
export class HomePage {
	readonly alert: AlertDialog;
	readonly versionNotice: VersionNotice;
	readonly statistics: StatisticsPanel;
	readonly filters: StatusFilters;
	readonly ordering: OrderingMenu;
	readonly searchResults: SearchResults;
	readonly profileMenu: ContextMenu;

	readonly leadForm: LeadFormModal;
	readonly callModal: CallModal;
	readonly strategyModal: StrategyModal;
	readonly calendar: CalendarModal;
	readonly appointmentDetail: AppointmentDetailModal;
	readonly importContacts: ImportContactsModal;
	readonly bugReport: BugReportModal;
	readonly donate: DonateModal;

	readonly searchInput: Locator;
	readonly reportBugButton: Locator;
	readonly donateButton: Locator;
	readonly accessLogButton: Locator;
	readonly themeToggle: Locator;
	readonly darkThemeIcon: Locator;
	readonly saleCelebration: Locator;

	constructor(readonly page: Page) {
		this.alert = new AlertDialog(page);
		this.versionNotice = new VersionNotice(page);
		this.statistics = new StatisticsPanel(page);
		this.filters = new StatusFilters(page);
		this.ordering = new OrderingMenu(page);
		this.searchResults = new SearchResults(page);
		this.profileMenu = new ContextMenu(page);

		this.leadForm = new LeadFormModal(page);
		this.callModal = new CallModal(page);
		this.strategyModal = new StrategyModal(page);
		this.calendar = new CalendarModal(page);
		this.appointmentDetail = new AppointmentDetailModal(page);
		this.importContacts = new ImportContactsModal(page);
		this.bugReport = new BugReportModal(page);
		this.donate = new DonateModal(page);

		this.searchInput = page.getByPlaceholder('Buscar');
		this.reportBugButton = page.getByRole('button', { name: 'Reportar bug' });
		this.donateButton = page.getByRole('button', { name: 'Doar' });
		this.accessLogButton = page.getByRole('button', { name: 'LOG', exact: true });
		this.themeToggle = page.locator('header button').filter({ has: page.locator('.fa-moon') });
		this.darkThemeIcon = this.themeToggle.locator('.far.fa-moon');
		this.saleCelebration = page.locator('ng-lottie.center-center');
	}

	async goto(): Promise<void> {
		await this.page.goto('/');
		await this.expectLoaded();
	}

	/** Os contadores só ganham número quando a lista de clientes chega da API. */
	async expectLoaded(): Promise<void> {
		await expect(this.statistics.toContact).toBeVisible();
	}

	async reload(): Promise<void> {
		await this.page.reload();
		await this.expectLoaded();
	}

	leadCard(name: string): LeadCard {
		return new LeadCard(this.page, name);
	}

	/** Nomes dos leads (cards) na ordem exibida. */
	get leadNames(): Locator {
		return this.page.locator('.customers .parent .name');
	}

	async scrollToBottom(): Promise<void> {
		await this.page.mouse.wheel(0, SCROLL_TO_BOTTOM_PX);
	}

	async search(term: string): Promise<void> {
		await this.searchInput.fill(term);
		await expect(this.searchResults.summary).toContainText(`Filtro: ${term}`);
	}

	async clearSearch(): Promise<void> {
		await this.searchInput.fill('');
		await expect(this.searchResults.summary).toBeHidden();
	}

	async openNewLeadForm(): Promise<void> {
		await this.page.locator(byHint('Novo lead')).click();
		await this.leadForm.expectOpen();
	}

	async openStrategy(): Promise<void> {
		await this.page.locator(byHint('Estratégia')).click();
		await this.strategyModal.expectOpen();
	}

	async openCalendar(): Promise<void> {
		await this.page.locator(byHint('Agenda')).click();
		await this.calendar.expectOpen();
	}

	async openProfileMenu(): Promise<ContextMenu> {
		await this.page.locator('.profile img').click();
		return this.profileMenu;
	}

	async logout(): Promise<void> {
		await this.openProfileMenu();
		await this.profileMenu.choose('Sair');
		await this.page.waitForURL('**/login');
	}

	async toggleTheme(): Promise<void> {
		await this.themeToggle.click();
	}

	backgroundColor(): Promise<string> {
		return this.page.evaluate(() => getComputedStyle(document.body).backgroundColor);
	}

	/** Animação de parabéns que cobre a tela por alguns segundos após uma venda. */
	async waitSaleCelebrationToEnd(): Promise<void> {
		await expect(this.saleCelebration).toBeVisible();
		await expect(this.saleCelebration).toBeHidden({ timeout: CELEBRATION_TIMEOUT_MS });
	}
}
