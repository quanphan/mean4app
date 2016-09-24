/**
 * Created by phanquan on 2/28/16.
 */
import {Injectable} from  "@angular/core";
import {User} from  "../models/user.model";
import {Http, Response,Headers} from '@angular/http';
import {contentHeaders} from '../headers';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    user={name:''};
    isAuth:boolean;
    isSidebar:boolean =false;
    uriName="";
    pageTitle:string='Home';
    menus=[];
    constructor(public http:Http,public router:Router) {
        this.user.name = "guest";
        this.isAuth=false;
        this.menus=MENU;
        this.uriName="Home";
        this.checkAuth();

    }

     login(username, password){
        let body = JSON.stringify({username: username, password: password});
        this.http.post('http://localhost:3001/auth/signin', body, { headers: contentHeaders })
            .subscribe(
                response => {
                    localStorage.setItem('jwt', response.json().id_token);
                    localStorage.setItem('auth', JSON.stringify(response.json()));
                    this.user=response.json().user;
                    this.isAuth=response.json().isAuth;
                    this.isSidebar=true;
                    //this.router.navigate(['/dashboard']);
                },
                error => {
                    this.isAuth=false;
                }
            );
    }

    logout(){
        this.http.get('http://localhost:3001/auth/signout',{ headers: contentHeaders })
            .subscribe(
                response => {
                    localStorage.removeItem('jwt');
                    localStorage.removeItem('auth');
                    this.user.name="";
                    this.isAuth=false;
                    this.isSidebar=false;
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }

    checkAuth()
    {
        let auth=JSON.parse(localStorage.getItem('auth'));
        if(auth){
            this.user=auth.user;
            this.isAuth=auth.isAuth;

            if(this.isAuth)
            {
                this.isSidebar=true;
            }else {
                this.isSidebar=false;
            }
        }

        //let body = JSON.stringify({username: 'quanphan', password: 'sa123456'});
        //this.http.get('http://localhost:3001/auth',{ headers: contentHeaders })
        //    .subscribe(
        //        response => {
        //            this.user=response.json().user;
        //            this.isAuth=response.json().isAuth;
        //            if(this.isAuth)
        //            {
        //                this.isSidebar=true;
        //            }else {
        //                this.isSidebar=false;
        //            }
        //
        //        },
        //        error => {
        //            alert(error.text());
        //            console.log(error.text());
        //        }
        //    );
    }



    getmenus(){
        return this.menus;
    }

    setSideBar(isSideBar:boolean){
        this.isSidebar=isSideBar;
    }
    setPageTitle(pageTitle:string){
        this.pageTitle=pageTitle;
    }

}
var MENU = [
    {id:'1',code:'/dashboard', icon: 'fa fa-th', name: 'Dashboard'},
    {id:'3',code:'/reservation', icon: 'glyphicon glyphicon-move', name: 'Reservations'},
    {id:'4',code:'/company', icon: 'glyphicon glyphicon-folder-open', name: 'Company'},
    {id:'4',code:'/booking', icon: 'glyphicon glyphicon-retweet', name: 'Booking'},
    {id:'4',code:'/setup', icon: 'glyphicon glyphicon-wrench', name: 'Setup'},
    {id:'4',code:'', icon: 'glyphicon glyphicon-list-alt', name: 'Back end',
        sub:[
                {id:'4',code:'', icon: 'fa fa-circle-o', name: 'Company1'},
                {id:'4',code:'', icon: 'fa fa-circle-o', name: 'Company2'},
            ]
    },
];
