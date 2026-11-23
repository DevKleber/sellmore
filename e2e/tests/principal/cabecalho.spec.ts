import { ISSUE_ENDPOINT } from '../../support/network-guard';
import { API_URL } from '../../support/env';
import { mockApi } from '../../support/mock-api';
import { expect, test } from '../../support/fixtures';

const BUG_THANKS = 'Obrigado por nos reportar!';
const NEW_VERSION = { version: '99.0.0', resume: 'Novidade de teste E2E' };
const RELEASE_NOTES_URL = /https:\/\/www\.notion\.so\//;

test.describe('Cabeçalho da tela principal', () => {
	test('alterna para o tema escuro, que continua depois de recarregar, e volta ao claro', async ({ home }) => {
		await home.goto();
		const lightBackground = await home.backgroundColor();

		await home.toggleTheme();
		await expect(home.darkThemeActive).toBeVisible();
		await expect.poll(() => home.backgroundColor()).not.toBe(lightBackground);
		await home.reload();
		await expect(home.darkThemeActive).toBeVisible();
		await expect.poll(() => home.backgroundColor()).not.toBe(lightBackground);

		await home.toggleTheme();
		await expect(home.darkThemeActive).toBeHidden();
		await expect.poll(() => home.backgroundColor()).toBe(lightBackground);
	});

	test('o menu do perfil mostra o nome do vendedor, "Perfil: em desenvolvimento" e "Sair"', async ({ home, account }) => {
		await home.goto();

		const menu = await home.openProfileMenu();

		await expect(menu.items).toHaveText([account.credentials.name, 'Perfil: em desenvolvimento', 'Sair']);
	});

	test('o botão LOG não aparece para vendedor comum', async ({ home }) => {
		await home.goto();

		await expect(home.reportBugButton).toBeVisible();
		await expect(home.accessLogButton).toHaveCount(0);
	});

	test('"Doar" mostra as formas de doação', async ({ home }) => {
		await home.goto();

		await home.donateButton.click();

		await home.donate.expectOpen();
		await expect(home.donate.root).toContainText('O Wiseller é uma ferramenta sem fins lucrativos');
		await expect(home.donate.root).toContainText('PIX');
		await home.donate.closeByClickingOutside();
	});
});

test.describe('Reportar bug', () => {
	test('o envio só é liberado com título e descrição', async ({ home }) => {
		await home.goto();

		await home.reportBugButton.click();
		await home.bugReport.expectOpen();
		await expect(home.bugReport.sendButton).toBeDisabled();
		await home.bugReport.titleInput.fill('Botão não responde');
		await expect(home.bugReport.sendButton).toBeDisabled();
		await home.bugReport.descriptionInput.fill('Ao clicar em salvar nada acontece');
		await expect(home.bugReport.sendButton).toBeEnabled();

		await home.bugReport.close();
	});

	test('envia título e descrição, agradece e limpa o formulário', async ({ home, page }) => {
		const issue = await mockApi(page, new URL(ISSUE_ENDPOINT).pathname, () => ({ response: BUG_THANKS }));
		await home.goto();
		await home.reportBugButton.click();

		await home.bugReport.fill('Botão não responde', 'Ao clicar em salvar nada acontece');
		await home.bugReport.sendButton.click();
		await home.alert.expectMessage(BUG_THANKS);
		await home.alert.close('Cancel');

		expect(issue.receivedBodies).toEqual([{ name: 'Botão não responde', desc: 'Ao clicar em salvar nada acontece' }]);
		await expect(home.bugReport.titleInput).toHaveValue('');
		await expect(home.bugReport.descriptionInput).toHaveValue('');
	});
});

test.describe('Aviso de nova versão', () => {
	test('quando a versão muda, avisa uma única vez com o nome do vendedor e o resumo', async ({ home, page, account }) => {
		await mockApi(page, '/api/currentVersion', () => NEW_VERSION);
		await page.goto('/');

		await home.versionNotice.expectShown(NEW_VERSION.version);
		await expect(home.versionNotice.root).toContainText(`Olá, ${account.credentials.name}, temos novidades.`);
		await expect(home.versionNotice.root).toContainText(NEW_VERSION.resume);
		const versionCheckedAgain = page.waitForResponse(`${API_URL}/api/currentVersion`);
		await home.versionNotice.dismiss();

		await versionCheckedAgain;
		await home.expectLoaded();
		await expect(home.versionNotice.root).toBeHidden();
	});

	test('"Ver as novidades!" abre a página de novidades em nova aba', async ({ home, page, context }) => {
		await mockApi(page, '/api/currentVersion', () => NEW_VERSION);
		await context.route(RELEASE_NOTES_URL, (route) => route.fulfill({ contentType: 'text/html', body: '<h1>Novidades</h1>' }));
		await page.goto('/');
		await home.versionNotice.expectShown(NEW_VERSION.version);

		const releaseNotes = page.waitForEvent('popup');
		await home.versionNotice.openReleaseNotes();

		await expect(await releaseNotes).toHaveURL(RELEASE_NOTES_URL);
	});
});
