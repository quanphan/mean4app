/**
 * Created by phanquan on 6/25/16.
 */

import {Component} from '@angular/core';
import {PricingComponent} from  'components/home/pricing.component'
import {InputComponent} from '../../control-component/input/input.component';
@Component({
    templateUrl: '/views/home/pricing.html',
    directives: [InputComponent],
})

export class PricingComponent {
    pricing={};
}