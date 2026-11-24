import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SellMoreComponent } from './sell-more.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { PedirIndicacaoComponent } from './pedir-indicacao/pedir-indicacao.component';
import { PrimeirosPassosComponent } from './primeiros-passos/primeiros-passos.component';

const ROUTES: Routes = [{ path: '', component: SellMoreComponent }];
@NgModule({
	declarations: [
		SellMoreComponent,
		ResultadosComponent,
		MinhaContaComponent,
		PedirIndicacaoComponent,
		PrimeirosPassosComponent,
	],
	imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class SellMoreModule {}
