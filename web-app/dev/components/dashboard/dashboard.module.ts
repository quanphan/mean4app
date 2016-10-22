/**
 * Created by phanquan on 10/22/16.
 */

import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule }  from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {CommonModule }       from '@angular/common';
import {MeanControlModule} from "../../control-component/meancontrol.module";

//import {AccountService} from '../../services/account.service';
import {dashboardRouting} from "./dashboard.router"

import {HotelComponent} from "../../components/dashboard/hotel.component";
import {SaleComponent} from "../../components/dashboard/sale.component";
import {DashboardComponent} from "../../components/dashboard/dashboard.component";

@NgModule({
    imports: [
        CommonModule, FormsModule,ReactiveFormsModule,BrowserModule,
        dashboardRouting,
        MeanControlModule,
    ],
    declarations: [
        HotelComponent,SaleComponent,DashboardComponent
    ],
    providers: [

    ],
    exports:[
        HotelComponent,SaleComponent,DashboardComponent
    ]
})

export class DashboardModule {
}