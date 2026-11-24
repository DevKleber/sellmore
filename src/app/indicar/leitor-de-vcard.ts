import { Indicado } from './indicar.service';

const INICIO_DO_CONTATO = /^BEGIN:VCARD/i;
const NOME = /^FN[^:]*:(.*)$/i;
const TELEFONE = /^(?:item\d+\.)?TEL([^:]*):(.*)$/i;
const NUMERO_DO_WHATSAPP = /waid=(\d+)/i;
const CODIGO_DO_BRASIL = '55';
const MAIOR_TELEFONE_COM_DDD = 11;
const TELEFONE_COM_DDD = /^(\d{2})(\d{4,5})(\d{4})$/;

/**
 * Lê um arquivo de contatos (.vcf), como o baixado no WhatsApp Web ou exportado da agenda,
 * e devolve nome e telefone de cada contato. Fica só o primeiro telefone de cada um.
 */
export function lerContatosDoVCard(conteudo: string): Indicado[] {
	const contatos: Indicado[] = [];
	let atual: Indicado | null = null;

	for (const linha of conteudo.split(/\r?\n/)) {
		if (INICIO_DO_CONTATO.test(linha)) {
			atual = { nome: '', telefone: '' };
			contatos.push(atual);
			continue;
		}
		if (atual) {
			preencher(atual, linha.trim());
		}
	}

	return semRepetidos(contatos.filter((contato) => contato.nome && contato.telefone));
}

function preencher(contato: Indicado, linha: string) {
	const nome = linha.match(NOME);
	if (nome && !contato.nome) {
		contato.nome = nome[1].trim();
		return;
	}

	const telefone = linha.match(TELEFONE);
	if (telefone && !contato.telefone) {
		contato.telefone = numeroDoTelefone(telefone[1], telefone[2]);
	}
}

/** O WhatsApp informa o número completo no parâmetro "waid"; nos demais arquivos vale o valor da linha. */
function numeroDoTelefone(parametros: string, valor: string): string {
	const doWhatsapp = parametros.match(NUMERO_DO_WHATSAPP);

	return telefoneLegivel(doWhatsapp ? doWhatsapp[1] : valor.replace(/\D/g, ''));
}

/** "5562977770001" vira "(62) 97777-0001"; número fora do padrão brasileiro fica como veio. */
function telefoneLegivel(digitos: string): string {
	const semPais = digitos.length > MAIOR_TELEFONE_COM_DDD && digitos.startsWith(CODIGO_DO_BRASIL) ? digitos.slice(CODIGO_DO_BRASIL.length) : digitos;
	const partes = semPais.match(TELEFONE_COM_DDD);

	return partes ? `(${partes[1]}) ${partes[2]}-${partes[3]}` : digitos;
}

function semRepetidos(contatos: Indicado[]): Indicado[] {
	const vistos = new Set<string>();

	return contatos.filter((contato) => {
		if (vistos.has(contato.telefone)) {
			return false;
		}
		vistos.add(contato.telefone);

		return true;
	});
}
