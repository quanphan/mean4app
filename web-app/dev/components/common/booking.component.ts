/**
 * Created by phanquan on 4/21/16.
 */

import {Component,EventEmitter} from '@angular/core';
//import {CORE_DIRECTIVES,FORM_DIRECTIVES, FORM_PROVIDERS, FormBuilder, Validators, NgForm,Control} from '@angular/common';
import {FormsModule,FormControl} from '@angular/forms'
import {FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms';

import {BookingComponent} from "components/common/booking.component";
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComboComponent} from '../../control-component/combobox.component';
import {DropdownComponent} from '../../control-component/dropdown.component';
import {MutliSelectComponent} from '../../control-component/mutilselect.component';
import {InputComponent} from '../../control-component/input/input.component';
import {SelectComponent} from '../../control-component/select.component';
import {DatePicker} from '../../control-component/dateinput.component';
import {InputNumberComponent} from '../../control-component/input/inputNumber.component';
import {ValidatorCore} from '../../core/validators';

@Component({
    templateUrl:'/views/common/booking.html',
    providers: [CompanyService,ValidatorCore],
    directives: [ComboComponent,InputComponent,SelectComponent,DatePicker,InputNumberComponent,MutliSelectComponent],
})


export class BookingComponent {

    public comp={Code:'',Name:'Quan phan',FullName:'Phan Van Quan',Address:'',Mail:'phanquanpc@gmail.com',WebSite:''
        ,Phone:'',Description:'',Birthday:''
        ,State:'',Mobile:'',Country:'',Type:'',TaxCode:'',BankCode:'',Status:''};

    myForm;

    constructor ( private _formBuilder : FormBuilder ,private _Validators: ValidatorCore) {
        this.myForm = _formBuilder.group( {
            Code : ["",Validators.compose([Validators.required, Validators.maxLength(5)])],
            //TaxCode:["",Validators.maxLength(5)],
            //Address : ["",Validators.maxLength(5)],
            State : ["", Validators.pattern('[A-Za-z]{5}')],
            FullName : ["",Validators.required],
            Mail : ["",this._Validators.validateEmail],

        } );
    }

    ngOnInit() {

    }

    onSubmit()
    {
        alert("submit");
    }

    validateEmail(c: FormControl) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }
}
