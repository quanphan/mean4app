/**
 * Created by phanquan on 4/23/16.
 */

import {Component,} from '@angular/core';
import {CompanyListComponent} from "components/common/companyList.component";
import {CompanyService} from '../../services/company.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'/views/common/companyList.html',
})

export class CompanyListComponent {
    companyList=[];

    constructor(private router:Router, private comService:CompanyService, private authService:AuthService){
        this.comService = comService;
        this.authService.setPageTitle('Company list');
    }

    public selectItem = {name:''};
    public comFileter:string='';
    typeSelected="1";

    onSearch()
    {
        let searchDto={Name:this.comFileter};
        this.comService.getCompany(searchDto);
    }

    onViewItemClick(comId)
    {
        this.router.navigate(['company/companyprofile',{ id: comId }]);
    }


}
