import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from './shared-card/shared-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [SharedCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [SharedCardComponent]
})
export class SharedCardModule { }
