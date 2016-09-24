/**
 * Created by phanquan on 4/17/16.
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
    var TextboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let TextboxComponent = class TextboxComponent {
                constructor() {
                    this.bindModelDataChange = new core_1.EventEmitter();
                }
                updateData(event) {
                    this.bindModelData = event;
                    this.bindModelDataChange.emit(event);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], TextboxComponent.prototype, "ngId", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], TextboxComponent.prototype, "ngClass", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], TextboxComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TextboxComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], TextboxComponent.prototype, "bindModelDataChange", void 0);
            TextboxComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-Textbox',
                    template: `
                 <label class="ng-label">{{ngLabel}}</label>
                 <input id=ngId class="form-control ng-input" type="text" placeholder="ngLabel"
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)">
              `
                }), 
                __metadata('design:paramtypes', [])
            ], TextboxComponent);
            exports_1("TextboxComponent", TextboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0L3RleHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZSDtnQkFBQTtvQkFLYyx3QkFBbUIsR0FBUSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFPNUQsQ0FBQztnQkFKRyxVQUFVLENBQUMsS0FBSztvQkFDWixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsQ0FBQztZQUNMLENBQUM7WUFYRztnQkFBQyxZQUFLLEVBQUU7OzBEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs2REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O21FQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzt5RUFBQTtZQWRiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBQzs7OztlQUlFO2lCQUNkLENBQUM7O2dDQUFBO1lBRUYsK0NBWUMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9pbnB1dC90ZXh0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzE3LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCxPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1UZXh0Ym94JyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm5nLWxhYmVsXCI+e3tuZ0xhYmVsfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9bmdJZCBjbGFzcz1cImZvcm0tY29udHJvbCBuZy1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuZ0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgW25nTW9kZWxdPWJpbmRNb2RlbERhdGEgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlRGF0YSgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZXh0Ym94Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBuZ0lkIDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5nQ2xhc3MgOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbmdMYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJpbmRNb2RlbERhdGE6IGFueTtcbiAgICBAT3V0cHV0KCkgYmluZE1vZGVsRGF0YUNoYW5nZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICB1cGRhdGVEYXRhKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YSA9IGV2ZW50O1xuICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
