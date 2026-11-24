import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IndicarComponent } from './indicar.component';

const ROUTES: Routes = [{ path: '', component: IndicarComponent }];

@NgModule({
	declarations: [IndicarComponent],
	imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class IndicarModule {}
