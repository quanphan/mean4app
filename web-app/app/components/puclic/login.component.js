/**
 * Created by phanquan on 2/27/16.
 */
System.register(['@angular/core', '@angular/router', '../../services/auth.service', '../../control-component/input/input.component', '../../core/validators', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, input_component_1, validators_1, forms_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(router, authService, _formBuilder, _Validators) {
                    this.router = router;
                    this.authService = authService;
                    this._formBuilder = _formBuilder;
                    this._Validators = _Validators;
                    this.User = { username: '', password: '' };
                    this.LoginError = false;
                    this.myForm = _formBuilder.group({
                        password: ["", forms_1.Validators.compose([forms_1.Validators.required, this._Validators.passwordValidator])],
                        username: ["", forms_1.Validators.compose([forms_1.Validators.required, this._Validators.specialCharValidator])],
                    });
                    this.myForm.valueChanges.subscribe((form) => {
                        this.LoginError = false;
                    });
                }
                login() {
                    Promise.all([
                        this.authService.login(this.User.username, this.User.password)
                    ]).then((data) => {
                        this.LoginError = !this.authService.isAuth;
                        this.router.navigate(['/dashboard']);
                    });
                }
                logOut() {
                    this.router.navigate(['/home']);
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
                    templateUrl: './views/public/login.html',
                    directives: [input_component_1.InputComponent],
                    providers: [validators_1.ValidatorCore],
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, forms_1.FormBuilder, validators_1.ValidatorCore])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVjbGljL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JIO2dCQUVJLFlBQW1CLE1BQWEsRUFBUSxXQUF1QixFQUFVLFlBQTBCLEVBQ3RGLFdBQTBCO29CQURwQixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFRLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUN0RixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtvQkFZdkMsU0FBSSxHQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQy9CLGVBQVUsR0FBUyxLQUFLLENBQUM7b0JBWnJCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBRTt3QkFDOUIsUUFBUSxFQUFHLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQzVGLFFBQVEsRUFBRyxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO3FCQUNsRyxDQUFFLENBQUM7b0JBRUosSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUzt3QkFDekMsSUFBSSxDQUFDLFVBQVUsR0FBQyxLQUFLLENBQUM7b0JBQ3RCLENBQUMsQ0FDSixDQUFDO2dCQUNOLENBQUM7Z0JBS0QsS0FBSztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDO3dCQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3FCQUNoRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTt3QkFDVCxJQUFJLENBQUMsVUFBVSxHQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7d0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUE7Z0JBRU4sQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUdMLENBQUM7WUF2Q0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxDQUFFO29CQUM3QixTQUFTLEVBQUUsQ0FBQywwQkFBYSxDQUFDO2lCQUM3QixDQUFDOzs4QkFBQTtZQUVGLDJDQWlDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHVjbGljL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiAyLzI3LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vL2ltcG9ydCB7Rk9STV9QUk9WSURFUlMsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBOZ0Zvcm0sQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vaW1wb3J0IHtkaXNhYmxlRGVwcmVjYXRlZEZvcm1zLHByb3ZpZGVGb3JtcyxGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcImFwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1ZhbGlkYXRvckNvcmV9IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9wdWJsaWMvbG9naW4uaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0lucHV0Q29tcG9uZW50IF0sXG4gICAgcHJvdmlkZXJzOiBbVmFsaWRhdG9yQ29yZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAgIG15Rm9ybTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOlJvdXRlcixwdWJsaWMgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UgLHByaXZhdGUgX2Zvcm1CdWlsZGVyIDogRm9ybUJ1aWxkZXJcbiAgICAgICAgLHByaXZhdGUgX1ZhbGlkYXRvcnM6IFZhbGlkYXRvckNvcmUpe1xuICAgICAgICB0aGlzLm15Rm9ybSA9IF9mb3JtQnVpbGRlci5ncm91cCgge1xuICAgICAgICAgICAgcGFzc3dvcmQgOiBbXCJcIixWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsdGhpcy5fVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0pXSxcbiAgICAgICAgICAgIHVzZXJuYW1lIDogW1wiXCIsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLHRoaXMuX1ZhbGlkYXRvcnMuc3BlY2lhbENoYXJWYWxpZGF0b3JdKV0sXG4gICAgICAgIH0gKTtcblxuICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChmb3JtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuTG9naW5FcnJvcj1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBVc2VyPXt1c2VybmFtZTonJyxwYXNzd29yZDonJ307XG4gICAgTG9naW5FcnJvcjpib29sZWFuPWZhbHNlO1xuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy5Vc2VyLnVzZXJuYW1lLHRoaXMuVXNlci5wYXNzd29yZClcbiAgICAgICAgXSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5Mb2dpbkVycm9yPSF0aGlzLmF1dGhTZXJ2aWNlLmlzQXV0aDtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGxvZ091dCgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
