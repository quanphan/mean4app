/**
 * Created by phanquan on 7/16/16.
 */

import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders }  from '@angular/core';

import {LoginComponent} from "./components/puclic/login.component";
import {AboutComponent} from "./components/home/about.component";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/home/contact.component";
import {DashboardComponent} from  "./components/dashboard/dashboard.component";
import {BookingComponent} from "./components/common/booking.component";
import {ProfileComponent} from "./components/account/profile.component";
import {MailboxComponent} from "./components/puclic/mailbox.component";
import {PricingComponent} from "./components/home/pricing.component";


import {ReservationCanDeactivateGuard} from "./components/reservation/reservationCanDeactivate.Guard";
import {AuthGuard} from "./canActive"

const routes: Routes = [
    {path:'', name: 'Home',component:HomeComponent},
    {path:'home', name: 'Home',component:HomeComponent},
    {path:'login', name: 'Login',component:LoginComponent},
    {path:'about', name: 'About', component:AboutComponent },
    {path:'contact', name: 'Contact', component:ContactComponent },
    {path:'pricing',name:'Pricing',component:PricingComponent},
    {path:'dashboard', name: 'Dashboard', component:DashboardComponent ,canActivate: [AuthGuard]},
    {path:'booking', name: 'Booking', component:BookingComponent ,canActivate: [AuthGuard]},
    {path:'mailbox', name: 'Mailbox', component:MailboxComponent ,canActivate: [AuthGuard]},
    {path:'profile', name: 'Profile', component:ProfileComponent ,canActivate: [AuthGuard]},
];

//export const appRouterProviders = [
//    provideRouter(routes),
//    ReservationCanDeactivateGuard,
//    AuthGuard
//];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);