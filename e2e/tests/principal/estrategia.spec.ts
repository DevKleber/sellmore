import { BRAZIL, whatsappLink } from '../../support/data/phone';
import { DEFAULT_SALE_URL, DEFAULT_STRATEGY_TEXT } from '../../support/data/strategy';
import { uniqueName, uniqueSuffix } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

function newStrategy() {
	const suffix = uniqueSuffix();
	return {
		steps: `1. Cumprimentar ${suffix}\n2. Apresentar a oferta\n3. Pedir indicações`,
		saleUrl: `https://loja.wiseller.test/venda/${suffix}`,
	};
}

test.describe('Estratégia (roteiro de venda)', () => {
	test.use({ accountScope: 'test' });

	test('vendedor novo já tem o roteiro padrão e o link de venda https://wup.onl/', async ({ home }) => {
		await home.goto();

		await home.openStrategy();

		await expect(home.strategyModal.title).toHaveText('Roteiro');
		await expect(home.strategyModal.stepsInput).toHaveValue(DEFAULT_STRATEGY_TEXT);
		await expect(home.strategyModal.saleUrlInput).toHaveValue(DEFAULT_SALE_URL);
	});

	test('salva um novo roteiro e link de venda, que continuam depois de recarregar', async ({ home }) => {
		const strategy = newStrategy();
		await home.goto();
		await home.openStrategy();

		await home.strategyModal.fill(strategy);
		await home.strategyModal.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.reload();
		await home.openStrategy();

		await expect(home.strategyModal.stepsInput).toHaveValue(strategy.steps);
		await expect(home.strategyModal.saleUrlInput).toHaveValue(strategy.saleUrl);
	});

	test('o Salvar fica desabilitado com o roteiro vazio', async ({ home }) => {
		await home.goto();
		await home.openStrategy();

		await home.strategyModal.stepsInput.fill('');

		await expect(home.strategyModal.saveButton).toBeDisabled();
	});

	test('o modal de ligação usa o roteiro e o link de venda salvos', async ({ home, api }) => {
		const strategy = newStrategy();
		await api.updateStrategy(strategy);
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();

		await home.leadCard(lead.name).referral(referral.name).open();

		await expect(home.callModal.strategy).toContainText('1. Cumprimentar');
		await expect(home.callModal.saleLink).toHaveAttribute('href', strategy.saleUrl);
		await expect(home.callModal.whatsappLinks.first()).toHaveAttribute('href', whatsappLink(BRAZIL.code, referral.phones[0].number, strategy.saleUrl));
	});

	// Hoje o roteiro é carregado só na abertura da tela: depois de salvar, o modal de ligação
	// continua com o roteiro e o link antigos até recarregar a página.
	test.fixme('o roteiro salvo aparece no modal de ligação sem recarregar a página', async ({ home, api }) => {
		const strategy = newStrategy();
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		await home.openStrategy();
		await home.strategyModal.fill(strategy);
		await home.strategyModal.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.strategyModal.close();

		await home.leadCard(lead.name).referral(referral.name).open();

		await expect(home.callModal.saleLink).toHaveAttribute('href', strategy.saleUrl);
	});
});
