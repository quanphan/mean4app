/**
 * Created by phanquan on 2/27/16.
 */

import {Component} from '@angular/core';
//import {CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
//import {FORM_PROVIDERS, FormBuilder, Validators, NgForm,Control} from '@angular/common';
//import {disableDeprecatedForms,provideForms,FormControl} from '@angular/forms'
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AppComponent} from "app.component";
import {InputComponent} from '../../control-component/input/input.component';
import {ValidatorCore} from '../../core/validators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
    templateUrl: './views/public/login.html',
    directives: [InputComponent ],
    providers: [ValidatorCore],
})

export class LoginComponent {
    myForm;
    constructor(public router:Router,public authService:AuthService ,private _formBuilder : FormBuilder
        ,private _Validators: ValidatorCore){
        this.myForm = _formBuilder.group( {
            password : ["",Validators.compose([Validators.required,this._Validators.passwordValidator])],
            username : ["",Validators.compose([Validators.required,this._Validators.specialCharValidator])],
        } );

        this.myForm.valueChanges.subscribe((form: any) => {
            this.LoginError=false;
            }
        );
    }

    User={username:'',password:''};
    LoginError:boolean=false;

    login() {
        Promise.all([
            this.authService.login(this.User.username,this.User.password)
        ]).then((data) => {
            this.LoginError=!this.authService.isAuth;
            this.router.navigate(['/dashboard']);
        })

    }

    logOut(){
        this.router.navigate(['/home']);
    }


}
