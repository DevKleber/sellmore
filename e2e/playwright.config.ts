import { defineConfig, devices } from '@playwright/test';
import { BROWSER_CONTEXT_OPTIONS } from './support/env';

const isCI = Boolean(process.env.CI);

/**
 * Cada arquivo de teste usa um vendedor próprio e o limite da API é por usuário (60 req/min),
 * então arquivos em paralelo não disputam o mesmo limite. Use E2E_WORKERS=1 para rodar em série.
 */
const DEFAULT_WORKERS = 3;
const workers = Number(process.env.E2E_WORKERS ?? DEFAULT_WORKERS);

const TEST_TIMEOUT_MS = 120_000;
const EXPECT_TIMEOUT_MS = 10_000;
const ACTION_TIMEOUT_MS = 15_000;
const NAVIGATION_TIMEOUT_MS = 60_000;

export default defineConfig({
	testDir: './tests',
	testMatch: '**/*.spec.ts',
	outputDir: './test-results',
	globalSetup: './global-setup.ts',
	fullyParallel: false,
	workers,
	retries: isCI ? 1 : 0,
	forbidOnly: isCI,
	timeout: TEST_TIMEOUT_MS,
	expect: { timeout: EXPECT_TIMEOUT_MS },
	reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
	use: {
		...BROWSER_CONTEXT_OPTIONS,
		actionTimeout: ACTION_TIMEOUT_MS,
		navigationTimeout: NAVIGATION_TIMEOUT_MS,
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		video: 'off',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'], ...BROWSER_CONTEXT_OPTIONS },
		},
	],
});
