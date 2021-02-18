import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-user-form',
    templateUrl: './add-user-form.component.html',
    styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

    public newUser: User;

    constructor(private service: UserDataProviderService, 
                private _snackBar: MatSnackBar,
                private router: Router,
                // private customValidators: AddUserFormValidationsComponent 
                ) 
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
            email: new FormControl( 
              '',   // <-- default form value
              [  //synchronous validators:
                Validators.required,
                Validators.email, 
                this.validateGmail, 
                // this.customValidators.validateGmail
              ],
              [  //asynchronous validators:
                this.validateUniqueEmail.bind(this)
              ]
            )
        });

    public onSubmit() 
    {
      const formValue: any = this.AddUser.value;
      if ( this.AddUser.valid )
      {
        this.newUser =
        {
            userId: Date.now(), //creates a kind of unique id
            name: {
                first: formValue.name.first,
                last: formValue.name.last
            },
            age: Number.parseInt(formValue.age),
            isMale: formValue.isMale,
            company: formValue.company ? formValue.company : 'none',
            department: formValue.department ? formValue.department : 'none',
            photoUrl: formValue.photoUrl ? formValue.photoUrl : 'assets/user-photos/default.png',
            email: formValue.email
        }

        console.log(this.newUser);
        let timeStart: number = Date.now();
        console.log(`${Date.now() - timeStart}: Sending new user data to server.`);

        this.service.addNewUser(this.newUser).subscribe(() => {
          //
          //show snack-bar
          console.log(`${Date.now() - timeStart}: got acknowledgement from server.`);
          this._snackBar.open(`User ${this.newUser.name.first} ${this.newUser.name.last} is added to the list`, 
                            "Dismiss", { duration: 3000, horizontalPosition: 'right', 
                            verticalPosition: 'top' });
          setTimeout( () => {
             //
            // wait 3 seconds
            //
            // redirect to the list of users
            console.log(`${Date.now() - timeStart}: Navigating to the List of users.`);
            this.router.navigate(['/user-list']);
          }, 3000);
          
        });

      }
      else
      {
        console.log("The form is invalid, please fill required fields.");
        this.AddUser.markAllAsTouched();
      }

      console.log(this.AddUser.controls.email.errors);
      // console.log(this.AddUser.controls);
    }


    //
    private validateGmail (control: AbstractControl): ValidationErrors | null
    {
        let endOfLine: string = control.value.slice(-10);
        let error: boolean = !(endOfLine === '@gmail.com');
        // console.log(`validating mail domain: ${endOfLine}, error status: ${error}`);
       
        if ( error )
        {
          return { gmailError: error };//returns only if true
        }
        else
        {
          return null;
        }
    }
  
    private validateUniqueEmail (control: AbstractControl): Observable<ValidationErrors | null>
    {
      console.log(`Validating email uniqueness`);
        return this.service.checkIfEmailIsUnique(control.value).pipe(map((result: boolean) => {
        console.log(`Result: "${result}"`);
        
        return result ? null : { uniqueMailError: true };
        }));
    }

}
