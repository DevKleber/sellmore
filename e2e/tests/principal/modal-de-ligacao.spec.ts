import { BRAZIL, whatsappLink } from '../../support/data/phone';
import { DEFAULT_SALE_URL, DEFAULT_STRATEGY_STEPS } from '../../support/data/strategy';
import { uniqueBrazilianMobile, uniqueName } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

test.describe('Modal de ligação', () => {
	test('mostra o nome, os telefones com link do WhatsApp que envia o link de venda e as datas', async ({ home, api }) => {
		const whatsappNumber = uniqueBrazilianMobile();
		const landlineNumber = uniqueBrazilianMobile();
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, {
			name: uniqueName('Referido'),
			phones: [
				{ number: whatsappNumber, whatsapp: true },
				{ number: landlineNumber, whatsapp: false },
			],
		});
		await home.goto();

		await home.leadCard(lead.name).referral(referral.name).open();

		await home.callModal.expectOpen();
		await expect(home.callModal.title).toContainText(`Ligando para ${referral.name}`);
		await expect(home.callModal.whatsappLinks).toHaveCount(2);
		await expect(home.callModal.whatsappLinks.nth(0)).toHaveAttribute('href', whatsappLink(BRAZIL.code, whatsappNumber, DEFAULT_SALE_URL));
		await expect(home.callModal.whatsappLinks.nth(1)).toHaveAttribute('href', whatsappLink(BRAZIL.code, landlineNumber, DEFAULT_SALE_URL));
		await expect(home.callModal.whatsappLinks.nth(0)).toHaveAttribute('target', /_blank/i);
		await expect(home.callModal.dates).toContainText('Referido criado em:');
		await expect(home.callModal.dates).toContainText('Referido alterado em:');
	});

	test('o botão de venda leva ao link de venda da estratégia em nova aba', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();

		await home.leadCard(lead.name).referral(referral.name).open();

		await expect(home.callModal.saleLink).toHaveAttribute('href', DEFAULT_SALE_URL);
		await expect(home.callModal.saleLink).toHaveAttribute('target', /_blank/i);
	});

	test('a observação editada no modal é salva sozinha e continua depois de recarregar', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido'), observation: 'Primeiro contato' });
		await home.goto();
		const item = home.leadCard(lead.name).referral(referral.name);
		await item.open();
		await expect(home.callModal.observationInput).toHaveValue('Primeiro contato');

		await home.callModal.editObservation('Retornar depois das 18h');
		await home.reload();
		await item.open();

		await expect(home.callModal.observationInput).toHaveValue('Retornar depois das 18h');
	});

	test('mostra os passos da estratégia de venda do vendedor', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();

		await home.leadCard(lead.name).referral(referral.name).open();

		await expect(home.callModal.strategy).toContainText('Roteiro');
		for (const step of DEFAULT_STRATEGY_STEPS) {
			await expect(home.callModal.strategy).toContainText(step);
		}
	});
});
