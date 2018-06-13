import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guidelines/guidelines.component';
import { BrandComponent } from './brand/brand.component';
import { HerramientasComponent } from './herramientas/herramientas.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'guidelines', component: GuideComponent},
	{path: 'brand', component: BrandComponent},
	{path: 'herramientas', component: HerramientasComponent},
	{path: 'demo', component: DemoComponent}
	// { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
