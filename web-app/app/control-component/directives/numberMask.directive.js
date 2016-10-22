/**
 * Created by phanquan on 7/31/16.
 */
System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MaskedNumberDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import * as createTextMaskInputElement from 'textmask/createTextMaskInputElement.js'
            let MaskedNumberDirective = class MaskedNumberDirective {
                constructor(inputElement) {
                    this.textMaskConfig = {
                        mask: '',
                        guide: false,
                        placeholderChar: '_',
                        pipe: undefined,
                        keepCharPositions: false,
                        number: '',
                        onReject: undefined,
                        onAccept: undefined
                    };
                    this.inputElement = inputElement.nativeElement;
                }
                ngOnInit() {
                    const { placeholderChar } = this.textMaskConfig;
                    //const numberMask = createTextMaskInputElement.createNumberMask({
                    //    suprefix:'',
                    //    suffix:'',
                    //    allowDecimal: true
                    //});
                    //this.textMaskConfig.mask=numberMask ;
                    //this.control =createTextMaskInputElement.createTextMask(Object.assign({
                    //    inputElement: this.inputElement,
                    //    placeholderChar,
                    //}, this.textMaskConfig));
                    setTimeout(() => this.onInput());
                }
                onInput() {
                    this.control.update();
                }
            };
            __decorate([
                core_1.Input('textMask'), 
                __metadata('design:type', Object)
            ], MaskedNumberDirective.prototype, "textMaskConfig", void 0);
            MaskedNumberDirective = __decorate([
                core_1.Directive({
                    selector: 'input[nMask]',
                    host: {
                        '(input)': 'onInput()'
                    }
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], MaskedNumberDirective);
            exports_1("MaskedNumberDirective", MaskedNumberDirective);
            exports_1("Directive", MaskedNumberDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2RpcmVjdGl2ZXMvbnVtYmVyTWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdILHNGQUFzRjtZQVF0RjtnQkFlSSxZQUFZLFlBQXdCO29CQVhqQixtQkFBYyxHQUFHO3dCQUNoQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixLQUFLLEVBQUUsS0FBSzt3QkFDWixlQUFlLEVBQUUsR0FBRzt3QkFDcEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsaUJBQWlCLEVBQUUsS0FBSzt3QkFDeEIsTUFBTSxFQUFDLEVBQUU7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxTQUFTO3FCQUN0QixDQUFDO29CQUdFLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQTtnQkFDbEQsQ0FBQztnQkFFRCxRQUFRO29CQUNKLE1BQU0sRUFBQyxlQUFlLEVBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUU5QyxrRUFBa0U7b0JBQ2xFLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQix3QkFBd0I7b0JBQ3hCLEtBQUs7b0JBRUwsdUNBQXVDO29CQUN2Qyx5RUFBeUU7b0JBQ3pFLHNDQUFzQztvQkFDdEMsc0JBQXNCO29CQUN0QiwyQkFBMkI7b0JBRTNCLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELE9BQU87b0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztZQUNMLENBQUM7WUFwQ0c7Z0JBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7eUVBQUE7WUFWdEI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsSUFBSSxFQUFFO3dCQUNGLFNBQVMsRUFBRSxXQUFXO3FCQUN6QjtpQkFDSixDQUFDOztxQ0FBQTtZQUNGLHlEQXdDQyxDQUFBO1lBRWdDLDZDQUFTIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2RpcmVjdGl2ZXMvbnVtYmVyTWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNy8zMS8xNi5cbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSxBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbi8vaW1wb3J0ICogYXMgY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQgZnJvbSAndGV4dG1hc2svY3JlYXRlVGV4dE1hc2tJbnB1dEVsZW1lbnQuanMnXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaW5wdXRbbk1hc2tdJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcoaW5wdXQpJzogJ29uSW5wdXQoKSdcbiAgICB9XG59KVxuZXhwb3J0ICBjbGFzcyBNYXNrZWROdW1iZXJEaXJlY3RpdmUge1xuICAgIHByaXZhdGUgaW5wdXRFbGVtZW50OkhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHVibGljIGNvbnRyb2w6IGFueTtcblxuICAgIEBJbnB1dCgndGV4dE1hc2snKSB0ZXh0TWFza0NvbmZpZyA9IHtcbiAgICAgICAgbWFzazogJycsXG4gICAgICAgIGd1aWRlOiBmYWxzZSxcbiAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiAnXycsXG4gICAgICAgIHBpcGU6IHVuZGVmaW5lZCxcbiAgICAgICAga2VlcENoYXJQb3NpdGlvbnM6IGZhbHNlLFxuICAgICAgICBudW1iZXI6JycsXG4gICAgICAgIG9uUmVqZWN0OiB1bmRlZmluZWQsXG4gICAgICAgIG9uQWNjZXB0OiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3Qge3BsYWNlaG9sZGVyQ2hhcn0gPSB0aGlzLnRleHRNYXNrQ29uZmlnO1xuXG4gICAgICAgIC8vY29uc3QgbnVtYmVyTWFzayA9IGNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50LmNyZWF0ZU51bWJlck1hc2soe1xuICAgICAgICAvLyAgICBzdXByZWZpeDonJyxcbiAgICAgICAgLy8gICAgc3VmZml4OicnLFxuICAgICAgICAvLyAgICBhbGxvd0RlY2ltYWw6IHRydWVcbiAgICAgICAgLy99KTtcblxuICAgICAgICAvL3RoaXMudGV4dE1hc2tDb25maWcubWFzaz1udW1iZXJNYXNrIDtcbiAgICAgICAgLy90aGlzLmNvbnRyb2wgPWNyZWF0ZVRleHRNYXNrSW5wdXRFbGVtZW50LmNyZWF0ZVRleHRNYXNrKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAvLyAgICBpbnB1dEVsZW1lbnQ6IHRoaXMuaW5wdXRFbGVtZW50LFxuICAgICAgICAvLyAgICBwbGFjZWhvbGRlckNoYXIsXG4gICAgICAgIC8vfSwgdGhpcy50ZXh0TWFza0NvbmZpZykpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbklucHV0KCkpO1xuICAgIH1cblxuICAgIG9uSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC51cGRhdGUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7TWFza2VkTnVtYmVyRGlyZWN0aXZlIGFzIERpcmVjdGl2ZX1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
