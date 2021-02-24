import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-pi-fields',
  templateUrl: './user-pi-fields.component.html',
  styleUrls: ['./user-pi-fields.component.css']
})
export class UserPIFieldsComponent implements OnInit {

	@Input() parentForm: FormGroup;
	

	public PersonalInfo: FormGroup = new FormGroup(
    	{
    		first: new FormControl('', Validators.required),
      		last: new FormControl('', Validators.required)
    	}
	);

  	constructor() { }

	ngOnInit(): void 
	{
		this.parentForm.addControl('personalNameInfo', this.PersonalInfo);
	}

  	

	

}
