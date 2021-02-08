import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name = new FormControl('');

  public fullName = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }
  );

  public onSubmit()
  {
    console.log(this.name.value);
    console.log(`Full name is ${this.fullName.value.firstName} ${this.fullName.value.lastName}`);
  }

  /*
  export interface User {
    userId: number;
    name: {
        first: string;
        last: string;
    },
    age: number;
    isMale: boolean;
    company: string;
    department: string;
    photoUrl: string;
} 
*/



}
