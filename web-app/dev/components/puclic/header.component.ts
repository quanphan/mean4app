/**
 * Created by phanquan on 2/27/16.
 */

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'sd-header',
    templateUrl: '/views/public/header.html',

})
export class HeaderComponent{
    constructor(public router:Router,public authService:AuthService){

    }

    authentication=this.authService;

    logOut(){
        this.authService.logout();

        this.router.navigate(['/home']);
    }
    proFile(){
        this.router.navigate(['/profile']);
    }

    isCollapsed:boolean;

    toggleMenu()
    {
        if(this.isCollapsed) {
            this.isCollapsed=false;
            this.authService.setSideBar(false);
        }
        else {
            this.isCollapsed=true;
            this.authService.setSideBar(true);
        }

    }
}