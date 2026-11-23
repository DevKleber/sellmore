const ONE_MINUTE_MS = 60_000;
const SAFETY_MARGIN_MS = 300;

/**
 * A API limita 60 requisições por minuto (por usuário autenticado ou, sem token, por IP).
 * O guard registra as requisições feitas e segura o início do próximo passo até haver folga
 * na janela de 1 minuto, evitando respostas 429 no meio de um teste.
 */
export class RateLimitGuard {
	private hits: number[] = [];

	constructor(private readonly maxRequestsPerMinute: number) {}

	record(): void {
		this.hits.push(Date.now());
	}

	async acquire(): Promise<void> {
		await this.waitForHeadroom(1);
		this.record();
	}

	async waitForHeadroom(requestsNeeded: number): Promise<void> {
		this.forgetExpiredHits();
		const allowedInWindow = Math.max(this.maxRequestsPerMinute - requestsNeeded, 0);
		const excess = this.hits.length - allowedInWindow;
		if (excess <= 0) {
			return;
		}
		const lastHitThatMustExpire = this.hits[excess - 1];
		await sleep(lastHitThatMustExpire + ONE_MINUTE_MS + SAFETY_MARGIN_MS - Date.now());
		this.forgetExpiredHits();
	}

	private forgetExpiredHits(): void {
		const windowStart = Date.now() - ONE_MINUTE_MS;
		this.hits = this.hits.filter((hit) => hit > windowStart);
	}
}

function sleep(milliseconds: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, Math.max(milliseconds, 0)));
}
