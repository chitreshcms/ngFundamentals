import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService{
    currentUser:IUser;
    loginUser(userName:string, password:string){
        this.currentUser={
            id:1,
            userName:userName,
            firstName: 'Chitresh',
            lastName: 'Sharma'
        }
        // this.currentUser.id=1   ;
        // this.currentUser.userName=userName; 
        // this.currentUser.firstName="Chitresh";
        // this.currentUser.lastName="Sharma";

    }
   public isAuthenticated(){
        return !!this.currentUser;
    }
}