import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guidelines/guidelines.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'guidelines', component: GuideComponent}
	// { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
