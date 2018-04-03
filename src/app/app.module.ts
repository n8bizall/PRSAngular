import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './Support/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './Support/_gaurds/auth.gaurd';
import { JwtInterceptor } from './Support/_helpers/jwt.interceptor';
import { AlertService } from './services/alert.service';



import { AppComponent } from './app.component';
import { AboutComponent } from './Support/about/about.component';



import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

import { UserService } from './services/user.service';
import { HomeComponent } from './Support/home/home.component';
import { MenuComponent } from './Support/menu/menu.component';
import { MenuItemComponent } from './Support/menu/menu-item.component';

import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorService } from './services/vendor.service';

import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { PurchaserequestCreateComponent } from './purchaserequests/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestEditComponent } from './purchaserequests/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestDetailComponent } from './purchaserequests/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestListComponent } from './purchaserequests/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestService } from './services/purchaserequest.service';
import { PurchaseRequestLineItemService } from './services/purchaserequestlineitem.service';

import { PrliEditComponent } from './lineitems/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './lineitems/prli-detail/prli-detail.component';
import { PrliCreateComponent } from './lineitems/prli-create/prli-create.component';
import { PrliListComponent } from './lineitems/prli-list/prli-list.component';
import { PurchaseRequestEditLinesComponent } from './purchaserequests/purchaserequest-editlines/purchaserequest-editlines.component';
import { PurchaserequestReviewlistComponent } from './purchaserequests/purchaserequest-reviewlist/purchaserequest-reviewlist.component';
import { PurchaserequestReviewactionComponent } from './purchaserequests/purchaserequest-reviewaction/purchaserequest-reviewaction.component';
import { AuthenticationService } from './services/authentification.service';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PurchaserequestCreateComponent,
    PurchaserequestEditComponent,
    PurchaserequestDetailComponent,
    PurchaserequestListComponent,
    PrliEditComponent,
    PrliDetailComponent,
    PrliCreateComponent,
    PrliListComponent,
    PurchaseRequestEditLinesComponent,
    PurchaserequestReviewlistComponent,
    PurchaserequestReviewactionComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard,   AlertService,
    AuthenticationService, UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  }, VendorService, ProductService, PurchaseRequestService, PurchaseRequestLineItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
