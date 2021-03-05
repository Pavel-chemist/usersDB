import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './Modules/admin-access.guard';
import { AdminLoginShellComponent } from './Modules/admin/containers/admin-login-shell/admin-login-shell.component';
import { Page404Component } from './Modules/shared/components/page404/page404.component';
import { AddUserShellComponent } from './Modules/user/containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './Modules/user/containers/edit-user-shell/edit-user-shell.component';
import { UserListComponent } from './Modules/user/containers/user-list/user-list.component';

const routes: Routes = 
[
  { path: 'user-list', component: UserListComponent, canActivate: [AdminAccessGuard] },
  { path: 'add-user-form', component: AddUserShellComponent, canActivate: [AdminAccessGuard] },
  { path: 'edit-user/:id', component: EditUserShellComponent, canActivate: [AdminAccessGuard] },
  { path: 'admin-login', component: AdminLoginShellComponent},
  { path: '', redirectTo: '/admin-login', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
