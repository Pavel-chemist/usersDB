import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './Modules/user/user.module';
import { SharedModule } from './Modules/shared/shared.module';

import { UserListComponent } from './route-components/user-list/user-list.component';
import { AddUserFormComponent } from './route-components/add-user-form/add-user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
//  internal feature modules:
    UserModule,     
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
