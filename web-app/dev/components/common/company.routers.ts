/**
 * Created by phanquan on 7/16/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';

import {CompanyListComponent} from "../../components/common/companyList.component";
import {CompanyProfileComponent} from "../../components/common/companyProfile.component";
import {CompanyComponent} from "../../components/common/company.component";
import {ReservationCanDeactivateGuard} from "../../components/reservation/reservationCanDeactivate.Guard";

export const comRouter: Routes = [
    {
        path: 'company',
        component: CompanyComponent,
        index: true,
        children: [
            {path:'companyprofile', name: 'CompanyProfile', component:CompanyProfileComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'companyprofile/:id', name: 'CompanyProfile', component:CompanyProfileComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'', name: 'CompanyList', component:CompanyListComponent , index: true},
        ]
    }
];

export const comRouting: ModuleWithProviders = RouterModule.forChild(comRouter);