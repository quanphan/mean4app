/**
 * Created by phanquan on 3/5/16.
 */

import {Component} from '@angular/core';
import {ReservationComponent} from "components/reservation/reservation.component"
import {Router, RouterOutlet, } from '@angular/router';

import {CheckinComponent} from "../../components/reservation/checkin.component";
import {RoomplanComponent} from "../../components/reservation/roomplan.component";
import {AuthService} from '../../services/auth.service';

@Component({
    templateUrl: './views/reservation/reservation.html',
    providers: [AuthService],
    directives: [RouterOutlet],

})

export class ReservationComponent {
    constructor(private authService:AuthService){
        authService.setPageTitle("Reservation")
    }
}
