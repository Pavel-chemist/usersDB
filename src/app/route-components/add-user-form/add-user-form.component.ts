import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';

@Component({
    selector: 'app-add-user-form',
    templateUrl: './add-user-form.component.html',
    styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

    public newUser: User;

    constructor(service: UserDataProviderService) 
    { 
      service.addNewUser(this.newUser);
    }

    ngOnInit(): void 
    { 
      
    }

    public AddUser = new FormGroup(
        {
            name: new FormGroup(
                {
                    first: new FormControl('', Validators.required),
                    last: new FormControl('', Validators.required)
                }),
            age: new FormControl('', [Validators.required, Validators.min(5), Validators.max(120)]),
            isMale: new FormControl('', Validators.required),
            company: new FormControl(''),
            department: new FormControl(''),
            photoUrl: new FormControl(''),
            email: new FormControl('')
        });

    public onSubmit() 
    {
        this.newUser =
        {
            userId: Date.now(), //creates a kind of unique id
            name: {
                first: this.AddUser.value.name.first,
                last: this.AddUser.value.name.last
            },
            age: Number.parseInt(this.AddUser.value.age),
            isMale: this.AddUser.value.isMale,
            company: this.AddUser.value.company ? this.AddUser.value.company : 'none',
            department: this.AddUser.value.department ? this.AddUser.value.department : 'none',
            photoUrl: this.AddUser.value.photoUrl ? this.AddUser.value.photoUrl : 'assets/placeholder.jpg',
            email: this.AddUser.value.email
        }

        console.log(this.newUser);

        
        
    }


}