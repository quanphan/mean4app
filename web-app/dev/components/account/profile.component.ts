/**
 * Created by phanquan on 8/28/16.
 */
import {Component,} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'/views/account/profile.html',
})

export class ProfileComponent {

    constructor(private router:Router, private accService:AccountService, private authService:AuthService){
        this.accService = accService;
        this.authService.setPageTitle('My Profile')
    }


}