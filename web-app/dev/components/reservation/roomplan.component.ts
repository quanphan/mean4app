/**
 * Created by phanquan on 5/14/16.
 */
import {Component,ElementRef} from '@angular/core';
import {CheckinComponent} from "components/reservation/checkin.component";
import {AuthService} from '../../services/auth.service';
import {CommonService} from '../../services/common.service';
import {Router} from '@angular/router';
import {SearchComponent} from '../../control-component/input/search.component';
import {InputComponent} from '../../control-component/input/input.component';
import {SelectComponent} from '../../control-component/select.component';
import {CheckboxComponent} from '../../control-component/checkbox.component';
import {TogglebuttonComponent} from '../../control-component/togglebutton.component';
import {RoomitemComponent} from '../../components/reservation/roomitem.component';
import {Datetime,} from '../../components/commonfs';

declare var jQuery:any;
@Component({
    templateUrl:'/views/reservation/roomplan.html',
    providers: [CommonService,Datetime],
    directives: [SelectComponent,SearchComponent,InputComponent,CheckboxComponent,TogglebuttonComponent,RoomitemComponent],
})

export class RoomplanComponent {
    public dayView=15;
    dates:any=[];
    yearMonth:any=[];
    yesterday:any;
    constructor(private router:Router,
                private authService:AuthService,
                private commonService:CommonService,
                public datetime:Datetime,
                private elRef:ElementRef
    ) {
        this.authService.setPageTitle('Room plans');
        this.getDate(this.dayView);
    }

    res={RoomNo:'201',RoomType:'Superior Room',CompanyID:''};

    getDate(days)
    {
        let curDate=this.datetime.getCurDate();
        let Ds:number=0;
        let MY;
        for (var _i = -1; _i <= days; _i++) {
            let _date=this.datetime.addDate(curDate,_i);
            let _my=this.datetime.getYearMonth(_date);
            let _month=this.datetime.getMonth(_date);
            let _year=this.datetime.getYear(_date);
            let _day=this.datetime.getDate(_date);
            this.dates.push({day:_day,month:_month,year:_year});

            Ds++;
            if(_i==-1)
            {
                MY=_my;
                this.yearMonth.push({days:Ds,month:MY});
                this.yesterday=_day;
            }
            else {
                if(MY!=_my){
                    MY=_my;
                    this.yearMonth.push({days:Ds,month:MY});
                    Ds=1;
                }
                else {
                    for (var k=0;k<= this.yearMonth.length;k++) {
                        if (this.yearMonth[k].month == _my) {
                            this.yearMonth[k].days = Ds;
                            break;
                        }
                    }
                }
            }

        }

    }

    rooms=[
        {Type:'SUP',TypeName:'Sup',RoomNo:'101'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'102'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'103'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'104'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'105'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'106'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'107'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'201'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'202'},
        {Type:'SUP',TypeName:'Del',RoomNo:'203'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'204'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'205'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'206'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'207'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'301'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'302'},
        {Type:'SUP',TypeName:'Sta',RoomNo:'303'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'304'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'305'},
        {Type:'SUP',TypeName:'Del',RoomNo:'401'},
        {Type:'SUP',TypeName:'Sup',RoomNo:'402'},
        {Type:'SUP',TypeName:'Del',RoomNo:'403'},
    ]
    //guestList=[
    //    {Name: 'Tran Van Nam', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'},
    //    {Name: 'Tran Van Tuan', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'}
    //]
    //
    //guestSeleted={Name: 'Tran Van Nam', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'}
    //
    //public companyList=[
    //    {value:'1',label:" Success software"},
    //    {value:'2',label:" Aperia Solutions software"},
    //    {value:'3',label:" Kobe"},
    //    {value:'4',label:" Apple Computer"},
    //];
    //onGuestClick(item){
    //    this.guestSeleted=item;
    //}


    resSelect={ID:'',RoomNo:'',FromDate:'',ToDate:'',tempID:'',selected:false}
    resData=[
        {ResID:'1',RoomNo:'102',FromDate:'8', ToDate:'11',Status:'3'},
        {ResID:'2',RoomNo:'105',FromDate:'9', ToDate:'14',Status:'1'},
        {ResID:'3',RoomNo:'203',FromDate:'11', ToDate:'16',Status:'1'},
        {ResID:'4',RoomNo:'301',FromDate:'8', ToDate:'12',Status:'3'},
        {ResID:'5',RoomNo:'201',FromDate:'14', ToDate:'15',Status:'1'},
    ]
    _res={ResID:'',RoomNo:'',FromDate:'', ToDate:'',Status:''};

    IsSelectRoom(room,date)
    {
        if(room==this.resSelect.RoomNo &&
            parseInt(date.day)>= parseInt(this.resSelect.FromDate) && parseInt(date.day)<= parseInt(this.resSelect.ToDate)){
            return true
        }
        return false;
    }

    CheckStatusRoom(room,date,status)
    {
        let _tempRes=this.CheckRes(room,date);
        if(_tempRes!=null )
        {
           if(_tempRes.Status==status)
           return true;
        }
        return false;
    }

    resSelected()
    {
        this.resSelect.selected=true;
    }

    resItem(room,date)
    {
        let _tempRes=this.CheckRes(room,date);
        if(_tempRes!=null )
        {
            this.resSelect.ID=_tempRes.ResID;
            this.resSelect.RoomNo=_tempRes.RoomNo;
            this.resSelect.FromDate=_tempRes.FromDate;
            this.resSelect.ToDate=_tempRes.ToDate;
            this.resSelect.selected=true;
        }
    }

    setResUI(room,date)
    {
        if(room==this.resSelect.RoomNo && this.resSelect.selected ){
            if(parseInt(date.day)== parseInt(this.resSelect.FromDate))
            {
                let night=parseInt(this.resSelect.ToDate)-parseInt(this.resSelect.FromDate);
                return night+1;
            }
        }

        let _tempRes=this.CheckRes(room,date);
        if(_tempRes!=null )
        {
            let night=parseInt(_tempRes.ToDate)-parseInt(_tempRes.FromDate);
            return night+1;
        }

        return 1;
    }

    checkDateUISelect(room,date)
    {
        if(room==this.resSelect.RoomNo && this.resSelect.selected ){
            if(parseInt(date.day)> parseInt(this.resSelect.FromDate) && parseInt(date.day)<= parseInt(this.resSelect.ToDate))
            {
                return false;
            }
        }

        let _tempRes=this.CheckRes(room,date);
        if(_tempRes!=null )
        {
            if(parseInt(date.day)> parseInt(_tempRes.FromDate) && parseInt(date.day)<= parseInt(_tempRes.ToDate)) {
                return false;
            }
        }

        return true;
    }


    GetRes(room,date)
    {
        let res=this._res;
        let _tempRes=this.CheckRes(room,date);

        if(_tempRes!=null)
        {
            return _tempRes;
        }

        if(room==this.resSelect.RoomNo && parseInt(date.day)== parseInt(this.resSelect.FromDate) && this.resSelect.selected){
            return this.resSelect;
        }

        return res;
    }

    CheckRes(room,date)
    {
        for (var k=0;k< this.resData.length;k++) {
            if (this.resData[k].RoomNo == room && parseInt(date.day)== parseInt(this.resData[k].FromDate)) {
                return this.resData[k];
            }
        }
        return null;
    }

}
