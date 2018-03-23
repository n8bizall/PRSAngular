import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AboutComponent } from './Support/about/about.component';


import { UserListComponent } from './Users/user-list/user-list.component';
import { UserDetailComponent } from './Users/user-detail/user-detail.component';
import { UserCreateComponent } from './Users/user-create/user-create.component';
import { UserEditComponent } from './Users/user-edit/user-edit.component';

import { UserService } from './Services/user.service';
import { HomeComponent } from './Support/home/home.component';
import { MenuComponent } from './Support/menu/menu.component';
import { MenuItemComponent } from './Support/menu/menu-item.component';

import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorService } from './services/vendor.service';





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
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
