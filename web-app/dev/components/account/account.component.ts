/**
 * Created by phanquan on 8/20/16.
 */

import {Component,} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';

@Component({
    templateUrl:'/views/account/account.html',
    providers: [AccountService],
    directives: [RouterOutlet],
})

export class AccountComponent {

    constructor(private router:Router, private accService:AccountService, private authService:AuthService){
        this.accService = accService;
        this.authService.setPageTitle('')
        this.authService.uriName='Setting';
    }
    urlType='ast';
    gotoMemberList(){
        this.urlType='acc';
        this.router.navigate(['/account/members']);
    }
    gotoActivity(){
        this.urlType='ati';
        this.router.navigate(['/account/activity']);
    }
    gotoEdit(){
        this.urlType='edit';
        this.router.navigate(['/account/edit']);
    }
    gotoSeting(){
        this.urlType='ast';
        this.router.navigate(['/account/seting']);
    }
    isCurLink(iname)
    {
        if(iname==this.urlType) return true;

        return false;
    }

}