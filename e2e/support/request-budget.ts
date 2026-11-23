/** O grupo `api` do Laravel usa `throttle:60,1`; os limites abaixo deixam margem de segurança. */
export const SAFE_REQUESTS_PER_MINUTE_PER_ACCOUNT = 55;

/** Requisições sem token contam por IP, somando todos os workers e a execução anterior da suíte. */
export const SAFE_ANONYMOUS_REQUESTS_PER_MINUTE = 40;

/** Folga reservada antes de cada teste: nenhum teste da suíte passa disso. */
export const REQUESTS_RESERVED_PER_TEST = 25;
export const ANONYMOUS_REQUESTS_RESERVED_PER_TEST = 5;
