/**
 * Created by phanquan on 9/17/16.
 */
System.register(['@angular/core', '@angular/platform-browser', '@angular/common', '@angular/forms', '@angular/http', './app.component', "./services/auth.service", "./app.routes", 'ng2-translate/ng2-translate', "./components/common/company.module", "./components/account/account.module", "./control-component/meancontrol.module", "./components/reservation/reservation.module", "./components/dashboard/dashboard.module", "./components/reservation/reservationCanDeactivate.Guard", "./canActive", "./components/puclic/navbar.component", "./components/puclic/header.component", "./components/home/home.component", "./components/puclic/login.component", "./components/home/about.component", "./components/home/contact.component", "./components/common/booking.component", "./components/account/profile.component", "./components/puclic/mailbox.component", "./components/home/pricing.component", "./components/demo/demo.component"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, common_1, forms_1, http_1, app_component_1, auth_service_1, app_routes_1, ng2_translate_1, company_module_1, account_module_1, meancontrol_module_1, reservation_module_1, dashboard_module_1, reservationCanDeactivate_Guard_1, canActive_1, navbar_component_1, header_component_1, home_component_1, login_component_1, about_component_1, contact_component_1, booking_component_1, profile_component_1, mailbox_component_1, pricing_component_1, demo_component_1, core_2;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (company_module_1_1) {
                company_module_1 = company_module_1_1;
            },
            function (account_module_1_1) {
                account_module_1 = account_module_1_1;
            },
            function (meancontrol_module_1_1) {
                meancontrol_module_1 = meancontrol_module_1_1;
            },
            function (reservation_module_1_1) {
                reservation_module_1 = reservation_module_1_1;
            },
            function (dashboard_module_1_1) {
                dashboard_module_1 = dashboard_module_1_1;
            },
            function (reservationCanDeactivate_Guard_1_1) {
                reservationCanDeactivate_Guard_1 = reservationCanDeactivate_Guard_1_1;
            },
            function (canActive_1_1) {
                canActive_1 = canActive_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (booking_component_1_1) {
                booking_component_1 = booking_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (mailbox_component_1_1) {
                mailbox_component_1 = mailbox_component_1_1;
            },
            function (pricing_component_1_1) {
                pricing_component_1 = pricing_component_1_1;
            },
            function (demo_component_1_1) {
                demo_component_1 = demo_component_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule, forms_1.ReactiveFormsModule,
                        app_routes_1.AppRouting,
                        http_1.HttpModule,
                        ng2_translate_1.TranslateModule.forRoot({
                            provide: ng2_translate_1.TranslateLoader,
                            useFactory: (http) => new ng2_translate_1.TranslateStaticLoader(http, 'assets/resource', '.json'),
                            deps: [http_1.Http]
                        }),
                        company_module_1.ComModule,
                        account_module_1.AccountModule, reservation_module_1.ResModule, dashboard_module_1.DashboardModule,
                        meancontrol_module_1.MeanControlModule,
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, mailbox_component_1.MailboxComponent,
                        header_component_1.HeaderComponent, navbar_component_1.NavbarComponent,
                        login_component_1.LoginComponent, profile_component_1.ProfileComponent, pricing_component_1.PricingComponent, demo_component_1.DemoComponent,
                        booking_component_1.BookingComponent,
                    ],
                    providers: [
                        auth_service_1.AuthService,
                        { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                        reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard, canActive_1.AuthGuard
                    ],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1Q0gscUJBQWMsRUFBRSxDQUFDO1lBaUNqQjtZQUNBLENBQUM7WUFoQ0Q7Z0JBQUMsZUFBUSxDQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxnQ0FBYTt3QkFDYixtQkFBVyxFQUFDLDJCQUFtQjt3QkFDL0IsdUJBQVU7d0JBQ1YsaUJBQVU7d0JBQ1YsK0JBQWUsQ0FBQyxPQUFPLENBQUM7NEJBQ3BCLE9BQU8sRUFBRSwrQkFBZTs0QkFDeEIsVUFBVSxFQUFFLENBQUMsSUFBVSxLQUFLLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzs0QkFDdkYsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO3lCQUNmLENBQUM7d0JBQ0YsMEJBQVM7d0JBQ1QsOEJBQWEsRUFBQyw4QkFBUyxFQUFDLGtDQUFlO3dCQUN2QyxzQ0FBaUI7cUJBRXBCO29CQUNELFlBQVksRUFBRTt3QkFDViw0QkFBWTt3QkFDWiw4QkFBYSxFQUFDLGdDQUFjLEVBQUMsb0NBQWdCLEVBQUMsb0NBQWdCO3dCQUM5RCxrQ0FBZSxFQUFDLGtDQUFlO3dCQUMvQixnQ0FBYyxFQUFDLG9DQUFnQixFQUFDLG9DQUFnQixFQUFDLDhCQUFhO3dCQUM5RCxvQ0FBZ0I7cUJBRW5CO29CQUNELFNBQVMsRUFBRTt3QkFDUCwwQkFBVzt3QkFDWCxFQUFDLE9BQU8sRUFBRSx5QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUM7d0JBQzNELDhEQUE2QixFQUFDLHFCQUFTO3FCQUMxQztvQkFDRCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO2lCQUM5QixDQUFDOzt5QkFBQTtZQUNGLGlDQUNDLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA5LzE3LzE2LlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSxIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SHR0cE1vZHVsZSxIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHtBcHBDb21wb25lbnQgfSAgICAgICAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIlxuaW1wb3J0IHtBcHBSb3V0aW5nfSBmcm9tIFwiLi9hcHAucm91dGVzXCJcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLFRyYW5zbGF0ZUxvYWRlcixUcmFuc2xhdGVTdGF0aWNMb2FkZXJ9IGZyb20gJ25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZSc7XG5pbXBvcnQge0F1dGhDb25maWcsIEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuaW1wb3J0IHtDb21Nb2R1bGV9IGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL2NvbXBhbnkubW9kdWxlXCI7XG5pbXBvcnQge0FjY291bnRNb2R1bGV9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50Lm1vZHVsZVwiO1xuaW1wb3J0IHtNZWFuQ29udHJvbE1vZHVsZX0gZnJvbSBcIi4vY29udHJvbC1jb21wb25lbnQvbWVhbmNvbnRyb2wubW9kdWxlXCI7XG5pbXBvcnQge1Jlc01vZHVsZX0gZnJvbSBcIi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5tb2R1bGVcIjtcbmltcG9ydCB7RGFzaGJvYXJkTW9kdWxlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlXCI7XG5pbXBvcnQge1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZS5HdWFyZFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2NhbkFjdGl2ZVwiXG5cbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3B1Y2xpYy9uYXZiYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvaGVhZGVyLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCb29raW5nQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9ib29raW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY291bnQvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWFpbGJveENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvbWFpbGJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJpY2luZ0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3ByaWNpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge0RlbW9Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZGVtby9kZW1vLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZS5HdWFyZFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2NhbkFjdGl2ZVwiXG5cbmltcG9ydCB7ZW5hYmxlUHJvZE1vZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuZW5hYmxlUHJvZE1vZGUoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmcsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChodHRwOiBIdHRwKSA9PiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHAsICdhc3NldHMvcmVzb3VyY2UnLCAnLmpzb24nKSxcbiAgICAgICAgICAgIGRlcHM6IFtIdHRwXVxuICAgICAgICB9KSxcbiAgICAgICAgQ29tTW9kdWxlLFxuICAgICAgICBBY2NvdW50TW9kdWxlLFJlc01vZHVsZSxEYXNoYm9hcmRNb2R1bGUsXG4gICAgICAgIE1lYW5Db250cm9sTW9kdWxlLFxuXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LEFib3V0Q29tcG9uZW50LENvbnRhY3RDb21wb25lbnQsTWFpbGJveENvbXBvbmVudCxcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50LE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsUHJvZmlsZUNvbXBvbmVudCxQcmljaW5nQ29tcG9uZW50LERlbW9Db21wb25lbnQsXG4gICAgICAgIEJvb2tpbmdDb21wb25lbnQsXG5cbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneX0sXG4gICAgICAgIFJlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkLEF1dGhHdWFyZFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
