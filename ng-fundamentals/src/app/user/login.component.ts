import {Component, ViewChild} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
    templateUrl:'./login.component.html',
    styles:[
        `
        span{float:right;color:red;padding-left:12px;}
        `
    ]
})
export class LoginComponent{
    @ViewChild('loginForm') loginForm;
    public userName;
    public password;
    public mouseoverLogin;
    constructor(private authService:AuthService, private router:Router){
        (<any>window).component = this;
    }
    login(formValues)
    {
        this.authService.loginUser(formValues.userName,formValues.password);
        console.log(formValues);
        this.router.navigate(['events']);
    }
    cancel(){
        this.router.navigate(['events']);
    }

}