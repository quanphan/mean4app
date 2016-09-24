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
            MaskedInputDirective = (function () {
                function MaskedInputDirective(inputElement) {
                    this.textMaskConfig = {
                        mask: '',
                        guide: false,
                        placeholderChar: '_',
                        pipe: undefined,
                        keepCharPositions: false,
                        onReject: undefined,
                        onAccept: undefined
                    };
                    this.inputElement = inputElement.nativeElement;
                }
                MaskedInputDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    var placeholderChar = this.textMaskConfig.placeholderChar;
                    this.control = createTextMaskInputElement.createTextMaskInputElement(Object.assign({
                        inputElement: this.inputElement,
                        placeholderChar: placeholderChar,
                    }, this.textMaskConfig));
                    setTimeout(function () { return _this.onInput(); });
                };
                MaskedInputDirective.prototype.onInput = function () {
                    this.control.update();
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
                return MaskedInputDirective;
            }());
            exports_1("MaskedInputDirective", MaskedInputDirective);
            exports_1("Directive", MaskedInputDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L3RleHRNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXSDtnQkFjSSw4QkFBWSxZQUF3QjtvQkFWakIsbUJBQWMsR0FBRzt3QkFDaEMsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLEtBQUs7d0JBQ1osZUFBZSxFQUFFLEdBQUc7d0JBQ3BCLElBQUksRUFBRSxTQUFTO3dCQUNmLGlCQUFpQixFQUFFLEtBQUs7d0JBQ3hCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsU0FBUztxQkFDdEIsQ0FBQztvQkFHRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUE7Z0JBQ2xELENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFBQSxpQkFTQztvQkFSVSx5REFBZSxDQUF3QjtvQkFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRSwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUM5RSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7d0JBQy9CLGlCQUFBLGVBQWU7cUJBQ2xCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBRXpCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELHNDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkEzQkQ7b0JBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7NEVBQUE7Z0JBVnRCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsSUFBSSxFQUFFOzRCQUNGLFNBQVMsRUFBRSxXQUFXO3lCQUN6QjtxQkFDSixDQUFDOzt3Q0FBQTtnQkFpQ0YsMkJBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELHVEQWdDQyxDQUFBO1lBRStCLDRDQUFTIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L3RleHRNYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMjQvMTYuXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsQXR0cmlidXRlLCBFbGVtZW50UmVmLEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBjcmVhdGVUZXh0TWFza0lucHV0RWxlbWVudCBmcm9tICd0ZXh0bWFzay9jcmVhdGVUZXh0TWFza0lucHV0RWxlbWVudC5qcydcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdpbnB1dFt0ZXh0TWFza10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhpbnB1dCknOiAnb25JbnB1dCgpJ1xuICAgIH1cbn0pXG5leHBvcnQgIGNsYXNzIE1hc2tlZElucHV0RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIGlucHV0RWxlbWVudDpIVE1MSW5wdXRFbGVtZW50O1xuICAgIHB1YmxpYyBjb250cm9sOiBhbnk7XG5cbiAgICBASW5wdXQoJ3RleHRNYXNrJykgdGV4dE1hc2tDb25maWcgPSB7XG4gICAgICAgIG1hc2s6ICcnLFxuICAgICAgICBndWlkZTogZmFsc2UsXG4gICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogJ18nLFxuICAgICAgICBwaXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGtlZXBDaGFyUG9zaXRpb25zOiBmYWxzZSxcbiAgICAgICAgb25SZWplY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgb25BY2NlcHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBpbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCB7cGxhY2Vob2xkZXJDaGFyfSA9IHRoaXMudGV4dE1hc2tDb25maWc7XG5cbiAgICAgICAgdGhpcy5jb250cm9sID1jcmVhdGVUZXh0TWFza0lucHV0RWxlbWVudC5jcmVhdGVUZXh0TWFza0lucHV0RWxlbWVudChPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudDogdGhpcy5pbnB1dEVsZW1lbnQsXG4gICAgICAgICAgICBwbGFjZWhvbGRlckNoYXIsXG4gICAgICAgIH0sIHRoaXMudGV4dE1hc2tDb25maWcpKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25JbnB1dCgpKTtcbiAgICB9XG5cbiAgICBvbklucHV0KCkge1xuICAgICAgICB0aGlzLmNvbnRyb2wudXBkYXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQge01hc2tlZElucHV0RGlyZWN0aXZlIGFzIERpcmVjdGl2ZX1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
