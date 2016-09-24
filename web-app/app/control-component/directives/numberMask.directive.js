/**
 * Created by phanquan on 7/31/16.
 */
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
            let MaskedInputDirective = class MaskedInputDirective {
                constructor(inputElement) {
                    this.textMaskConfig = {
                        mask: '',
                    };
                    this.inputElement = inputElement.nativeElement;
                }
                ngOnInit() {
                    const { placeholderChar } = this.textMaskConfig;
                    this.control = createTextMaskInputElement.createNumberMask({ allowDecimal: true });
                    setTimeout(() => this.onInput());
                }
                onInput() {
                    this.control.update();
                }
            };
            __decorate([
                core_1.Input('nMask'), 
                __metadata('design:type', Object)
            ], MaskedInputDirective.prototype, "textMaskConfig", void 0);
            MaskedInputDirective = __decorate([
                core_1.Directive({
                    selector: 'input[nMask]',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2RpcmVjdGl2ZXMvbnVtYmVyTWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0g7Z0JBU0ksWUFBWSxZQUF3QjtvQkFMcEIsbUJBQWMsR0FBRzt3QkFDN0IsSUFBSSxFQUFFLEVBQUU7cUJBRVgsQ0FBQztvQkFHRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUE7Z0JBQ2xELENBQUM7Z0JBRUQsUUFBUTtvQkFDSixNQUFNLEVBQUMsZUFBZSxFQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztvQkFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRSwwQkFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO29CQUVoRixVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCxPQUFPO29CQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLENBQUM7WUFDTCxDQUFDO1lBcEJHO2dCQUFDLFlBQUssQ0FBQyxPQUFPLENBQUM7O3dFQUFBO1lBVm5CO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDRixTQUFTLEVBQUUsV0FBVztxQkFDekI7aUJBQ0osQ0FBQzs7b0NBQUE7WUFDRix1REF3QkMsQ0FBQTtZQUUrQiw0Q0FBUyIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9kaXJlY3RpdmVzL251bWJlck1hc2suZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMzEvMTYuXG4gKi9cbi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA3LzI0LzE2LlxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLEF0dHJpYnV0ZSwgRWxlbWVudFJlZixIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQgZnJvbSAndGV4dG1hc2svY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQuanMnXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaW5wdXRbbk1hc2tdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcoaW5wdXQpJzogJ29uSW5wdXQoKSdcbiAgICB9XG59KVxuZXhwb3J0ICBjbGFzcyBNYXNrZWRJbnB1dERpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6SFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgY29udHJvbDogYW55O1xuXG4gICAgQElucHV0KCduTWFzaycpIHRleHRNYXNrQ29uZmlnID0ge1xuICAgICAgICBtYXNrOiAnJyxcblxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBpbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCB7cGxhY2Vob2xkZXJDaGFyfSA9IHRoaXMudGV4dE1hc2tDb25maWc7XG5cbiAgICAgICAgdGhpcy5jb250cm9sID1jcmVhdGVUZXh0TWFza0lucHV0RWxlbWVudC5jcmVhdGVOdW1iZXJNYXNrKHthbGxvd0RlY2ltYWw6IHRydWV9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25JbnB1dCgpKTtcbiAgICB9XG5cbiAgICBvbklucHV0KCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wudXBkYXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQge01hc2tlZElucHV0RGlyZWN0aXZlIGFzIERpcmVjdGl2ZX1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
