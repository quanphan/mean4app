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
    var AccountEditComponent;
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
            let AccountEditComponent = class AccountEditComponent {
                constructor(router, setupService, authService) {
                    this.router = router;
                    this.setupService = setupService;
                    this.authService = authService;
                    this.setupService = account_service_1.AccountService;
                    this.authService.setPageTitle('');
                }
            };
            AccountEditComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/accEdit.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService])
            ], AccountEditComponent);
            exports_1("AccountEditComponent", AccountEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50RWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFDSSxZQUFvQixNQUFhLEVBQVUsWUFBMkIsRUFDbEQsV0FBdUI7b0JBRHZCLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWU7b0JBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLGdDQUFjLENBQUM7b0JBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO1lBRUwsQ0FBQztZQVhEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFDLDZCQUE2QjtpQkFDNUMsQ0FBQzs7b0NBQUE7WUFFRix1REFPQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50RWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gOC8yOC8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWNjb3VudFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOicvdmlld3MvYWNjb3VudC9hY2NFZGl0Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIEFjY291bnRFZGl0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgc2V0dXBTZXJ2aWNlOkFjY291bnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2Upe1xuICAgICAgICB0aGlzLnNldHVwU2VydmljZSA9IEFjY291bnRTZXJ2aWNlO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFBhZ2VUaXRsZSgnJyk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
