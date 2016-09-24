System.register(['@angular/core', '../../services/account.service', '../../services/auth.service', '@angular/router', '../../core/validators', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, account_service_1, auth_service_1, router_1, validators_1, forms_1;
    var AccountMembeEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            let AccountMembeEditComponent = class AccountMembeEditComponent {
                constructor(router, accService, authService, _formBuilder, activatedRoute, _Validators) {
                    this.router = router;
                    this.accService = accService;
                    this.authService = authService;
                    this._formBuilder = _formBuilder;
                    this.activatedRoute = activatedRoute;
                    this._Validators = _Validators;
                    this.authService.setPageTitle('');
                    let id = "";
                    this.activatedRoute.params.subscribe(params => {
                        id = params['id'];
                        if (id) {
                            //this.editTytle="Edit";
                            this.accService.GetAccountDetail(id);
                        }
                        else {
                            this.accService.GetNewAccount();
                        }
                    });
                }
                ngOnInit() {
                    this.myForm = this._formBuilder.group({
                        Name: ['', forms_1.Validators.required],
                        FullName: ["", this._Validators.ValidatorMaxlenght(5)],
                        Mail: ["", this._Validators.validateEmail],
                    });
                }
                onSubmit() {
                    alert(this.myForm.valid);
                }
            };
            AccountMembeEditComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/accMemberEdit.html',
                    providers: [account_service_1.AccountService, validators_1.ValidatorCore],
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService, forms_1.FormBuilder, router_1.ActivatedRoute, validators_1.ValidatorCore])
            ], AccountMembeEditComponent);
            exports_1("AccountMembeEditComponent", AccountMembeEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50TWVtYmVyRWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBRUksWUFBb0IsTUFBYSxFQUFVLFVBQXlCLEVBQ2hELFdBQXVCLEVBQVUsWUFBMEIsRUFDM0QsY0FBNkIsRUFDN0IsV0FBMEI7b0JBSDFCLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBZTtvQkFDaEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQzNELG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtvQkFFMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRWxDLElBQUksRUFBRSxHQUFFLEVBQUUsQ0FBQztvQkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDdkMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDakIsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQ04sQ0FBQzs0QkFDRyx3QkFBd0I7NEJBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLENBQUM7d0JBQUEsSUFBSSxDQUFBLENBQUM7NEJBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDcEMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQTtnQkFHTixDQUFDO2dCQUNELFFBQVE7b0JBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBRTt3QkFDbkMsSUFBSSxFQUFHLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDO3dCQUMvQixRQUFRLEVBQUcsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEQsSUFBSSxFQUFHLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO3FCQUM3QyxDQUFFLENBQUM7Z0JBSVIsQ0FBQztnQkFDRCxRQUFRO29CQUVKLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBR0wsQ0FBQztZQTVDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyxtQ0FBbUM7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUMsMEJBQWEsQ0FBQztpQkFDNUMsQ0FBQzs7eUNBQUE7WUFFRixpRUF1Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FjY291bnQvYWNjb3VudE1lbWJlckVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDkvMTEvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyLEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1ZhbGlkYXRvckNvcmV9IGZyb20gJy4uLy4uL2NvcmUvdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDonL3ZpZXdzL2FjY291bnQvYWNjTWVtYmVyRWRpdC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtBY2NvdW50U2VydmljZSxWYWxpZGF0b3JDb3JlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50TWVtYmVFZGl0Q29tcG9uZW50IHtcbiAgICBteUZvcm07XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGFjY1NlcnZpY2U6QWNjb3VudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXIgOiBGb3JtQnVpbGRlciAsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9WYWxpZGF0b3JzOiBWYWxpZGF0b3JDb3JlKXtcblxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFBhZ2VUaXRsZSgnJyk7XG5cbiAgICAgICAgbGV0IGlkID1cIlwiO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlkID0gcGFyYW1zWydpZCddXG4gICAgICAgICAgICBpZihpZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMuZWRpdFR5dGxlPVwiRWRpdFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjU2VydmljZS5HZXRBY2NvdW50RGV0YWlsKGlkKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjU2VydmljZS5HZXROZXdBY2NvdW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCgge1xuICAgICAgICAgICAgTmFtZSA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIEZ1bGxOYW1lIDogW1wiXCIsdGhpcy5fVmFsaWRhdG9ycy5WYWxpZGF0b3JNYXhsZW5naHQoNSldLFxuICAgICAgICAgICAgTWFpbCA6IFtcIlwiLHRoaXMuX1ZhbGlkYXRvcnMudmFsaWRhdGVFbWFpbF0sXG4gICAgICAgIH0gKTtcblxuXG5cbiAgICB9XG4gICAgb25TdWJtaXQoKVxuICAgIHtcbiAgICAgICAgYWxlcnQodGhpcy5teUZvcm0udmFsaWQpO1xuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
