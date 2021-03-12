import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNameResolver } from './Modules/admin/admin-name.resolver';
import { AdminLoginShellComponent } from './Modules/admin/containers/admin-login-shell/admin-login-shell.component';
import { SignedAdminGuard } from './Modules/admin/signed-admin.guard';
import { CitiesComponent } from './Modules/misc/components/cities/cities.component';
import { Page404Component } from './Modules/shared/components/page404/page404.component';

const routes: Routes = 
[
	{ 
		path: 'admin-login', 
		component: AdminLoginShellComponent,  
		canActivate: [SignedAdminGuard]
	},
	{
		path: 'auth-shell',
		loadChildren: () => import('./Modules/user/user-routing.module').then(m => m.UserRoutingModule)
	},
	{
		path: 'cities',
		component: CitiesComponent
	},
	{ path: '', redirectTo: '/admin-login', pathMatch: 'full' },
	{ path: '**', component: Page404Component }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [ AdminNameResolver ]
})

export class AppRoutingModule { }
