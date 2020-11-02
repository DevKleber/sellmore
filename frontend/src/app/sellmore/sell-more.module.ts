import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SellMoreComponent } from './sell-more.component';

const ROUTES: Routes = [{ path: '', component: SellMoreComponent }];
@NgModule({
	declarations: [SellMoreComponent],
	imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class SellMoreModule {}
