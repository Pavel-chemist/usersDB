import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomValidatorsService } from 'src/app/Modules/user/services/custom-validators.service';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';


@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent implements OnInit 
{
  	constructor( private cValidators: CustomValidatorsService, private dataProvider: UserDataProviderService) { }

  	ngOnInit(): void {
  	}

	ngAfterViewInit(): void {
        console.log(`form: `, this.AddUser);
    }

	public PersonalInfo: FormGroup; // <-- use viewChild

  	public AddUser: FormGroup = new FormGroup(
    {
        age: new FormControl('', [Validators.required, Validators.min(5), Validators.max(120)]),
        isMale: new FormControl('', Validators.required),
        company: new FormControl(''),
        department: new FormControl(''),
        photoUrl: new FormControl(''),
        email: new FormControl('',   // <-- default form value
            [  //synchronous validators:
                Validators.required,
                Validators.email,
                this.cValidators.validateGmail,
                // this.customValidators.validateGmail
            ],
            [  //asynchronous validators:
                this.validateUniqueEmail.bind(this)
            ]
        )
    });

    private validateUniqueEmail(control: AbstractControl): Observable<ValidationErrors | null> 
    {
        console.log(`Validating email uniqueness`);
        console.log(`service: `, this.dataProvider );

        return this.dataProvider.checkIfEmailIsUnique(control.value)
            .pipe(
                map((result: boolean) => 
              {
                    console.log(`Result: "${result}"`);
                    return result ? null : { uniqueMailError: true };
                })
            );
    }
}
