import { Injectable } from '@angular/core';

const STORAGE_KEY = 'darkmodeWiseller';
const THEME_ATTRIBUTE = 'data-theme';
const DARK = 'dark';
const LIGHT = 'light';

/**
 * Tema claro ou escuro. As cores de cada tema estao em assets/css/colors.css,
 * selecionadas pelo atributo data-theme da pagina.
 */
@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	darkmode: boolean = false;

	setDarkMode(): boolean {
		const dark = !this.themeActive();
		localStorage.setItem(STORAGE_KEY, String(dark));
		this.setTheme();

		return dark;
	}

	themeActive(): boolean {
		return localStorage.getItem(STORAGE_KEY) === 'true';
	}

	setTheme(): void {
		this.darkmode = this.themeActive();
		document.documentElement.setAttribute(
			THEME_ATTRIBUTE,
			this.darkmode ? DARK : LIGHT
		);
	}
}
