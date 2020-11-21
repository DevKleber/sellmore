import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme/theme.service';
import { LoginService } from './security/login/login.service';
import { LogService } from './log/log.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'selelmore';
	systemOff: boolean = false;
	user: any = {};

	constructor(
		private themeService: ThemeService,
		private loginService: LoginService,
		private logService: LogService
	) {}

	ngOnInit(): void {
		this.themeService.setTheme();
		this.off();
	}

	// remover tudo
	off() {
		this.user = this.loginService.getUser();
		this.systemOff = this.loginService.userAllowed();
		if (!this.systemOff) {
			this.saveLogAccess();
		}
	}
	saveLogAccess() {
		if (this.user.id === 1) {
			return;
		}
		let form = {
			display_resolution: `${screen.width} x ${screen.height}`,
			os: navigator.platform,
			device: null,
			language: navigator.language,
			browser: null,
			ip: null,
			user_agent: navigator.userAgent,
			id_customers: null,
		};

		this.logService.save(form);
	}
}
