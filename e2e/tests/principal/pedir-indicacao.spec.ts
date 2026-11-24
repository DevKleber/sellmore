import { FRONT_URL } from '../../support/env';
import { expect, test } from '../../support/fixtures';

const PEDIR_INDICACOES = 'Pedir indicações';

test.describe('Pedir indicações pelo link', () => {
	test('o menu do lead gera o link público e a mensagem pronta para o WhatsApp', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: 'Carla Indicadora' });
		const code = await api.referralLinkCode(lead);
		await home.goto();

		const menu = await home.leadCard(lead.name).openMenu();
		await menu.choose(PEDIR_INDICACOES);

		await home.askReferral.expectOpen();
		await expect(home.askReferral.title).toContainText('Carla Indicadora');
		await expect(home.askReferral.linkInput).toHaveValue(new RegExp(`/indicar/${code}$`));
		await expect(home.askReferral.messageInput).toHaveValue(new RegExp(`^Oi, Carla!.*${code}$`));
		await expect(home.askReferral.whatsappLinks).toHaveCount(1);
		await expect(home.askReferral.whatsappLinks).toHaveAttribute('href', new RegExp(`phone=55${lead.phones[0].number}&text=Oi`));
		await home.askReferral.close();
	});

	test('quem recebe o link indica e o contato aparece como referido do lead', async ({ home, api, browser }) => {
		const lead = await api.createCustomer({ name: 'Bruno Indicador' });
		const code = await api.referralLinkCode(lead);

		const visitor = await browser.newContext({ storageState: { cookies: [], origins: [] } });
		const visitorPage = await visitor.newPage();
		await visitorPage.goto(`${FRONT_URL}/indicar/${code}`);
		await visitorPage.locator('.indicado-nome').first().fill('Indicado Pelo Link');
		await visitorPage.locator('.indicado-telefone').first().fill('(62) 98888-7766');
		await visitorPage.locator('.indicar-enviar').click();
		await expect(visitorPage.locator('.indicar-obrigado')).toBeVisible();
		await visitor.close();

		await home.goto();

		await expect(home.leadCard(lead.name).referralNames).toHaveText(['Indicado Pelo Link']);
	});
});
