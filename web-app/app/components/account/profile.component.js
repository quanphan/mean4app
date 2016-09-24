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
    var ProfileComponent;
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
            let ProfileComponent = class ProfileComponent {
                constructor(router, accService, authService) {
                    this.router = router;
                    this.accService = accService;
                    this.authService = authService;
                    this.accService = accService;
                    this.authService.setPageTitle('My Profile');
                }
            };
            ProfileComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/profile.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUVJLFlBQW9CLE1BQWEsRUFBVSxVQUF5QixFQUFVLFdBQXVCO29CQUFqRixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFVLGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDL0MsQ0FBQztZQUdMLENBQUM7WUFaRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyw2QkFBNkI7aUJBQzVDLENBQUM7O2dDQUFBO1lBRUYsK0NBUUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FjY291bnQvcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gOC8yOC8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZXJPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0FjY291bnRTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDonL3ZpZXdzL2FjY291bnQvcHJvZmlsZS5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBhY2NTZXJ2aWNlOkFjY291bnRTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5hY2NTZXJ2aWNlID0gYWNjU2VydmljZTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJ015IFByb2ZpbGUnKVxuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
