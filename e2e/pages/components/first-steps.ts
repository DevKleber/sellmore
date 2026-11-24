import { Locator, Page } from '@playwright/test';

/** Guia "Comece em três passos", exibido a quem ainda não concluiu o primeiro uso. */
export class FirstSteps {
	readonly root: Locator;
	readonly steps: Locator;
	readonly doneSteps: Locator;
	readonly startButton: Locator;
	readonly dismissButton: Locator;

	constructor(page: Page) {
		this.root = page.locator('.ws-steps');
		this.steps = this.root.locator('.ws-step');
		this.doneSteps = this.root.locator('.ws-step.is-done');
		this.startButton = this.root.getByRole('button', { name: 'Cadastrar meu primeiro lead' });
		this.dismissButton = this.root.getByRole('button', { name: 'Dispensar' });
	}
}
