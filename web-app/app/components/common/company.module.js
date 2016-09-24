/**
 * Created by phanquan on 9/24/16.
 */
System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/common', "../../control-component/meancontrol.module", "./company.component", "./companyList.component", "./companyProfile.component", './companyEdit.component', './companyView.component', './companyHictory.component', '../../services/company.service', "./company.routers"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, common_1, meancontrol_module_1, company_component_1, companyList_component_1, companyProfile_component_1, companyEdit_component_1, companyView_component_1, companyHictory_component_1, company_service_1, company_routers_1;
    var ComModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (meancontrol_module_1_1) {
                meancontrol_module_1 = meancontrol_module_1_1;
            },
            function (company_component_1_1) {
                company_component_1 = company_component_1_1;
            },
            function (companyList_component_1_1) {
                companyList_component_1 = companyList_component_1_1;
            },
            function (companyProfile_component_1_1) {
                companyProfile_component_1 = companyProfile_component_1_1;
            },
            function (companyEdit_component_1_1) {
                companyEdit_component_1 = companyEdit_component_1_1;
            },
            function (companyView_component_1_1) {
                companyView_component_1 = companyView_component_1_1;
            },
            function (companyHictory_component_1_1) {
                companyHictory_component_1 = companyHictory_component_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (company_routers_1_1) {
                company_routers_1 = company_routers_1_1;
            }],
        execute: function() {
            let ComModule = class ComModule {
            };
            ComModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, platform_browser_1.BrowserModule,
                        company_routers_1.comRouting,
                        meancontrol_module_1.MeanControlModule,
                    ],
                    declarations: [
                        company_component_1.CompanyComponent, companyList_component_1.CompanyListComponent, companyProfile_component_1.CompanyProfileComponent,
                        companyEdit_component_1.CompanyEditComponent, companyView_component_1.CompanyViewComponent, companyHictory_component_1.CompanyHictoryComponent
                    ],
                    providers: [
                        company_service_1.CompanyService
                    ],
                    exports: [
                        companyList_component_1.CompanyListComponent, company_component_1.CompanyComponent, companyProfile_component_1.CompanyProfileComponent,
                        companyEdit_component_1.CompanyEditComponent, companyView_component_1.CompanyViewComponent, companyHictory_component_1.CompanyHictoryComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], ComModule);
            exports_1("ComModule", ComModule);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0g7WUFDQSxDQUFDO1lBcEJEO2dCQUFDLGVBQVEsQ0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wscUJBQVksRUFBRSxtQkFBVyxFQUFDLDJCQUFtQixFQUFDLGdDQUFhO3dCQUMzRCw0QkFBVTt3QkFDVixzQ0FBaUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRTt3QkFDVixvQ0FBZ0IsRUFBQyw0Q0FBb0IsRUFBQyxrREFBdUI7d0JBQzdELDRDQUFvQixFQUFDLDRDQUFvQixFQUFDLGtEQUF1QjtxQkFDcEU7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLGdDQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUM7d0JBQ0osNENBQW9CLEVBQUMsb0NBQWdCLEVBQUMsa0RBQXVCO3dCQUM3RCw0Q0FBb0IsRUFBQyw0Q0FBb0IsRUFBQyxrREFBdUI7cUJBQ3BFO2lCQUNKLENBQUM7O3lCQUFBO1lBRUYsaUNBQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbW1vbi9jb21wYW55Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA5LzI0LzE2LlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SHR0cE1vZHVsZSxIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWVhbkNvbnRyb2xNb2R1bGV9IGZyb20gXCIuLi8uLi9jb250cm9sLWNvbXBvbmVudC9tZWFuY29udHJvbC5tb2R1bGVcIjtcblxuaW1wb3J0IHtDb21wYW55Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wYW55LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wYW55TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vY29tcGFueUxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBhbnlQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wYW55UHJvZmlsZS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtDb21wYW55RWRpdENvbXBvbmVudH0gZnJvbSAnLi9jb21wYW55RWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wYW55Vmlld0NvbXBvbmVudH0gZnJvbSAnLi9jb21wYW55Vmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wYW55SGljdG9yeUNvbXBvbmVudH0gZnJvbSAnLi9jb21wYW55SGljdG9yeS5jb21wb25lbnQnO1xuXG5pbXBvcnQge0NvbXBhbnlTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuXG5pbXBvcnQge2NvbVJvdXRpbmd9IGZyb20gXCIuL2NvbXBhbnkucm91dGVyc1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIGNvbVJvdXRpbmcsXG4gICAgICAgIE1lYW5Db250cm9sTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENvbXBhbnlDb21wb25lbnQsQ29tcGFueUxpc3RDb21wb25lbnQsQ29tcGFueVByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgIENvbXBhbnlFZGl0Q29tcG9uZW50LENvbXBhbnlWaWV3Q29tcG9uZW50LENvbXBhbnlIaWN0b3J5Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29tcGFueVNlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6W1xuICAgICAgICBDb21wYW55TGlzdENvbXBvbmVudCxDb21wYW55Q29tcG9uZW50LENvbXBhbnlQcm9maWxlQ29tcG9uZW50LFxuICAgICAgICBDb21wYW55RWRpdENvbXBvbmVudCxDb21wYW55Vmlld0NvbXBvbmVudCxDb21wYW55SGljdG9yeUNvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21Nb2R1bGUge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
