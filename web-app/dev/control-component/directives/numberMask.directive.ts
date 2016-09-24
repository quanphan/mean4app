/**
 * Created by phanquan on 7/31/16.
 */
/**
 * Created by phanquan on 7/24/16.
 */

import {Directive,Attribute, ElementRef,HostListener, Input} from '@angular/core'
import * as createTextMaskInputElement from 'textmask/createTextMaskInputElement.js'

@Directive({
    selector: 'input[nMask]',
    host: {
        '(input)': 'onInput()'
    }
})
export  class MaskedInputDirective {
    private inputElement:HTMLInputElement;
    public control: any;

    @Input('nMask') textMaskConfig = {
        mask: '',

    };

    constructor(inputElement: ElementRef) {
        this.inputElement = inputElement.nativeElement
    }

    ngOnInit() {
        const {placeholderChar} = this.textMaskConfig;

        this.control =createTextMaskInputElement.createNumberMask({allowDecimal: true});

        setTimeout(() => this.onInput());
    }

    onInput() {
        this.control.update();
    }
}

export {MaskedInputDirective as Directive}


