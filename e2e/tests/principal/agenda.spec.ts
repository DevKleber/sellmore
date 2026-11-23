import { CustomerStatus } from '../../support/data/customer-status';
import { uniqueName } from '../../support/data/unique';
import { LOCALE, TIMEZONE } from '../../support/env';
import { expect, test } from '../../support/fixtures';
import { WisellerApi } from '../../support/api/wiseller-api';

const SCHEDULED_HOUR = '14:30:00';
const SEEDED_HOUR = '10:00:00';
const SEEDED_HOUR_PLUS_TWO = '12:00:00';
const TWO_HOURS_IN_MINUTES = 120;
const MID_MONTH_DAY = 15;
/** Ex.: "nov. 22 - nov. 28, 2026". */
const WEEK_RANGE = /^\S+ \d{1,2} - \S+ \d{1,2}, \d{4}$/;

function todaysWeekday(): string {
	return new Intl.DateTimeFormat(LOCALE, { weekday: 'long', timeZone: TIMEZONE }).format(new Date());
}

/** Nome do mês e ano exibidos pela agenda, deslocando meses a partir do atual. */
function monthAndYear(monthOffset: number): RegExp {
	const today = new Date();
	const reference = new Date(today.getFullYear(), today.getMonth() + monthOffset, MID_MONTH_DAY);
	const month = new Intl.DateTimeFormat(LOCALE, { month: 'long', timeZone: TIMEZONE }).format(reference);
	return new RegExp(`${month}.*${reference.getFullYear()}`, 'i');
}

async function referralToCallLater(api: WisellerApi) {
	const lead = await api.createCustomer({ name: uniqueName('Lead') });
	const referral = await api.createReferral(lead, { name: uniqueName('Retornar') });
	await api.changeStatus(referral, CustomerStatus.LigarDepois);
	return referral;
}

test.describe('Agenda', () => {
	test('abre no mês atual e navega com "Anterior", "Próximo" e "Hoje"', async ({ home }) => {
		await home.goto();
		await home.openCalendar();
		await expect(home.calendar.periodTitle).toHaveText(monthAndYear(0));

		await home.calendar.goToNext();
		await expect(home.calendar.periodTitle).toHaveText(monthAndYear(1));

		await home.calendar.goToToday();
		await expect(home.calendar.periodTitle).toHaveText(monthAndYear(0));

		await home.calendar.goToPrevious();
		await expect(home.calendar.periodTitle).toHaveText(monthAndYear(-1));
	});

	test('alterna entre as visões Mês, Semana e Dia, e o título mostra o período de cada uma', async ({ home }) => {
		await home.goto();
		await home.openCalendar();
		await expect(home.calendar.viewContainer('Mês')).toBeVisible();

		await home.calendar.switchTo('Semana');
		await expect(home.calendar.periodTitle).toHaveText(WEEK_RANGE);

		await home.calendar.switchTo('Dia');
		await expect(home.calendar.periodTitle).toContainText(todaysWeekday());

		await home.calendar.switchTo('Mês');
		await expect(home.calendar.periodTitle).toHaveText(monthAndYear(0));
	});

	test('só referidos em "Ligar depois" aparecem como referente do agendamento', async ({ home, api }) => {
		const callLater = await referralToCallLater(api);
		const waiting = await api.createReferral(await api.createCustomer(), { name: uniqueName('Aguardando') });
		await home.goto();

		await home.openCalendar();

		await expect(home.calendar.customerOptions.filter({ hasText: callLater.name })).toHaveCount(1);
		await expect(home.calendar.customerOptions.filter({ hasText: waiting.name })).toHaveCount(0);
	});

	test('o Salvar só habilita com referente, dia e hora preenchidos', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await home.goto();
		await home.openCalendar();
		await expect(home.calendar.saveButton).toBeDisabled();

		await home.calendar.selectCustomer(referral.name);
		await expect(home.calendar.saveButton).toBeDisabled();
		await home.calendar.clickToday();
		await expect(home.calendar.saveButton).toBeDisabled();
		await home.calendar.typeHour(SCHEDULED_HOUR);

		await expect(home.calendar.saveButton).toBeEnabled();
	});

	test('agenda uma ligação para hoje e ela aparece na visão do dia', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await home.goto();
		await home.openCalendar();

		await home.calendar.selectCustomer(referral.name);
		await home.calendar.clickToday();
		await home.calendar.typeHour(SCHEDULED_HOUR);
		await home.calendar.saveButton.click();
		await home.alert.acknowledge('Agendado com sucesso!');

		await home.calendar.switchTo('Dia');
		await expect(home.calendar.event('Dia', referral.name)).toContainText(`Ligar às ${SCHEDULED_HOUR}`);
	});

	test('ligações já agendadas aparecem ao abrir a agenda', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await api.scheduleCall(referral, SEEDED_HOUR);
		await home.goto();

		await home.openCalendar();
		await home.calendar.switchTo('Semana');

		await expect(home.calendar.event('Semana', referral.name)).toContainText(`Ligar às ${SEEDED_HOUR}`);
	});

	test('"Detalhar/Remover" mostra o agendamento e "Remover agendamento" o apaga', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await api.scheduleCall(referral, SEEDED_HOUR);
		await home.goto();
		await home.openCalendar();
		await home.calendar.switchTo('Dia');

		await home.calendar.openEventDetails('Dia', referral.name);
		await home.appointmentDetail.expectOpen();
		await expect(home.appointmentDetail.heading).toContainText(referral.name);
		await home.appointmentDetail.remove();

		await expect(home.calendar.event('Dia', referral.name)).toHaveCount(0);
		await home.reload();
		await home.openCalendar();
		await home.calendar.switchTo('Dia');
		await expect(home.calendar.viewContainer('Dia')).toBeVisible();
		await expect(home.calendar.event('Dia', referral.name)).toHaveCount(0);
	});

	test('arrastar o agendamento na visão do dia muda o horário da ligação', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await api.scheduleCall(referral, SEEDED_HOUR);
		await home.goto();
		await home.openCalendar();
		await home.calendar.switchTo('Dia');

		await home.calendar.dragEvent('Dia', referral.name, TWO_HOURS_IN_MINUTES);
		await home.reload();
		await home.openCalendar();
		await home.calendar.switchTo('Dia');

		await expect(home.calendar.event('Dia', referral.name)).toContainText(`Ligar às ${SEEDED_HOUR_PLUS_TWO}`);
	});

	test('"Remover agendamento e filtrar referido" apaga e busca o referido pelo telefone', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await api.scheduleCall(referral, SEEDED_HOUR);
		await home.goto();
		await home.openCalendar();
		await home.calendar.switchTo('Dia');

		await home.calendar.openEventDetails('Dia', referral.name);
		await home.appointmentDetail.removeAndFilterCustomer();
		await home.calendar.closeByClickingOutside();

		await expect(home.searchInput).toHaveValue(referral.phones[0].number);
		await expect(home.searchResults.result(referral.name).root).toBeVisible();
	});

	test('"Ligar" no detalhe do agendamento abre o modal de ligação do referido', async ({ home, api }) => {
		const referral = await referralToCallLater(api);
		await api.scheduleCall(referral, SEEDED_HOUR);
		await home.goto();
		await home.openCalendar();
		await home.calendar.switchTo('Dia');

		await home.calendar.openEventDetails('Dia', referral.name);
		await home.appointmentDetail.callButton.click();

		await home.callModal.expectOpen();
		await expect(home.callModal.title).toContainText(`Ligando para ${referral.name}`);
	});
});
