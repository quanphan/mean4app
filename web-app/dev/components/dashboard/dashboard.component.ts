/**
 * Created by phanquan on 2/28/16.
 */

import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

@Component({
    templateUrl: './views/dashboard/dashboard.html',
    //directives: [DropdownComponent,MutliSelectComponent,ComboComponent,InputComponent,
    //    MaskedInputDirective,MaskInput,SelectComponent,DatePicker,InputNumberComponent],
    pipes: [TranslatePipe],
})

export class DashboardComponent {
    param: string = "world";
    constructor(
        private _routeParams:ActivatedRoute,
        translate: TranslateService
    ){

        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
    }
    ngOnInit() {

    }

    test="";
    test1="2016-07-12";
    public companyList=[
        {value:'1',label:" Success software"},
        {value:'2',label:" Aperia Solutions software"},
        {value:'3',label:" Kobe"},
        {value:'4',label:" Apple Computer"},
    ];

    public typeList=[
        {value:'1',label:" Type 1"},
        {value:'2',label:" Type 2"},
        {value:'3',label:" Type 3"},
        {value:'4',label:" Type 4"},
    ];
    public type = {value:'1',label:"Type 1"};

    public comp = {ID:'1',label:"abc", type:'1',value:'12345678',phone:'09887654321' };



    dropItems= [ {id: 1, text: 'Item1'}, {id: 2, text:'Item2'} ];
    selected= [ {id: 2} ];
    selOut;

    onUpdate(ev) {
        this.selOut = ev;
    }

}