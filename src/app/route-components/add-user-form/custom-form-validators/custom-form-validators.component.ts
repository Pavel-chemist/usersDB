import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { UserDataProviderService } from 'src/app/Modules/user/services/user-data-provider.service';

@Component({
  selector: 'app-custom-form-validators',
  templateUrl: './custom-form-validators.component.html',
  styleUrls: ['./custom-form-validators.component.css']
})
export class CustomFormValidatorsComponent implements OnInit {

  constructor(private service: UserDataProviderService) { }

  ngOnInit(): void {
  }

  public validateGmail (control: AbstractControl): ValidationErrors | null
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
  
    public validateUniqueEmail (control: AbstractControl): Observable<ValidationErrors | null>
    {
      console.log(`Validating email uniqueness`);
        return this.service.checkIfEmailIsUnique(control.value).pipe(map((result: boolean) => {
        console.log(`Result: "${result}"`);
        
        return result ? null : { uniqueMailError: true };
        }));
    }

}
