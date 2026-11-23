export const CustomerStatus = {
	Aberto: 'a',
	ProblemasComCartao: 'pc',
	LigarDepois: 'ld',
	NaoTemInteresse: 'n',
	Comprou: 'c',
} as const;

export type CustomerStatusCode = (typeof CustomerStatus)[keyof typeof CustomerStatus];
export type ClosedStatusCode = Exclude<CustomerStatusCode, 'a'>;

export const ALL_STATUSES: CustomerStatusCode[] = Object.values(CustomerStatus);

/** Texto do status na busca e no modal de ligação. */
export const STATUS_DESCRIPTION: Record<CustomerStatusCode, string> = {
	a: 'Aguardando seu telefonema',
	pc: 'Problemas com cartão',
	ld: 'Ligar depois',
	n: 'Não tem interesse',
	c: 'Comprou',
};

/** Rótulo de cada status nas pílulas de filtro e no menu do referido. */
export const STATUS_FILTER_LABEL: Record<CustomerStatusCode, string> = {
	a: 'Em aberto',
	pc: 'Problemas com cartão',
	ld: 'Ligar depois',
	n: 'Não tem interesse',
	c: 'Comprou',
};

/** Dica (tooltip) dos botões de status do card do lead e do modal de ligação. */
export const STATUS_ACTION_HINT: Record<ClosedStatusCode, string> = {
	pc: 'Problemas com cartão de crédito',
	ld: 'Ligar depois',
	n: 'Não deu negócio 😭',
	c: 'Vendido 😃',
};

/** Opção do select de status no formulário do referido. */
export const STATUS_FORM_OPTION: Record<ClosedStatusCode, string> = {
	pc: 'Problemas com cartão',
	ld: 'Ligar depois',
	n: 'Não tem interesse',
	c: 'Comprou',
};
