/**
 * Created by phanquan on 8/20/16.
 */
System.register(['@angular/core', '@angular/router', '../../services/account.service', '../../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, account_service_1, auth_service_1;
    var AccountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let AccountComponent = class AccountComponent {
                constructor(router, accService, authService) {
                    this.router = router;
                    this.accService = accService;
                    this.authService = authService;
                    this.urlType = 'ast';
                    this.accService = accService;
                    this.authService.setPageTitle('');
                    this.authService.uriName = 'Setting';
                }
                gotoMemberList() {
                    this.urlType = 'acc';
                    this.router.navigate(['/account/members']);
                }
                gotoActivity() {
                    this.urlType = 'ati';
                    this.router.navigate(['/account/activity']);
                }
                gotoEdit() {
                    this.urlType = 'edit';
                    this.router.navigate(['/account/edit']);
                }
                gotoSeting() {
                    this.urlType = 'ast';
                    this.router.navigate(['/account/seting']);
                }
                isCurLink(iname) {
                    if (iname == this.urlType)
                        return true;
                    return false;
                }
            };
            AccountComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/account.html',
                    providers: [account_service_1.AccountService],
                    directives: [router_1.RouterOutlet],
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService])
            ], AccountComponent);
            exports_1("AccountComponent", AccountComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUg7Z0JBRUksWUFBb0IsTUFBYSxFQUFVLFVBQXlCLEVBQVUsV0FBdUI7b0JBQWpGLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBZTtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFLckcsWUFBTyxHQUFDLEtBQUssQ0FBQztvQkFKVixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUE7b0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFDLFNBQVMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxjQUFjO29CQUNWLElBQUksQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFDRCxZQUFZO29CQUNSLElBQUksQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxRQUFRO29CQUNKLElBQUksQ0FBQyxPQUFPLEdBQUMsTUFBTSxDQUFDO29CQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsVUFBVTtvQkFDTixJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBQ0QsU0FBUyxDQUFDLEtBQUs7b0JBRVgsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFFcEMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztZQUVMLENBQUM7WUFyQ0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUMsNkJBQTZCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUMzQixVQUFVLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO2lCQUM3QixDQUFDOztnQ0FBQTtZQUVGLCtDQStCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA4LzIwLzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBY2NvdW50U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOicvdmlld3MvYWNjb3VudC9hY2NvdW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0FjY291bnRTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBhY2NTZXJ2aWNlOkFjY291bnRTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5hY2NTZXJ2aWNlID0gYWNjU2VydmljZTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJycpXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXJpTmFtZT0nU2V0dGluZyc7XG4gICAgfVxuICAgIHVybFR5cGU9J2FzdCc7XG4gICAgZ290b01lbWJlckxpc3QoKXtcbiAgICAgICAgdGhpcy51cmxUeXBlPSdhY2MnO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hY2NvdW50L21lbWJlcnMnXSk7XG4gICAgfVxuICAgIGdvdG9BY3Rpdml0eSgpe1xuICAgICAgICB0aGlzLnVybFR5cGU9J2F0aSc7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnQvYWN0aXZpdHknXSk7XG4gICAgfVxuICAgIGdvdG9FZGl0KCl7XG4gICAgICAgIHRoaXMudXJsVHlwZT0nZWRpdCc7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnQvZWRpdCddKTtcbiAgICB9XG4gICAgZ290b1NldGluZygpe1xuICAgICAgICB0aGlzLnVybFR5cGU9J2FzdCc7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnQvc2V0aW5nJ10pO1xuICAgIH1cbiAgICBpc0N1ckxpbmsoaW5hbWUpXG4gICAge1xuICAgICAgICBpZihpbmFtZT09dGhpcy51cmxUeXBlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
