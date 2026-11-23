import { uniqueName } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

const CONFIRM_ARCHIVE = 'Sim, arquivar!';
const CONFIRM_ACTIVATE = 'Sim, ativar!';

test.describe('Arquivar e reativar', () => {
	test('arquivar pede confirmação e "Cancel" mantém o referido no card', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		const item = home.leadCard(lead.name).referral(referral.name);

		const menu = await item.openMenu();
		await menu.choose('Arquivar');
		await home.alert.expectMessage(`Arquivar ${referral.name} ?`);
		await home.alert.close('Cancel');

		await expect(item.root).toBeVisible();
	});

	test('arquivar um referido mostra "Referido arquivado" e o tira do card', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const archived = await api.createReferral(lead, { name: uniqueName('Arquivado') });
		const kept = await api.createReferral(lead, { name: uniqueName('Mantido') });
		await home.goto();
		const card = home.leadCard(lead.name);

		const menu = await card.referral(archived.name).openMenu();
		await menu.choose('Arquivar');
		await home.alert.choose(CONFIRM_ARCHIVE);
		await home.alert.acknowledge('Referido arquivado');

		await expect(card.referralNames).toHaveText([kept.name]);
		await home.reload();
		await expect(card.referralNames).toHaveText([kept.name]);
	});

	test('referido arquivado aparece como INATIVO na busca e pode ser ativado de novo', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await api.archive(referral);
		await home.goto();

		await home.search(referral.name);
		const result = home.searchResults.result(referral.name);
		await expect(result.activity).toHaveText('INATIVO');
		const menu = await result.openMenu();
		await menu.choose('Ativar');
		await home.alert.expectMessage(`Ativar ${referral.name} ?`);
		await home.alert.choose(CONFIRM_ACTIVATE);
		await home.alert.acknowledge('Referido ativado');

		await expect(result.activity).toHaveText('ATIVO');
		await home.clearSearch();
		await expect(home.leadCard(lead.name).referralNames).toHaveText([referral.name]);
	});

	test('arquivar um lead sem referidos esconde o card depois de recarregar', async ({ home, api }) => {
		const archived = await api.createCustomer({ name: uniqueName('Lead arquivado') });
		const kept = await api.createCustomer({ name: uniqueName('Lead mantido') });
		await home.goto();

		const menu = await home.leadCard(archived.name).openMenu();
		await menu.choose('Arquivar');
		await home.alert.choose(CONFIRM_ARCHIVE);
		await home.alert.acknowledge('Referido arquivado');
		await home.reload();

		await expect(home.leadCard(kept.name).root).toBeVisible();
		await expect(home.leadCard(archived.name).root).toHaveCount(0);
	});

	// Hoje a mensagem "Referido arquivado" aparece, mas o card do lead continua na tela até
	// recarregar: a remoção local só procura o cliente entre os referidos.
	test.fixme('arquivar um lead esconde o card na hora', async ({ home, api }) => {
		const archived = await api.createCustomer({ name: uniqueName('Lead arquivado') });
		await home.goto();

		const menu = await home.leadCard(archived.name).openMenu();
		await menu.choose('Arquivar');
		await home.alert.choose(CONFIRM_ARCHIVE);
		await home.alert.acknowledge('Referido arquivado');

		await expect(home.leadCard(archived.name).root).toHaveCount(0);
	});

	test('lead arquivado que tem referidos ativos continua com o card na tela', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await api.archive(lead);
		await home.goto();

		await expect(home.leadCard(lead.name).referralNames).toHaveText([referral.name]);
	});
});
