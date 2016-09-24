/**
 * Created by phanquan on 3/12/16.
 */

import {Component} from '@angular/core';
import {Collapse} from 'ng2-bootstrap';
import {CollapseComponent} from  './collapse';
let template = require('./collapse-demo.html');
@Component({
    selector: 'collapse-demo',
    directives: [Collapse],
    template: template
})

export class CollapseComponent {
    public isCollapsed:boolean = false;
}