/**
 * Created by phanquan on 8/28/16.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';
import {AccountComponent} from "../../components/account/account.component";
import {AccountmemberComponent} from "../../components/account/accountMember.component";
import {AccountActivityComponent} from "../../components/account/accountActivity.component";
import {AccountEditComponent} from "../../components/account/accountEdit.component";
import {AccountSetingComponent} from "../../components/account/accountSeting.component";
import {ReservationCanDeactivateGuard} from "../../components/reservation/reservationCanDeactivate.Guard";
import {AccountMembeEditComponent} from "../../components/account/accountMemberEdit.component";

export const accountRouter: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        index: true,
        children: [
            {path:'seting', name: 'User', component:AccountSetingComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'edit', name: 'User', component:AccountEditComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'members', name: 'Member', component:AccountmemberComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'activity', name: 'Package', component:AccountActivityComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'member/:id', name: 'Member', component:AccountMembeEditComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'member', name: 'Member', component:AccountMembeEditComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'', name: 'User', component:AccountSetingComponent , index: true},
        ]
    }
];


export const accRouting: ModuleWithProviders = RouterModule.forChild(accountRouter);