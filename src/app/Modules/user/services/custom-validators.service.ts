import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
/* import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDataProviderService } from './user-data-provider.service'; */

@Injectable({
  providedIn: 'root'
})

export class CustomValidatorsService {

    constructor(/* private service: UserDataProviderService */) { }

    public validateGmail(control: AbstractControl): ValidationErrors | null {
        let endOfLine: string = control.value.slice(-10);
        let error: boolean = !(endOfLine === '@gmail.com');

        if (error) 
        {
            return { gmailError: error };//returns only if true
        }
        else 
        {
            return null;
        }
    }

    /* public validateUniqueEmail(control: AbstractControl): Observable<ValidationErrors | null> 
    {
        console.log(`Validating email uniqueness`);
        console.log(`service: `, this.service );

        return this.service.checkIfEmailIsUnique(control.value)
            .pipe(
                map((result: boolean) => 
              {
                    console.log(`Result: "${result}"`);
                    return result ? null : { uniqueMailError: true };
                })
            );
    } */

}
