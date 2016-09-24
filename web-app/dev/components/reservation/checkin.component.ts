/**
 * Created by phanquan on 3/26/16.
 */
import {Component,} from '@angular/core';
import {CheckinComponent} from "components/reservation/checkin.component";
import {AuthService} from '../../services/auth.service';
import {CommonService} from '../../services/common.service';
import {Router} from '@angular/router';
import {SearchComponent} from '../../control-component/input/search.component';
import {InputComponent} from '../../control-component/input/input.component';
import {SelectComponent} from '../../control-component/select.component';
import {CheckboxComponent} from '../../control-component/checkbox.component';
import {TogglebuttonComponent} from '../../control-component/togglebutton.component';
@Component({
    templateUrl:'/views/reservation/checkin.html',
    providers: [CommonService],
    directives: [SelectComponent,SearchComponent,InputComponent,CheckboxComponent,TogglebuttonComponent],
})

export class CheckinComponent {
    constructor(private router:Router,
                private authService:AuthService,
                private commonService:CommonService
    ) {
        this.authService.setPageTitle('Checkin');
    }

    res={RoomNo:'201',RoomType:'Superior Room',CompanyID:''};

    guestList=[
        {Name: 'Tran Van Nam', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'},
        {Name: 'Tran Van Tuan', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'}
    ]

    guestSeleted={Name: 'Tran Van Nam', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'}

    public companyList=[
        {value:'1',label:" Success software"},
        {value:'2',label:" Aperia Solutions software"},
        {value:'3',label:" Kobe"},
        {value:'4',label:" Apple Computer"},
    ];

    onGuestClick(item){
        this.guestSeleted=item;
    }
}