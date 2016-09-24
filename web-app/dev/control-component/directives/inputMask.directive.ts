/**
 * Created by phanquan on 7/24/16.
 */

import {Directive,Attribute, ElementRef,HostListener, Input} from '@angular/core'
import * as createTextMaskInputElement from 'textmask/createTextMaskInputElement.js'

@Directive({
    selector: 'input[textMask]',
    host: {
        '(input)': 'onInput()'
    }
})
export  class MaskedInputDirective {
    private inputElement:HTMLInputElement;
    public control: any;

    @Input('textMask') textMaskConfig = {
        mask: '',
        guide: false,
        placeholderChar: '_',
        pipe: undefined,
        keepCharPositions: false,
        number:'',
        onReject: undefined,
        onAccept: undefined
    };

    constructor(inputElement: ElementRef) {
        this.inputElement = inputElement.nativeElement
    }

    ngOnInit() {
        const {placeholderChar} = this.textMaskConfig;

        const numberMask = createTextMaskInputElement.createNumberMask({
            suprefix:'',
            suffix:'',
            allowDecimal: true
        })

        this.textMaskConfig.mask=this.textMaskConfig.number!=undefined ? numberMask:this.textMaskConfig.mask ;

        this.control =createTextMaskInputElement.createTextMask(Object.assign({
            inputElement: this.inputElement,
            placeholderChar,
        }, this.textMaskConfig));

        setTimeout(() => this.onInput());
    }

    onInput() {
        this.control.update();
    }
}

export {MaskedInputDirective as Directive}


