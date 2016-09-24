/**
 * Created by phanquan on 9/3/16.
 */
import {Component,} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'/views/account/accSeting.html',
})

export class AccountSetingComponent {
    constructor(private router:Router, private accService:AccountService,
                private authService:AuthService){
        this.authService.setPageTitle('');

        this.accService.GetAccountRolsList();
    }

    public selectItem = {name:''};
    public accFileter:string='';


    onSearch()
    {
        //let searchDto={Name:this.comFileter};
        //this.comService.getCompany(searchDto);
    }

    onViewItemClick(accId)
    {

    }

}