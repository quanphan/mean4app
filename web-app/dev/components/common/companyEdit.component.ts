/**
 * Created by phanquan on 4/8/16.
 */

import {Component,Input} from '@angular/core';
import { Router} from '@angular/router';
import {CompanyEditComponent} from "components/common/companyEdit.component";
//import {ComboComponent} from '../../control-component/combobox.component';
//import {DropdownComponent} from '../../control-component/dropdown.component';
//import {MutliSelectComponent} from '../../control-component/mutilselect.component';
//import {InputComponent} from '../../control-component/input/input.component';
import {CompanyService} from '../../services/company.service';
//import {SelectComponent} from '../../control-component/select.component';
@Component({
    selector: 'com-edit',
    templateUrl:'/views/common/companyEdit.html',
    //directives: [DropdownComponent,MutliSelectComponent,ComboComponent,InputComponent,SelectComponent],
})

export class CompanyEditComponent {
    @Input() comp;
    constructor(
        //private _routeParams:RouteParams
        private comService:CompanyService
    ){

    }

    onSubmit()
    {
        this.comService.updateCompany(this.comp);
    }

}

