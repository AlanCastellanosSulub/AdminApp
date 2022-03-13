import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup =new FormGroup({});

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm =new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)])
    })
  }

  sendCredentials():void{
    const body = this.loginForm.value;
    this.authService.submitLogin(body)
    .subscribe((response)=>{
      console.log(response)
    })
    console.log(body);
  }

}
