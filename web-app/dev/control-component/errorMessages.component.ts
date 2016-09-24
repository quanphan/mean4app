/**
 * Created by phanquan on 8/7/16.
 */


import {Component, Input } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {ValidatorCore} from '../core/validators';

@Component({
    selector: 'error-messages',
    template: `<div *ngIf="errorMessage !== null" class="alerterror">{{errorMessage}}</div>`
})
export class ErrorMessages {
    errorMessage: string;
    @Input() control: FormControl;
    constructor() { }

    get errorMessage() {
        if(this.control.pristine) return null;
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidatorCore.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}