/**
 * Created by phanquan on 4/6/16.
 */

import {Component,} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CompanyService} from '../../services/company.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl:'/views/common/company.html',
    providers: [CompanyService],
    directives: [RouterOutlet],
})

export class CompanyComponent {

    constructor(private router:Router, private comService:CompanyService, private authService:AuthService){
        this.comService = comService;
        this.authService.setPageTitle('Company')
    }

    onNewItemClick()
    {
        this.router.navigate(['/company/companyprofile']);
    }

}
