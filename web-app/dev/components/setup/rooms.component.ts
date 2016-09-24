/**
 * Created by phanquan on 5/2/16.
 */
import {Component,} from '@angular/core';
import {RoomComponent} from "components/setup/rooms.component";
import {SetupService} from '../../services/setup.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {SelectComponent} from '../../control-component/select.component';
import {SearchComponent} from '../../control-component/input/search.component';
import {InputComponent} from '../../control-component/input/input.component';
@Component({
    templateUrl:'/views/setup/rooms.html',
    directives: [SelectComponent,SearchComponent,InputComponent],
})

export class RoomComponent {
    constructor(private router:Router, private setupService:SetupService,
                private authService:AuthService){
        //this.setupService = setupService;
        this.authService.setPageTitle('Rooms');
    }
    roomSelete={};
    roomFileter='';
    addActive=false
    onSearch(){

    }

    onClick(item){
        this.roomSelete=item;
    }

    edit(item){
        this.roomSelete=item;
        this.addActive=true;
    }
    newRoom(){
        this.roomSelete={};
        this.addActive=true;
    }

    doneSubmit()
    {
        this.addActive=false;
    }

    onSubmit(){

    }

    // Roomtype
    roomTypeSelete={};
    roomTypeClick(item){
        this.roomTypeSelete=item;
    }

    onRoomTypeSubmit(){
        this.roomTypeSelete={};
    }
    onNewRoomType(){
        this.roomTypeSelete={};
    }

    // RoomCategory
    roomCateSelete={};
    roomCateClick(item){
        this.roomCateSelete=item;
    }

    onRoomCateSubmit(){
        this.roomCateSelete={};
    }
    onNewRoomCate(){
        this.roomCateSelete={};
    }

    // Room rate
    rateSelete={};
    rateClick(item){
        this.rateSelete=item;
    }

    onRateSubmit(){
        this.rateSelete={};
    }
    onNewRate(){
        this.rateSelete={};
    }
}
