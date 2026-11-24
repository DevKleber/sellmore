import { expect, test } from '../../support/fixtures';

const UNKNOWN_CODE = 'x'.repeat(40);
const INITIAL_ROWS = 3;

test.describe('Página pública de indicação', () => {
	test('mostra o primeiro nome do cliente e do vendedor e só libera o envio com nome e telefone', async ({ referPage, api, account }) => {
		const lead = await api.createCustomer({ name: 'Marta Souza' });
		await referPage.goto(await api.referralLinkCode(lead));

		await expect(referPage.heading).toHaveText('Marta, quem você indica?');
		await expect(referPage.page.getByText(`${account.credentials.name.split(' ')[0]} pediu sua indicação`)).toBeVisible();
		await expect(referPage.nameInputs).toHaveCount(INITIAL_ROWS);
		await expect(referPage.sendButton).toBeDisabled();

		await referPage.fillPerson(0, 'Paulo Indicado', '62');
		await expect(referPage.sendButton).toBeDisabled();
		await referPage.fillPerson(0, 'Paulo Indicado', '(62) 97777-1234');
		await expect(referPage.sendButton).toBeEnabled();
		await expect(referPage.sendButton).toHaveText('Enviar indicação');
	});

	test('envia várias pessoas, agradece e permite indicar mais', async ({ referPage, api }) => {
		const lead = await api.createCustomer({ name: 'Marta Souza' });
		await referPage.goto(await api.referralLinkCode(lead));

		await referPage.fillPerson(0, 'Primeira Pessoa', '(62) 97777-0001');
		await referPage.fillPerson(1, 'Segunda Pessoa', '(62) 97777-0002');
		await referPage.addPersonButton.click();
		await expect(referPage.nameInputs).toHaveCount(INITIAL_ROWS + 1);
		await expect(referPage.sendButton).toHaveText('Enviar 2 indicações');
		await referPage.sendButton.click();

		await expect(referPage.thanks).toHaveText('Obrigado, Marta!');
		await referPage.referMoreButton.click();
		await expect(referPage.nameInputs).toHaveCount(INITIAL_ROWS);
		await expect(referPage.nameInputs.first()).toHaveValue('');
	});

	test.describe('sem login', () => {
		test.use({ authenticated: false });

		test('link desconhecido avisa que não está mais disponível', async ({ referPage }) => {
			await referPage.goto(UNKNOWN_CODE);

			await expect(referPage.unavailable).toBeVisible();
			await expect(referPage.sendButton).toHaveCount(0);
		});
	});
});
