import path from 'path';

export const FRONT_URL = process.env.E2E_BASE_URL ?? 'http://localhost:4200';
export const API_URL = process.env.E2E_API_URL ?? 'http://localhost:8000';

export const LOCALE = 'pt-BR';
export const TIMEZONE = 'America/Sao_Paulo';
export const DESKTOP_VIEWPORT = { width: 1440, height: 900 };

export const TEST_EMAIL_DOMAIN = 'wiseller.test';
export const TEST_ACCOUNT_EMAIL_PREFIX = 'e2e+';
export const NON_EXISTENT_EMAIL_PREFIX = 'nao-cadastrado+';
export const TEST_ACCOUNT_PASSWORD = 'E2e@Wiseller2026';

export const SESSIONS_DIR = path.join(__dirname, '..', '.auth');

export const BROWSER_CONTEXT_OPTIONS = {
	baseURL: FRONT_URL,
	locale: LOCALE,
	timezoneId: TIMEZONE,
	viewport: DESKTOP_VIEWPORT,
};
