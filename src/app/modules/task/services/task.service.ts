import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  getTask(): Observable<any> {
    return this.httpClient.get(
      '${this.URL}/task'
    ).pipe(
      catchError(()=> {
        console.log('Algo Ocurrio?? fijate')
        return of([])
      })
    )
  }

}
