/**
 * Created by phanquan on 2/27/16.
 */

import {Component} from '@angular/core';
import {HomeComponent} from  './home.component';

@Component({
    templateUrl: '/views/home/home.html',
})

export class HomeComponent {
    public isCollapsed:boolean = false;
}