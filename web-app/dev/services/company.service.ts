/**
 * Created by phanquan on 4/6/16.
 */

import {Injectable} from  "@angular/core";
import {User} from  "../models/user.model";
import {Http, Response,Headers} from '@angular/http';
import {contentHeaders} from '../headers';

@Injectable()
export class CompanyService {
    companyList=[];
    company:any={};
    constructor(public http:Http) {
        this.getCompanys();
    }

    getCompanys(){
        this.http.get('http://localhost:3001/api/company',{ headers: contentHeaders })
            .subscribe(
                response => {
                    this.companyList= response.json();
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }


    getCompany(company){
        let body = JSON.stringify(company);

        this.http.post('http://localhost:3001/api/companys',body,{ headers: contentHeaders })
            .subscribe(
                response => {
                    this.companyList= response.json();
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }

    getCompanyByID(comid){
        if(comid!='' && comid.length>0)
        {
            this.http.get('http://localhost:3001/api/company/'+comid,{ headers: contentHeaders })
                .subscribe(
                    response => {
                        this.company= response.json();
                    },
                    error => {
                        alert(error.text());
                        console.log(error.text());
                    }
                );
        }else {
            this.createNewCompany();
        }

    }

    updateInfo(company){
        if(company._id!='' && company._id.length>0)
        {
            let body = JSON.stringify(company);
            this.http.put('http://localhost:3001/api/company/'+company._id,body,{ headers: contentHeaders })
                .subscribe(
                    response => {
                        this.company= response.json();
                    },
                    error => {
                        alert(error.text());
                        console.log(error.text());
                    }
                );
        }

    }



    createNewCompany(){
        this.company={};
    }

    updateCompany(company){
        let body = JSON.stringify(company);
        this.http.post('http://localhost:3001/api/company', body, { headers: contentHeaders })
            .subscribe(
                response => {
                    this.company= response.json();
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }

    // Data ref
    levedList=[
        {value:'0',label:" Basic"},
        {value:'1',label:" Parner"},
        {value:'2',label:" Vip"},
    ];

    public typeList=[
        {value:'1',label:" Du Lich"},
        {value:'2',label:" Thuong Mai"},
        {value:'3',label:" Tu Nhan"},
        {value:'4',label:" Nha nuoc"},
    ];

    countryList=[
        {value:'1',label:" Type 1"},
        {value:'2',label:" Type 2"},
        {value:'3',label:" Type 3"},
        {value:'4',label:" Type 4"},
    ];

}

interface ICompany {
    Code: string;
    Name: string;
    FullName: string;
    Contact: string;
    Address: string;
    Mail: string;
    WebSite: string;
    Phone: string;
    Fax: string;
    Description: string;
    Birthday: string;
    State: string;
    Mobile: string;
    Country: string;
    Type:string;
    TaxCode:string;
    BankCode:string;
    BankName:string;
    Status:string;
    Leved:string;
}