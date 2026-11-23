import { TIMEZONE } from '../env';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export interface PasswordResetLink {
	url: string;
	token: string;
}

interface ResetLinkOwner {
	id: number | string;
	email: string;
	createdAt: string;
}

/** A API sempre grava "id": "1" no link que envia por e-mail (User::recoverPassword). */
const ID_SENT_BY_API = '1';

/**
 * Reproduz os parâmetros do link de troca de senha que a API enviaria por e-mail
 * (`url` = base64 de {email, id, expired}; `token` = base64 do created_at do usuário),
 * para testar a tela de troca de senha sem disparar e-mail nenhum.
 */
export function buildPasswordResetLink(owner: ResetLinkOwner, expiresAt = new Date(Date.now() + ONE_DAY_MS)): PasswordResetLink {
	const payload = { email: owner.email, id: owner.id, expired: toServerDateTime(expiresAt) };
	return {
		url: toBase64(JSON.stringify(payload)),
		token: toBase64(toServerDateTime(new Date(owner.createdAt))),
	};
}

export function expiredPasswordResetLink(owner: ResetLinkOwner): PasswordResetLink {
	return buildPasswordResetLink(owner, new Date(Date.now() - ONE_DAY_MS));
}

export function tamperedPasswordResetLink(owner: ResetLinkOwner): PasswordResetLink {
	const link = buildPasswordResetLink(owner);
	return { ...link, token: toBase64(toServerDateTime(new Date(0))) };
}

/** Link exatamente como a API o envia por e-mail, com o id fixo. */
export function passwordResetLinkSentByApi(owner: ResetLinkOwner): PasswordResetLink {
	return buildPasswordResetLink({ ...owner, id: ID_SENT_BY_API });
}

export const MALFORMED_PASSWORD_RESET_LINK: PasswordResetLink = { url: 'link-invalido', token: 'token-invalido' };

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
