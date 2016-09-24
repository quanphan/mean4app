/**
 * Created by phanquan on 5/2/16.
 */
/**
 * Created by phanquan on 4/17/16.
 */

import {Component, Input,Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'ng2-Search',
    template:`
                 <span class="input-group btn-block" (click)="onFocus()" (blur)="onBlur()">
                     <input class="form-control ng-search" type="text" placeholder="{{ngLabel}}"
                     [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                     [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()" (keypress)="onKeyPress($event.keyCode)">
                     <span class="input-group-addon pointer" [class.ng-input-active]="_focused" (click)="onClick($event)">
                     <i class="fa fa-search"></i></span>
                  </span>
              `
})

export class SearchComponent {
    @Input() ngClass : string;
    @Input() ngLabel: string;
    @Input() disabled:boolean=false;
    @Input() maxLength:number;
    @Input() bindModelData: any;
    @Output() bindModelDataChange: any = new EventEmitter();
    @Output() onSearch: any = new EventEmitter();
    _focused:boolean=false;

    updateData(event) {
        this.bindModelData = event;
        this.bindModelDataChange.emit(event);
    }

    onFocus() {
        this._focused = true;
    }

    onBlur() {
        this._focused = false;
    }

    onClick(event) {
        this.onSearch.emit(event);
    }

    onKeyPress(keyCode){
        if(keyCode==13){
            this.onSearch.emit(event);
        }
    }

}
