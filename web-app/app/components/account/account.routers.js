/**
 * Created by phanquan on 8/28/16.
 */
System.register(['@angular/router', "../../components/account/account.component", "../../components/account/accountMember.component", "../../components/account/accountActivity.component", "../../components/account/accountEdit.component", "../../components/account/accountSeting.component", "../../components/reservation/reservationCanDeactivate.Guard", "../../components/account/accountMemberEdit.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, account_component_1, accountMember_component_1, accountActivity_component_1, accountEdit_component_1, accountSeting_component_1, reservationCanDeactivate_Guard_1, accountMemberEdit_component_1;
    var accountRouter, accRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (accountMember_component_1_1) {
                accountMember_component_1 = accountMember_component_1_1;
            },
            function (accountActivity_component_1_1) {
                accountActivity_component_1 = accountActivity_component_1_1;
            },
            function (accountEdit_component_1_1) {
                accountEdit_component_1 = accountEdit_component_1_1;
            },
            function (accountSeting_component_1_1) {
                accountSeting_component_1 = accountSeting_component_1_1;
            },
            function (reservationCanDeactivate_Guard_1_1) {
                reservationCanDeactivate_Guard_1 = reservationCanDeactivate_Guard_1_1;
            },
            function (accountMemberEdit_component_1_1) {
                accountMemberEdit_component_1 = accountMemberEdit_component_1_1;
            }],
        execute: function() {
            exports_1("accountRouter", accountRouter = [
                {
                    path: 'account',
                    component: account_component_1.AccountComponent,
                    index: true,
                    children: [
                        { path: 'seting', name: 'User', component: accountSeting_component_1.AccountSetingComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'edit', name: 'User', component: accountEdit_component_1.AccountEditComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'members', name: 'Member', component: accountMember_component_1.AccountmemberComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'activity', name: 'Package', component: accountActivity_component_1.AccountActivityComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'member/:id', name: 'Member', component: accountMemberEdit_component_1.AccountMembeEditComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'member', name: 'Member', component: accountMemberEdit_component_1.AccountMembeEditComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: '', name: 'User', component: accountSeting_component_1.AccountSetingComponent, index: true },
                    ]
                }
            ]);
            exports_1("accRouting", accRouting = router_1.RouterModule.forChild(accountRouter));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LnJvdXRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7O1FBWVUsYUFBYSxFQWlCYixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBakJWLDJCQUFBLGFBQWEsR0FBVztnQkFDakM7b0JBQ0ksSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLG9DQUFnQjtvQkFDM0IsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFO3dCQUNOLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxnREFBc0IsRUFBRSxhQUFhLEVBQUUsQ0FBQyw4REFBNkIsQ0FBQyxFQUFDO3dCQUMvRyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsNENBQW9CLEVBQUUsYUFBYSxFQUFFLENBQUMsOERBQTZCLENBQUMsRUFBQzt3QkFDM0csRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLGdEQUFzQixFQUFFLGFBQWEsRUFBRSxDQUFDLDhEQUE2QixDQUFDLEVBQUM7d0JBQ2xILEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxvREFBd0IsRUFBRSxhQUFhLEVBQUUsQ0FBQyw4REFBNkIsQ0FBQyxFQUFDO3dCQUN0SCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsdURBQXlCLEVBQUUsYUFBYSxFQUFFLENBQUMsOERBQTZCLENBQUMsRUFBQzt3QkFDeEgsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLHVEQUF5QixFQUFFLGFBQWEsRUFBRSxDQUFDLDhEQUE2QixDQUFDLEVBQUM7d0JBQ3BILEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxnREFBc0IsRUFBRyxLQUFLLEVBQUUsSUFBSSxFQUFDO3FCQUMxRTtpQkFDSjthQUNKLENBQUEsQ0FBQztZQUVXLHdCQUFBLFVBQVUsR0FBd0IscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL2FjY291bnQvYWNjb3VudC5yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDgvMjgvMTYuXG4gKi9cblxuaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWNjb3VudENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBY2NvdW50bWVtYmVyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnRNZW1iZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0FjY291bnRBY3Rpdml0eUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50QWN0aXZpdHkuY29tcG9uZW50XCI7XG5pbXBvcnQge0FjY291bnRFZGl0Q29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnRFZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBY2NvdW50U2V0aW5nQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnRTZXRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQge1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGUuR3VhcmRcIjtcbmltcG9ydCB7QWNjb3VudE1lbWJlRWRpdENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50TWVtYmVyRWRpdC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRSb3V0ZXI6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdhY2NvdW50JyxcbiAgICAgICAgY29tcG9uZW50OiBBY2NvdW50Q29tcG9uZW50LFxuICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtwYXRoOidzZXRpbmcnLCBuYW1lOiAnVXNlcicsIGNvbXBvbmVudDpBY2NvdW50U2V0aW5nQ29tcG9uZW50ICxjYW5EZWFjdGl2YXRlOiBbUmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmRdfSxcbiAgICAgICAgICAgIHtwYXRoOidlZGl0JywgbmFtZTogJ1VzZXInLCBjb21wb25lbnQ6QWNjb3VudEVkaXRDb21wb25lbnQgLGNhbkRlYWN0aXZhdGU6IFtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZF19LFxuICAgICAgICAgICAge3BhdGg6J21lbWJlcnMnLCBuYW1lOiAnTWVtYmVyJywgY29tcG9uZW50OkFjY291bnRtZW1iZXJDb21wb25lbnQgLGNhbkRlYWN0aXZhdGU6IFtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZF19LFxuICAgICAgICAgICAge3BhdGg6J2FjdGl2aXR5JywgbmFtZTogJ1BhY2thZ2UnLCBjb21wb25lbnQ6QWNjb3VudEFjdGl2aXR5Q29tcG9uZW50ICxjYW5EZWFjdGl2YXRlOiBbUmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmRdfSxcbiAgICAgICAgICAgIHtwYXRoOidtZW1iZXIvOmlkJywgbmFtZTogJ01lbWJlcicsIGNvbXBvbmVudDpBY2NvdW50TWVtYmVFZGl0Q29tcG9uZW50ICxjYW5EZWFjdGl2YXRlOiBbUmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmRdfSxcbiAgICAgICAgICAgIHtwYXRoOidtZW1iZXInLCBuYW1lOiAnTWVtYmVyJywgY29tcG9uZW50OkFjY291bnRNZW1iZUVkaXRDb21wb25lbnQgLGNhbkRlYWN0aXZhdGU6IFtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZF19LFxuICAgICAgICAgICAge3BhdGg6JycsIG5hbWU6ICdVc2VyJywgY29tcG9uZW50OkFjY291bnRTZXRpbmdDb21wb25lbnQgLCBpbmRleDogdHJ1ZX0sXG4gICAgICAgIF1cbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3QgYWNjUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChhY2NvdW50Um91dGVyKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
