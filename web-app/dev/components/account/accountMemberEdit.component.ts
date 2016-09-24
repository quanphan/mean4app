/**
 * Created by phanquan on 9/11/16.
 */
import {Component,} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {AuthService} from '../../services/auth.service';
import {Router,ActivatedRoute} from '@angular/router';

import {ValidatorCore} from '../../core/validators';
import {FormsModule,FormControl} from '@angular/forms'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl:'/views/account/accMemberEdit.html',
    providers: [AccountService,ValidatorCore],
})

export class AccountMembeEditComponent {
    myForm;
    constructor(private router:Router, private accService:AccountService,
                private authService:AuthService, private _formBuilder : FormBuilder ,
                private activatedRoute:ActivatedRoute,
                private _Validators: ValidatorCore){

        this.authService.setPageTitle('');

        let id ="";
        this.activatedRoute.params.subscribe(params => {
            id = params['id']
            if(id)
            {
                //this.editTytle="Edit";
                this.accService.GetAccountDetail(id);
            }else{
                this.accService.GetNewAccount();
            }
        })


    }
    ngOnInit() {
        this.myForm = this._formBuilder.group( {
            Name : ['',Validators.required],
            FullName : ["",this._Validators.ValidatorMaxlenght(5)],
            Mail : ["",this._Validators.validateEmail],
        } );



    }
    onSubmit()
    {
        alert(this.myForm.valid);
    }


}