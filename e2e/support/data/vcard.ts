import { BRAZIL } from './phone';

export interface VCardContact {
	name: string;
	number: string;
	whatsapp: boolean;
}

/** Monta um .vcf no formato exportado pelo WhatsApp (telefones brasileiros). */
export function buildVCard(contacts: VCardContact[]): string {
	return contacts.map(vCardEntry).join('\n');
}

function vCardEntry({ name, number, whatsapp }: VCardContact): string {
	return ['BEGIN:VCARD', 'VERSION:3.0', `FN:${name}`, telephoneLine(number, whatsapp), 'END:VCARD'].join('\n');
}

function telephoneLine(number: string, whatsapp: boolean): string {
	const formatted = `+${BRAZIL.code} ${number.slice(0, 2)} ${number.slice(2, 7)}-${number.slice(7)}`;
	const whatsappId = whatsapp ? `;waid=${BRAZIL.code}${number}` : '';
	return `TEL;type=CELL;type=VOICE${whatsappId}:${formatted}`;
}
