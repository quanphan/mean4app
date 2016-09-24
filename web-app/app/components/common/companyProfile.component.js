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
    var CompanyProfileComponent;
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
            let CompanyProfileComponent = class CompanyProfileComponent {
                constructor(comService, activatedRoute, authService) {
                    this.comService = comService;
                    this.activatedRoute = activatedRoute;
                    this.authService = authService;
                    this.editTytle = "New";
                    this.comService = comService;
                    authService.setPageTitle('Company');
                }
                ngOnInit() {
                    let id = "";
                    this.activatedRoute.params.subscribe(params => {
                        id = params['id'];
                        if (!id) {
                            id = '';
                        }
                        this.comService.getCompanyByID(id);
                        if (id != '') {
                            this.editTytle = "Edit";
                        }
                    });
                }
            };
            CompanyProfileComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/common/companyProfile.html',
                }), 
                __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.ActivatedRoute, auth_service_1.AuthService])
            ], CompanyProfileComponent);
            exports_1("CompanyProfileComponent", CompanyProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlQcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLFlBQ1ksVUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsV0FBdUI7b0JBRnZCLGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFMbkMsY0FBUyxHQUFDLEtBQUssQ0FBQztvQkFPWixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDdkMsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksRUFBRSxHQUFFLEVBQUUsQ0FBQztvQkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDdkMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFFakIsRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDUCxDQUFDOzRCQUNHLEVBQUUsR0FBQyxFQUFFLENBQUM7d0JBQ1YsQ0FBQzt3QkFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFFbkMsRUFBRSxDQUFBLENBQUMsRUFBRSxJQUFFLEVBQUUsQ0FBQyxDQUNWLENBQUM7NEJBQ0csSUFBSSxDQUFDLFNBQVMsR0FBQyxNQUFNLENBQUM7d0JBQzFCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUE7Z0JBR04sQ0FBQztZQUtMLENBQUM7WUF4Q0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUMsbUNBQW1DO2lCQUNsRCxDQUFDOzt1Q0FBQTtZQUVGLDZEQW9DQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlQcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzYvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcixBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29tcGFueVByb2ZpbGVDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9jb21wYW55UHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29tcGFueVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDonL3ZpZXdzL2NvbW1vbi9jb21wYW55UHJvZmlsZS5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55UHJvZmlsZUNvbXBvbmVudCB7XG4gICAgZWRpdFR5dGxlPVwiTmV3XCI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb21TZXJ2aWNlOkNvbXBhbnlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlXG4gICAgKXtcbiAgICAgICAgdGhpcy5jb21TZXJ2aWNlID0gY29tU2VydmljZTtcbiAgICAgICAgYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCdDb21wYW55JylcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IGlkID1cIlwiO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlkID0gcGFyYW1zWydpZCddXG5cbiAgICAgICAgICAgIGlmKCFpZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZD0nJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb21TZXJ2aWNlLmdldENvbXBhbnlCeUlEKGlkKTtcblxuICAgICAgICAgICAgaWYoaWQhPScnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdFR5dGxlPVwiRWRpdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICB9XG5cblxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
