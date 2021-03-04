import { Component, OnInit, ViewChild } from '@angular/core';
import { AddUserFormComponent } from 'src/app/Modules/user/components/add-user-form/add-user-form.component';
import { AdminLoginFormComponent } from '../../components/admin-login-form/admin-login-form.component';
import { LoginCheckerService } from '../../services/login-checker.service';

@Component({
  selector: 'app-admin-login-shell',
  templateUrl: './admin-login-shell.component.html',
  styleUrls: ['./admin-login-shell.component.css']
})
export class AdminLoginShellComponent implements OnInit {

	@ViewChild(AdminLoginFormComponent) loginForm: AdminLoginFormComponent;

	public formValue: { login: string; password: string; };

	constructor( private service: LoginCheckerService ) { }

	ngOnInit(): void {	}

	public onLogin()
	{
		console.log(`Submitting login and password info`);
		this.formValue = this.loginForm.loginFields.value;
		console.log(this.formValue);
		let call: boolean = this.service.checkCredentials(this.formValue);
		if ( call )
		{
			console.log("creds are checked");
		}
	}

}
