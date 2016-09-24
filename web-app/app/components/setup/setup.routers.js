/**
 * Created by phanquan on 7/16/16.
 */
System.register(["../../components/setup/setup.component", "../../components/setup/rooms.component", "../../components/setup/package.component", "../../components/setup/users.component", "../../components/reservation/reservationCanDeactivate.Guard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var setup_component_1, rooms_component_1, package_component_1, users_component_1, reservationCanDeactivate_Guard_1;
    var setupRouter;
    return {
        setters:[
            function (setup_component_1_1) {
                setup_component_1 = setup_component_1_1;
            },
            function (rooms_component_1_1) {
                rooms_component_1 = rooms_component_1_1;
            },
            function (package_component_1_1) {
                package_component_1 = package_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (reservationCanDeactivate_Guard_1_1) {
                reservationCanDeactivate_Guard_1 = reservationCanDeactivate_Guard_1_1;
            }],
        execute: function() {
            exports_1("setupRouter", setupRouter = [
                {
                    path: 'setup',
                    component: setup_component_1.SetupComponent,
                    index: true,
                    children: [
                        { path: 'user', name: 'User', component: users_component_1.UserComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'room', name: 'Room', component: rooms_component_1.RoomComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'package', name: 'Package', component: package_component_1.PackageComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: '', name: 'User', component: users_component_1.UserComponent, index: true },
                    ]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dXAvc2V0dXAucm91dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7UUFVVSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVgseUJBQUEsV0FBVyxHQUFXO2dCQUMvQjtvQkFDSSxJQUFJLEVBQUUsT0FBTztvQkFDYixTQUFTLEVBQUUsZ0NBQWM7b0JBQ3pCLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRTt3QkFDTixFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsK0JBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyw4REFBNkIsQ0FBQyxFQUFDO3dCQUNwRyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsK0JBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyw4REFBNkIsQ0FBQyxFQUFDO3dCQUNwRyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsb0NBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUMsOERBQTZCLENBQUMsRUFBQzt3QkFDN0csRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLCtCQUFhLEVBQUcsS0FBSyxFQUFFLElBQUksRUFBQztxQkFDakU7aUJBQ0o7YUFDSixDQUFBLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zZXR1cC9zZXR1cC5yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMTYvMTYuXG4gKi9cblxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7U2V0dXBDb21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NldHVwL3NldHVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb29tQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZXR1cC9yb29tcy5jb21wb25lbnRcIjtcbmltcG9ydCB7UGFja2FnZUNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2V0dXAvcGFja2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2V0dXAvdXNlcnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGUuR3VhcmRcIjtcblxuZXhwb3J0IGNvbnN0IHNldHVwUm91dGVyOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnc2V0dXAnLFxuICAgICAgICBjb21wb25lbnQ6IFNldHVwQ29tcG9uZW50LFxuICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtwYXRoOid1c2VyJywgbmFtZTogJ1VzZXInLCBjb21wb25lbnQ6VXNlckNvbXBvbmVudCAsY2FuRGVhY3RpdmF0ZTogW1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkXX0sXG4gICAgICAgICAgICB7cGF0aDoncm9vbScsIG5hbWU6ICdSb29tJywgY29tcG9uZW50OlJvb21Db21wb25lbnQgLGNhbkRlYWN0aXZhdGU6IFtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZF19LFxuICAgICAgICAgICAge3BhdGg6J3BhY2thZ2UnLCBuYW1lOiAnUGFja2FnZScsIGNvbXBvbmVudDpQYWNrYWdlQ29tcG9uZW50ICxjYW5EZWFjdGl2YXRlOiBbUmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmRdfSxcbiAgICAgICAgICAgIHtwYXRoOicnLCBuYW1lOiAnVXNlcicsIGNvbXBvbmVudDpVc2VyQ29tcG9uZW50ICwgaW5kZXg6IHRydWV9LFxuICAgICAgICBdXG4gICAgfVxuXTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
