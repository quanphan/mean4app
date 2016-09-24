/**
 * Created by phanquan on 8/20/16.
 */

import {Injectable} from  "@angular/core";
import {User} from  "../models/user.model";
import {Http, Response,Headers} from '@angular/http';
import {contentHeaders} from '../headers';

@Injectable()
export class AccountService {
    accountList = [];
    accountRolsList = [];
    account:any = {
        DislayName:'Quan Phan',
        Email:'quanphan@gmail.com',
        Address:'31A Hien Vuong, Tan Phu, HCM',
        Description:'System Admin and Product Owner',
        Contact:'Quanphan',
        Mobile:'098340993434',
        RollName:'Product Owner'
    };
    company:any = {
        CompanyName:'Cty TNHH Phuong Nam',
        DislayName:'Test company',
        Email:'test@gmail.com',
        Address:'6 Thi Sach, Q1, HCM',
        Description:'Phuong Nam Hotel',
        Contact:'Quanphan',
        Mobile:'098340993434',
        Leved:'****'
    };
    constructor(public http:Http) {

    }

    GetAccountList(){
        this.accountList=[
            {Id:'1',Name:'abc1',DislayName:'quan phan',RollName:'Admin',Email:'xxx@abc.com',Description:'System Admin',Status:'0'},
            {Id:'2',Name:'abc1',DislayName:'sdsd',RollName:'Admin',Email:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {Id:'3',Name:'abc1',DislayName:'sdsd',RollName:'Admin',Email:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {Id:'4',Name:'abc1',DislayName:'sdsd',RollName:'Admin',Email:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {Id:'5',Name:'abc1',DislayName:'sdsd',RollName:'Admin',Email:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {Id:'6',Name:'abc1',DislayName:'sdsd',RollName:'Admin',Email:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {Id:'7',Name:'abc1',DislayName:'sdsd',RollName:'Admin',Email:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
        ];
    }
    GetAccountRolsList(){
        this.accountRolsList=[
            {ID:'1',Code:'abc1',Name:'Reseptions',Admin:'Admin',Delegate:'xxx@abc.com',Description:'System Admin'},
            {ID:'1',Code:'abc1',Name:'Housekeeping',Admin:'Admin',Delegate:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {ID:'1',Code:'abc1',Name:'Sale Marketing',Admin:'Admin',Delegate:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {ID:'1',Code:'abc1',Name:'Accounting',Admin:'Admin',Delegate:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
            {ID:'1',Code:'abc1',Name:'Reporting',Admin:'Admin',Delegate:'xxx@abc.com',Description:'sdsdsd sdsd sdsd sdsdsd'},
        ];
    }

    GetAccountDetail(accId:string)
    {
        this.account={
            Name:'quanphan',
            DislayName:'',
            Email:'quanphan@gmail.com',
            Address:'',
            Description:'System Admin and Product Owner',
            Contact:'Quanphan',
            Mobile:'098340993434',
            RollName:'Product Owner'
        }
    }
    GetNewAccount()
    {
        this.account={
            Name:'',
            DislayName:'',
            Email:'',
            Address:'',
            Description:'',
            Contact:'',
            Mobile:'',
            RollName:''
        }
    }
}
