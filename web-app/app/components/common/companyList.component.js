/**
 * Created by phanquan on 4/23/16.
 */
System.register(['@angular/core', '../../services/company.service', '../../services/auth.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, company_service_1, auth_service_1, router_1;
    var CompanyListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let CompanyListComponent = class CompanyListComponent {
                constructor(router, comService, authService) {
                    this.router = router;
                    this.comService = comService;
                    this.authService = authService;
                    this.companyList = [];
                    this.selectItem = { name: '' };
                    this.comFileter = '';
                    this.typeSelected = "1";
                    this.comService = comService;
                    this.authService.setPageTitle('Company list');
                }
                onSearch() {
                    let searchDto = { Name: this.comFileter };
                    this.comService.getCompany(searchDto);
                }
                onViewItemClick(comId) {
                    this.router.navigate(['company/companyprofile', { id: comId }]);
                }
            };
            CompanyListComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/common/companyList.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, company_service_1.CompanyService, auth_service_1.AuthService])
            ], CompanyListComponent);
            exports_1("CompanyListComponent", CompanyListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUg7Z0JBR0ksWUFBb0IsTUFBYSxFQUFVLFVBQXlCLEVBQVUsV0FBdUI7b0JBQWpGLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBZTtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFGckcsZ0JBQVcsR0FBQyxFQUFFLENBQUM7b0JBT1IsZUFBVSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUN2QixlQUFVLEdBQVEsRUFBRSxDQUFDO29CQUM1QixpQkFBWSxHQUFDLEdBQUcsQ0FBQztvQkFOYixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBTUQsUUFBUTtvQkFFSixJQUFJLFNBQVMsR0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELGVBQWUsQ0FBQyxLQUFLO29CQUVqQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHdCQUF3QixFQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztZQUdMLENBQUM7WUE1QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUMsZ0NBQWdDO2lCQUMvQyxDQUFDOztvQ0FBQTtZQUVGLHVEQXdCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzIzLzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbXBhbnlMaXN0Q29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vY29tcGFueUxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBhbnlTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDonL3ZpZXdzL2NvbW1vbi9jb21wYW55TGlzdC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55TGlzdENvbXBvbmVudCB7XG4gICAgY29tcGFueUxpc3Q9W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgY29tU2VydmljZTpDb21wYW55U2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSl7XG4gICAgICAgIHRoaXMuY29tU2VydmljZSA9IGNvbVNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCdDb21wYW55IGxpc3QnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0SXRlbSA9IHtuYW1lOicnfTtcbiAgICBwdWJsaWMgY29tRmlsZXRlcjpzdHJpbmc9Jyc7XG4gICAgdHlwZVNlbGVjdGVkPVwiMVwiO1xuXG4gICAgb25TZWFyY2goKVxuICAgIHtcbiAgICAgICAgbGV0IHNlYXJjaER0bz17TmFtZTp0aGlzLmNvbUZpbGV0ZXJ9O1xuICAgICAgICB0aGlzLmNvbVNlcnZpY2UuZ2V0Q29tcGFueShzZWFyY2hEdG8pO1xuICAgIH1cblxuICAgIG9uVmlld0l0ZW1DbGljayhjb21JZClcbiAgICB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29tcGFueS9jb21wYW55cHJvZmlsZScseyBpZDogY29tSWQgfV0pO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
