import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(){
        let data = JSON.parse( localStorage.getItem('userData') )
        if(data[0].role === 'Admin'){
            return true;
        }else{
            this.router.navigate(['/'])
            return false;
        }
    }

}