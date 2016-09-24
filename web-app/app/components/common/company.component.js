/**
 * Created by phanquan on 4/6/16.
 */
System.register(['@angular/core', '@angular/router', '../../services/company.service', '../../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, company_service_1, auth_service_1;
    var CompanyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let CompanyComponent = class CompanyComponent {
                constructor(router, comService, authService) {
                    this.router = router;
                    this.comService = comService;
                    this.authService = authService;
                    this.comService = comService;
                    this.authService.setPageTitle('Company');
                }
                onNewItemClick() {
                    this.router.navigate(['/company/companyprofile']);
                }
            };
            CompanyComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/common/company.html',
                    providers: [company_service_1.CompanyService],
                    directives: [router_1.RouterOutlet],
                }), 
                __metadata('design:paramtypes', [router_1.Router, company_service_1.CompanyService, auth_service_1.AuthService])
            ], CompanyComponent);
            exports_1("CompanyComponent", CompanyComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjSDtnQkFFSSxZQUFvQixNQUFhLEVBQVUsVUFBeUIsRUFBVSxXQUF1QjtvQkFBakYsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBVSxlQUFVLEdBQVYsVUFBVSxDQUFlO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUNqRyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQzVDLENBQUM7Z0JBRUQsY0FBYztvQkFFVixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztZQUVMLENBQUM7WUFsQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUMsNEJBQTRCO29CQUN4QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUMzQixVQUFVLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO2lCQUM3QixDQUFDOztnQ0FBQTtZQUVGLCtDQVlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb21tb24vY29tcGFueS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNC82LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21wYW55U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9jb21tb24vY29tcGFueS5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb21wYW55U2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldF0sXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcGFueUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgY29tU2VydmljZTpDb21wYW55U2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSl7XG4gICAgICAgIHRoaXMuY29tU2VydmljZSA9IGNvbVNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCdDb21wYW55JylcbiAgICB9XG5cbiAgICBvbk5ld0l0ZW1DbGljaygpXG4gICAge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jb21wYW55L2NvbXBhbnlwcm9maWxlJ10pO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
