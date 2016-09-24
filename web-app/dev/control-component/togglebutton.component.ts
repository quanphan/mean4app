/**
 * Created by phanquan on 5/8/16.
 */

import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'ng2-togglebutton',
    template: `
     <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default btn-flat " [class.status-active]="isChecked"  [style.width]="ngItemWidth" (click)="onClick()">{{ngLabelYes}}</button>
            <button type="button" class="btn btn-default btn-flat" [class.status-active]="!isChecked" [style.width]="ngItemWidth" (click)="onClick()">{{ngLabelNo}}</button>
     </div>
  `
})

export class TogglebuttonComponent {
    @Input() ngLabelYes: any;
    @Input() ngLabelNo: any;
    @Input() ngItemWidth: any;
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

