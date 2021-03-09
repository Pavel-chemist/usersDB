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

	ngOnInit(): void 
	{
		this.autoRouteWhenSigned();
	}

	public onLogin()
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
				this.router.navigate(['/user-list']);

			}
			else
			{
				console.log("no such admin found");
				this.loginForm.loginFields.markAllAsTouched();
				this.loginForm.invalidCredentials = true;
				this.loginForm.loginFields.patchValue( { password: ''});
			}
		});		
	}

	private autoRouteWhenSigned() : void
	{
		let storedAdminInfo: { adminId: number; };
	
		if ( localStorage['signedAdmin'] )
		{
			storedAdminInfo = JSON.parse(localStorage['signedAdmin']);
			console.log(`Admin with id=${storedAdminInfo.adminId} is already signed in on this machine.`);
			this.router.navigate(['/user-list']);
		}		
	}

}
