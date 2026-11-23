import { Browser } from '@playwright/test';
import path from 'path';
import { CardOrder } from '../pages/components/ordering-menu';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { AccountCredentials } from './api/types';
import { BROWSER_CONTEXT_OPTIONS, SESSIONS_DIR } from './env';
import { installNetworkGuard } from './network-guard';
import { RateLimitGuard } from './rate-limit-guard';
import { recordApiRequests } from './request-recorder';

interface SessionOwner {
	credentials: AccountCredentials;
	guard: RateLimitGuard;
}

/**
 * Entra pela tela uma única vez e salva o estado do navegador (storageState) para os testes
 * reaproveitarem. A sessão já sai com o aviso de versão visto, todos os filtros de status
 * ligados e os cards mais recentes primeiro, para que os dados criados por cada teste
 * apareçam no início da lista.
 */
export async function createSessionState(browser: Browser, owner: SessionOwner, anonymousGuard: RateLimitGuard): Promise<string> {
	const file = path.join(SESSIONS_DIR, `${owner.credentials.id}.json`);
	const context = await browser.newContext(BROWSER_CONTEXT_OPTIONS);
	await installNetworkGuard(context);
	recordApiRequests(context, { authenticated: () => owner.guard, anonymous: anonymousGuard });

	const page = await context.newPage();
	const loginPage = new LoginPage(page);
	await loginPage.goto();
	await loginPage.login(owner.credentials);

	const home = new HomePage(page);
	await home.versionNotice.dismiss();
	await home.filters.showAll();
	await home.ordering.choose(CardOrder.NewestFirst);
	await home.expectLoaded();

	await context.storageState({ path: file });
	await context.close();
	return file;
}
