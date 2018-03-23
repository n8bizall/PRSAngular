import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Support/home/home.component';
import { AboutComponent } from './Support/about/about.component';
import { UserListComponent } from './Users/user-list/user-list.component';
import { UserDetailComponent } from './Users/user-detail/user-detail.component';
import { UserEditComponent } from './Users/user-edit/user-edit.component';
import { UserCreateComponent } from './Users/user-create/user-create.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/list', component: UserListComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
