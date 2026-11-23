export const BRAZIL = { name: 'Brasil', code: '55' } as const;
export const PORTUGAL = { name: 'Portugal', code: '351' } as const;

export interface PhoneNumber {
	number: string;
	whatsapp: boolean;
	country?: { name: string; code: string };
}

/** Formato exibido pela tela para celular brasileiro: (11) 91234-5678. */
export function displayBrazilianMobile(number: string): string {
	return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

/** Formato exibido pela tela para celular português: 912 345-678. */
export function displayPortugueseMobile(number: string): string {
	return number.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2-$3');
}

export function whatsappLink(countryCode: string, number: string, message: string): string {
	return `https://api.whatsapp.com/send/?phone=${countryCode}${number}&text=${message}`;
}
