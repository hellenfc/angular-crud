import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class ViewerGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(){
        let data = JSON.parse( localStorage.getItem('userData') )
        if(data[0].role === 'Editor' || data[0].role === 'Admin' || data[0].role === 'Viewer'){
            return true;
        }else{
            this.router.navigate(['/'])
            return false;
        }
    }
}