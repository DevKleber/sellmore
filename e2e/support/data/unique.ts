import { randomInt } from 'crypto';
import { NON_EXISTENT_EMAIL_PREFIX, TEST_ACCOUNT_EMAIL_PREFIX, TEST_EMAIL_DOMAIN } from '../env';

const SUFFIX_LENGTH = 6;
const BASE_36 = 36;
const SAO_PAULO_AREA_CODE = '11';
const MOBILE_PREFIX = '9';
const MOBILE_SUBSCRIBER_DIGITS = 8;

const usedPhones = new Set<string>();

export function uniqueSuffix(): string {
	const timePart = Date.now().toString(BASE_36).slice(-3);
	const randomPart = randomInt(BASE_36 ** 3).toString(BASE_36).padStart(3, '0');
	return `${timePart}${randomPart}`.slice(-SUFFIX_LENGTH);
}

export function uniqueName(prefix: string): string {
	return `${prefix} ${uniqueSuffix()}`;
}

export function uniqueTestAccountEmail(): string {
	return `${TEST_ACCOUNT_EMAIL_PREFIX}${Date.now()}-${uniqueSuffix()}@${TEST_EMAIL_DOMAIN}`;
}

export function nonExistentEmail(): string {
	return `${NON_EXISTENT_EMAIL_PREFIX}${Date.now()}-${uniqueSuffix()}@${TEST_EMAIL_DOMAIN}`;
}

export function isNonExistentTestEmail(email: string): boolean {
	return email.startsWith(NON_EXISTENT_EMAIL_PREFIX) && email.endsWith(`@${TEST_EMAIL_DOMAIN}`);
}

/** Celular brasileiro (DDD 11) com 11 dígitos, sem repetir dentro do processo. */
export function uniqueBrazilianMobile(): string {
	return uniquePhone(`${SAO_PAULO_AREA_CODE}${MOBILE_PREFIX}`, MOBILE_SUBSCRIBER_DIGITS);
}

/** Celular português com 9 dígitos, sem repetir dentro do processo. */
export function uniquePortugueseMobile(): string {
	return uniquePhone(MOBILE_PREFIX, MOBILE_SUBSCRIBER_DIGITS);
}

function uniquePhone(prefix: string, randomDigits: number): string {
	const subscriber = String(randomInt(10 ** randomDigits)).padStart(randomDigits, '0');
	const phone = `${prefix}${subscriber}`;
	if (usedPhones.has(phone)) {
		return uniquePhone(prefix, randomDigits);
	}
	usedPhones.add(phone);
	return phone;
}
