import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserShellComponent } from './Modules/user/containers/add-user-shell/add-user-shell.component';
import { UserListComponent } from './Modules/user/containers/user-list/user-list.component';

const routes: Routes = 
[
  { path: 'user-list', component: UserListComponent },
  { path: 'add-user-form', component: AddUserShellComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
