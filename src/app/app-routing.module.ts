import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserFormComponent } from './route-components/add-user-form/add-user-form.component';
import { UserListComponent } from './route-components/user-list/user-list.component';

const routes: Routes = 
[
  { path: 'user-list', component: UserListComponent },
  { path: 'add-user-form', component: AddUserFormComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
