import { request } from '@playwright/test';
import fs from 'fs';
import { API_URL, FRONT_URL, SESSIONS_DIR } from './support/env';

/** Confere se o front e a API locais estão no ar e limpa as sessões da execução anterior. */
export default async function globalSetup(): Promise<void> {
	await ensureReachable(FRONT_URL, 'front-end (ng serve)');
	await ensureReachable(`${API_URL}/api/currentVersion`, 'API (Laravel)');
	fs.rmSync(SESSIONS_DIR, { recursive: true, force: true });
	fs.mkdirSync(SESSIONS_DIR, { recursive: true });
}

async function ensureReachable(url: string, description: string): Promise<void> {
	const context = await request.newContext();
	try {
		const response = await context.get(url);
		if (!response.ok()) {
			throw new Error(`respondeu ${response.status()}`);
		}
	} catch (error) {
		throw new Error(`O ${description} não respondeu em ${url} (${(error as Error).message}). Suba o ambiente com "docker compose up -d" na pasta wiseller.`);
	} finally {
		await context.dispose();
	}
}
