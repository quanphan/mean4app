/**
 * Created by phanquan on 9/17/16.
 */
System.register(['@angular/core', '@angular/platform-browser', '@angular/common', '@angular/forms', '@angular/http', './app.component', "./services/auth.service", "./app.routes", 'ng2-translate/ng2-translate', "./components/common/company.module", "./components/account/account.module", "./control-component/meancontrol.module", "./components/reservation/reservationCanDeactivate.Guard", "./canActive", "./components/puclic/navbar.component", "./components/puclic/header.component", "./components/home/home.component", "./components/puclic/login.component", "./components/home/about.component", "./components/home/contact.component", "./components/dashboard/dashboard.component", "./components/common/booking.component", "./components/account/profile.component", "./components/puclic/mailbox.component", "./components/home/pricing.component"], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, common_1, forms_1, http_1, app_component_1, auth_service_1, app_routes_1, ng2_translate_1, company_module_1, account_module_1, meancontrol_module_1, reservationCanDeactivate_Guard_1, canActive_1, navbar_component_1, header_component_1, home_component_1, login_component_1, about_component_1, contact_component_1, dashboard_component_1, booking_component_1, profile_component_1, mailbox_component_1, pricing_component_1, core_2;
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
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
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
                        account_module_1.AccountModule,
                        meancontrol_module_1.MeanControlModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, mailbox_component_1.MailboxComponent,
                        header_component_1.HeaderComponent, navbar_component_1.NavbarComponent,
                        login_component_1.LoginComponent, profile_component_1.ProfileComponent, pricing_component_1.PricingComponent,
                        dashboard_component_1.DashboardComponent, booking_component_1.BookingComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0Q0gscUJBQWMsRUFBRSxDQUFDO1lBZ0NqQjtZQUNBLENBQUM7WUEvQkQ7Z0JBQUMsZUFBUSxDQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxnQ0FBYTt3QkFDYixtQkFBVyxFQUFDLDJCQUFtQjt3QkFDL0IsdUJBQVU7d0JBQ1YsaUJBQVU7d0JBQ1YsK0JBQWUsQ0FBQyxPQUFPLENBQUM7NEJBQ3BCLE9BQU8sRUFBRSwrQkFBZTs0QkFDeEIsVUFBVSxFQUFFLENBQUMsSUFBVSxLQUFLLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE9BQU8sQ0FBQzs0QkFDdkYsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO3lCQUNmLENBQUM7d0JBQ0YsMEJBQVM7d0JBQ1QsOEJBQWE7d0JBQ2Isc0NBQWlCO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsNEJBQVk7d0JBQ1osOEJBQWEsRUFBQyxnQ0FBYyxFQUFDLG9DQUFnQixFQUFDLG9DQUFnQjt3QkFDOUQsa0NBQWUsRUFBQyxrQ0FBZTt3QkFDL0IsZ0NBQWMsRUFBQyxvQ0FBZ0IsRUFBQyxvQ0FBZ0I7d0JBQ2hELHdDQUFrQixFQUFDLG9DQUFnQjtxQkFFdEM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLDBCQUFXO3dCQUNYLEVBQUMsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBQzt3QkFDM0QsOERBQTZCLEVBQUMscUJBQVM7cUJBQzFDO29CQUNELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7aUJBQzlCLENBQUM7O3lCQUFBO1lBQ0YsaUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDkvMTcvMTYuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZSB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdHRwTW9kdWxlLEh0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudCB9ICAgICAgICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiXG5pbXBvcnQge0FwcFJvdXRpbmd9IGZyb20gXCIuL2FwcC5yb3V0ZXNcIlxuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGUsVHJhbnNsYXRlTG9hZGVyLFRyYW5zbGF0ZVN0YXRpY0xvYWRlcn0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcbmltcG9ydCB7QXV0aENvbmZpZywgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5pbXBvcnQge0NvbU1vZHVsZX0gZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vY29tcGFueS5tb2R1bGVcIjtcbmltcG9ydCB7QWNjb3VudE1vZHVsZX0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQubW9kdWxlXCI7XG5pbXBvcnQge01lYW5Db250cm9sTW9kdWxlfSBmcm9tIFwiLi9jb250cm9sLWNvbXBvbmVudC9tZWFuY29udHJvbC5tb2R1bGVcIjtcblxuaW1wb3J0IHtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGUuR3VhcmRcIjtcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi9jYW5BY3RpdmVcIlxuXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvbmF2YmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIZWFkZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcHVjbGljL2hlYWRlci5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcHVjbGljL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICBcIi4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCb29raW5nQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9ib29raW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY291bnQvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWFpbGJveENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvbWFpbGJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJpY2luZ0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3ByaWNpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge3Jlc1JvdXRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5yb3V0ZXJzXCI7XG5pbXBvcnQge2NvbVJvdXRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vY29tcGFueS5yb3V0ZXJzXCI7XG5pbXBvcnQge3NldHVwUm91dGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL3NldHVwL3NldHVwLnJvdXRlcnNcIjtcbmltcG9ydCB7YWNjb3VudFJvdXRlcn0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQucm91dGVyc1wiO1xuXG5cblxuaW1wb3J0IHtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGUuR3VhcmRcIjtcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tIFwiLi9jYW5BY3RpdmVcIlxuXG5pbXBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmVuYWJsZVByb2RNb2RlKCk7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoaHR0cDogSHR0cCkgPT4gbmV3IFRyYW5zbGF0ZVN0YXRpY0xvYWRlcihodHRwLCAnYXNzZXRzL3Jlc291cmNlJywgJy5qc29uJyksXG4gICAgICAgICAgICBkZXBzOiBbSHR0cF1cbiAgICAgICAgfSksXG4gICAgICAgIENvbU1vZHVsZSxcbiAgICAgICAgQWNjb3VudE1vZHVsZSxcbiAgICAgICAgTWVhbkNvbnRyb2xNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsQWJvdXRDb21wb25lbnQsQ29udGFjdENvbXBvbmVudCxNYWlsYm94Q29tcG9uZW50LFxuICAgICAgICBIZWFkZXJDb21wb25lbnQsTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxQcm9maWxlQ29tcG9uZW50LFByaWNpbmdDb21wb25lbnQsXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxCb29raW5nQ29tcG9uZW50LFxuXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9LFxuICAgICAgICBSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZCxBdXRoR3VhcmRcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
