/**
 * Created by phanquan on 9/24/16.
 */

import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {CommonModule }       from '@angular/common';
import {MeanControlModule} from "../../control-component/meancontrol.module";

import {CompanyComponent} from "./company.component";
import {CompanyListComponent} from "./companyList.component";
import {CompanyProfileComponent} from "./companyProfile.component";

import {CompanyEditComponent} from './companyEdit.component';
import {CompanyViewComponent} from './companyView.component';
import {CompanyHictoryComponent} from './companyHictory.component';

import {CompanyService} from '../../services/company.service';

import {comRouting} from "./company.routers";

@NgModule({
    imports: [
        CommonModule, FormsModule,ReactiveFormsModule,BrowserModule,
        comRouting,
        MeanControlModule,
    ],
    declarations: [
        CompanyComponent,CompanyListComponent,CompanyProfileComponent,
        CompanyEditComponent,CompanyViewComponent,CompanyHictoryComponent
    ],
    providers: [
        CompanyService
    ],
    exports:[
        CompanyListComponent,CompanyComponent,CompanyProfileComponent,
        CompanyEditComponent,CompanyViewComponent,CompanyHictoryComponent
    ]
})

export class ComModule {
}