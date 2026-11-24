import { Routes } from '@angular/router';

import { LoginComponent } from './security/login/login.component';
import { RequestRecoverPasswordComponent } from './security/requestRecoverPassword/request-recover-password.component';

import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
	// { path: '', component: HomeComponent ,canLoad:[LoggedInGuard]},
	{ path: 'login/:to', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
	{
		path: 'criar-conta',
		component: LoginComponent,
		data: { novaConta: true },
	},
	{
		path: 'request-recover-password',
		component: RequestRecoverPasswordComponent,
	},
	{
		path: 'indicar/:codigo',
		loadChildren: () => import('./indicar/indicar.module').then((m) => m.IndicarModule),
	},
	{
		path: '',
		pathMatch: 'full',
		canActivate: [LoggedInGuard],
		loadChildren: () =>
			import('./sellmore/sell-more.module').then((m) => m.SellMoreModule),
	},
	{
		path: 'not-found',
		loadChildren: () =>
			import('./not-found/not-found.module').then(
				(m) => m.NotFoundModule
			),
	},
	{
		path: 'access_log',
		canActivate: [LoggedInGuard],
		loadChildren: () => import('./log/log.module').then((m) => m.LogModule),
	},
	{ path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
