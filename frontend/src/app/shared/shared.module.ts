import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from '../security/loggedin.guard';
import { AuthInterceptor } from '../security/auth.interceptor';
import { AuthRefreshtokenInterceptor } from '../security/auth-refresh-token.interceptor';
// import {RefreshTokenInterceptor }from '../security/refresh-token.interceptor'

import { BrowserModule } from '@angular/platform-browser';

// pipes
import { EncryptPipe } from '../pipes/encrypt.pipe';

import { Helper } from '../helper';

import { SafeHtml } from '../pipes/safe-html.pipe';
import { HelpersPipe } from '../pipes/helpers.pipe';
import { Nl2BrPipe } from '../pipes/nl2br.pipe';

import { NgSelectModule } from '@ng-select/ng-select';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
};

@NgModule({
	declarations: [
		SafeHtml,
		InputComponent,
		RadioComponent,
		SnackbarComponent,
		EncryptPipe,
		HelpersPipe,
		Nl2BrPipe,
	],

	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
		MatTooltipModule,
		MatMenuModule,
		PerfectScrollbarModule,
		NgxMaskModule.forRoot(),
	],
	exports: [
		SafeHtml,
		InputComponent,
		RadioComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SnackbarComponent,
		EncryptPipe,
		HelpersPipe,
		Nl2BrPipe,
		NgSelectModule,
		MatTooltipModule,
		MatMenuModule,
		PerfectScrollbarModule,
		NgxMaskModule,
	],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [
				NotificationService,
				LoginService,
				LoggedInGuard,
				Helper,
				{ provide: LOCALE_ID, useValue: 'pt-br' },
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true,
				},
				// {provide:HTTP_INTERCEPTORS, useClass: AuthRefreshtokenInterceptor, multi:true},
				{
					provide: PERFECT_SCROLLBAR_CONFIG,
					useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
				},
			],
		};
	}
}
