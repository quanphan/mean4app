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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2Vycm9yTWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVSDtnQkFHSTtnQkFBZ0IsQ0FBQztnQkFFakIsSUFBSSxZQUFZO29CQUNaLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDM0UsTUFBTSxDQUFDLDBCQUFhLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ25HLENBQUM7b0JBQ0wsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQWJHO2dCQUFDLFlBQUssRUFBRTs7MERBQUE7WUFOWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw4RUFBOEU7aUJBQzNGLENBQUM7OzZCQUFBO1lBQ0YseUNBZUMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9lcnJvck1lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA4LzcvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1ZhbGlkYXRvckNvcmV9IGZyb20gJy4uL2NvcmUvdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXJyb3ItbWVzc2FnZXMnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiIGNsYXNzPVwiYWxlcnRlcnJvclwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yTWVzc2FnZXMge1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBnZXQgZXJyb3JNZXNzYWdlKCkge1xuICAgICAgICBpZih0aGlzLmNvbnRyb2wucHJpc3RpbmUpIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gdGhpcy5jb250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbC5lcnJvcnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiB0aGlzLmNvbnRyb2wudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JDb3JlLmdldFZhbGlkYXRvckVycm9yTWVzc2FnZShwcm9wZXJ0eU5hbWUsIHRoaXMuY29udHJvbC5lcnJvcnNbcHJvcGVydHlOYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
