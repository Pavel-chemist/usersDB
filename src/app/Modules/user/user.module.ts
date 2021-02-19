import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { GridControlsComponent } from './components/grid-controls/grid-controls.component';
import { SharedModule } from '../shared/shared.module';
import { UserDataProviderService } from './services/user-data-provider.service';
import { MatButtonModule } from '@angular/material/button';
import { CustomValidatorsService } from './services/custom-validators.service';



@NgModule({
    declarations: [
        HeaderComponent,
        UsersGridComponent,
        GridControlsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatButtonModule
    ],
    exports: [
        HeaderComponent,
        UsersGridComponent,
        GridControlsComponent
    ],
    providers: [UserDataProviderService, CustomValidatorsService]
})

export class UserModule { }
