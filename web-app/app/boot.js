System.register(['@angular/platform-browser-dynamic', './app.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztZQUdBLGlEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQzs7OztBQUVwRCwrREFBK0Q7QUFDL0QsK0NBQStDO0FBQy9DLHdDQUF3QztBQUN4QyxvREFBb0Q7QUFDcEQsaURBQWlEO0FBQ2pELHVEQUF1RDtBQUN2RCxrRkFBa0Y7QUFDbEYsRUFBRTtBQUNGLHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQsdUlBQXVJO0FBQ3ZJLG9EQUFvRDtBQUNwRCwrQ0FBK0M7QUFDL0MsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLE9BQU87QUFDUCxtQ0FBbUM7QUFDbkMsa0dBQWtHO0FBQ2xHLHNCQUFzQjtBQUN0QixRQUFRO0FBQ1IsdUJBQXVCO0FBQ3ZCLFFBQVE7QUFDUiwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCxrQ0FBa0M7QUFDbEMsd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsUUFBUTtBQUNSLEVBQUU7QUFDRixvRUFBb0U7QUFDcEUsRUFBRTtBQUNGLElBQUk7QUFDSix3Q0FBd0MiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG4vL2ltcG9ydCB7Ym9vdHN0cmFwfSAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbi8vaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbi8vaW1wb3J0IHtwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vaW1wb3J0IHtGT1JNX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vaW1wb3J0IHsgSHR0cCwgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbi8vaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSxMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vXG4vL2ltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiXG4vL2ltcG9ydCB7QXV0aENvbmZpZywgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuLy9pbXBvcnQge1RSQU5TTEFURV9QUk9WSURFUlMsVHJhbnNsYXRlUGlwZSxUcmFuc2xhdGVTZXJ2aWNlLFRyYW5zbGF0ZVN0YXRpY0xvYWRlcixUcmFuc2xhdGVMb2FkZXJ9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG4vL2ltcG9ydCB7IGFwcFJvdXRlclByb3ZpZGVycyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG4vL2ltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9lbmFibGVQcm9kTW9kZSgpO1xuLy9ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4vLyAgICBBdXRoU2VydmljZSxcbi8vICAgIGFwcFJvdXRlclByb3ZpZGVycyxcbi8vICAgIFRSQU5TTEFURV9QUk9WSURFUlMsXG4vLyAgICBGT1JNX1BST1ZJREVSUyxcbi8vICAgIEhUVFBfUFJPVklERVJTLFxuLy8gICAge1xuLy8gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbi8vICAgICAgICB1c2VGYWN0b3J5OiAoaHR0cDogSHR0cCkgPT4gbmV3IFRyYW5zbGF0ZVN0YXRpY0xvYWRlcihodHRwLCAnYXNzZXRzL3Jlc291cmNlJywgJy5qc29uJyksXG4vLyAgICAgICAgZGVwczogW0h0dHBdXG4vLyAgICB9LFxuLy8gICAgVHJhbnNsYXRlU2VydmljZSxcbi8vICAgICB7XG4vLyAgICAgICAgcHJvdmlkZTpBdXRoSHR0cCxcbi8vICAgICAgICB1c2VGYWN0b3J5OiAoaHR0cCkgPT4ge1xuLy8gICAgICAgICAgICByZXR1cm4gbmV3IEF1dGhIdHRwKG5ldyBBdXRoQ29uZmlnKHtcbi8vICAgICAgICAgICAgICAgIHRva2VuTmFtZTogJ2p3dCdcbi8vICAgICAgICAgICAgfSksIGh0dHApO1xuLy8gICAgICAgIH0sXG4vLyAgICAgICAgZGVwczogW0h0dHBdXG4vLyAgICB9LFxuLy9cbi8vICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXG4vL1xuLy9dKVxuLy8gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
