import { CustomerStatus } from '../../support/data/customer-status';
import { uniqueBrazilianMobile, uniqueName, uniqueSuffix } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

test.describe('Referidos e árvore de indicações', () => {
	test('o "+" do card abre "Cadastre abaixo os indicados do(a) Lead" e o referido entra no card', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referralName = uniqueName('Referido');
		await home.goto();
		const card = home.leadCard(lead.name);
		await expect(card.referralCount).toHaveText('0 referidos');

		await card.addReferral();
		await home.leadForm.expectOpen();
		await expect(home.leadForm.title).toHaveText(`Cadastre abaixo os indicados do(a) ${lead.name}`);
		await home.leadForm.fill({ name: referralName, phones: [{ number: uniqueBrazilianMobile(), whatsapp: true }] });
		await home.leadForm.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.leadForm.close();

		await expect(card.referralNames).toHaveText([referralName]);
		await expect(card.referralCount).toHaveText('1 referidos');
	});

	test('clicar no referido abre o modal de ligação com quem o indicou na árvore', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead'), observation: 'Cliente desde 2020' });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();

		await home.leadCard(lead.name).referral(referral.name).open();

		await home.callModal.expectOpen();
		await expect(home.callModal.title).toContainText(`Ligando para ${referral.name}`);
		await expect(home.callModal.referralTree).toHaveCount(1);
		await expect(home.callModal.referralTree.first()).toContainText(lead.name);
		await expect(home.callModal.referralTree.first()).toContainText('Cliente desde 2020');
	});

	test('"Tornar Lead" cria o card do referido com os indicados dele e a árvore mostra dois níveis', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		const grandchildName = uniqueName('Neto');
		await home.goto();

		const menu = await home.leadCard(lead.name).referral(referral.name).openMenu();
		await menu.choose('Tornar Lead');
		await expect(home.leadForm.title).toHaveText(`Cadastre abaixo os indicados do(a) ${referral.name}`);
		await home.leadForm.fill({ name: grandchildName, phones: [{ number: uniqueBrazilianMobile(), whatsapp: true }] });
		await home.leadForm.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.leadForm.close();

		const newCard = home.leadCard(referral.name);
		await expect(newCard.referralNames).toHaveText([grandchildName]);
		await newCard.referral(grandchildName).open();
		await expect(home.callModal.referralTree).toHaveCount(2);
		await expect(home.callModal.referralTree.nth(0)).toContainText(referral.name);
		await expect(home.callModal.referralTree.nth(1)).toContainText(lead.name);
	});

	test('dar preferência marca a estrela e o referido passa para o topo do card', async ({ home, api }) => {
		const suffix = uniqueSuffix();
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const ana = await api.createReferral(lead, { name: `Ana ${suffix}` });
		const bruno = await api.createReferral(lead, { name: `Bruno ${suffix}` });
		await home.goto();
		const card = home.leadCard(lead.name);
		await expect(card.referralNames).toHaveText([ana.name, bruno.name]);

		await card.referral(bruno.name).togglePreference();
		await card.referral(bruno.name).expectPreferred(true);
		await home.reload();

		await card.referral(bruno.name).expectPreferred(true);
		await expect(card.referralNames).toHaveText([bruno.name, ana.name]);
	});

	test('clicar de novo na estrela tira a preferência', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await api.givePreference(referral);
		await home.goto();
		const item = home.leadCard(lead.name).referral(referral.name);
		await item.expectPreferred(true);

		await item.togglePreference();
		await item.expectPreferred(false);
		await home.reload();

		await item.expectPreferred(false);
	});

	test('referido preferido que já tem status mostra a estrela ao lado do nome', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await api.givePreference(referral);
		await api.changeStatus(referral, CustomerStatus.Comprou);
		await home.goto();

		await expect(home.leadCard(lead.name).referral(referral.name).preferredMark).toBeVisible();
	});
});
