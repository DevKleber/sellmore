import { APIRequestContext, test as base, expect } from '@playwright/test';
import { AccessLogPage } from '../pages/access-log.page';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { NotFoundPage } from '../pages/not-found.page';
import { RecoverPasswordPage } from '../pages/recover-password.page';
import { SignUpPage } from '../pages/sign-up.page';
import { AccountRegistry, TestAccount } from './accounts';
import { ApiHttp } from './api/api-http';
import { WisellerPublicApi } from './api/public-api';
import { WisellerApi } from './api/wiseller-api';
import { installNetworkGuard } from './network-guard';
import { RateLimitGuard } from './rate-limit-guard';
import { recordApiRequests } from './request-recorder';
import {
	ANONYMOUS_REQUESTS_RESERVED_PER_TEST,
	REQUESTS_RESERVED_PER_TEST,
	SAFE_ANONYMOUS_REQUESTS_PER_MINUTE,
} from './request-budget';

/**
 * - `file` (padrão): um vendedor novo por arquivo de teste, com login reaproveitado (storageState).
 * - `test`: vendedor novo em cada teste, para quem depende da conta vazia (contadores, ordem)
 *   ou invalida a sessão (sair, trocar a senha).
 */
export type AccountScope = 'file' | 'test';

const NO_SESSION = { cookies: [], origins: [] };

interface AccountProvider {
	get(): Promise<TestAccount>;
	current(): TestAccount | undefined;
	existing(): Promise<TestAccount> | undefined;
}

interface Options {
	accountScope: AccountScope;
	authenticated: boolean;
}

interface Fixtures {
	accountProvider: AccountProvider;
	account: TestAccount;
	api: WisellerApi;
	requestPacing: void;
	loginPage: LoginPage;
	signUpPage: SignUpPage;
	recoverPasswordPage: RecoverPasswordPage;
	home: HomePage;
	accessLogPage: AccessLogPage;
	notFoundPage: NotFoundPage;
}

interface WorkerFixtures {
	apiRequest: APIRequestContext;
	anonymousGuard: RateLimitGuard;
	publicApi: WisellerPublicApi;
	accounts: AccountRegistry;
}

export const test = base.extend<Options & Fixtures, WorkerFixtures>({
	accountScope: ['file', { option: true }],
	authenticated: [true, { option: true }],

	apiRequest: [
		async ({ playwright }, use) => {
			const request = await playwright.request.newContext();
			await use(request);
			await request.dispose();
		},
		{ scope: 'worker' },
	],

	anonymousGuard: [
		async ({}, use, workerInfo) => {
			await use(new RateLimitGuard(Math.floor(SAFE_ANONYMOUS_REQUESTS_PER_MINUTE / workerInfo.config.workers)));
		},
		{ scope: 'worker' },
	],

	publicApi: [
		async ({ apiRequest, anonymousGuard }, use) => {
			await use(new WisellerPublicApi(new ApiHttp(apiRequest, anonymousGuard)));
		},
		{ scope: 'worker' },
	],

	accounts: [
		async ({ browser, apiRequest, publicApi, anonymousGuard }, use) => {
			await use(new AccountRegistry({ browser, request: apiRequest, publicApi, anonymousGuard }));
		},
		{ scope: 'worker' },
	],

	accountProvider: async ({ accountScope, accounts }, use, testInfo) => {
		let pending: Promise<TestAccount> | undefined;
		let resolved: TestAccount | undefined;
		const create = () => (accountScope === 'test' ? accounts.create() : accounts.forFile(testInfo.file));
		await use({
			get: async () => {
				pending ??= create();
				resolved = await pending;
				return resolved;
			},
			current: () => resolved,
			existing: () => pending ?? (accountScope === 'file' ? accounts.existingForFile(testInfo.file) : undefined),
		});
	},

	account: async ({ accountProvider }, use) => {
		await use(await accountProvider.get());
	},

	api: async ({ account }, use) => {
		await use(await account.api());
	},

	storageState: async ({ authenticated, accountProvider }, use) => {
		if (!authenticated) {
			await use(NO_SESSION);
			return;
		}
		const account = await accountProvider.get();
		await use(await account.sessionStateFile());
	},

	context: async ({ context, accountProvider, anonymousGuard }, use) => {
		const productionAccess = await installNetworkGuard(context);
		recordApiRequests(context, { authenticated: () => accountProvider.current()?.guard, anonymous: anonymousGuard });
		await use(context);
		expect(productionAccess.attempts, 'a página tentou acessar o ambiente de produção').toEqual([]);
	},

	requestPacing: [
		async ({ authenticated, accountProvider, anonymousGuard }, use) => {
			await anonymousGuard.waitForHeadroom(ANONYMOUS_REQUESTS_RESERVED_PER_TEST);
			const account = authenticated ? await accountProvider.get() : await accountProvider.existing();
			await account?.guard.waitForHeadroom(REQUESTS_RESERVED_PER_TEST);
			await use();
		},
		{ auto: true },
	],

	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	signUpPage: async ({ page }, use) => {
		await use(new SignUpPage(page));
	},
	recoverPasswordPage: async ({ page }, use) => {
		await use(new RecoverPasswordPage(page));
	},
	home: async ({ page }, use) => {
		await use(new HomePage(page));
	},
	accessLogPage: async ({ page }, use) => {
		await use(new AccessLogPage(page));
	},
	notFoundPage: async ({ page }, use) => {
		await use(new NotFoundPage(page));
	},
});

export { expect };
