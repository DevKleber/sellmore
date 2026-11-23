import { STATUS_DESCRIPTION } from '../../support/data/customer-status';
import { BRAZIL, displayBrazilianMobile } from '../../support/data/phone';
import { uniqueName, uniqueSuffix } from '../../support/data/unique';
import { LOCALE, TIMEZONE } from '../../support/env';
import { expect, test } from '../../support/fixtures';

function todayInFullFormat(): string {
	return new Intl.DateTimeFormat(LOCALE, { dateStyle: 'full', timeZone: TIMEZONE }).format(new Date());
}

test.describe('Busca', () => {
	test('busca pelo nome e mostra o filtro, a quantidade e os dados do cliente', async ({ home, api }) => {
		const customer = await api.createCustomer({ name: uniqueName('Buscado') });
		const [phone] = customer.phones;
		await home.goto();

		await home.search(customer.name);

		await expect(home.searchResults.total).toHaveText('1');
		const result = home.searchResults.result(customer.name);
		await expect(result.activity).toHaveText('ATIVO');
		await expect(result.phones).toHaveText([`+${BRAZIL.code}${displayBrazilianMobile(phone.number)}`]);
		await expect(result.status).toHaveText(`Status: ${STATUS_DESCRIPTION.a}`);
		await expect(result.createdAt).toHaveText(`Criado em: ${todayInFullFormat()}`);
	});

	test('busca pelo telefone encontra o cliente', async ({ home, api }) => {
		const customer = await api.createCustomer({ name: uniqueName('Buscado') });
		await home.goto();

		await home.search(customer.phones[0].number);

		await expect(home.searchResults.items).toHaveCount(1);
		await expect(home.searchResults.result(customer.name).root).toBeVisible();
	});

	test('busca por um trecho da observação encontra o cliente', async ({ home, api }) => {
		const keyword = `palavra${uniqueSuffix()}`;
		const customer = await api.createCustomer({ name: uniqueName('Buscado'), observation: `Mencionou ${keyword} na conversa` });
		await home.goto();

		await home.search(keyword);

		await expect(home.searchResults.result(customer.name).root).toBeVisible();
	});

	test('busca sem resultado mostra "Nenhum resultado encontrado"', async ({ home }) => {
		const term = `inexistente${uniqueSuffix()}`;
		await home.goto();

		await home.search(term);

		await expect(home.searchResults.noResults).toBeVisible();
		await expect(home.searchResults.total).toHaveText('0');
	});

	test('apagar o texto da busca volta a mostrar os cards', async ({ home, api }) => {
		const customer = await api.createCustomer({ name: uniqueName('Buscado') });
		await home.goto();
		await home.search(customer.name);
		await expect(home.leadCard(customer.name).root).toBeHidden();

		await home.clearSearch();

		await expect(home.leadCard(customer.name).root).toBeVisible();
	});

	test('"Ligar" no menu do resultado abre o modal de ligação do cliente', async ({ home, api }) => {
		const customer = await api.createCustomer({ name: uniqueName('Buscado') });
		await home.goto();
		await home.search(customer.name);

		const menu = await home.searchResults.result(customer.name).openMenu();
		await menu.choose('Ligar');

		await home.callModal.expectOpen();
		await expect(home.callModal.title).toContainText(`Ligando para ${customer.name}`);
	});

	// Hoje a busca só considera clientes que têm telefone (junção obrigatória com os telefones):
	// quem foi cadastrado sem telefone nunca aparece, nem pelo nome.
	test.fixme('cliente cadastrado sem telefone também é encontrado pelo nome', async ({ home, api }) => {
		const customer = await api.createCustomer({ name: uniqueName('Sem telefone'), phones: [] });
		await home.goto();

		await home.search(customer.name);

		await expect(home.searchResults.result(customer.name).root).toBeVisible();
	});
});
