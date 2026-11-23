import { BrowserContext, Route } from '@playwright/test';
import { API_URL, FRONT_URL } from './env';
import { isNonExistentTestEmail } from './data/unique';

const PRODUCTION_HOST = /(^|\.)wiseller\.com\.br$/i;

/**
 * Tudo que não começa pela origem do front ou da API locais. É uma RegExp (e não uma função)
 * para o Playwright filtrar no próprio navegador, sem desviar cada requisição para o teste.
 */
const OUTSIDE_TEST_ENVIRONMENT = new RegExp(`^(?!(${[FRONT_URL, API_URL].map(originPattern).join('|')})/)`);

function originPattern(url: string): string {
	return new URL(url).origin.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
}

export const ISSUE_ENDPOINT = `${API_URL}/api/issue`;
const RECOVER_PASSWORD_ENDPOINT = `${API_URL}/api/auth/recoverPassword`;

/** Endereços de produção que a página tentou acessar (a suíte falha se houver algum). */
export class ProductionAccessLog {
	readonly attempts: string[] = [];

	register(url: URL): void {
		if (PRODUCTION_HOST.test(url.hostname)) {
			this.attempts.push(url.href);
		}
	}
}

/**
 * Isola o navegador do mundo externo: só o front e a API locais respondem.
 * Bloqueia também o envio de bug para o Trello e a recuperação de senha de e-mails reais,
 * pois o `.env` local da API usa SMTP e Trello de produção.
 */
export async function installNetworkGuard(context: BrowserContext): Promise<ProductionAccessLog> {
	const productionAccess = new ProductionAccessLog();
	await context.route(OUTSIDE_TEST_ENVIRONMENT, (route) => blockExternalRequest(route, productionAccess));
	await context.route(ISSUE_ENDPOINT, (route) => route.abort('blockedbyclient'));
	await context.route(RECOVER_PASSWORD_ENDPOINT, allowOnlyNonExistentEmails);
	return productionAccess;
}

function blockExternalRequest(route: Route, productionAccess: ProductionAccessLog): Promise<void> {
	productionAccess.register(new URL(route.request().url()));
	return route.abort('blockedbyclient');
}

function allowOnlyNonExistentEmails(route: Route): Promise<void> {
	const request = route.request();
	if (request.method() === 'OPTIONS') {
		return route.continue();
	}
	const email = String(request.postDataJSON()?.email ?? '');
	if (isNonExistentTestEmail(email)) {
		return route.continue();
	}
	return route.abort('blockedbyclient');
}
