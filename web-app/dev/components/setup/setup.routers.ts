/**
 * Created by phanquan on 7/16/16.
 */

import { Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';
import {SetupComponent} from "../../components/setup/setup.component";
import {RoomComponent} from "../../components/setup/rooms.component";
import {PackageComponent} from "../../components/setup/package.component";
import {UserComponent} from "../../components/setup/users.component";
import {ReservationCanDeactivateGuard} from "../../components/reservation/reservationCanDeactivate.Guard";

export const setupRouter: Routes = [
    {
        path: 'setup',
        component: SetupComponent,
        index: true,
        children: [
            {path:'user', name: 'User', component:UserComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'room', name: 'Room', component:RoomComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'package', name: 'Package', component:PackageComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'', name: 'User', component:UserComponent , index: true},
        ]
    }
];
export const setupRouting: ModuleWithProviders = RouterModule.forChild(setupRouter);