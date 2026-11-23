import { BrowserContext, Page, Route } from '@playwright/test';
import { API_URL, FRONT_URL } from './env';

const OK = 200;
const NO_CONTENT = 204;

const CORS_HEADERS = {
	'Access-Control-Allow-Origin': new URL(FRONT_URL).origin,
	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	'Access-Control-Allow-Headers': 'Authorization, Content-Type, Accept',
};

/** Rota da API respondida pelo teste, com o registro dos corpos recebidos. */
export class MockedEndpoint<T> {
	readonly receivedBodies: unknown[] = [];

	constructor(private readonly respond: () => T) {}

	handle(route: Route): Promise<void> {
		const request = route.request();
		if (request.method() === 'OPTIONS') {
			return route.fulfill({ status: NO_CONTENT, headers: CORS_HEADERS });
		}
		this.receivedBodies.push(request.postDataJSON());
		return route.fulfill({ status: OK, headers: CORS_HEADERS, json: this.respond() });
	}
}

/**
 * Substitui a resposta de uma rota da API. Usado onde a chamada real não pode ser feita
 * (envio de bug cria cartão no Trello) ou depende de dados que o vendedor de teste não tem
 * (log de acesso só para o administrador, mudança de versão).
 */
export async function mockApi<T>(target: Page | BrowserContext, path: string, respond: () => T): Promise<MockedEndpoint<T>> {
	const endpoint = new MockedEndpoint(respond);
	await target.route(`${API_URL}${path}`, (route) => endpoint.handle(route));
	return endpoint;
}
