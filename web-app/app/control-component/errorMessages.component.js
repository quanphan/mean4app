/**
 * Created by phanquan on 8/7/16.
 */
System.register(['@angular/core', '@angular/forms', '../core/validators'], function(exports_1, context_1) {
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
    var core_1, forms_1, validators_1;
    var ErrorMessages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            let ErrorMessages = class ErrorMessages {
                constructor() {
                }
                get errorMessage() {
                    if (this.control.pristine)
                        return null;
                    for (let propertyName in this.control.errors) {
                        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                            return validators_1.ValidatorCore.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                        }
                    }
                    return null;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', forms_1.FormControl)
            ], ErrorMessages.prototype, "control", void 0);
            ErrorMessages = __decorate([
                core_1.Component({
                    selector: 'error-messages',
                    template: `<div *ngIf="errorMessage !== null" class="alerterror">{{errorMessage}}</div>`
                }), 
                __metadata('design:paramtypes', [])
            ], ErrorMessages);
            exports_1("ErrorMessages", ErrorMessages);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2Vycm9yTWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXSDtnQkFHSTtnQkFBZ0IsQ0FBQztnQkFFakIsSUFBSSxZQUFZO29CQUNaLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDM0UsTUFBTSxDQUFDLDBCQUFhLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ25HLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQWJHO2dCQUFDLFlBQUssRUFBRTs7MERBQUE7WUFOWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw4RUFBOEU7aUJBQzNGLENBQUM7OzZCQUFBO1lBQ0YseUNBZUMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9lcnJvck1lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA4LzcvMTYuXG4gKi9cblxuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VmFsaWRhdG9yQ29yZX0gZnJvbSAnLi4vY29yZS92YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlcnJvci1tZXNzYWdlcycsXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCIgY2xhc3M9XCJhbGVydGVycm9yXCI+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNZXNzYWdlcyB7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldCBlcnJvck1lc3NhZ2UoKSB7XG4gICAgICAgIGlmKHRoaXMuY29udHJvbC5wcmlzdGluZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiB0aGlzLmNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIHRoaXMuY29udHJvbC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRvckNvcmUuZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKHByb3BlcnR5TmFtZSwgdGhpcy5jb250cm9sLmVycm9yc1twcm9wZXJ0eU5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
