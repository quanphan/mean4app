/**
 * Created by phanquan on 7/24/16.
 */
System.register(['@angular/core', 'textmask/createTextMaskInputElement.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, createTextMaskInputElement;
    var MaskedInputDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (createTextMaskInputElement_1) {
                createTextMaskInputElement = createTextMaskInputElement_1;
            }],
        execute: function() {
            //import * as createTextMaskInputElement from '../../core/mask/textmask'
            let MaskedInputDirective = class MaskedInputDirective {
                constructor(inputElement) {
                    this.textMaskConfig = {
                        mask: '',
                        guide: false,
                        placeholderChar: '_',
                        pipe: undefined,
                        keepCharPositions: false,
                        number: '',
                        onReject: undefined,
                        onAccept: ''
                    };
                    this.inputElement = inputElement.nativeElement;
                }
                ngOnInit() {
                    const { placeholderChar } = this.textMaskConfig;
                    const numberMask = createTextMaskInputElement.createNumberMask({
                        suprefix: '',
                        suffix: '',
                        allowDecimal: true
                    });
                    this.textMaskConfig.mask = this.textMaskConfig.number != undefined ? numberMask : this.textMaskConfig.mask;
                    this.control = createTextMaskInputElement.createTextMask(Object.assign({
                        inputElement: this.inputElement,
                        placeholderChar: placeholderChar,
                    }, this.textMaskConfig));
                    setTimeout(() => this.onInput());
                }
                onInput() {
                    this.control.update();
                }
            };
            __decorate([
                core_1.Input('textMask'), 
                __metadata('design:type', Object)
            ], MaskedInputDirective.prototype, "textMaskConfig", void 0);
            MaskedInputDirective = __decorate([
                core_1.Directive({
                    selector: 'input[textMask]',
                    host: {
                        '(input)': 'onInput()'
                    }
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], MaskedInputDirective);
            exports_1("MaskedInputDirective", MaskedInputDirective);
            exports_1("Directive", MaskedInputDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2RpcmVjdGl2ZXMvaW5wdXRNYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUgsd0VBQXdFO1lBU3hFO2dCQWVJLFlBQVksWUFBd0I7b0JBWGpCLG1CQUFjLEdBQUc7d0JBQ2hDLElBQUksRUFBRSxFQUFFO3dCQUNSLEtBQUssRUFBRSxLQUFLO3dCQUNaLGVBQWUsRUFBRSxHQUFHO3dCQUNwQixJQUFJLEVBQUUsU0FBUzt3QkFDZixpQkFBaUIsRUFBRSxLQUFLO3dCQUN4QixNQUFNLEVBQUMsRUFBRTt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLEVBQUU7cUJBQ2YsQ0FBQztvQkFHRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUE7Z0JBQ2xELENBQUM7Z0JBRUQsUUFBUTtvQkFDSixNQUFNLEVBQUMsZUFBZSxFQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFFOUMsTUFBTSxVQUFVLEdBQUcsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUM7d0JBQzNELFFBQVEsRUFBQyxFQUFFO3dCQUNYLE1BQU0sRUFBQyxFQUFFO3dCQUNULFlBQVksRUFBRSxJQUFJO3FCQUNyQixDQUFDLENBQUE7b0JBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUUsU0FBUyxHQUFHLFVBQVUsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBRTtvQkFFdEcsSUFBSSxDQUFDLE9BQU8sR0FBRSwwQkFBMEIsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixpQkFBQSxlQUFlO3FCQUNsQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUV6QixVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCxPQUFPO29CQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLENBQUM7WUFDTCxDQUFDO1lBckNHO2dCQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7O3dFQUFBO1lBWHRCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsSUFBSSxFQUFFO3dCQUNGLFNBQVMsRUFBRSxXQUFXO3FCQUN6QjtpQkFDSixDQUFDOztvQ0FBQTtZQUVGLHVEQXlDQyxDQUFBO1lBRStCLDRDQUFTIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2RpcmVjdGl2ZXMvaW5wdXRNYXNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA3LzI0LzE2LlxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLEF0dHJpYnV0ZSwgRWxlbWVudFJlZixIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQgZnJvbSAndGV4dG1hc2svY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQuanMnXG4vL2ltcG9ydCAqIGFzIGNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50IGZyb20gJy4uLy4uL2NvcmUvbWFzay90ZXh0bWFzaydcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdpbnB1dFt0ZXh0TWFza10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhpbnB1dCknOiAnb25JbnB1dCgpJ1xuICAgIH1cbn0pXG5cbmV4cG9ydCAgY2xhc3MgTWFza2VkSW5wdXREaXJlY3RpdmUge1xuICAgIHByaXZhdGUgaW5wdXRFbGVtZW50OkhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHVibGljIGNvbnRyb2w6IGFueTtcblxuICAgIEBJbnB1dCgndGV4dE1hc2snKSB0ZXh0TWFza0NvbmZpZyA9IHtcbiAgICAgICAgbWFzazogJycsXG4gICAgICAgIGd1aWRlOiBmYWxzZSxcbiAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiAnXycsXG4gICAgICAgIHBpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAga2VlcENoYXJQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgICBudW1iZXI6JycsXG4gICAgICAgIG9uUmVqZWN0OiB1bmRlZmluZWQsXG4gICAgICAgIG9uQWNjZXB0OiAnJ1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBpbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCB7cGxhY2Vob2xkZXJDaGFyfSA9IHRoaXMudGV4dE1hc2tDb25maWc7XG5cbiAgICAgICAgY29uc3QgbnVtYmVyTWFzayA9IGNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50LmNyZWF0ZU51bWJlck1hc2soe1xuICAgICAgICAgICAgc3VwcmVmaXg6JycsXG4gICAgICAgICAgICBzdWZmaXg6JycsXG4gICAgICAgICAgICBhbGxvd0RlY2ltYWw6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRleHRNYXNrQ29uZmlnLm1hc2s9dGhpcy50ZXh0TWFza0NvbmZpZy5udW1iZXIhPXVuZGVmaW5lZCA/IG51bWJlck1hc2s6dGhpcy50ZXh0TWFza0NvbmZpZy5tYXNrIDtcblxuICAgICAgICB0aGlzLmNvbnRyb2wgPWNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50LmNyZWF0ZVRleHRNYXNrKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgaW5wdXRFbGVtZW50OiB0aGlzLmlucHV0RWxlbWVudCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgfSwgdGhpcy50ZXh0TWFza0NvbmZpZykpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbklucHV0KCkpO1xuICAgIH1cblxuICAgIG9uSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC51cGRhdGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7TWFza2VkSW5wdXREaXJlY3RpdmUgYXMgRGlyZWN0aXZlfVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
