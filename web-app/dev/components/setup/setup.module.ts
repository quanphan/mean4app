/**
 * Created by phanquan on 10/22/16.
 */


import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule }  from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {CommonModule }       from '@angular/common';
import {MeanControlModule} from "../../control-component/meancontrol.module";
import {SetupService} from '../../services/setup.service';

import {setupRouting} from "./setup.routers"

import {SetupComponent} from "../../components/setup/setup.component";
import {RoomComponent} from "../../components/setup/rooms.component";
import {PackageComponent} from "../../components/setup/package.component";
import {UserComponent} from "../../components/setup/users.component";

@NgModule({
    imports: [
        CommonModule, FormsModule,ReactiveFormsModule,BrowserModule,
        setupRouting,
        MeanControlModule,
    ],
    declarations: [
        SetupComponent,RoomComponent,PackageComponent,UserComponent,

    ],
    providers: [
        SetupService
    ],
    exports:[
        SetupComponent,RoomComponent,PackageComponent,UserComponent,
    ]
})

export class SetupModule {
}
