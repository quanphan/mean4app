/**
 * Created by phanquan on 9/24/16.
 */
import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {CommonModule }       from '@angular/common';
import {MeanControlModule} from "../../control-component/meancontrol.module";
import {AccountService} from '../../services/account.service';

import {accRouting} from "./account.routers"

import {AccountComponent} from "../../components/account/account.component";
import {AccountmemberComponent} from "../../components/account/accountMember.component";
import {AccountActivityComponent} from "../../components/account/accountActivity.component";
import {AccountEditComponent} from "../../components/account/accountEdit.component";
import {AccountSetingComponent} from "../../components/account/accountSeting.component";
import {AccountMembeEditComponent} from "../../components/account/accountMemberEdit.component";
@NgModule({
    imports: [
        CommonModule, FormsModule,ReactiveFormsModule,BrowserModule,
        accRouting,
        MeanControlModule,
    ],
    declarations: [
        AccountComponent,AccountmemberComponent,AccountActivityComponent,AccountEditComponent,
        AccountSetingComponent,AccountMembeEditComponent
    ],
    providers: [
        AccountService
    ],
    exports:[
        AccountComponent,AccountmemberComponent,AccountActivityComponent,AccountEditComponent,
        AccountSetingComponent,AccountMembeEditComponent
    ]
})

export class AccountModule {
}