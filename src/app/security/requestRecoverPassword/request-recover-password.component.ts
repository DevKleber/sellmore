import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../login/login.service';

import { NotificationService } from '../../shared/messages/notification.service';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
	selector: 'app-request-recover-password',
	templateUrl: './request-recover-password.component.html',
	styleUrls: ['./request-recover-password.component.css'],
})
export class RequestRecoverPasswordComponent implements OnInit {
	alterarSenhaForm: FormGroup;
	solictarAlteracaoSenhaForm: FormGroup;
	navigateTo: string;
	isRequestRecoverPassword: boolean = true;
	showButton: boolean = true;
	boMessageShow: boolean = false;
	url: any;

	constructor(
		private fb: FormBuilder,
		private loginService: LoginService,
		private notificationService: NotificationService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private loaderService: LoaderService
	) {}

	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params) => {
			this.url = params;
			const { token, url } = params;
			this.isRequestRecoverPassword = true;
			if (token !== undefined && url !== undefined) {
				this.isRequestRecoverPassword = false;
			}
		});

		this.alterarSenhaForm = this.fb.group({
			newPassword: this.fb.control('', [Validators.required]),
			confirmPassword: this.fb.control('', [Validators.required]),
		});
		this.solictarAlteracaoSenhaForm = this.fb.group({
			email: this.fb.control('', [Validators.required]),
		});
	}
	changeToLogin() {
		location.replace('/login');
	}

	alterarSenha() {
		this.showButton = false;
		const form = this.alterarSenhaForm.value;
		form['url'] = this.url.url;
		form['token'] = this.url.token;
		console.log(form);
		this.loaderService.isLoad(true);
		this.loginService.alterarSenha(form).subscribe((res) => {
			console.log(res);
			this.loaderService.isLoad(false);
		});
	}
	solicitarNovaSenha() {
		this.showButton = false;
		this.loaderService.isLoad(true);

		this.loginService
			.solicitarNovaSenha(this.solictarAlteracaoSenhaForm.value)
			.subscribe((res) => {
				console.log(res);
				this.loaderService.isLoad(false);
				this.boMessageShow = true;
			});
	}
}
