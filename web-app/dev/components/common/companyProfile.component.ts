/**
 * Created by phanquan on 4/6/16.
 */
import {Component,} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {CompanyProfileComponent} from "components/common/companyProfile.component";
import {CompanyService} from '../../services/company.service';
import {AuthService} from '../../services/auth.service';

@Component({
    templateUrl:'/views/common/companyProfile.html',
})

export class CompanyProfileComponent {
    editTytle="New";

    constructor(
        private comService:CompanyService,
        private activatedRoute:ActivatedRoute,
        private authService:AuthService
    ){
        this.comService = comService;
        authService.setPageTitle('Company')
    }

    ngOnInit() {
        let id ="";
        this.activatedRoute.params.subscribe(params => {
            id = params['id']

            if(!id)
            {
                id='';
            }

            this.comService.getCompanyByID(id);

            if(id!='')
            {
                this.editTytle="Edit";
            }
        })


    }




}
