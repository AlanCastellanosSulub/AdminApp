import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewTaskService {

  private _showModal$ = new BehaviorSubject<boolean>(false);
  public showModal$ = this. _showModal$.asObservable();

  private _itemsFormGroup$ = new BehaviorSubject(null);
  public itemsFormGroup$ = this._itemsFormGroup$.asObservable()
  
  constructor() { }

  public setShow(flag:boolean, payload?:any){
    this._showModal$.next(flag)
  }

  public setFormGroup(data:any):void{
    this._itemsFormGroup$.next(data)
  }
}
