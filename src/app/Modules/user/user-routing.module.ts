import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './containers/user-list/user-list.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { UnsavedChangesGuard } from '../admin/unsaved-changes.guard';
import { AdminAccessGuard } from '../admin/admin-access.guard';
import { AdminNameResolver } from '../admin/admin-name.resolver';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { AuthUserShellComponent } from '../admin/containers/auth-user-shell/auth-user-shell.component';


const routes: Routes = 
[
	{
		path: '', redirectTo: 'user', pathMatch: 'prefix'
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
	}
]

@NgModule(
	{
		declarations: [],
		imports: 
		[
			RouterModule.forChild(routes)
		],
		exports: [RouterModule]
	})

export class UserRoutingModule { }
