import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-admin-login-form',
	templateUrl: './admin-login-form.component.html',
	styleUrls: ['./admin-login-form.component.css']
})
export class AdminLoginFormComponent implements OnInit {

	public invalidCredentials: boolean;

	constructor() { }

	ngOnInit(): void {
	}

	public loginFields: FormGroup = new FormGroup(
		{
			login: new FormControl('', [Validators.required] ),
			password: new FormControl('', [Validators.required] )
		}
	);

}
