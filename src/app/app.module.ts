import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
//import { UserComponent } from './Users/user.component';
import { AboutComponent } from './Support/about/about.component';

import { UserListComponent } from './Users/user-list/user-list.component';
import { UserDetailComponent } from './Users/user-detail/user-detail.component';
import { UserCreateComponent } from './Users/user-create/user-create.component';
import { UserEditComponent } from './Users/user-edit/user-edit.component';

import { UserService } from './Services/user.service';
import { HomeComponent } from './Support/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
