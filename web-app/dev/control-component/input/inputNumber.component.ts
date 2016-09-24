
/**
 * Created by phanquan on 4/17/16.
 */

import {Component, Input,Output, EventEmitter} from '@angular/core';
import {MaskedInputDirective} from '../../control-component/directives/inputMask.directive';

@Component({
    selector: 'ng2-InputNumber',
    template:`
                 <label class="ng-label" [class.has-active]="_focused">{{ngLabel}}</label>
                 <input  *ngIf="ngMask" [textMask]="mask"  class="form-control ng-input"
                 [ngModel]="bindModelData" (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur($event)"
                 [required]="required"
                 >
                  <input  *ngIf="!ngMask"  class="form-control ng-input"
                 [ngModel]="bindModelData" (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur($event)"
                 [required]="required"
                 >
              `
    ,
    directives:[MaskedInputDirective],

})

export class InputNumberComponent {
    @Input() ngClass : string;
    @Input() ngLabel: string;
    @Input() ngMask: string;
    @Input() disabled:boolean=false;
    @Input() maxLength:number;
    @Input() ngMask: string;
    @Input() ngPlaceholder: string;
    @Input() bindModelData: any;
    @Output() bindModelDataChange: any = new EventEmitter();

    _focused:boolean=false;
    mask={number:''};
    ngOnInit() {
        if(this.ngMask)
        {
            this.mask={number:this.ngMask };
        }
    }

    updateData(event) {
        this.bindModelData = event;
        this.bindModelDataChange.emit(event);
    }

    onBlur(event) {
        this._focused = false;
        //let value=event.target.value;
        //value = value.replace(/[^0-9.-]/g, '');
        //this.bindModelDataChange.next(value);
    }

    onFocus() {
        this._focused = true;
    }


}
