/**
 * Created by phanquan on 4/17/16.
 */

import {Component, Input,Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'ng2-Textbox',
    template:`
                 <label class="ng-label">{{ngLabel}}</label>
                 <input id=ngId class="form-control ng-input" type="text" placeholder="ngLabel"
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)">
              `
})

export class TextboxComponent {
    @Input() ngId : string;
    @Input() ngClass : string;
    @Input() ngLabel: string;
    @Input() bindModelData: any;
    @Output() bindModelDataChange: any = new EventEmitter();


    updateData(event) {
        this.bindModelData = event;
        this.bindModelDataChange.emit(event);
    }
}
