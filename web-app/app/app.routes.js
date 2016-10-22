/**
 * Created by phanquan on 7/16/16.
 */
System.register(['@angular/router', "./components/puclic/login.component", "./components/home/about.component", "./components/home/home.component", "./components/home/contact.component", "./components/dashboard/dashboard.component", "./components/common/booking.component", "./components/account/profile.component", "./components/puclic/mailbox.component", "./components/home/pricing.component", "./components/demo/demo.component", "./canActive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, about_component_1, home_component_1, contact_component_1, dashboard_component_1, booking_component_1, profile_component_1, mailbox_component_1, pricing_component_1, demo_component_1, canActive_1;
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
            function (demo_component_1_1) {
                demo_component_1 = demo_component_1_1;
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
                { path: 'demo', name: 'Demo', component: demo_component_1.DemoComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7O1FBbUJHLE1BQU0sRUFvQkMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXBCakIsTUFBTSxHQUFXO2dCQUNuQixFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxTQUFTLEVBQUMsOEJBQWEsRUFBQztnQkFDL0MsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsU0FBUyxFQUFDLDhCQUFhLEVBQUM7Z0JBQ25ELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxnQ0FBYyxFQUFDO2dCQUN0RCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsZ0NBQWMsRUFBRTtnQkFDeEQsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLG9DQUFnQixFQUFFO2dCQUM5RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsb0NBQWdCLEVBQUM7Z0JBQzFELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyw4QkFBYSxFQUFDO2dCQUNqRCxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsd0NBQWtCLEVBQUUsV0FBVyxFQUFFLENBQUMscUJBQVMsQ0FBQyxFQUFDO2dCQUM3RixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsb0NBQWdCLEVBQUUsV0FBVyxFQUFFLENBQUMscUJBQVMsQ0FBQyxFQUFDO2dCQUN2RixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsb0NBQWdCLEVBQUUsV0FBVyxFQUFFLENBQUMscUJBQVMsQ0FBQyxFQUFDO2dCQUN2RixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsb0NBQWdCLEVBQUUsV0FBVyxFQUFFLENBQUMscUJBQVMsQ0FBQyxFQUFDO2FBQzFGLENBQUM7WUFFRixxQ0FBcUM7WUFDckMsNEJBQTRCO1lBQzVCLG9DQUFvQztZQUNwQyxlQUFlO1lBQ2YsSUFBSTtZQUVTLHdCQUFBLFVBQVUsR0FBd0IscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMTYvMTYuXG4gKi9cblxuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvYWJvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICBcIi4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCb29raW5nQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbW1vbi9ib29raW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY291bnQvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWFpbGJveENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWNsaWMvbWFpbGJveC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJpY2luZ0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3ByaWNpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge0RlbW9Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZGVtby9kZW1vLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQge1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkfSBmcm9tIFwiLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZS5HdWFyZFwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2NhbkFjdGl2ZVwiXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOicnLCBuYW1lOiAnSG9tZScsY29tcG9uZW50OkhvbWVDb21wb25lbnR9LFxuICAgIHtwYXRoOidob21lJywgbmFtZTogJ0hvbWUnLGNvbXBvbmVudDpIb21lQ29tcG9uZW50fSxcbiAgICB7cGF0aDonbG9naW4nLCBuYW1lOiAnTG9naW4nLGNvbXBvbmVudDpMb2dpbkNvbXBvbmVudH0sXG4gICAge3BhdGg6J2Fib3V0JywgbmFtZTogJ0Fib3V0JywgY29tcG9uZW50OkFib3V0Q29tcG9uZW50IH0sXG4gICAge3BhdGg6J2NvbnRhY3QnLCBuYW1lOiAnQ29udGFjdCcsIGNvbXBvbmVudDpDb250YWN0Q29tcG9uZW50IH0sXG4gICAge3BhdGg6J3ByaWNpbmcnLG5hbWU6J1ByaWNpbmcnLGNvbXBvbmVudDpQcmljaW5nQ29tcG9uZW50fSxcbiAgICB7cGF0aDonZGVtbycsbmFtZTonRGVtbycsY29tcG9uZW50OkRlbW9Db21wb25lbnR9LFxuICAgIHtwYXRoOidkYXNoYm9hcmQnLCBuYW1lOiAnRGFzaGJvYXJkJywgY29tcG9uZW50OkRhc2hib2FyZENvbXBvbmVudCAsY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdfSxcbiAgICB7cGF0aDonYm9va2luZycsIG5hbWU6ICdCb29raW5nJywgY29tcG9uZW50OkJvb2tpbmdDb21wb25lbnQgLGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXX0sXG4gICAge3BhdGg6J21haWxib3gnLCBuYW1lOiAnTWFpbGJveCcsIGNvbXBvbmVudDpNYWlsYm94Q29tcG9uZW50ICxjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF19LFxuICAgIHtwYXRoOidwcm9maWxlJywgbmFtZTogJ1Byb2ZpbGUnLCBjb21wb25lbnQ6UHJvZmlsZUNvbXBvbmVudCAsY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdfSxcbl07XG5cbi8vZXhwb3J0IGNvbnN0IGFwcFJvdXRlclByb3ZpZGVycyA9IFtcbi8vICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKSxcbi8vICAgIFJlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkLFxuLy8gICAgQXV0aEd1YXJkXG4vL107XG5cbmV4cG9ydCBjb25zdCBBcHBSb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
