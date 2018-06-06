import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guidelines/guidelines.component';
import { LogosComponent } from './logos/logos.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'guidelines', component: GuideComponent},
	{path: 'logos', component: LogosComponent},
	{path: 'demo', component: DemoComponent}
	// { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
