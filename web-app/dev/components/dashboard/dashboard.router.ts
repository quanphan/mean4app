/**
 * Created by phanquan on 10/22/16.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';
import {HotelComponent} from "../../components/dashboard/hotel.component";
import {SaleComponent} from "../../components/dashboard/sale.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {ReservationCanDeactivateGuard} from "../../components/reservation/reservationCanDeactivate.Guard";

export const dashboardRouter: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        index: true,
        children: [
            {path:'hotel', name: 'Checkin', component:HotelComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'sale', name: 'RoomPlan', component:SaleComponent ,canDeactivate: [ReservationCanDeactivateGuard]},
            {path:'', name: 'RoomPlan', component:HotelComponent , index: true},
        ]
    }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRouter);