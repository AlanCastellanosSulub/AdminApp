import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import {Observable, of } from 'rxjs';
import {map,delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {

  constructor() { }

  uniqueEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      //test@test.com
      return of(control.value)
        .pipe(
          delay(1500),
          map((email) => {
            const emails = ['test@test.com', 'hola@gmail.com'];
            return emails.includes(email);//TODO true | false
          })
        ).pipe(
          map((exists) => (exists ? { emailExists: true } : null))
        );
    };
  }

}


