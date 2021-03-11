import { Component, OnInit, ViewChild } from '@angular/core';
import { Creds } from '../../admin.interface';
import { AdminLoginFormComponent } from '../../components/admin-login-form/admin-login-form.component';
import { LoginCheckerService } from '../../services/login-checker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-shell',
  templateUrl: './admin-login-shell.component.html',
  styleUrls: ['./admin-login-shell.component.css']
})
export class AdminLoginShellComponent implements OnInit {

	@ViewChild(AdminLoginFormComponent) loginForm: AdminLoginFormComponent;

	public formValue: Creds;
	

	constructor( private service: LoginCheckerService,
				private router: Router ) { }

	ngOnInit(): void { }

	public onLogin()
	{
		
		console.log('The form status: ', this.loginForm.loginFields.status);
		if ( this.loginForm.loginFields.status === 'VALID')
		{
			console.log(`Submitting login and password info`);
			this.formValue = this.loginForm.loginFields.value;
			console.log(this.formValue);
			// let call: boolean = this.service.checkCredentials(this.formValue);

			this.service.checkCredentials(this.formValue).subscribe(( isFound: boolean ) =>
			{
				console.log('test', isFound );
				if ( isFound )
				{
					console.log("creds are good");
					this.loginForm.invalidCredentials = false;
					//route to the list of users
					this.router.navigate(['/auth-shell']);

				}
				else
				{
					console.log("no such admin found");
					// this.loginForm.loginFields.markAllAsTouched();
					this.loginForm.invalidCredentials = true;
					this.loginForm.loginFields.patchValue( { password: ''});
				}
			});	
		}
		else
		{
			this.loginForm.loginFields.patchValue( { password: ''});
			this.loginForm.loginFields.markAllAsTouched();
		}
	}



}
