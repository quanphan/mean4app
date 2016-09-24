/**
 * Created by phanquan on 9/24/16.
 */

import {NgModule }       from '@angular/core';
import {BrowserModule }  from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule }    from '@angular/forms';
import {CommonModule }       from '@angular/common';

import {InputComponent} from './input/input.component';
import {SearchComponent} from './input/search.component';
import {MutliSelectComponent} from './mutilselect.component';
import {SelectComponent} from './select.component';
import {DatePicker} from './dateinput.component';
import {InputNumberComponent} from './input/inputNumber.component';

import {ComboComponent} from './combobox.component';
import {DropdownComponent} from './dropdown.component';
import {MutliSelectComponent} from './mutilselect.component';
import {MaskInput} from './inputMask.component';
import {MaskedInputDirective} from './directives/inputMask.directive';

@NgModule({
    imports: [
        CommonModule, FormsModule,ReactiveFormsModule,BrowserModule
    ],
    declarations: [
        InputComponent,MutliSelectComponent,SelectComponent,DatePicker,InputNumberComponent,
        ComboComponent,DropdownComponent,MutliSelectComponent,
        MaskedInputDirective,SearchComponent
    ],
    providers: [

    ],
    exports:[InputComponent,MutliSelectComponent,SelectComponent,DatePicker,InputNumberComponent,
        ComboComponent,DropdownComponent,MutliSelectComponent,
        MaskedInputDirective,SearchComponent
    ],

})

export class MeanControlModule {

}
