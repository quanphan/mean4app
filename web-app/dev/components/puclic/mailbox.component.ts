/**
 * Created by phanquan on 4/24/16.
 */

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    templateUrl: '/views/public/mailbox.html',
})

export class MailboxComponent {
    constructor(public router:Router,public authService:AuthService){
        this.authService.pageTitle='Mail box';
    }

    authentication=this.authService;

}