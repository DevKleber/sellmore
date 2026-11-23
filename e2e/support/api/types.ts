import { CustomerStatusCode } from '../data/customer-status';
import { PhoneNumber } from '../data/phone';

export interface AccountCredentials {
	id: number;
	name: string;
	email: string;
	password: string;
	createdAt: string;
}

export interface NewCustomer {
	name?: string;
	phones?: PhoneNumber[];
	status?: CustomerStatusCode;
	observation?: string;
	parentId?: number;
}

export interface Customer {
	id: number;
	name: string;
	status: CustomerStatusCode;
	parentId: number | null;
	observation: string;
	phones: PhoneNumber[];
}

export interface Strategy {
	steps: string;
	saleUrl: string;
}

export interface AppVersion {
	version: string;
	resume: string;
}
