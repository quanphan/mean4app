/**
 * Created by phanquan on 8/28/16.
 */
import {Component,} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'/views/account/accEdit.html',
})

export class AccountEditComponent {
    constructor(private router:Router, private setupService:AccountService,
                private authService:AuthService){
        this.setupService = AccountService;
        this.authService.setPageTitle('');
    }

}