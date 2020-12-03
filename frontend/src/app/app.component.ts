import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme/theme.service';
import { LoginService } from './security/login/login.service';
import { version } from '../../package.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'selelmore';
	systemOn: boolean = true;
	user: any = {};

	constructor(
		private themeService: ThemeService,
		private loginService: LoginService
	) {}

	ngOnInit(): void {
		this.themeService.setTheme();
		this.verifyVersion();
	}
	verifyVersion() {
		if (version != this.getVersionLocalStorage()) {
			this.setVersionLocalStorage(version);
			window.location.reload();
		}
	}

	getVersionLocalStorage() {
		return localStorage.getItem('wiseller_version');
	}
	setVersionLocalStorage(version) {
		return localStorage.setItem('wiseller_version', version);
	}
}
