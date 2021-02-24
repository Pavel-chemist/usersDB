import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { UserPIFieldsComponent } from './components/user-pi/user-pi-fields.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CardComponent, UserPIFieldsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [CardComponent, UserPIFieldsComponent]
})
export class SharedModule { }
