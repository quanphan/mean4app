/**
 * Created by phanquan on 7/24/16.
 */
System.register(['@angular/core', '@angular/forms', 'textmask/createTextMaskInputElement'], function(exports_1, context_1) {
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
    var core_1, forms_1, createTextMaskInputElement_1;
    var MaskedInputDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (createTextMaskInputElement_1_1) {
                createTextMaskInputElement_1 = createTextMaskInputElement_1_1;
            }],
        execute: function() {
            MaskedInputDirective = (function () {
                function MaskedInputDirective(inputElement, ngControl) {
                    this.ngControl = ngControl;
                    this.textMaskConfig = {
                        mask: '',
                        guide: true,
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
                    this.control = createTextMaskInputElement_1.default(Object.assign({
                        inputElement: this.inputElement,
                        placeholderChar: placeholderChar,
                    }, this.textMaskConfig));
                    setTimeout(function () { return _this.onInput(); });
                };
                MaskedInputDirective.prototype.onInput = function () {
                    this.control.update();
                    this.ngControl.viewToModelUpdate(this.inputElement.value);
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
                    __metadata('design:paramtypes', [core_1.ElementRef, forms_1.NgControl])
                ], MaskedInputDirective);
                return MaskedInputDirective;
            }());
            exports_1("default", MaskedInputDirective);
            exports_1("Directive", MaskedInputDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L3RleHRNYXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUg7Z0JBY0ksOEJBQVksWUFBd0IsRUFBVSxTQUFvQjtvQkFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFWL0MsbUJBQWMsR0FBRzt3QkFDaEMsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLElBQUk7d0JBQ1gsZUFBZSxFQUFFLEdBQUc7d0JBQ3BCLElBQUksRUFBRSxTQUFTO3dCQUNmLGlCQUFpQixFQUFFLEtBQUs7d0JBQ3hCLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsU0FBUztxQkFDdEIsQ0FBQztvQkFHRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUE7Z0JBQ2xELENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQVSx5REFBZSxDQUF3QjtvQkFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQ0FBMEIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUNwRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7d0JBQy9CLGlCQUFBLGVBQWU7cUJBQ2xCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBRXpCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELHNDQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQTNCRDtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOzs0RUFBQTtnQkFWdEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixJQUFJLEVBQUU7NEJBQ0YsU0FBUyxFQUFFLFdBQVc7eUJBQ3pCO3FCQUNKLENBQUM7O3dDQUFBO2dCQWlDRiwyQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QsMENBZ0NDLENBQUE7WUFFK0IsNENBQVMiLCJmaWxlIjoiY29udHJvbC1jb21wb25lbnQvdGV4dE1hc2suY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMjQvMTYuXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IGNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50IGZyb20gJ3RleHRtYXNrL2NyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50J1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2lucHV0W3RleHRNYXNrXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGlucHV0KSc6ICdvbklucHV0KCknXG4gICAgfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tlZElucHV0RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIGlucHV0RWxlbWVudDpIVE1MSW5wdXRFbGVtZW50O1xuICAgIHB1YmxpYyBjb250cm9sOiBhbnk7XG5cbiAgICBASW5wdXQoJ3RleHRNYXNrJykgdGV4dE1hc2tDb25maWcgPSB7XG4gICAgICAgIG1hc2s6ICcnLFxuICAgICAgICBndWlkZTogdHJ1ZSxcbiAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiAnXycsXG4gICAgICAgIHBpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAga2VlcENoYXJQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgICBvblJlamVjdDogdW5kZWZpbmVkLFxuICAgICAgICBvbkFjY2VwdDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKGlucHV0RWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudCA9IGlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IHtwbGFjZWhvbGRlckNoYXJ9ID0gdGhpcy50ZXh0TWFza0NvbmZpZztcbiAgICAgICAgdGhpcy5jb250cm9sID0gY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQ6IHRoaXMuaW5wdXRFbGVtZW50LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICB9LCB0aGlzLnRleHRNYXNrQ29uZmlnKSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uSW5wdXQoKSk7XG4gICAgfVxuXG4gICAgb25JbnB1dCgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmlucHV0RWxlbWVudC52YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQge01hc2tlZElucHV0RGlyZWN0aXZlIGFzIERpcmVjdGl2ZX1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
