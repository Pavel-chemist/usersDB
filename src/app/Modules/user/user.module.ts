import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { GridControlsComponent } from './components/grid-controls/grid-controls.component';
import { SharedModule } from '../shared/shared.module';
import { UserDataProviderService } from './services/user-data-provider.service';
import { MatButtonModule } from '@angular/material/button';
import { CustomValidatorsService } from './services/custom-validators.service';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { UserRouterModule } from './user-router.module';



@NgModule({
    declarations: [
        HeaderComponent,
        UsersGridComponent,
        GridControlsComponent,
        AddUserShellComponent,
        AddUserFormComponent,
        EditUserShellComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatButtonModule,
        MatInputModule,
        MatRadioModule,
        ReactiveFormsModule,
        UserRouterModule
    ],
    exports: [
        HeaderComponent,
        UsersGridComponent,
        GridControlsComponent,
        AddUserShellComponent,
        AddUserFormComponent,
        UserRouterModule
    ],
    providers: [UserDataProviderService, CustomValidatorsService]
})

export class UserModule { }
