import { readFile } from 'node:fs/promises';
import { TEST_ACCOUNT_PASSWORD } from '../../support/env';
import { expect, test } from '../../support/fixtures';

const NEW_PASSWORD = 'nova-senha-e2e-123';
const CSV_HEADER = 'Nome;Telefones;Status;"Indicado por";Observação;Arquivado;"Cadastrado em"';

test.describe('Minha conta', () => {
	test.use({ accountScope: 'test' });

	test('mostra nome e e-mail e guarda a escolha de não receber o lembrete', async ({ home, account }) => {
		await home.goto();
		await home.openAccount();

		await expect(home.accountModal.name).toHaveText(account.credentials.name);
		await expect(home.accountModal.email).toHaveText(account.credentials.email);
		await expect(home.accountModal.reminderCheckbox).toBeChecked();

		await home.accountModal.reminderCheckbox.uncheck();
		await home.accountModal.close();
		await home.reload();
		await home.openAccount();

		await expect(home.accountModal.reminderCheckbox).not.toBeChecked();
	});

	test('exporta a planilha com os contatos da conta', async ({ home, api, page }) => {
		const lead = await api.createCustomer({ name: 'Lead Exportado' });
		await api.createReferral(lead, { name: 'Referido Exportado' });
		await home.goto();
		await home.openAccount();

		const download = page.waitForEvent('download');
		await home.accountModal.exportButton.click();
		const file = await download;

		expect(file.suggestedFilename()).toBe('clientes-wiseller.csv');
		const lines = (await readFile(await file.path(), 'utf8')).replace(/^﻿/, '').trim().split('\n');
		expect(lines[0]).toBe(CSV_HEADER);
		expect(lines).toHaveLength(3);
		expect(lines[1]).toContain('"Lead Exportado"');
		expect(lines[2]).toContain('"Referido Exportado"');
		expect(lines[2]).toContain('"Lead Exportado"');
	});

	test('troca a senha com a senha atual e passa a entrar com a nova', async ({ home, loginPage, account }) => {
		await home.goto();
		await home.openAccount();

		await home.accountModal.changePassword(TEST_ACCOUNT_PASSWORD, NEW_PASSWORD);
		await home.alert.acknowledge('Senha alterada');
		await home.accountModal.close();
		await home.logout();

		await loginPage.login({ email: account.credentials.email, password: NEW_PASSWORD });
		await home.expectLoaded();
	});

	test('excluir a conta exige a senha certa', async ({ home }) => {
		await home.goto();
		await home.openAccount();

		await expect(home.accountModal.deleteButton).toBeDisabled();
		await home.accountModal.deleteAccount('senha-errada');

		await home.alert.acknowledge('A senha não confere');
		await home.accountModal.expectOpen();
	});

	test('excluir a conta leva ao login e a conta deixa de existir', async ({ home, loginPage, page, account }) => {
		await home.goto();
		await home.openAccount();

		await home.accountModal.deleteAccount(TEST_ACCOUNT_PASSWORD);

		await page.waitForURL('**/login');
		await loginPage.submit({ email: account.credentials.email, password: TEST_ACCOUNT_PASSWORD });
		await home.alert.expectMessage('Usuário ou senha inválida');
		await expect(page).toHaveURL('/login');
	});
});
