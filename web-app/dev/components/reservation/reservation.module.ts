/**
 * Created by phanquan on 10/22/16.
 */

import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule }  from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {CommonModule }       from '@angular/common';
import {MeanControlModule} from "../../control-component/meancontrol.module";
import {CommonService} from '../../services/common.service';

import {resRouting} from "./reservation.routers"

import {CheckinComponent} from "../../components/reservation/checkin.component";
import {RoomplanComponent} from "../../components/reservation/roomplan.component";
import {ReservationComponent} from "../../components/reservation/reservation.component";
import {RoomitemComponent} from "../../components/reservation/roomitem.component";
@NgModule({
    imports: [
        CommonModule, FormsModule,ReactiveFormsModule,BrowserModule,
        resRouting,
        MeanControlModule,
    ],
    declarations: [
        CheckinComponent,RoomplanComponent,ReservationComponent,
        RoomitemComponent
    ],
    providers: [
        CommonService
    ],
    exports:[
        CheckinComponent,RoomplanComponent,ReservationComponent
    ]
})

export class ReservationModule {
}