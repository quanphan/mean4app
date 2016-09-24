/**
 * Created by phanquan on 4/17/16.
 */
System.register(['@angular/core', '../../control-component/directives/inputMask.directive'], function(exports_1, context_1) {
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
    var core_1, inputMask_directive_1;
    var InputNumberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inputMask_directive_1_1) {
                inputMask_directive_1 = inputMask_directive_1_1;
            }],
        execute: function() {
            let InputNumberComponent = class InputNumberComponent {
                constructor() {
                    this.disabled = false;
                    this.bindModelDataChange = new core_1.EventEmitter();
                    this._focused = false;
                    this.mask = { number: '' };
                }
                ngOnInit() {
                    if (this.ngMask) {
                        this.mask = { number: this.ngMask };
                    }
                }
                updateData(event) {
                    this.bindModelData = event;
                    this.bindModelDataChange.emit(event);
                }
                onBlur(event) {
                    this._focused = false;
                    //let value=event.target.value;
                    //value = value.replace(/[^0-9.-]/g, '');
                    //this.bindModelDataChange.next(value);
                }
                onFocus() {
                    this._focused = true;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputNumberComponent.prototype, "ngClass", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputNumberComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputNumberComponent.prototype, "ngMask", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], InputNumberComponent.prototype, "disabled", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], InputNumberComponent.prototype, "maxLength", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputNumberComponent.prototype, "ngMask", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputNumberComponent.prototype, "ngPlaceholder", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], InputNumberComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], InputNumberComponent.prototype, "bindModelDataChange", void 0);
            InputNumberComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-InputNumber',
                    template: `
                 <label class="ng-label" [class.has-active]="_focused">{{ngLabel}}</label>
                 <input  *ngIf="ngMask" [textMask]="mask"  class="form-control ng-input"
                 [ngModel]="bindModelData" (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur($event)"
                 [required]="required"
                 >
                  <input  *ngIf="!ngMask"  class="form-control ng-input"
                 [ngModel]="bindModelData" (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur($event)"
                 [required]="required"
                 >
              `,
                    directives: [inputMask_directive_1.MaskedInputDirective],
                }), 
                __metadata('design:paramtypes', [])
            ], InputNumberComponent);
            exports_1("InputNumberComponent", InputNumberComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0TnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJIO2dCQUFBO29CQUlhLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBS3RCLHdCQUFtQixHQUFRLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUV4RCxhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUN2QixTQUFJLEdBQUMsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLENBQUM7Z0JBeUJyQixDQUFDO2dCQXhCRyxRQUFRO29CQUNKLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDZixDQUFDO3dCQUNHLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNwQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsVUFBVSxDQUFDLEtBQUs7b0JBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLCtCQUErQjtvQkFDL0IseUNBQXlDO29CQUN6Qyx1Q0FBdUM7Z0JBQzNDLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztZQUdMLENBQUM7WUFwQ0c7Z0JBQUMsWUFBSyxFQUFFOztpRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2dFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztrRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7bUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2dFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt1RUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7dUVBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7OzZFQUFBO1lBN0JiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7ZUFZRTtvQkFFWCxVQUFVLEVBQUMsQ0FBQywwQ0FBb0IsQ0FBQztpQkFFcEMsQ0FBQzs7b0NBQUE7WUFFRix1REFxQ0MsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9pbnB1dC9pbnB1dE51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzE3LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCxPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hc2tlZElucHV0RGlyZWN0aXZlfSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9kaXJlY3RpdmVzL2lucHV0TWFzay5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1JbnB1dE51bWJlcicsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJuZy1sYWJlbFwiIFtjbGFzcy5oYXMtYWN0aXZlXT1cIl9mb2N1c2VkXCI+e3tuZ0xhYmVsfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgICpuZ0lmPVwibmdNYXNrXCIgW3RleHRNYXNrXT1cIm1hc2tcIiAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctaW5wdXRcIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJiaW5kTW9kZWxEYXRhXCIgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlRGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heExlbmd0aFwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAgKm5nSWY9XCIhbmdNYXNrXCIgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiYmluZE1vZGVsRGF0YVwiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZURhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLm1heGxlbmd0aF09XCJtYXhMZW5ndGhcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGBcbiAgICAsXG4gICAgZGlyZWN0aXZlczpbTWFza2VkSW5wdXREaXJlY3RpdmVdLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgSW5wdXROdW1iZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIG5nQ2xhc3MgOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbmdMYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5nTWFzazogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOmJvb2xlYW49ZmFsc2U7XG4gICAgQElucHV0KCkgbWF4TGVuZ3RoOm51bWJlcjtcbiAgICBASW5wdXQoKSBuZ01hc2s6IHN0cmluZztcbiAgICBASW5wdXQoKSBuZ1BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYmluZE1vZGVsRGF0YTogYW55O1xuICAgIEBPdXRwdXQoKSBiaW5kTW9kZWxEYXRhQ2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfZm9jdXNlZDpib29sZWFuPWZhbHNlO1xuICAgIG1hc2s9e251bWJlcjonJ307XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmKHRoaXMubmdNYXNrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1hc2s9e251bWJlcjp0aGlzLm5nTWFzayB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShldmVudCkge1xuICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGEgPSBldmVudDtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uQmx1cihldmVudCkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIC8vbGV0IHZhbHVlPWV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgLy92YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teMC05Li1dL2csICcnKTtcbiAgICAgICAgLy90aGlzLmJpbmRNb2RlbERhdGFDaGFuZ2UubmV4dCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
