System.register(['@angular/core', '@angular/router', "./services/auth.service"], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var AuthGuard;
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
            }],
        execute: function() {
            let AuthGuard = class AuthGuard {
                constructor(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                canActivate() {
                    if (this.authService.isAuth) {
                        return true;
                    }
                    this.router.navigate(['/login']);
                    return false;
                }
            };
            AuthGuard = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
            ], AuthGuard);
            exports_1("AuthGuard", AuthGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbkFjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUNJLFlBQW9CLFdBQXdCLEVBQVUsTUFBYztvQkFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFBRyxDQUFDO2dCQUN4RSxXQUFXO29CQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztZQUNMLENBQUM7WUFSRDtnQkFBQyxpQkFBVSxFQUFFOzt5QkFBQTtZQUNiLGlDQU9DLENBQUEiLCJmaWxlIjoiY2FuQWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMTYvMTYuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbiAgICBjYW5BY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNBdXRoKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
