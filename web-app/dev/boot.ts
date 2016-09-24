import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//import {bootstrap}  from '@angular/platform-browser-dynamic';
//import {AppComponent} from "./app.component";
//import {provide} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';
//import {FORM_PROVIDERS} from '@angular/common';
//import { Http, HTTP_PROVIDERS } from '@angular/http';
//import {LocationStrategy, HashLocationStrategy,Location} from '@angular/common';
//
//import {AuthService} from "./services/auth.service"
//import {AuthConfig, AuthHttp } from 'angular2-jwt';
//import {TRANSLATE_PROVIDERS,TranslatePipe,TranslateService,TranslateStaticLoader,TranslateLoader} from 'ng2-translate/ng2-translate';
//import { appRouterProviders } from './app.routes';
//import {enableProdMode} from '@angular/core';
//enableProdMode();
//bootstrap(AppComponent, [
//    AuthService,
//    appRouterProviders,
//    TRANSLATE_PROVIDERS,
//    FORM_PROVIDERS,
//    HTTP_PROVIDERS,
//    {
//        provide: TranslateLoader,
//        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/resource', '.json'),
//        deps: [Http]
//    },
//    TranslateService,
//     {
//        provide:AuthHttp,
//        useFactory: (http) => {
//            return new AuthHttp(new AuthConfig({
//                tokenName: 'jwt'
//            }), http);
//        },
//        deps: [Http]
//    },
//
//    { provide: LocationStrategy, useClass: HashLocationStrategy },
//
//])
//    .catch(err => console.error(err));