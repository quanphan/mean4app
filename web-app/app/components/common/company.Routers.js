/**
 * Created by phanquan on 7/16/16.
 */
System.register(['@angular/router', "../../components/common/companyList.component", "../../components/common/companyProfile.component", "../../components/common/company.component", "../../components/reservation/reservationCanDeactivate.Guard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, companyList_component_1, companyProfile_component_1, company_component_1, reservationCanDeactivate_Guard_1;
    var comRouter, comRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (companyList_component_1_1) {
                companyList_component_1 = companyList_component_1_1;
            },
            function (companyProfile_component_1_1) {
                companyProfile_component_1 = companyProfile_component_1_1;
            },
            function (company_component_1_1) {
                company_component_1 = company_component_1_1;
            },
            function (reservationCanDeactivate_Guard_1_1) {
                reservationCanDeactivate_Guard_1 = reservationCanDeactivate_Guard_1_1;
            }],
        execute: function() {
            exports_1("comRouter", comRouter = [
                {
                    path: 'company',
                    component: company_component_1.CompanyComponent,
                    index: true,
                    children: [
                        { path: 'companyprofile', name: 'CompanyProfile', component: companyProfile_component_1.CompanyProfileComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'companyprofile/:id', name: 'CompanyProfile', component: companyProfile_component_1.CompanyProfileComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: '', name: 'CompanyList', component: companyList_component_1.CompanyListComponent, index: true },
                    ]
                }
            ]);
            exports_1("comRouting", comRouting = router_1.RouterModule.forChild(comRouter));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnkucm91dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7UUFXVSxTQUFTLEVBYVQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWJWLHVCQUFBLFNBQVMsR0FBVztnQkFDN0I7b0JBQ0ksSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLG9DQUFnQjtvQkFDM0IsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFO3dCQUNOLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUMsa0RBQXVCLEVBQUUsYUFBYSxFQUFFLENBQUMsOERBQTZCLENBQUMsRUFBQzt3QkFDbEksRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBQyxrREFBdUIsRUFBRSxhQUFhLEVBQUUsQ0FBQyw4REFBNkIsQ0FBQyxFQUFDO3dCQUN0SSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUMsNENBQW9CLEVBQUcsS0FBSyxFQUFFLElBQUksRUFBQztxQkFDL0U7aUJBQ0o7YUFDSixDQUFBLENBQUM7WUFFVyx3QkFBQSxVQUFVLEdBQXdCLHFCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9jb21tb24vY29tcGFueS5yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMTYvMTYuXG4gKi9cblxuXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NvbXBhbnlMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vY29tcGFueUxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBhbnlQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vY29tcGFueVByb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBhbnlDb21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9jb21wYW55LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlLkd1YXJkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21Sb3V0ZXI6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdjb21wYW55JyxcbiAgICAgICAgY29tcG9uZW50OiBDb21wYW55Q29tcG9uZW50LFxuICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtwYXRoOidjb21wYW55cHJvZmlsZScsIG5hbWU6ICdDb21wYW55UHJvZmlsZScsIGNvbXBvbmVudDpDb21wYW55UHJvZmlsZUNvbXBvbmVudCAsY2FuRGVhY3RpdmF0ZTogW1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkXX0sXG4gICAgICAgICAgICB7cGF0aDonY29tcGFueXByb2ZpbGUvOmlkJywgbmFtZTogJ0NvbXBhbnlQcm9maWxlJywgY29tcG9uZW50OkNvbXBhbnlQcm9maWxlQ29tcG9uZW50ICxjYW5EZWFjdGl2YXRlOiBbUmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmRdfSxcbiAgICAgICAgICAgIHtwYXRoOicnLCBuYW1lOiAnQ29tcGFueUxpc3QnLCBjb21wb25lbnQ6Q29tcGFueUxpc3RDb21wb25lbnQgLCBpbmRleDogdHJ1ZX0sXG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3QgY29tUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChjb21Sb3V0ZXIpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
