import { APIRequestContext, Browser } from '@playwright/test';
import { ApiHttp } from './api/api-http';
import { WisellerPublicApi } from './api/public-api';
import { AccountCredentials } from './api/types';
import { WisellerApi } from './api/wiseller-api';
import { RateLimitGuard } from './rate-limit-guard';
import { SAFE_REQUESTS_PER_MINUTE_PER_ACCOUNT } from './request-budget';
import { createSessionState } from './session';

interface AccountDependencies {
	browser: Browser;
	request: APIRequestContext;
	publicApi: WisellerPublicApi;
	anonymousGuard: RateLimitGuard;
}

/** Vendedor criado só para os testes, com sessão de navegador e cliente da API sob demanda. */
export class TestAccount {
	readonly guard = new RateLimitGuard(SAFE_REQUESTS_PER_MINUTE_PER_ACCOUNT);
	private session?: Promise<string>;
	private apiClient?: Promise<WisellerApi>;

	constructor(
		readonly credentials: AccountCredentials,
		private readonly dependencies: AccountDependencies,
	) {}

	sessionStateFile(): Promise<string> {
		this.session ??= createSessionState(this.dependencies.browser, this, this.dependencies.anonymousGuard);
		return this.session;
	}

	api(): Promise<WisellerApi> {
		this.apiClient ??= this.authenticate();
		return this.apiClient;
	}

	private async authenticate(): Promise<WisellerApi> {
		const token = await this.dependencies.publicApi.login(this.credentials);
		return new WisellerApi(new ApiHttp(this.dependencies.request, this.guard, token));
	}
}

/** Mantém um vendedor por arquivo de teste (e cria vendedores avulsos quando o teste pede). */
export class AccountRegistry {
	private readonly accountsByFile = new Map<string, Promise<TestAccount>>();

	constructor(private readonly dependencies: AccountDependencies) {}

	forFile(file: string): Promise<TestAccount> {
		const existing = this.accountsByFile.get(file);
		if (existing) {
			return existing;
		}
		const created = this.create();
		this.accountsByFile.set(file, created);
		return created;
	}

	existingForFile(file: string): Promise<TestAccount> | undefined {
		return this.accountsByFile.get(file);
	}

	async create(): Promise<TestAccount> {
		const credentials = await this.dependencies.publicApi.createAccount();
		return new TestAccount(credentials, this.dependencies);
	}
}
