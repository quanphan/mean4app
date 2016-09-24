/**
 * Created by phanquan on 3/30/16.
 * Now, Not use
 */

import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from '@angular/core';
import {ComponentInstruction} from '@angular/router-deprecated';
//import {Router, RouterOutlet} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES,Router,RouterOutlet} from '@angular/router';

import {LoginComponent} from "./components/puclic/login.component";

@Directive({
    selector: 'router-outlet',
    directives: [ROUTER_DIRECTIVES,LoggedInRouterOutlet],
})

export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    //constructor(_elementRef: ViewContainerRef, _loader: DynamicComponentLoader,
    //            _parentRouter: Router, @Attribute('name') nameAttr: string) {
    //    //super(_elementRef, _loader, _parentRouter, nameAttr);
    //
    //    this.parentRouter = _parentRouter;
    //    // The Boolean following each route below denotes whether the route requires authentication to view
    //    this.publicRoutes = {
    //        'login': true,
    //        'signup': true
    //    };
    //}

    // check auth
    //activate(instruction: ComponentInstruction) {
    //    let url = instruction.urlPath;
    //    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
    //        // todo: redirect to Login, may be there a better way?
    //        this.parentRouter.navigateByUrl('/login');
    //    }
    //    return super.activate(instruction);
    //}
}