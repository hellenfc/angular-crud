import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(){
        if(localStorage.getItem('isLoggedIn')){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }
    }

}