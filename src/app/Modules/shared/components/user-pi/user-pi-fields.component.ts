import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-pi-fields',
  templateUrl: './user-pi-fields.component.html',
  styleUrls: ['./user-pi-fields.component.css']
})
export class UserPIFieldsComponent implements OnInit {

  	constructor() { }

	ngOnInit(): void {
	}

  	public PersonalInfo: FormGroup = new FormGroup(
    	{
    		first: new FormControl('', Validators.required),
      		last: new FormControl('', Validators.required)
    	}
	);

}
