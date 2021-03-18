import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/theme/theme.service';
import { LoginService } from './security/login/login.service';
import Swal from 'sweetalert2';
import { version, titleVersion, contentVersion } from '../../package.json';

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
		const pessoa = this.loginService.getUser();
		if (!pessoa) {
			return;
		}
		if (version != this.getVersionLocalStorage()) {
			if (pessoa) {
				this.setVersionLocalStorage(version);
				this.messageNewVersion();
			}
		}
	}

	getVersionLocalStorage() {
		return localStorage.getItem('wiseller_version');
	}
	setVersionLocalStorage(version) {
		return localStorage.setItem('wiseller_version', version);
	}

	messageNewVersion() {
		const url = window.location.href;
		let arUrl = url.split('/');
		const route = arUrl.slice(-1).pop();

		if (route == 'login') {
			window.location.reload();
			return;
		}

		const pessoa = this.loginService.getUser();

		Swal.fire({
			title: `${titleVersion} ${version}`,
			width: 600,
			html: `
			<div style="text-align: left;">
				Olá, ${pessoa?.nome}.<br />
				${contentVersion}
			</div>
			`,
			icon: 'info',
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Ok!',
		}).then((result) => {
			window.location.reload();
		});
	}
}
