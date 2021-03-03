import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/Modules/shared/Interfaces/user.interface';
import { CustomValidatorsService } from 'src/app/Modules/user/services/custom-validators.service';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent implements OnInit 
{
    @Input() user: User;
  	
    

    constructor( private cValidators: CustomValidatorsService, private dataProvider: UserDataProviderService) { }

  	ngOnInit(): void {
        console.log('1: Init User', this.user);
  	}

    ngOnChanges(): void 
    {
        console.log( '3: user data is fetched:' );
        console.log('4: user data:', this.user);
        if ( this.user != undefined )
        {
            let intermediateUserObject: any =
            {
                age: this.user.age,
                isMale: this.user.isMale ? "male" : "female",
                company: this.user.company,
                department: this.user.department,
                photoUrl: '',
                email: this.user.email,
                personalNameInfo:
                {
                    first: this.user.name.first,
                    last: this.user.name.last
                }
            }
            this.AddUser.patchValue(intermediateUserObject);
            console.log(`5: Form after value patching:`, this.AddUser);
        }
    }

	ngAfterViewInit(): void { }

	

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
                this.cValidators.validateGmail
            ],
            [  //asynchronous validators:
                this.validateUniqueEmail.bind(this)
                // this.cValidators.validateUniqueEmail.bind(this)
            ]
        )
    });

    private validateUniqueEmail(control: AbstractControl): Observable<ValidationErrors | null> 
    {
        /* console.log(`Validating email uniqueness`);
        console.log(`service: `, this.dataProvider );  */

        return this.dataProvider.checkIfEmailIsUnique(control.value)
            .pipe(
                map((result: boolean) => 
              {
                    // console.log(`Result: "${result}"`);
                    return result ? null : { uniqueMailError: true };
                })
            );
    }
}
