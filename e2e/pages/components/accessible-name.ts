/**
 * Nome acessível exato, tolerando o ícone do Font Awesome na frente do texto: o navegador
 * inclui o glifo do `::before` do ícone no nome do botão/item de menu.
 */
export function accessibleName(name: string | RegExp): RegExp {
	if (name instanceof RegExp) {
		return name;
	}
	return new RegExp(`^[^\\p{L}\\p{N}]*${escapeRegExp(name)}$`, 'u');
}

function escapeRegExp(text: string): string {
	return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
