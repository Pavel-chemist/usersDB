import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';
import { UserDataProviderService } from '../../services/user-data-provider.service';

@Component({
	selector: 'app-edit-user-shell',
	templateUrl: './edit-user-shell.component.html',
	styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {

	@ViewChild(AddUserFormComponent) form: AddUserFormComponent;
	
	public user: User;

	constructor(
		private route: ActivatedRoute,
		private service: UserDataProviderService,
        private _snackBar: MatSnackBar,
        private router: Router
	) { }

	ngOnInit(): void {
		const userId = this.route.snapshot.params.id;
		this.service.getSingleUser(userId)		//calling method in service
			.pipe(take(1))						//only once
			.subscribe(data => {				//as service returns an observable, subscribe to it
				this.user = data;				//after receiving response, initiate this.user
				console.log('User', data);
			});
	}

	public onSubmit(): void {
		console.log(`"Save Edits" button was clicked`);
		console.log(this.form.AddUser);

		const formValue: any = this.form.AddUser.value;
        if (this.form.AddUser.valid) 
        {
            this.user =
            {
                userId: this.user.userId, //here, Id should remain the same throughout
                name: {
                    first: formValue.personalNameInfo.first,
                    last: formValue.personalNameInfo.last
                },
                age: Number.parseInt(formValue.age),
                isMale: formValue.isMale === "male",    //return boolean values instead of "male" and "female" strings
                company: formValue.company ? formValue.company : 'none',
                department: formValue.department ? formValue.department : 'none',
                photoUrl: formValue.photoUrl ? formValue.photoUrl : this.user.photoUrl, //this way old photo persists when no new one is uploaded
                email: formValue.email
            }

			


            console.log(this.user);
            let timeStart: number = Date.now();
            console.log(`${Date.now() - timeStart}: Sending new user data to server.`);

		//	this.service.updateUser(this.user);

            this.service.updateUser(this.user).subscribe(() => {
                //show snack-bar
                console.log(`${Date.now() - timeStart}: got acknowledgement from server.`);
                this._snackBar.open(`User ${this.user.name.first} ${this.user.name.last} have been updated`,
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

	}

}
