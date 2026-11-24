import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { IconComponent } from './icon/icon.component';
import { CommemorationsComponent } from './commemorations/commemorations.component';

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

import { Helper } from '../helper';

import { BooleanMessagePipe } from '../pipes/boolean-message.pipe';
import { SafeHtml } from '../pipes/safe-html.pipe';
import { HelpersPipe } from '../pipes/helpers.pipe';
import { Nl2BrPipe } from '../pipes/nl2br.pipe';

import { NgSelectModule } from '@ng-select/ng-select';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { NgScrollbarModule, NgScrollbarOptions, provideScrollbarOptions, provideScrollbarPolyfill } from 'ngx-scrollbar';
import { NgScrollHoverVisibility } from 'ngx-scrollbar/addons';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

/** A barra fica por cima do conteúdo, só aparece ao passar o mouse ou rolar, e nunca na horizontal. */
const DEFAULT_SCROLLBAR_OPTIONS: Partial<NgScrollbarOptions> = {
	orientation: 'vertical',
	visibility: 'hover',
	appearance: 'compact',
};
/** Navegadores sem ScrollTimeline carregam o polyfill do próprio site, e não de uma CDN. */
const SCROLL_TIMELINE_POLYFILL_URL = '/assets/lib/ngx-scrollbar/scroll-timeline-polyfill.js';
export function playerFactory() {
	return player;
}

@NgModule({
	declarations: [
		SafeHtml,
		InputComponent,
		IconComponent,
		CommemorationsComponent,
		SnackbarComponent,
		HelpersPipe,
		BooleanMessagePipe,
		Nl2BrPipe,
	],

	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
		MatTooltipModule,
		ScrollingModule,
		MatMenuModule,
		NgScrollbarModule,
		NgScrollHoverVisibility,
		NgxMaskDirective,
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory,
		}),
		LottieComponent,
	],
	providers: [provideNgxMask(), provideLottieOptions({ player: playerFactory })],
	exports: [
		SafeHtml,
		InputComponent,
		IconComponent,
		CommemorationsComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SnackbarComponent,
		HelpersPipe,
		BooleanMessagePipe,
		Nl2BrPipe,
		NgSelectModule,
		MatTooltipModule,
		ScrollingModule,
		MatMenuModule,
		NgScrollbarModule,
		NgScrollHoverVisibility,
		NgxMaskDirective,
		CalendarModule,
		LottieComponent,
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
				provideScrollbarOptions(DEFAULT_SCROLLBAR_OPTIONS),
				provideScrollbarPolyfill(SCROLL_TIMELINE_POLYFILL_URL),
			],
		};
	}
}
