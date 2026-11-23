/**
 * Os ícones de ação da tela principal não têm texto nem papel acessível: a única descrição
 * é a dica (tooltip) do Angular Material, presente no atributo `mattooltip` do template.
 */
export function byHint(hint: string): string {
	return `[mattooltip="${hint}"]`;
}

export const MENU_HINT = 'Menu';
