/**
 * Created by phanquan on 7/16/16.
 */

import {Routes, RouterModule} from '@angular/router';

import {CheckinComponent} from "../../components/reservation/checkin.component";
import {RoomplanComponent} from "../../components/reservation/roomplan.component";
import {ReservationComponent} from "../../components/reservation/reservation.component";
import {ReservationCanDeactivateGuard} from "../../components/reservation/reservationCanDeactivate.Guard";

export const resRouter: Routes = [
    //{
    //    path: '',
    //    redirectTo: '/reservation',
    //    pathMatch: 'full'
    //},

    {
        path: 'reservation',
        component: ReservationComponent,
        index: true,
        children: [
            {path:'checkin', name: 'Checkin', component:CheckinComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'roomPlan', name: 'RoomPlan', component:RoomplanComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'', name: 'RoomPlan', component:RoomplanComponent , index: true},
        ]
    }
];
