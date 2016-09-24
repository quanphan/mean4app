System.register(['@angular/core', '../../services/account.service', '../../services/auth.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, account_service_1, auth_service_1, router_1;
    var AccountActivityComponent;
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
            }],
        execute: function() {
            let AccountActivityComponent = class AccountActivityComponent {
                constructor(router, setupService, authService) {
                    this.router = router;
                    this.setupService = setupService;
                    this.authService = authService;
                    this.setupService = account_service_1.AccountService;
                    this.authService.setPageTitle('');
                }
            };
            AccountActivityComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/accActivity.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService])
            ], AccountActivityComponent);
            exports_1("AccountActivityComponent", AccountActivityComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50QWN0aXZpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQ0ksWUFBb0IsTUFBYSxFQUFVLFlBQTJCLEVBQ2xELFdBQXVCO29CQUR2QixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFlO29CQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxnQ0FBYyxDQUFDO29CQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUVMLENBQUM7WUFYRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyxpQ0FBaUM7aUJBQ2hELENBQUM7O3dDQUFBO1lBRUYsK0RBT0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FjY291bnQvYWNjb3VudEFjdGl2aXR5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA4LzI4LzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOicvdmlld3MvYWNjb3VudC9hY2NBY3Rpdml0eS5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50QWN0aXZpdHlDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBzZXR1cFNlcnZpY2U6QWNjb3VudFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSl7XG4gICAgICAgIHRoaXMuc2V0dXBTZXJ2aWNlID0gQWNjb3VudFNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCcnKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
