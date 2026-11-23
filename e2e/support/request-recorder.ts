import { BrowserContext, Request } from '@playwright/test';
import { API_URL } from './env';
import { RateLimitGuard } from './rate-limit-guard';

interface RecorderGuards {
	authenticated: () => RateLimitGuard | undefined;
	anonymous: RateLimitGuard;
}

const API_PREFIX = `${API_URL}/api/`;

/** Conta as chamadas que o navegador faz à API no limite de quem as faz (usuário ou IP). */
export function recordApiRequests(context: BrowserContext, guards: RecorderGuards): void {
	context.on('request', (request) => {
		if (!isThrottledApiCall(request)) {
			return;
		}
		const guard = request.headers().authorization ? guards.authenticated() : guards.anonymous;
		guard?.record();
	});
}

/** O preflight de CORS é respondido antes do throttle do Laravel. */
function isThrottledApiCall(request: Request): boolean {
	return request.url().startsWith(API_PREFIX) && request.method() !== 'OPTIONS';
}
