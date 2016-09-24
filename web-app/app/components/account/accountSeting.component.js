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
    var AccountSetingComponent;
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
            let AccountSetingComponent = class AccountSetingComponent {
                constructor(router, accService, authService) {
                    this.router = router;
                    this.accService = accService;
                    this.authService = authService;
                    this.selectItem = { name: '' };
                    this.accFileter = '';
                    this.authService.setPageTitle('');
                    this.accService.GetAccountRolsList();
                }
                onSearch() {
                    //let searchDto={Name:this.comFileter};
                    //this.comService.getCompany(searchDto);
                }
                onViewItemClick(accId) {
                }
            };
            AccountSetingComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/accSeting.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService])
            ], AccountSetingComponent);
            exports_1("AccountSetingComponent", AccountSetingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50U2V0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNJLFlBQW9CLE1BQWEsRUFBVSxVQUF5QixFQUNoRCxXQUF1QjtvQkFEdkIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFlO29CQUNoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFNcEMsZUFBVSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUN2QixlQUFVLEdBQVEsRUFBRSxDQUFDO29CQU54QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2dCQU1ELFFBQVE7b0JBRUosdUNBQXVDO29CQUN2Qyx3Q0FBd0M7Z0JBQzVDLENBQUM7Z0JBRUQsZUFBZSxDQUFDLEtBQUs7Z0JBR3JCLENBQUM7WUFFTCxDQUFDO1lBM0JEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFDLCtCQUErQjtpQkFDOUMsQ0FBQzs7c0NBQUE7WUFFRiwyREF1QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FjY291bnQvYWNjb3VudFNldGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gOS8zLzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9hY2NvdW50L2FjY1NldGluZy5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50U2V0aW5nQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgYWNjU2VydmljZTpBY2NvdW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJycpO1xuXG4gICAgICAgIHRoaXMuYWNjU2VydmljZS5HZXRBY2NvdW50Um9sc0xpc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0SXRlbSA9IHtuYW1lOicnfTtcbiAgICBwdWJsaWMgYWNjRmlsZXRlcjpzdHJpbmc9Jyc7XG5cblxuICAgIG9uU2VhcmNoKClcbiAgICB7XG4gICAgICAgIC8vbGV0IHNlYXJjaER0bz17TmFtZTp0aGlzLmNvbUZpbGV0ZXJ9O1xuICAgICAgICAvL3RoaXMuY29tU2VydmljZS5nZXRDb21wYW55KHNlYXJjaER0byk7XG4gICAgfVxuXG4gICAgb25WaWV3SXRlbUNsaWNrKGFjY0lkKVxuICAgIHtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
