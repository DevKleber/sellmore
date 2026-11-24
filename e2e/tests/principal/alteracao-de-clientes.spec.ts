import { CustomerStatus } from '../../support/data/customer-status';
import { BRAZIL, displayBrazilianMobile, displayPortugueseMobile, PORTUGAL } from '../../support/data/phone';
import { uniqueBrazilianMobile, uniqueName, uniquePortugueseMobile } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

test.describe('Alteração de clientes', () => {
	test('"Alterar" abre o formulário preenchido com os dados e telefones do referido', async ({ home, api }) => {
		const number = uniqueBrazilianMobile();
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, {
			name: uniqueName('Referido'),
			observation: 'Prefere ligação à tarde',
			phones: [{ number, whatsapp: true }],
		});
		await home.goto();

		const menu = await home.leadCard(lead.name).referral(referral.name).openMenu();
		await menu.choose('Alterar');

		await home.leadForm.expectOpen();
		await expect(home.leadForm.title).toHaveText('Alterando referido');
		await expect(home.leadForm.nameInput).toHaveValue(referral.name);
		await expect(home.leadForm.observationInput).toHaveValue('Prefere ligação à tarde');
		await expect(home.leadForm.phones).toHaveText([`+${BRAZIL.code} ${displayBrazilianMobile(number)}`]);
		await expect(home.leadForm.updateButton).toBeEnabled();
	});

	test('altera nome, observação e status de um referido e o card mostra a alteração', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		const newName = uniqueName('Referido alterado');
		await home.goto();

		const menu = await home.leadCard(lead.name).referral(referral.name).openMenu();
		await menu.choose('Alterar');
		await home.leadForm.nameInput.fill(newName);
		await home.leadForm.observationInput.fill('Pediu retorno na sexta');
		await home.leadForm.selectStatus(CustomerStatus.NaoTemInteresse);
		await home.leadForm.update();
		await home.alert.acknowledge('Alterado com sucesso!');
		await home.leadForm.close();

		const card = home.leadCard(lead.name);
		await expect(card.referral(newName).statusTag(CustomerStatus.NaoTemInteresse)).toBeVisible();
		await home.reload();
		await expect(card.referral(newName).statusTag(CustomerStatus.NaoTemInteresse)).toBeVisible();
		await expect(card.referral(referral.name).root).toHaveCount(0);
	});

	test('"Alterar" mostra o título de alteração mesmo depois de abrir o cadastro de referido', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		await home.leadCard(lead.name).addReferral();
		await home.leadForm.close();

		const menu = await home.leadCard(lead.name).referral(referral.name).openMenu();
		await menu.choose('Alterar');

		await expect(home.leadForm.title).toHaveText('Alterando referido');
	});

	test('alterar o lead pelo menu do card salva o novo nome, que aparece ao recarregar', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const newName = uniqueName('Lead alterado');
		await home.goto();

		const menu = await home.leadCard(lead.name).openMenu();
		await menu.choose('Alterar');
		await expect(home.leadForm.title).toHaveText('Alterando lead');
		await home.leadForm.nameInput.fill(newName);
		await home.leadForm.update();
		await home.alert.acknowledge('Alterado com sucesso!');
		await home.leadForm.close();
		await home.reload();

		await expect(home.leadCard(newName).root).toBeVisible();
	});

	// Hoje a API salva, mas a tela quebra (TypeError ao procurar o "pai" de um lead sem pai)
	// e o card continua com o nome antigo até recarregar a página.
	test.fixme('alterar o lead pelo menu do card atualiza o card sem recarregar', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const newName = uniqueName('Lead alterado');
		await home.goto();

		const menu = await home.leadCard(lead.name).openMenu();
		await menu.choose('Alterar');
		await home.leadForm.nameInput.fill(newName);
		await home.leadForm.update();
		await home.alert.acknowledge('Alterado com sucesso!');
		await home.leadForm.close();

		await expect(home.leadCard(newName).root).toBeVisible();
	});

	// Hoje o formulário de alteração carrega todos os telefones com +55 e, ao salvar,
	// grava o código do Brasil também nos números de outros países.
	test.fixme('alterar um cliente mantém o código do país de cada telefone', async ({ home, api }) => {
		const portugueseNumber = uniquePortugueseMobile();
		const lead = await api.createCustomer({
			name: uniqueName('Lead'),
			phones: [{ number: portugueseNumber, whatsapp: false, country: PORTUGAL }],
		});
		const portugueseDisplay = `+${PORTUGAL.code} ${displayPortugueseMobile(portugueseNumber)}`;
		await home.goto();

		const menu = await home.leadCard(lead.name).openMenu();
		await menu.choose('Alterar');
		await expect(home.leadForm.phones).toHaveText([portugueseDisplay]);
		await home.leadForm.update();
		await home.alert.acknowledge('Alterado com sucesso!');
		await home.leadForm.close();
		await home.reload();

		await expect(home.leadCard(lead.name).phones).toHaveText([portugueseDisplay]);
	});
});
