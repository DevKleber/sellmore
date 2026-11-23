import { ClosedStatusCode } from '../data/customer-status';
import { BRAZIL, PhoneNumber } from '../data/phone';
import { uniqueBrazilianMobile, uniqueName } from '../data/unique';
import { TIMEZONE } from '../env';
import { ApiHttp } from './api-http';
import { Customer, NewCustomer, Strategy } from './types';

interface CreatedCustomerResponse {
	dados: { id: number; name: string; status: Customer['status']; id_parent: number | null; observation: string | null };
}

type CustomerReference = Pick<Customer, 'id'>;

/** Rotas autenticadas da API, usadas para preparar dados quando o cadastro não é o foco do teste. */
export class WisellerApi {
	constructor(private readonly http: ApiHttp) {}

	async createCustomer(input: NewCustomer = {}): Promise<Customer> {
		const phones = input.phones ?? [{ number: uniqueBrazilianMobile(), whatsapp: true }];
		const { dados } = await this.http.send<CreatedCustomerResponse>('POST', '/api/customers', {
			name: input.name ?? uniqueName('Cliente'),
			observation: input.observation ?? '',
			status: input.status ?? '',
			id_parent: input.parentId ?? null,
			telefones: phones.map(toPhonePayload),
		});
		return { id: dados.id, name: dados.name, status: dados.status, parentId: dados.id_parent, observation: dados.observation ?? '', phones };
	}

	createReferral(parent: CustomerReference, input: NewCustomer = {}): Promise<Customer> {
		return this.createCustomer({ ...input, parentId: parent.id });
	}

	async changeStatus(customer: CustomerReference, status: ClosedStatusCode): Promise<void> {
		await this.http.send('PUT', `/api/status/customers/${customer.id}`, { status });
	}

	async archive(customer: CustomerReference): Promise<void> {
		await this.http.send('DELETE', `/api/customers/${customer.id}`);
	}

	async givePreference(customer: CustomerReference): Promise<void> {
		await this.http.send('POST', '/api/preference', { id: customer.id, bo_preference: true });
	}

	/** Agenda a ligação no dia informado (hoje, por padrão) no horário "HH:MM:SS" da API. */
	async scheduleCall(customer: Customer, hour: string, day = new Date()): Promise<void> {
		await this.http.send('POST', '/api/calendar', {
			id_customers: customer.id,
			title: customer.name,
			date: dateInApiTimezone(day),
			hour,
		});
	}

	async updateStrategy({ steps, saleUrl }: Strategy): Promise<void> {
		await this.http.send('PUT', '/api/strategy', { strategy: steps, url_sale: saleUrl });
	}
}

function toPhonePayload({ number, whatsapp, country = BRAZIL }: PhoneNumber) {
	return { phone: number, bo_whatsapp: whatsapp, country_code: country.code };
}

/** "2026-11-23" no fuso da API. */
function dateInApiTimezone(date: Date): string {
	return new Intl.DateTimeFormat('sv-SE', { timeZone: TIMEZONE, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}
