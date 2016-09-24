/**
 * Created by phanquan on 2/27/16.
 */

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'sd-navbar',
    templateUrl: '/views/public/navbar.html',
})

export class NavbarComponent {
    constructor(public router:Router,public authService:AuthService){

    }
    authentication=this.authService;

    onItemClick(item)
    {
        if(item.code!='')
        {
            this.authService.uriName=item.name;
            this.router.navigate([item.code]);
        }

    }
}