/**
 * Created by phanquan on 6/25/16.
 */
System.register(['@angular/core', '../../control-component/input/input.component'], function(exports_1, context_1) {
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
    var core_1, input_component_1;
    var PricingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            let PricingComponent = class PricingComponent {
                constructor() {
                    this.pricing = {};
                }
            };
            PricingComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/home/pricing.html',
                    directives: [input_component_1.InputComponent],
                }), 
                __metadata('design:paramtypes', [])
            ], PricingComponent);
            exports_1("PricingComponent", PricingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9wcmljaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUg7Z0JBQUE7b0JBQ0ksWUFBTyxHQUFDLEVBQUUsQ0FBQztnQkFDZixDQUFDO1lBQUQsQ0FBQztZQVBEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLDBCQUEwQjtvQkFDdkMsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztpQkFDL0IsQ0FBQzs7Z0NBQUE7WUFFRiwrQ0FFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9wcmljaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA2LzI1LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJpY2luZ0NvbXBvbmVudH0gZnJvbSAgJ2NvbXBvbmVudHMvaG9tZS9wcmljaW5nLmNvbXBvbmVudCdcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9ob21lL3ByaWNpbmcuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0lucHV0Q29tcG9uZW50XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcmljaW5nQ29tcG9uZW50IHtcbiAgICBwcmljaW5nPXt9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
