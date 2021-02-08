import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  public newUser: User =
  {
    userId: 0,
    name: {
        first: '',
        last: ''
    },
    age: 0,
    isMale: true,
    company: '',
    department: '',
    photoUrl: ''
  };

  constructor() { }

  ngOnInit(): void {
  }


public AddUser = new FormGroup(
  {
    name: new FormGroup(
      {
        first: new FormControl('', Validators.required ),
        last: new FormControl('', Validators.required)
      }),
    age: new FormControl('', [Validators.required, Validators.min(5), Validators.max(120)]),
    isMale: new FormControl('', Validators.required ),
    company: new FormControl(''),
    department: new FormControl(''),
    photoUrl: new FormControl('')
  });

  public onSubmit()
  {
    this.newUser =
    {
      userId: 0,
      name: {
          first: this.AddUser.value.name.first,
          last: this.AddUser.value.name.last
      },
      age: this.AddUser.value.age,
      isMale: this.AddUser.value.isMale,
      company:  this.AddUser.value.company ? this.AddUser.value.company : 'none',
      department: this.AddUser.value.department ? this.AddUser.value.department: 'none',
      photoUrl: this.AddUser.value.photoUrl ? this.AddUser.value.photoUrl : 'assets/placeholder.jpg'
    }
    
    console.log(this.newUser);
  }

}
