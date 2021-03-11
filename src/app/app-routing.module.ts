import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './Modules/admin/admin-access.guard';
import { AdminNameResolver } from './Modules/admin/admin-name.resolver';
import { AuthUserShellComponent } from './Modules/admin/containers/auth-user-shell/auth-user-shell.component';
import { AdminLoginShellComponent } from './Modules/admin/containers/admin-login-shell/admin-login-shell.component';
import { SignedAdminGuard } from './Modules/admin/signed-admin.guard';
import { UnsavedChangesGuard } from './Modules/admin/unsaved-changes.guard';
import { Page404Component } from './Modules/shared/components/page404/page404.component';
import { AddUserShellComponent } from './Modules/user/containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './Modules/user/containers/edit-user-shell/edit-user-shell.component';
import { UserListComponent } from './Modules/user/containers/user-list/user-list.component';

const routes: Routes = 
[
	{ 
		path: 'admin-login', 
		component: AdminLoginShellComponent,  
		canActivate: [SignedAdminGuard]
	},
	{ 
		path: 'user', 
		component: AuthUserShellComponent,  
		canActivate: [AdminAccessGuard],
		resolve: { adminNickName: AdminNameResolver },
		children:
		[
			{ path: '', redirectTo: 'user-list',  pathMatch: 'full'},
			{ path: 'user-list', component: UserListComponent },
			{ path: 'add-user-form', component: AddUserShellComponent },
			{ path: 'edit-user/:id', component: EditUserShellComponent, canDeactivate: [UnsavedChangesGuard] }
		]
	},
	/* { path: 'user-list', component: UserListComponent, canActivate: [AdminAccessGuard], resolve: { adminNickName: AdminNameResolver } },
	{ path: 'add-user-form', component: AddUserShellComponent, canActivate: [AdminAccessGuard] },
	{ path: 'edit-user/:id', component: EditUserShellComponent, canActivate: [AdminAccessGuard], canDeactivate: [UnsavedChangesGuard] },   */
	{ path: '', redirectTo: '/admin-login', pathMatch: 'full' },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [ AdminNameResolver ]
})

export class AppRoutingModule { }
