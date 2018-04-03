import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Support/home/home.component';
import { AboutComponent } from './Support/about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Support/_gaurds/auth.gaurd';

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

import { PurchaserequestCreateComponent } from './purchaserequests/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestDetailComponent } from './purchaserequests/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestListComponent } from './purchaserequests/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestEditComponent } from './purchaserequests/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestEditLinesComponent } from './purchaserequests/purchaserequest-editlines/purchaserequest-editlines.component';
import { PurchaserequestReviewlistComponent } from './purchaserequests/purchaserequest-reviewlist/purchaserequest-reviewlist.component';
import { PurchaserequestReviewactionComponent } from './purchaserequests/purchaserequest-reviewaction/purchaserequest-reviewaction.component';



import { PrliCreateComponent } from './lineitems/prli-create/prli-create.component';
import { PrliEditComponent } from './lineitems/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './lineitems/prli-detail/prli-detail.component';
import { PrliListComponent } from './lineitems/prli-list/prli-list.component';





const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['admin'], redirectTo: 'login' }}},

  // otherwise redirect to home

  {path: 'users/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['review', 'admin'], redirectTo: 'login' }}},
  {path: 'vendors/detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['review', 'admin'], redirectTo: 'login' }} },
  {path: 'products/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['review', 'admin'], redirectTo: 'login' }}},
  {path: 'purchaserequests/detail/:id', component: PurchaserequestDetailComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['review', 'admin'], redirectTo: 'login' }}},
  {path: 'purchaserequestlineitems/detail/:rid/:id', component: PrliDetailComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['review', 'admin'], redirectTo: 'login' }}},

  {path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  {path: 'vendors/edit/:id', component: VendorEditComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  {path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }} },
  {path: 'purchaserequestlineitems/edit/:rid/:id', component: PrliEditComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }} },
  {path: 'purchaserequests/edit/:id', component: PurchaserequestEditComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' } }},

  {path: 'users/list', component: UserListComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  {path: 'vendors/list', component: VendorListComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }} },
  {path: 'products/list', component: ProductListComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' } }},
  {path: 'purchaserequests/list', component: PurchaserequestListComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }} },
  {path: 'purchaserequestlineitems/list/:id', component: PrliListComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' } }},
  {path: 'purchaserequests/editlines/:id', component: PurchaseRequestEditLinesComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' } } },

  {path: 'vendors/create', component: VendorCreateComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' } }},
  {path: 'users/create', component: UserCreateComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['admin'], redirectTo: 'login' }}},
  {path: 'products/create', component: ProductCreateComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  {path: 'purchaserequests/create', component: PurchaserequestCreateComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  {path: 'purchaserequestlineitems/create/:id', component: PrliCreateComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' } }},

  {path: 'purchaserequests/reviewlist', component: PurchaserequestReviewlistComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: [ 'review', 'admin'], redirectTo: 'login' }}},
  {path: 'purchaserequests/reviewaction/:id', component: PurchaserequestReviewactionComponent, canActivate: [AuthGuard] ,
   data: { permission: {  only: ['review', 'admin'], redirectTo: 'login' }}},


  {path: 'home', component: HomeComponent, canActivate: [AuthGuard],  data: { permission: {
    only: ['user', 'review', 'admin'] }}},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  {path: '**', component: HomeComponent, canActivate: [AuthGuard] ,  data: { permission: {
    only: ['user', 'review', 'admin'], redirectTo: 'login' }}},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
