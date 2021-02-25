import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './Modules/shared/components/page404/page404.component';
import { AddUserShellComponent } from './Modules/user/containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './Modules/user/containers/edit-user-shell/edit-user-shell.component';
import { UserListComponent } from './Modules/user/containers/user-list/user-list.component';

const routes: Routes = 
[
  { path: 'user-list', component: UserListComponent },
  { path: 'add-user-form', component: AddUserShellComponent },
  { path: 'edit-user', component: EditUserShellComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
