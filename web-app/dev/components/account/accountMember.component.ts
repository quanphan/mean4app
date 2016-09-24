/**
 * Created by phanquan on 8/28/16.
 */

import {Component,} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'/views/account/accMember.html',

})

export class AccountmemberComponent {
    constructor(private router:Router, private accService:AccountService,
                private authService:AuthService){
        this.authService.setPageTitle('');

        this.accService.GetAccountList();
    }

    public selectItem = {name:''};
    public accFileter:string='';
    cardView:boolean=true;
    onSearch()
    {
        //let searchDto={Name:this.comFileter};
        //this.comService.getCompany(searchDto);
    }

    onViewItemClick(accId)
    {
        this.router.navigate(['/account/member',accId]);
    }
    onNewItemClick()
    {
        this.router.navigate(['/account/member']);
    }
    LoadView(mode:string)
    {
        if(mode=='card') this.cardView=true;
        if(mode=='list') this.cardView=false;
    }
}