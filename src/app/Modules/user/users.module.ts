import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../head/header/header.component';
import { UsersGridComponent } from '../users-grid/users-grid/users-grid.component';
import { GridControlsComponent } from '../grid-controls/grid-controls/grid-controls.component';
import { SharedCardModule } from '../shared-card/shared-card.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ HeaderComponent, UsersGridComponent, GridControlsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    SharedCardModule
  ],
  exports: [ HeaderComponent, UsersGridComponent, GridControlsComponent ]
})

export class UserModule { }
