/**
 * Created by phanquan on 4/17/16.
 */

import {Component, Input,Output, EventEmitter,Attribute} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MaskedInputDirective} from '../../control-component/directives/inputMask.directive';
import {ErrorMessages} from '../../control-component/errorMessages.component';
@Component({
    selector: 'ng2-Input',
    template:`
             <div >
                 <label for="control" class="ng-label" [class.has-active]="_focused" >{{ngLabel}}
                    <i class="fa fa-fw alerterror-icon" [class.fa-star]="control.hasError('required')"></i>
                 </label>
                 <input *ngIf="ngMask" [textMask]="mask" [id]="Id" class="form-control ng-input" type={{type}}
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()"
                  [formControl]="control"
                 >
                 <input *ngIf="!ngMask" [id]="Id" class="form-control ng-input" type={{type}} placeholder="{{ngPlaceholder}}"
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()"
                 [formControl]="control"
                 >
                <!--<error-messages [control]="control"></error-messages>-->
              </div>
              `
    ,

    directives:[MaskedInputDirective,ErrorMessages]
})

export class InputComponent {
    @Input() id : string;
    @Input() ngClass : string;
    @Input() type : string="text";
    @Input() ngLabel: string;
    @Input() ngMask: string;
    @Input() ngPlaceholder: string;
    @Input() disabled:boolean=false;
    @Input() maxLength:number;
    @Input() bindModelData: any;
    @Input() control: FormControl;
    @Output() bindModelDataChange: any = new EventEmitter();

    _focused:boolean=false;
    mask={mask:''};

    ngOnInit() {
        if(this.ngMask)
        {
            this.mask={mask:this.ngMask };
        }
        if(!this.control){
            this.control=new FormControl([""]);
        }
    }

    //get isValid() {
    //    if(!this.control) return true;
    //    if(this.control.valid || this.control.pristine)
    //        return true;
    //    return false;
    //}

    get Id(): string {
        return this.id ? this.id : `ng2-input-`;
    }

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

}
