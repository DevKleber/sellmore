import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user.model';
import { NotificationService } from '../../shared/messages/notification.service';
import { LoaderService } from '../../shared/loader/loader.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	newAccountForm: FormGroup;
	navigateTo: string;
	isNewAccount: boolean = false;
	showButton: boolean = true;

	constructor(
		private fb: FormBuilder,
		private loginService: LoginService,
		private notificationService: NotificationService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private loaderService: LoaderService
	) {}

	ngOnInit() {
		// this.loaderService.isLoad(true);
		this.loginForm = this.fb.group({
			email: this.fb.control('', [Validators.required]),
			password: this.fb.control('', [Validators.required]),
		});
		this.newAccountForm = this.fb.group({
			nome: this.fb.control('', [Validators.required]),
			email: this.fb.control('', [Validators.required]),
			password: this.fb.control('', [Validators.required]),
		});
		//btoa é para criptografar com javascript puro
		this.navigateTo =
			this.activatedRoute.snapshot.params['to'] || btoa('/');
		// console.log(atob(this.navigateTo));
	}
	changeToNewAccount() {
		// this.notificationService.notifyInfo(
		// 	'No momento, estamos fechados para novos usuários.'
		// );
		// return;
		this.isNewAccount = true;
	}
	changeToLogin() {
		this.isNewAccount = false;
	}
	newAccount() {
		this.showButton = false;
		this.loaderService.isLoad(true);
		this.loginService
			.newAccount(this.newAccountForm.value)
			.subscribe((res) => {
				this.showButton = true;
				this.loginForm.controls['email'].setValue(res['dados'].email);
				this.loginForm.controls['password'].setValue(
					this.newAccountForm.value.password
				);
				// this.loaderService.isLoad(false);
				this.login();
			});
	}

	login() {
		this.loaderService.isLoad(true);
		this.loginService
			.login(this.loginForm.value.email, this.loginForm.value.password)
			.subscribe(
				(user) => {
					// console.log(user.me['nome']);
					location.replace('/');
					// this.notificationService.notifySweet( `Bem vindo, ${user.me['nome']}` );
					this.loaderService.isLoad(false);
				},

				(response) => {
					this.loaderService.isLoad(false);
					if (response.status === 401) {
						this.notificationService.notifyError(
							'Usuário ou senha inválida'
						);
					}
					if (response.status === 0) {
						this.notificationService.notifyError(
							'SERVIDOR OFFILINE'
						);
					}
				}
			);
	}
}
