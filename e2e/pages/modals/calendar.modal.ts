import { expect, Locator, Page } from '@playwright/test';
import { BootstrapModal } from '../components/bootstrap-modal';

export type CalendarView = 'Mês' | 'Semana' | 'Dia';

type Box = { x: number; y: number; width: number; height: number };

const MINUTES_PER_HOUR = 60;
const DRAG_STEPS = 12;
const APPOINTMENT_UPDATE_URL = /\/api\/calendar\/\d+$/;

/** A visão "Dia" do angular-calendar é uma visão de semana de um dia só, dentro do componente do dia. */
const VIEW_CONTAINER: Record<CalendarView, string> = {
	Mês: 'mwl-calendar-month-view',
	Semana: 'mwl-calendar-week-view:not(.cal-day-view)',
	Dia: 'mwl-calendar-day-view',
};

/** Modal "Calendario" (agenda de ligações), com o formulário de novo agendamento. */
export class CalendarModal extends BootstrapModal {
	constructor(page: Page) {
		super(page, 'modalCalendar');
	}

	/** Período exibido: "novembro 2026" (mês), "nov. 22 - nov. 28, 2026" (semana), "segunda-feira, novembro 23, 2026" (dia). */
	get periodTitle(): Locator {
		return this.root.locator('.calendarDateChosen');
	}

	get customerSelect(): Locator {
		return this.root.locator('select');
	}

	get selectedCustomer(): Locator {
		return this.customerSelect.locator('option:checked');
	}

	/** Referidos oferecidos no select, sem a opção vazia "Referente". */
	get customerOptions(): Locator {
		return this.customerSelect.locator('option:not([value=""])');
	}

	get dateInput(): Locator {
		return this.root.getByPlaceholder('Dia');
	}

	get hourInput(): Locator {
		return this.root.getByPlaceholder('Hora');
	}

	get saveButton(): Locator {
		return this.button('Salvar');
	}

	viewContainer(view: CalendarView): Locator {
		return this.root.locator(VIEW_CONTAINER[view]);
	}

	events(view: CalendarView): Locator {
		return this.viewContainer(view).locator('.cal-event');
	}

	event(view: CalendarView, text: string): Locator {
		return this.events(view).filter({ hasText: text });
	}

	async goToPrevious(): Promise<void> {
		await this.button('Anterior').click();
	}

	async goToToday(): Promise<void> {
		await this.button('Hoje').click();
	}

	async goToNext(): Promise<void> {
		await this.button('Próximo').click();
	}

	async switchTo(view: CalendarView): Promise<void> {
		await this.button(view).click();
		await expect(this.viewContainer(view)).toBeVisible();
	}

	async selectCustomer(name: string): Promise<void> {
		const value = await this.customerOptions.filter({ hasText: name }).getAttribute('value');
		await this.customerSelect.selectOption(String(value));
	}

	async clickToday(): Promise<void> {
		await this.viewContainer('Mês').locator('.cal-day-cell.cal-today').click();
	}

	/** Digita a hora no campo com máscara (HH:MM:SS). */
	async typeHour(hour: string): Promise<void> {
		await this.hourInput.click();
		await this.hourInput.pressSequentially(hour.replace(/\D/g, ''));
	}

	async openEventDetails(view: CalendarView, text: string): Promise<void> {
		await this.event(view, text).getByText('Detalhar/Remover').click();
	}

	/** Arrasta o agendamento na grade de horários ("Mova o contato para alterar") e espera salvar. */
	async dragEvent(view: CalendarView, text: string, minutes: number): Promise<void> {
		const event = this.event(view, text);
		await event.evaluate((element) => element.scrollIntoView({ block: 'center' }));
		const start = center(await boxOf(event));
		const distance = (minutes / (await this.minutesPerSegment(view))) * (await boxOf(this.hourSegments(view).first())).height;
		const saved = this.page.waitForResponse((response) => response.request().method() === 'PUT' && APPOINTMENT_UPDATE_URL.test(response.url()));

		await this.page.mouse.move(start.x, start.y);
		await this.page.mouse.down();
		await this.page.mouse.move(start.x, start.y + distance, { steps: DRAG_STEPS });
		await this.page.mouse.up();
		await saved;
	}

	private hourSegments(view: CalendarView): Locator {
		return this.viewContainer(view).locator('.cal-hour-segment');
	}

	private async minutesPerSegment(view: CalendarView): Promise<number> {
		const segmentsPerHour = await this.viewContainer(view).locator('.cal-hour').first().locator('.cal-hour-segment').count();
		return MINUTES_PER_HOUR / segmentsPerHour;
	}
}

async function boxOf(locator: Locator): Promise<Box> {
	const box = await locator.boundingBox();
	if (!box) {
		throw new Error(`Elemento sem posição na tela: ${locator}`);
	}
	return box;
}

function center({ x, y, width, height }: Box): { x: number; y: number } {
	return { x: x + width / 2, y: y + height / 2 };
}
