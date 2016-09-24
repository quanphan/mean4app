/**
 * Created by phanquan on 4/17/16.
 */
System.register(['@angular/core', '@angular/forms', '../../control-component/directives/inputMask.directive', '../../control-component/errorMessages.component'], function(exports_1, context_1) {
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
    var core_1, forms_1, inputMask_directive_1, errorMessages_component_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (inputMask_directive_1_1) {
                inputMask_directive_1 = inputMask_directive_1_1;
            },
            function (errorMessages_component_1_1) {
                errorMessages_component_1 = errorMessages_component_1_1;
            }],
        execute: function() {
            let InputComponent = class InputComponent {
                constructor() {
                    this.type = "text";
                    this.disabled = false;
                    this.bindModelDataChange = new core_1.EventEmitter();
                    this._focused = false;
                    this.mask = { mask: '' };
                }
                ngOnInit() {
                    if (this.ngMask) {
                        this.mask = { mask: this.ngMask };
                    }
                    if (!this.control) {
                        this.control = new forms_1.FormControl([""]);
                    }
                }
                //get isValid() {
                //    if(!this.control) return true;
                //    if(this.control.valid || this.control.pristine)
                //        return true;
                //    return false;
                //}
                get Id() {
                    return this.id ? this.id : `ng2-input-`;
                }
                updateData(event) {
                    this.bindModelData = event;
                    this.bindModelDataChange.emit(event);
                }
                onFocus() {
                    this._focused = true;
                }
                onBlur() {
                    this._focused = false;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "id", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngClass", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "type", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngMask", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngPlaceholder", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], InputComponent.prototype, "disabled", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], InputComponent.prototype, "maxLength", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], InputComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', forms_1.FormControl)
            ], InputComponent.prototype, "control", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], InputComponent.prototype, "bindModelDataChange", void 0);
            InputComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-Input',
                    template: `
             <div >
                 <label for="control" class="ng-label" [class.has-active]="_focused" >{{ngLabel}}
                    <i class="fa fa-fw alerterror-icon" [class.fa-star]="control.hasError('required')"></i>
                 </label>
                 <input *ngIf="ngMask" [textMask]="mask" [id]="Id" class="form-control ng-input" type={{type}}
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()"
                  [formControl]="control"
                 >
                 <input *ngIf="!ngMask" [id]="Id" class="form-control ng-input" type={{type}} placeholder="{{ngPlaceholder}}"
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()"
                 [formControl]="control"
                 >
                <!--<error-messages [control]="control"></error-messages>-->
              </div>
              `,
                    directives: [inputMask_directive_1.MaskedInputDirective, errorMessages_component_1.ErrorMessages]
                }), 
                __metadata('design:paramtypes', [])
            ], InputComponent);
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JIO2dCQUFBO29CQUdhLFNBQUksR0FBVSxNQUFNLENBQUM7b0JBSXJCLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBSXRCLHdCQUFtQixHQUFRLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUV4RCxhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUN2QixTQUFJLEdBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Z0JBb0NuQixDQUFDO2dCQWxDRyxRQUFRO29CQUNKLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDZixDQUFDO3dCQUNHLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsQyxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsaUJBQWlCO2dCQUNqQixvQ0FBb0M7Z0JBQ3BDLHFEQUFxRDtnQkFDckQsc0JBQXNCO2dCQUN0QixtQkFBbUI7Z0JBQ25CLEdBQUc7Z0JBRUgsSUFBSSxFQUFFO29CQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELFVBQVUsQ0FBQyxLQUFLO29CQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELE9BQU87b0JBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsTUFBTTtvQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsQ0FBQztZQUVMLENBQUM7WUFqREc7Z0JBQUMsWUFBSyxFQUFFOztzREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7MkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O3dEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzsyREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7MERBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2lFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2lFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzsyREFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7dUVBQUE7WUFwQ2I7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztlQWlCRTtvQkFHWCxVQUFVLEVBQUMsQ0FBQywwQ0FBb0IsRUFBQyx1Q0FBYSxDQUFDO2lCQUNsRCxDQUFDOzs4QkFBQTtZQUVGLDJDQWtEQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzE3LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCxPdXRwdXQsIEV2ZW50RW1pdHRlcixBdHRyaWJ1dGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXNrZWRJbnB1dERpcmVjdGl2ZX0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvZGlyZWN0aXZlcy9pbnB1dE1hc2suZGlyZWN0aXZlJztcbmltcG9ydCB7RXJyb3JNZXNzYWdlc30gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvZXJyb3JNZXNzYWdlcy5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItSW5wdXQnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRyb2xcIiBjbGFzcz1cIm5nLWxhYmVsXCIgW2NsYXNzLmhhcy1hY3RpdmVdPVwiX2ZvY3VzZWRcIiA+e3tuZ0xhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mdyBhbGVydGVycm9yLWljb25cIiBbY2xhc3MuZmEtc3Rhcl09XCJjb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+PC9pPlxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJuZ01hc2tcIiBbdGV4dE1hc2tdPVwibWFza1wiIFtpZF09XCJJZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLWlucHV0XCIgdHlwZT17e3R5cGV9fVxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09YmluZE1vZGVsRGF0YSAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4TGVuZ3RoXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhbmdNYXNrXCIgW2lkXT1cIklkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctaW5wdXRcIiB0eXBlPXt7dHlwZX19IHBsYWNlaG9sZGVyPVwie3tuZ1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09YmluZE1vZGVsRGF0YSAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4TGVuZ3RoXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPCEtLTxlcnJvci1tZXNzYWdlcyBbY29udHJvbF09XCJjb250cm9sXCI+PC9lcnJvci1tZXNzYWdlcz4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAsXG5cbiAgICBkaXJlY3RpdmVzOltNYXNrZWRJbnB1dERpcmVjdGl2ZSxFcnJvck1lc3NhZ2VzXVxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBpZCA6IHN0cmluZztcbiAgICBASW5wdXQoKSBuZ0NsYXNzIDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGUgOiBzdHJpbmc9XCJ0ZXh0XCI7XG4gICAgQElucHV0KCkgbmdMYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5nTWFzazogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5nUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIEBJbnB1dCgpIG1heExlbmd0aDpudW1iZXI7XG4gICAgQElucHV0KCkgYmluZE1vZGVsRGF0YTogYW55O1xuICAgIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIEBPdXRwdXQoKSBiaW5kTW9kZWxEYXRhQ2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfZm9jdXNlZDpib29sZWFuPWZhbHNlO1xuICAgIG1hc2s9e21hc2s6Jyd9O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmKHRoaXMubmdNYXNrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1hc2s9e21hc2s6dGhpcy5uZ01hc2sgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5jb250cm9sKXtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbD1uZXcgRm9ybUNvbnRyb2woW1wiXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZ2V0IGlzVmFsaWQoKSB7XG4gICAgLy8gICAgaWYoIXRoaXMuY29udHJvbCkgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgaWYodGhpcy5jb250cm9sLnZhbGlkIHx8IHRoaXMuY29udHJvbC5wcmlzdGluZSlcbiAgICAvLyAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vfVxuXG4gICAgZ2V0IElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID8gdGhpcy5pZCA6IGBuZzItaW5wdXQtYDtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YSA9IGV2ZW50O1xuICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
