/**
 * Created by phanquan on 7/16/16.
 */
System.register(['@angular/router', "./components/puclic/login.component", "./components/home/about.component", "./components/home/home.component", "./components/home/contact.component", "./components/dashboard/dashboard.component", "./components/common/booking.component", "./components/account/profile.component", "./components/puclic/mailbox.component", "./components/home/pricing.component", "./canActive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, about_component_1, home_component_1, contact_component_1, dashboard_component_1, booking_component_1, profile_component_1, mailbox_component_1, pricing_component_1, canActive_1;
    var routes, AppRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
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
            },
            function (canActive_1_1) {
                canActive_1 = canActive_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', name: 'Home', component: home_component_1.HomeComponent },
                { path: 'home', name: 'Home', component: home_component_1.HomeComponent },
                { path: 'login', name: 'Login', component: login_component_1.LoginComponent },
                { path: 'about', name: 'About', component: about_component_1.AboutComponent },
                { path: 'contact', name: 'Contact', component: contact_component_1.ContactComponent },
                { path: 'pricing', name: 'Pricing', component: pricing_component_1.PricingComponent },
                { path: 'dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [canActive_1.AuthGuard] },
                { path: 'booking', name: 'Booking', component: booking_component_1.BookingComponent, canActivate: [canActive_1.AuthGuard] },
                { path: 'mailbox', name: 'Mailbox', component: mailbox_component_1.MailboxComponent, canActivate: [canActive_1.AuthGuard] },
                { path: 'profile', name: 'Profile', component: profile_component_1.ProfileComponent, canActivate: [canActive_1.AuthGuard] },
            ];
            //export const appRouterProviders = [
            //    provideRouter(routes),
            //    ReservationCanDeactivateGuard,
            //    AuthGuard
            //];
            exports_1("AppRouting", AppRouting = router_1.RouterModule.forRoot(routes));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7O1FBbUJHLE1BQU0sRUFtQkMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW5CakIsTUFBTSxHQUFXO2dCQUNuQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxTQUFTLEVBQUMsOEJBQWEsRUFBQztnQkFDL0MsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFDLDhCQUFhLEVBQUM7Z0JBQ25ELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxnQ0FBYyxFQUFDO2dCQUN0RCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsZ0NBQWMsRUFBRTtnQkFDeEQsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLG9DQUFnQixFQUFFO2dCQUM5RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsb0NBQWdCLEVBQUM7Z0JBQzFELEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBQyx3Q0FBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEVBQUM7Z0JBQzdGLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxvQ0FBZ0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEVBQUM7Z0JBQ3ZGLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxvQ0FBZ0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEVBQUM7Z0JBQ3ZGLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxvQ0FBZ0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEVBQUM7YUFDMUYsQ0FBQztZQUVGLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsb0NBQW9DO1lBQ3BDLGVBQWU7WUFDZixJQUFJO1lBRVMsd0JBQUEsVUFBVSxHQUF3QixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNy8xNi8xNi5cbiAqL1xuXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3B1Y2xpYy9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRhY3RDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jb250YWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gIFwiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0Jvb2tpbmdDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL2Jvb2tpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3VudC9wcm9maWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYWlsYm94Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3B1Y2xpYy9tYWlsYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcmljaW5nQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvcHJpY2luZy5jb21wb25lbnRcIjtcblxuXG5pbXBvcnQge1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZS5HdWFyZFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2NhbkFjdGl2ZVwiXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOicnLCBuYW1lOiAnSG9tZScsY29tcG9uZW50OkhvbWVDb21wb25lbnR9LFxuICAgIHtwYXRoOidob21lJywgbmFtZTogJ0hvbWUnLGNvbXBvbmVudDpIb21lQ29tcG9uZW50fSxcbiAgICB7cGF0aDonbG9naW4nLCBuYW1lOiAnTG9naW4nLGNvbXBvbmVudDpMb2dpbkNvbXBvbmVudH0sXG4gICAge3BhdGg6J2Fib3V0JywgbmFtZTogJ0Fib3V0JywgY29tcG9uZW50OkFib3V0Q29tcG9uZW50IH0sXG4gICAge3BhdGg6J2NvbnRhY3QnLCBuYW1lOiAnQ29udGFjdCcsIGNvbXBvbmVudDpDb250YWN0Q29tcG9uZW50IH0sXG4gICAge3BhdGg6J3ByaWNpbmcnLG5hbWU6J1ByaWNpbmcnLGNvbXBvbmVudDpQcmljaW5nQ29tcG9uZW50fSxcbiAgICB7cGF0aDonZGFzaGJvYXJkJywgbmFtZTogJ0Rhc2hib2FyZCcsIGNvbXBvbmVudDpEYXNoYm9hcmRDb21wb25lbnQgLGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXX0sXG4gICAge3BhdGg6J2Jvb2tpbmcnLCBuYW1lOiAnQm9va2luZycsIGNvbXBvbmVudDpCb29raW5nQ29tcG9uZW50ICxjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF19LFxuICAgIHtwYXRoOidtYWlsYm94JywgbmFtZTogJ01haWxib3gnLCBjb21wb25lbnQ6TWFpbGJveENvbXBvbmVudCAsY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdfSxcbiAgICB7cGF0aDoncHJvZmlsZScsIG5hbWU6ICdQcm9maWxlJywgY29tcG9uZW50OlByb2ZpbGVDb21wb25lbnQgLGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXX0sXG5dO1xuXG4vL2V4cG9ydCBjb25zdCBhcHBSb3V0ZXJQcm92aWRlcnMgPSBbXG4vLyAgICBwcm92aWRlUm91dGVyKHJvdXRlcyksXG4vLyAgICBSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZCxcbi8vICAgIEF1dGhHdWFyZFxuLy9dO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
