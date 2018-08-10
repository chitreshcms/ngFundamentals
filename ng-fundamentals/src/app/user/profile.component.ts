import { Component,OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
// import { AuthService } from './auth.service';

@Component({
    templateUrl:'./profile.component.html',
    styles:[`
    em{float:right; color:#E05C65; padding -left: 11px;}
    .error input{background-color:#E3C3C5;}
    .error :: -webkit-input-placeholder{color:#999;}
    .error ::-moz-placeholder{color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error : -ms-input-placeholder{color:#999;}
    `]
})
export class ProfileComponent implements OnInit {
public profileForm: FormGroup;
private firstName;
private lastName;
 constructor(private authService:AuthService, private router: Router,private toastrService: ToastrService){

 }
    ngOnInit(){
        if(!this.authService.currentUser){
            console.log("User not logged in :");
            this.toastrService.error("You need to login first!!");
            setTimeout(1000);
            this.router.navigate(['user/login']);
        }
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName= new FormControl(this.authService.currentUser.lastName, [Validators.required,Validators.pattern('[a-zA-Z].*')]);
        this.profileForm = new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        })
    }   
    validateFirstName()
    {
        return (this.firstName.valid || this.firstName.untouched);
    }
    validateLastName(){
        return (this.lastName.valid || this.lastName.untouched);
    }
    saveProfile(formValues)
    {
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
            this.router.navigate(['events']);
        }
        
    }
    cancel(){
        this.router.navigate(['events']);
    }
}