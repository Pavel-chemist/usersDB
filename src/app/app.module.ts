import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './Modules/user/user.module';
import { SharedModule } from './Modules/shared/shared.module';

import { UserListComponent } from './Modules/user/containers/user-list/user-list.component';
import { AddUserFormComponent } from './route-components/add-user-form/add-user-form.component';
import { ShownFormFieldsComponent } from './route-components/add-user-form/shown-form-fields/shown-form-fields.component';
import { UserPIFieldsComponent } from './route-components/add-user-form/shown-form-fields/user-pi/user-pi-fields.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserFormComponent,
    ShownFormFieldsComponent,
    UserPIFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
//  internal feature modules:
    UserModule,     
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
