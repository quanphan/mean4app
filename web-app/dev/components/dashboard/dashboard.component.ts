/**
 * Created by phanquan on 2/28/16.
 */

import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

@Component({
    templateUrl: './views/dashboard/dashboard.html',
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


}