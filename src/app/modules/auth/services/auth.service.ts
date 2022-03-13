import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  submitLogin(credentials:{email:string,password:string}): Observable<any> {
    return this.httpClient.post('${this.URL}/auth/login',credentials)
  }

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


