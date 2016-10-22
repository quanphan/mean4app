/**
 * Created by phanquan on 9/17/16.
 */

import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {HttpModule,Http} from '@angular/http';

import {AppComponent }         from './app.component';
import {AuthService} from "./services/auth.service"
import {AppRouting} from "./app.routes"
import {TranslateModule,TranslateLoader,TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {AuthConfig, AuthHttp } from 'angular2-jwt';

import {ComModule} from "./components/common/company.module";
import {AccountModule} from "./components/account/account.module";
import {ReservationModule} from "./components/reservation/reservation.module";
import {SetupModule} from "./components/setup/setup.module";

import {MeanControlModule} from "./control-component/meancontrol.module";

import {ReservationCanDeactivateGuard} from "./components/reservation/reservationCanDeactivate.Guard";
import {AuthGuard} from "./canActive"

import {NavbarComponent} from "./components/puclic/navbar.component";
import {HeaderComponent} from "./components/puclic/header.component";

import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/puclic/login.component";
import {AboutComponent} from "./components/home/about.component";
import {ContactComponent} from "./components/home/contact.component";
import {DashboardComponent} from  "./components/dashboard/dashboard.component";
import {BookingComponent} from "./components/common/booking.component";
import {ProfileComponent} from "./components/account/profile.component";
import {MailboxComponent} from "./components/puclic/mailbox.component";
import {PricingComponent} from "./components/home/pricing.component";
import {DemoComponent} from "./components/home/demo.component";

import {ReservationCanDeactivateGuard} from "./components/reservation/reservationCanDeactivate.Guard";
import {AuthGuard} from "./canActive"

import {enableProdMode} from '@angular/core';
enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,ReactiveFormsModule,
        AppRouting,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/resource', '.json'),
            deps: [Http]
        }),
        ComModule,
        AccountModule,ReservationModule,SetupModule,
        MeanControlModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,AboutComponent,ContactComponent,MailboxComponent,
        HeaderComponent,NavbarComponent,
        LoginComponent,ProfileComponent,PricingComponent,
        DashboardComponent,BookingComponent,DemoComponent,

    ],
    providers: [
        AuthService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ReservationCanDeactivateGuard,AuthGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}