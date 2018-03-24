import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Support/home/home.component';
import { AboutComponent } from './Support/about/about.component';

import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';

import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';




const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'products/detail/:id', component: ProductDetailComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'users/list', component: UserListComponent},
  {path: 'vendors/list', component: VendorListComponent},
  {path: 'products/list', component: ProductListComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'products/create', component: ProductDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
