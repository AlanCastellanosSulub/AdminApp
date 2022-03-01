import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, 
  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie:string |null=null //Todo aqui consultaremos la cookie al navegador

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.CheckCookie();
  }

  private CheckCookie():boolean{
    console.log('=>',this.cookie);

    if(this.cookie !==null){
      return true;
    }
    else{
      this.router.navigate(['/','auth','login'])
      return false;
    }
  }
  
}
