import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';

const usersRoutes: Routes =
[
	{ path: 'edit-user/:id', component: EditUserShellComponent }
]



@NgModule(
{
	declarations: [],
	imports: 
	[
		RouterModule.forChild(usersRoutes)
	],
	exports:
	[
		RouterModule
	]
})
export class UserRouterModule { }
