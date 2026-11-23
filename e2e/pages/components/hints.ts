/**
 * Botões só com ícone são localizados pela dica (tooltip) do Angular Material, presente no
 * atributo `mattooltip` do template.
 */
export function byHint(hint: string): string {
	return `[mattooltip="${hint}"]`;
}

export const MENU_HINT = 'Menu';
