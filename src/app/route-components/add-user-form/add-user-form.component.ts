import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-user-form',
    templateUrl: './add-user-form.component.html',
    styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

    public newUser: User;

    constructor(private service: UserDataProviderService, private _snackBar: MatSnackBar) 
    { 
      // service.addNewUser(this.newUser);
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
            email: new FormControl( '', 
                                    [ Validators.required, 
                                      Validators.email, 
                                      this.validateGmail, 
                                      // this.validateUniqueEmail 
                                    ] )
        });

    public onSubmit() 
    {
      if ( this.AddUser.valid )
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
            photoUrl: this.AddUser.value.photoUrl ? this.AddUser.value.photoUrl : 'assets/user-photos/default.png',
            email: this.AddUser.value.email
        }

      console.log(this.newUser);
      this.service.addNewUser(this.newUser);
      //
      //show snack-bar
      // openSnackBar("qwer");
      this._snackBar.open("User is added to the list", "Dismiss", { duration: 5000, horizontalPosition: 'right', verticalPosition: 'top' });
      //
      // wait 3 seconds
      setTimeout( () => {
        //
        // redirect to the list of users
        console.log(`${this.newUser.name.first} ${this.newUser.name.last} was added to list.`); 
        location.assign("/user-list");
      }, 3000);

      

      }
      else
      {
        console.log("The form is invalid, please fill required fields.");
      }

      console.log(this.AddUser.controls.email.errors);
    }


    //
    private validateGmail (control: AbstractControl): ValidationErrors | null
    {
        let endOfLine: string = control.value.slice(-10);
        let error: boolean = !(endOfLine === '@gmail.com');
        // console.log(`validating mail domin: ${endOfLine}, error status: ${error}`);
       
        if ( error )
        {
          return { gmailError: error };//returns only if true
        }
        else
        {
          return null;
        }
    }
  /*  
    private validateUniqueEmail (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
    {
        let emailAddress: string = control.value;

        let error: boolean = this.service.checkIfEmailIsUnique(emailAddress);
              
        if ( error )
        {
          return { uniqueMailError: error };//returns only if true
        }
        else
        {
          return null;
        }
    }
*/
}
