import { buildVCard, VCardContact } from '../../support/data/vcard';
import { uniqueBrazilianMobile, uniqueName } from '../../support/data/unique';
import { expect, test } from '../../support/fixtures';
import { HomePage } from '../../pages/home.page';

const VCARD_MIME_TYPE = 'text/vcard';

function contact(whatsapp: boolean, number = uniqueBrazilianMobile()): VCardContact {
	return { name: uniqueName('Contato importado'), number, whatsapp };
}

function vcardFile(contacts: VCardContact[]) {
	return { name: 'contatos.vcf', mimeType: VCARD_MIME_TYPE, content: buildVCard(contacts) };
}

async function openImportFor(home: HomePage, leadName: string): Promise<void> {
	const menu = await home.leadCard(leadName).openMenu();
	await menu.choose('Importar contatos');
	await home.importContacts.expectOpen();
}

test.describe('Importação de contatos (.vcf)', () => {
	test('o modal mostra de quem são os contatos e pede o arquivo antes de importar', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		await home.goto();
		await openImportFor(home, lead.name);

		await expect(home.importContacts.title).toContainText(`indicados do(a) ${lead.name}`);
		await home.importContacts.import();

		await home.alert.acknowledge('Anexe um arquivo!');
	});

	test('importa os contatos do arquivo como referidos do lead e lista os importados', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const contacts = [contact(true), contact(false)];
		await home.goto();
		await openImportFor(home, lead.name);

		await home.importContacts.attach(vcardFile(contacts));
		await home.importContacts.import();

		await expect(home.importContacts.importedSummary).toHaveText('Importado 2');
		await expect(home.importContacts.duplicatedSummary).toHaveText('Indicado por outro lead 0');
		for (const { name } of contacts) {
			await expect(home.importContacts.root).toContainText(name);
		}
		await home.importContacts.closeByClickingOutside();
		await expect(home.leadCard(lead.name).referralNames).toHaveCount(contacts.length);
		for (const { name } of contacts) {
			await expect(home.leadCard(lead.name).referral(name).root).toBeVisible();
		}
	});

	test('contato com telefone já cadastrado aparece em "Indicado por outro lead"', async ({ home, api }) => {
		const otherLead = await api.createCustomer({ name: uniqueName('Outro lead') });
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		const repeated = contact(true, otherLead.phones[0].number);
		const fresh = contact(true);
		await home.goto();
		await openImportFor(home, lead.name);

		await home.importContacts.attach(vcardFile([repeated, fresh]));
		await home.importContacts.import();

		await expect(home.importContacts.importedSummary).toHaveText('Importado 1');
		await expect(home.importContacts.duplicatedSummary).toHaveText('Indicado por outro lead 1');
		await expect(home.importContacts.root).toContainText(`${repeated.name} - Número de telefone já existe (${otherLead.name})`);
	});

	test('arquivo com extensão proibida é recusado', async ({ home, api }) => {
		const lead = await api.createCustomer({ name: uniqueName('Lead') });
		await home.goto();
		await openImportFor(home, lead.name);

		await home.importContacts.attach({ name: 'contatos.exe', mimeType: 'application/octet-stream', content: 'MZ' });

		await home.alert.acknowledge('Arquivo não permitido!');
	});
});
