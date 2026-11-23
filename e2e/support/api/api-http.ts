import { APIRequestContext, APIResponse } from '@playwright/test';
import { API_URL } from '../env';
import { RateLimitGuard } from '../rate-limit-guard';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const TOO_MANY_REQUESTS = 429;
const MAX_ATTEMPTS = 2;
const MS_PER_SECOND = 1000;
const DEFAULT_RETRY_AFTER_SECONDS = 60;

/** Cliente HTTP da API usado para preparar dados dos testes, respeitando o limite de requisições. */
export class ApiHttp {
	constructor(
		private readonly request: APIRequestContext,
		private readonly guard: RateLimitGuard,
		private readonly token?: string,
	) {}

	async send<T>(method: HttpMethod, path: string, data?: unknown, attempt = 1): Promise<T> {
		await this.guard.acquire();
		const response = await this.request.fetch(`${API_URL}${path}`, { method, data, headers: this.headers() });
		if (response.status() === TOO_MANY_REQUESTS && attempt < MAX_ATTEMPTS) {
			await waitRetryAfter(response);
			return this.send<T>(method, path, data, attempt + 1);
		}
		if (!response.ok()) {
			throw new Error(`${method} ${path} respondeu ${response.status()}: ${await response.text()}`);
		}
		return (await response.json()) as T;
	}

	private headers(): Record<string, string> {
		const headers: Record<string, string> = { Accept: 'application/json' };
		if (this.token) {
			headers.Authorization = `Bearer ${this.token}`;
		}
		return headers;
	}
}

function waitRetryAfter(response: APIResponse): Promise<void> {
	const seconds = Number(response.headers()['retry-after'] ?? DEFAULT_RETRY_AFTER_SECONDS);
	return new Promise((resolve) => setTimeout(resolve, seconds * MS_PER_SECOND));
}
