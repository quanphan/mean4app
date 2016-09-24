/**
 * Created by phanquan on 5/7/16.
 */

import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'ng2-checkbox',
    template: `
     <div class="ng-checkbox">
       <span (click)="onClick()"><i class="icheckbox glyphicon " [class.glyphicon-unchecked]="!isChecked" [class.glyphicon-ok]="isChecked"></i>{{ngLabel}}</span>
    </div>
  `
})

export class CheckboxComponent {
    @Input() ngLabel: any;
    @Input() bindModelData: boolean;
    @Output() bindModelDataChange: EventEmitter;

    constructor() {
        this.bindModelDataChange = new EventEmitter();
    }

    isChecked:boolean=this.bindModelData;

    onClick(){
        this.isChecked=!this.isChecked;
        this.bindModelData = this.isChecked;
        this.bindModelDataChange.emit(this.isChecked);
    }

}
