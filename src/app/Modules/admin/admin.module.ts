import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginShellComponent } from './containers/admin-login-shell/admin-login-shell.component';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginCheckerService } from './services/login-checker.service';
import { AdminAccessGuard } from './admin-access.guard';
import { SignedAdminGuard } from './signed-admin.guard';
import { UnsavedChangesGuard } from './unsaved-changes.guard';



@NgModule({
	declarations:
	[ 
		AdminLoginShellComponent, 
		AdminLoginFormComponent 
	],
	imports: 
	[
		CommonModule,
		MatButtonModule,
        MatInputModule,
		ReactiveFormsModule
	],
	exports: [],
    providers: 
	[
		LoginCheckerService,
		AdminAccessGuard, 
		SignedAdminGuard,
		UnsavedChangesGuard
	]
})
export class AdminModule { }
