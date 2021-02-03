import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGridComponent } from './users-grid/users-grid.component';
import { UserCardComponent } from './child-modules/user-card/user-card/user-card.component';
import { UserCardModule } from './child-modules/user-card/user-card.module';



@NgModule({
  declarations: [UsersGridComponent, UserCardComponent],
  imports: [
    CommonModule,
    UserCardModule
  ],
  exports: [UsersGridComponent, UserCardComponent]
})
export class GridModule { }
