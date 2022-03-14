import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  private URL = environment.api;

  public payload = null;

  private _showModal$ = new BehaviorSubject<boolean>(false);
  public showModal$ = this. _showModal$.asObservable();

  private _itemsFormGroup$ = new BehaviorSubject(null);
  public itemsFormGroup$ = this._itemsFormGroup$.asObservable()
  
  constructor(private httpClient:HttpClient) { }

  public setShow(flag:boolean, payload?:any){
    this.payload=payload;
    this._showModal$.next(flag)
  }

  public setFormGroup(data:any):void{
    this._itemsFormGroup$.next(data)
  }

  public saveTask(body:any){
    return this.httpClient.post(
      `${this.URL}/task/${this.payload}`,
      body
      )
  }
}
