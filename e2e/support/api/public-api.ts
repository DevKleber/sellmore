import { TEST_ACCOUNT_PASSWORD } from '../env';
import { uniqueName, uniqueTestAccountEmail } from '../data/unique';
import { ApiHttp } from './api-http';
import { AccountCredentials, AppVersion } from './types';

interface CreatedUserResponse {
	dados: { id: number; nome: string; email: string; created_at: string };
}

interface LoginResponse {
	access_token: string;
}

/** Rotas públicas da API (sem token). */
export class WisellerPublicApi {
	constructor(private readonly http: ApiHttp) {}

	/** Cria um vendedor novo e exclusivo do teste pela rota pública de cadastro (não envia e-mail). */
	async createAccount(name = uniqueName('Vendedor E2E')): Promise<AccountCredentials> {
		const email = uniqueTestAccountEmail();
		const { dados } = await this.http.send<CreatedUserResponse>('POST', '/api/user/new', {
			nome: name,
			email,
			usuario: email.split('@')[0],
			password: TEST_ACCOUNT_PASSWORD,
		});
		return { id: dados.id, name: dados.nome, email: dados.email, password: TEST_ACCOUNT_PASSWORD, createdAt: dados.created_at };
	}

	async login({ email, password }: AccountCredentials): Promise<string> {
		const { access_token } = await this.http.send<LoginResponse>('POST', '/api/auth/login', { email, password });
		return access_token;
	}

	currentVersion(): Promise<AppVersion> {
		return this.http.send<AppVersion>('GET', '/api/currentVersion');
	}
}
