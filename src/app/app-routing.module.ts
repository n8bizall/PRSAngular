import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './Support/home/home.component';
import { AboutComponent } from './Support/about/about.component';
import { UserListComponent } from './Users/user-list/user-list.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'users/list', component: UserListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
