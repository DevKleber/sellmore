import { CustomerStatus, STATUS_DESCRIPTION } from '../../support/data/customer-status';
import { BRAZIL, displayBrazilianMobile, displayPortugueseMobile, PORTUGAL } from '../../support/data/phone';
import { uniqueBrazilianMobile, uniqueName, uniquePortugueseMobile } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';

test.describe('Cadastro de leads', () => {
	test('o botão Novo lead abre o modal "Novo referido", que exige o nome para salvar', async ({ home }) => {
		await home.goto();
		await home.openNewLeadForm();

		await expect(home.leadForm.title).toHaveText('Novo referido');
		await expect(home.leadForm.saveButton).toBeDisabled();
		await home.leadForm.nameInput.fill(uniqueName('Lead'));
		await expect(home.leadForm.saveButton).toBeEnabled();
	});

	test('cadastra um lead com WhatsApp e o card aparece com o telefone formatado', async ({ home }) => {
		const number = uniqueBrazilianMobile();
		const name = uniqueName('Lead');
		await home.goto();
		await home.openNewLeadForm();

		await home.leadForm.fill({ name, observation: 'Conheci na feira', phones: [{ number, whatsapp: true }] });
		await expect(home.leadForm.phones).toHaveText([`+${BRAZIL.code} ${displayBrazilianMobile(number)}`]);
		await home.leadForm.save();

		await home.alert.acknowledge('Salvo com sucesso!');
		await expect(home.leadForm.nameInput).toHaveValue('');
		await expect(home.leadForm.phones).toHaveCount(0);
		await home.leadForm.close();
		await expect(home.leadCard(name).phones).toHaveText([`+${BRAZIL.code} ${displayBrazilianMobile(number)}`]);
	});

	test('cadastra um lead com telefones de países diferentes', async ({ home }) => {
		const brazilianNumber = uniqueBrazilianMobile();
		const portugueseNumber = uniquePortugueseMobile();
		const name = uniqueName('Lead');
		await home.goto();
		await home.openNewLeadForm();

		await home.leadForm.fill({
			name,
			phones: [
				{ number: brazilianNumber, whatsapp: true },
				{ number: portugueseNumber, whatsapp: false, country: PORTUGAL },
			],
		});
		await home.leadForm.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.leadForm.close();

		const phones = home.leadCard(name).phones;
		await expect(phones).toHaveCount(2);
		await expect(phones.nth(0)).toContainText(`+${BRAZIL.code} ${displayBrazilianMobile(brazilianNumber)}`);
		await expect(phones.nth(1)).toContainText(`+${PORTUGAL.code} ${displayPortugueseMobile(portugueseNumber)}`);
	});

	test('remove um telefone do formulário antes de salvar', async ({ home }) => {
		const kept = uniqueBrazilianMobile();
		const removed = uniqueBrazilianMobile();
		const name = uniqueName('Lead');
		await home.goto();
		await home.openNewLeadForm();
		await home.leadForm.fill({ name, phones: [{ number: kept, whatsapp: true }, { number: removed, whatsapp: false }] });

		await home.leadForm.removePhone(displayBrazilianMobile(removed));
		await expect(home.leadForm.phones).toHaveText([`+${BRAZIL.code} ${displayBrazilianMobile(kept)}`]);
		await home.leadForm.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.leadForm.close();

		await expect(home.leadCard(name).phones).toHaveText([`+${BRAZIL.code} ${displayBrazilianMobile(kept)}`]);
	});

	test('salvar o telefone sem número não adiciona telefone ao formulário', async ({ home }) => {
		await home.goto();
		await home.openNewLeadForm();
		await home.leadForm.nameInput.fill(uniqueName('Lead'));
		await home.leadForm.openPhoneModal();

		await home.leadForm.phoneModal.button('Salvar').click();

		await expect(home.leadForm.phoneModal.root).toBeVisible();
		await home.leadForm.phoneModal.close();
		await expect(home.leadForm.phones).toHaveCount(0);
	});

	test('cadastra um lead já com o status escolhido no formulário', async ({ home }) => {
		const name = uniqueName('Lead');
		await home.goto();
		await home.openNewLeadForm();
		await home.leadForm.fill({ name, status: CustomerStatus.Comprou, phones: [{ number: uniqueBrazilianMobile(), whatsapp: true }] });
		await home.leadForm.save();
		await home.alert.acknowledge('Salvo com sucesso!');
		await home.leadForm.close();

		await expect(home.leadCard(name).statusTag(CustomerStatus.Comprou)).toBeVisible();
		await home.search(name);
		await expect(home.searchResults.result(name).status).toHaveText(`Status: ${STATUS_DESCRIPTION.c}`);
	});

	test('repetir o telefone de um lead mostra "Número de telefone já existe (Nome)"', async ({ home, api }) => {
		const existing = await api.createCustomer({ name: uniqueName('Lead') });
		await home.goto();
		await home.openNewLeadForm();
		await home.leadForm.fill({ name: uniqueName('Lead'), phones: existing.phones });
		await home.leadForm.save();

		await home.alert.acknowledge(`Número de telefone já existe (${existing.name})`);
	});

	test('repetir o telefone de um referido mostra "Referido já indicado pelo(a) Nome do lead"', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const referral = await api.createReferral(lead, { name: uniqueName('Referido') });
		await home.goto();
		await home.openNewLeadForm();
		await home.leadForm.fill({ name: uniqueName('Lead'), phones: referral.phones });
		await home.leadForm.save();

		await home.alert.acknowledge(`Referido já indicado pelo(a) ${lead.name}`);
	});
});
