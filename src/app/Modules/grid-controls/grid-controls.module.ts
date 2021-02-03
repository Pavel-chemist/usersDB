import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridControlsComponent } from './grid-controls/grid-controls.component';



@NgModule({
  declarations: [GridControlsComponent],
  imports: [
    CommonModule
  ],
  exports: [GridControlsComponent]
})
export class GridControlsModule { }
