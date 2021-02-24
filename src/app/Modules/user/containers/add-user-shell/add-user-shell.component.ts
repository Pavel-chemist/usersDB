import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';

@Component({
    selector: 'app-add-user-shell',
    templateUrl: './add-user-shell.component.html',
    styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent implements OnInit {

    @ViewChild(AddUserFormComponent) form: AddUserFormComponent;

    public newUser: User;

    constructor(private service: UserDataProviderService,
        private _snackBar: MatSnackBar,
        private router: Router) { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        // 
    }


    public onSubmit() {
        console.log(this.form.AddUser.value);
		const formValue: any = this.form.AddUser.value;
        if (this.form.AddUser.valid) {
            this.newUser =
            {
                userId: Date.now(), //creates a kind of unique id
                name: {
                    first: formValue.personalNameInfo.first,
                    last: formValue.personalNameInfo.last
                },
                age: Number.parseInt(formValue.age),
                isMale: formValue.isMale === "true",    //return boolean values instead of "true" and "false" strings
                company: formValue.company ? formValue.company : 'none',
                department: formValue.department ? formValue.department : 'none',
                photoUrl: formValue.photoUrl ? formValue.photoUrl : 'assets/user-photos/default.png',
                email: formValue.email
            }

			


            console.log(this.newUser);
            let timeStart: number = Date.now();
            console.log(`${Date.now() - timeStart}: Sending new user data to server.`);

            this.service.addNewUser(this.newUser).subscribe(() => {
                //show snack-bar
                console.log(`${Date.now() - timeStart}: got acknowledgement from server.`);
                this._snackBar.open(`User ${this.newUser.name.first} ${this.newUser.name.last} is added to the list`,
                    "Dismiss", {
                    duration: 3000, horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
                setTimeout(() => { 	
					// wait 3 seconds, and redirect to the list of users
                    console.log(`${Date.now() - timeStart}: Navigating to the List of users.`);
                    this.router.navigate(['/user-list']);
                }, 3000);

            });

        }
        else {
            console.log("The form is invalid, please fill required fields.");
            this.form.AddUser.markAllAsTouched();
        }

        console.log(this.form.AddUser.controls.email.errors);
        // console.log(this.form.AddUser.controls);
		
    }


    

}
