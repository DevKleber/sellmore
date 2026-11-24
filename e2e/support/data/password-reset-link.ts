import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { TIMEZONE } from '../env';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const DOCKER_COMPOSE_DIR = path.join(__dirname, '..', '..', '..', '..');

export interface PasswordResetLink {
	url: string;
	token: string;
}

interface ResetLinkOwner {
	id: number | string;
	email: string;
}

/**
 * Parâmetros do link de troca de senha que a API enviaria por e-mail: `url` é o base64 de
 * {email, id, expired} e `token` é a assinatura feita pela API. A assinatura é calculada dentro
 * do container da API, porque depende da chave da aplicação; assim a tela de troca de senha é
 * testada sem disparar e-mail nenhum.
 */
export function buildPasswordResetLink(owner: ResetLinkOwner, expiresAt = new Date(Date.now() + ONE_DAY_MS)): PasswordResetLink {
	const payload = { email: owner.email, id: Number(owner.id), expired: toServerDateTime(expiresAt) };
	const url = toBase64(JSON.stringify(payload));

	return { url, token: signedByApi(url, Number(owner.id)) };
}

export function expiredPasswordResetLink(owner: ResetLinkOwner): PasswordResetLink {
	return buildPasswordResetLink(owner, new Date(Date.now() - ONE_DAY_MS));
}

export function tamperedPasswordResetLink(owner: ResetLinkOwner): PasswordResetLink {
	const link = buildPasswordResetLink(owner);
	return { ...link, token: link.token.split('').reverse().join('') };
}

export const MALFORMED_PASSWORD_RESET_LINK: PasswordResetLink = { url: 'link-invalido', token: 'token-invalido' };

/** O conteúdo e o id só têm letras, números e sinais do base64, então podem ir direto no código executado. */
function signedByApi(url: string, ownerId: number): string {
	const code = `echo App\\User::assinaturaDoLinkDeRecuperacao('${url}', App\\Funcionario::find(${ownerId}));`;
	const output = execFileSync('docker', ['compose', 'exec', '-T', 'api', 'php', 'artisan', 'tinker', `--execute=${code}`], {
		cwd: DOCKER_COMPOSE_DIR,
		encoding: 'utf8',
	});

	const lines = output.trim().split('\n');

	return lines[lines.length - 1].trim();
}

/** Data no fuso e no formato do banco da API: "2026-11-23 13:45:00". */
function toServerDateTime(date: Date): string {
	return new Intl.DateTimeFormat('sv-SE', {
		timeZone: TIMEZONE,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	}).format(date);
}

function toBase64(text: string): string {
	return Buffer.from(text, 'utf8').toString('base64');
}
