import { Page } from '@playwright/test';
import { AccessReport } from '../../pages/access-log.page';
import { mockApi } from '../../support/mock-api';
import { expect, test } from '../../support/fixtures';

/**
 * O log de acesso só responde para o administrador (usuário 1), que é um usuário real.
 * Para ver a tela com dados, a resposta da API é simulada com dados fictícios.
 */
function fakeAccessLog(userName: string) {
	return {
		dados: [
			{
				created_at: '2026-11-20T16:45:10.000000Z',
				nome: userName,
				display_resolution: '1920 x 1080',
				os: 'MacIntel',
				device: 'Mac',
				browser: 'Chrome',
				language: 'pt-BR',
				ip: '10.0.0.1',
			},
		],
		logDay: [{ nome: userName }, { nome: 'Vendedora Fictícia' }],
		totalCustomerActive: [{ nome: userName, total: 12 }],
		totalCustomerSeller: [{ nome: userName, total: 3 }],
		totalAccessByUser: [{ nome: userName, total: 40 }],
		totalDisplay: [
			{ display_resolution: '1920 x 1080', total: 30 },
			{ display_resolution: '390 x 844', total: 10 },
		],
		totalBrowser: [{ browser: 'Chrome', total: 25 }],
		totalDevice: [{ device: 'Mac', total: 20 }],
		totalLanguage: [{ language: 'pt-BR', total: 33 }],
	};
}

const USAGE_METRICS = {
	contas: { total: 40, ultimos7Dias: 5, ultimos30Dias: 12 },
	ativacao: { comCliente: 30, comIndicacao: 20 },
	ativos: { ultimos7Dias: 9, ultimos30Dias: 18 },
	semanas: [{ inicio: '2026-11-16', criaram: 4, cadastraramCliente: 3, voltaram: 1 }],
	hoje: { contasQueAcessaram: 7, contasNovas: 2, clientesCadastrados: 15, vendas: 3 },
	acessosPorDia: [
		{ dia: '2026-11-22', contas: 4 },
		{ dia: '2026-11-23', contas: 8 },
	],
	contasRecentes: [
		{ id: 2, nome: 'Conta Fictícia', email: 'ficticia@wiseller.test', criadaEm: '2026-11-22 10:00:00', clientes: 6, ultimoAcesso: null },
	],
};

async function mockAdministratorPanel(page: Page, userName: string) {
	await mockApi(page, '/api/metricas-de-uso', () => ({ dados: USAGE_METRICS }));

	return mockApi(page, '/api/access_log', () => fakeAccessLog(userName));
}

test.describe('Log de acesso', () => {
	test('vendedor comum vê "Sem permissão" ao abrir o log de acesso', async ({ accessLogPage }) => {
		await accessLogPage.goto();

		await accessLogPage.alert.acknowledge('Sem permissão');
		await expect(accessLogPage.heading).toBeVisible();
		await expect(accessLogPage.accessRows).toHaveCount(0);
	});

	test('mostra a tabela de acessos e os relatórios devolvidos pela API', async ({ accessLogPage, page }) => {
		await mockAdministratorPanel(page, 'Vendedor Fictício');

		await accessLogPage.goto();

		await expect(accessLogPage.heading).toBeVisible();
		await expect(accessLogPage.accessRows).toHaveCount(1);
		await expect(accessLogPage.accessRows.first()).toContainText('20/11/2026 13:45:10');
		await expect(accessLogPage.accessRows.first()).toContainText('Vendedor Fictício');
		await expect(accessLogPage.accessRows.first()).toContainText('10.0.0.1');
		await expect(accessLogPage.reportHeading(AccessReport.AccessesToday)).toHaveText('Acessos do dia 2');
		await expect(accessLogPage.reportCells(AccessReport.CustomersByUser)).toHaveText(['Vendedor Fictício', '12']);
		await expect(accessLogPage.reportCells(AccessReport.SalesByUser)).toHaveText(['Vendedor Fictício', '3']);
		await expect(accessLogPage.reportCells(AccessReport.AccessesByUser)).toHaveText(['Vendedor Fictício', '40']);
		await expect(accessLogPage.reportCells(AccessReport.Resolution)).toHaveText(['1920 x 1080', '30', '390 x 844', '10']);
		await expect(accessLogPage.reportCells(AccessReport.Browser)).toHaveText(['Chrome', '25']);
		await expect(accessLogPage.reportCells(AccessReport.Device)).toHaveText(['Mac', '20']);
		await expect(accessLogPage.reportCells(AccessReport.Language)).toHaveText(['pt-BR', '33']);
	});

	test('mostra o que aconteceu hoje, o uso da plataforma, o funil por semana e as contas recentes', async ({ accessLogPage, page }) => {
		await mockAdministratorPanel(page, 'Vendedor Fictício');

		await accessLogPage.goto();

		await expect(accessLogPage.metric('hoje-acessos')).toHaveText('7');
		await expect(accessLogPage.metric('hoje-contas-novas')).toHaveText('2');
		await expect(accessLogPage.metric('hoje-clientes')).toHaveText('15');
		await expect(accessLogPage.metric('hoje-vendas')).toHaveText('3');
		await expect(accessLogPage.metric('metrica-contas')).toHaveText('40');
		await expect(accessLogPage.metric('metrica-com-cliente')).toHaveText('30');
		await expect(accessLogPage.metric('metrica-ativos')).toHaveText('9');
		await expect(accessLogPage.dailyAccessValues).toHaveText(['4', '8']);
		await expect(accessLogPage.weeklyFunnelCells).toHaveText(['16/11/2026', '4', '3 (75%)', '1 (25%)']);
		await expect(accessLogPage.recentAccountCells).toHaveText(['Conta Fictícia', 'ficticia@wiseller.test', '22/11/2026 10:00', '6', 'nunca']);
	});

	test('"Atualizar lista" busca os dados de novo', async ({ accessLogPage, page }) => {
		let userName = 'Primeira Consulta';
		await mockApi(page, '/api/metricas-de-uso', () => ({ dados: USAGE_METRICS }));
		const accessLog = await mockApi(page, '/api/access_log', () => fakeAccessLog(userName));
		await accessLogPage.goto();
		await expect(accessLogPage.accessRows.first()).toContainText('Primeira Consulta');

		userName = 'Segunda Consulta';
		await accessLogPage.refreshButton.click();

		await expect(accessLogPage.accessRows.first()).toContainText('Segunda Consulta');
		expect(accessLog.receivedBodies).toHaveLength(2);
	});

	test('a marca "Wiseller" no topo volta para a tela principal', async ({ accessLogPage, page }) => {
		await mockAdministratorPanel(page, 'Vendedor Fictício');
		await accessLogPage.goto();
		await expect(accessLogPage.accessRows).toHaveCount(1);

		await accessLogPage.homeLink.click();

		await expect(page).toHaveURL('/');
	});
});
