/**
 * Created by phanquan on 4/8/16.
 */
import {Component,Input} from '@angular/core';
import { Router} from '@angular/router';
import {CompanyViewComponent} from "components/common/companyView.component";

@Component({
    selector: 'com-view',
    templateUrl:'/views/common/companyView.html',
})

export class CompanyViewComponent {
    @Input() company:any;
    constructor(

    ){

    }

    bookingList=[
        {Date: '2015-10-08', GuestName:'Nguyen Van Binh', RoomType:'SUP' , RoomNumber:'3', Nights:'2', NightRate: '30$'} ,
        {Date: '2015-10-08', GuestName:'Nguyen Van Binh', RoomType:'SUP' , RoomNumber:'3', Nights:'2', NightRate: '30$'} ,
        {Date: '2015-10-08', GuestName:'Nguyen Van Binh', RoomType:'SUP' , RoomNumber:'3', Nights:'2', NightRate: '30$'} ,
        {Date: '2015-10-08', GuestName:'Nguyen Van Binh', RoomType:'SUP' , RoomNumber:'3', Nights:'2', NightRate: '30$'} ,
        {Date: '2015-10-08', GuestName:'Nguyen Van Binh', RoomType:'SUP' , RoomNumber:'3', Nights:'2', NightRate: '30$'} ,
        {Date: '2015-10-08', GuestName:'Nguyen Van Binh', RoomType:'SUP' , RoomNumber:'3', Nights:'2', NightRate: '30$'} ,
    ]
}