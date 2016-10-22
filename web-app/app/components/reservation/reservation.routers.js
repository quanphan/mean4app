/**
 * Created by phanquan on 7/16/16.
 */
System.register(['@angular/router', "../../components/reservation/checkin.component", "../../components/reservation/roomplan.component", "../../components/reservation/reservation.component", "../../components/reservation/reservationCanDeactivate.Guard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, checkin_component_1, roomplan_component_1, reservation_component_1, reservationCanDeactivate_Guard_1;
    var resRouter, resRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (checkin_component_1_1) {
                checkin_component_1 = checkin_component_1_1;
            },
            function (roomplan_component_1_1) {
                roomplan_component_1 = roomplan_component_1_1;
            },
            function (reservation_component_1_1) {
                reservation_component_1 = reservation_component_1_1;
            },
            function (reservationCanDeactivate_Guard_1_1) {
                reservationCanDeactivate_Guard_1 = reservationCanDeactivate_Guard_1_1;
            }],
        execute: function() {
            exports_1("resRouter", resRouter = [
                {
                    path: 'reservation',
                    component: reservation_component_1.ReservationComponent,
                    index: true,
                    children: [
                        { path: 'checkin', name: 'Checkin', component: checkin_component_1.CheckinComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: 'roomPlan', name: 'RoomPlan', component: roomplan_component_1.RoomplanComponent, canDeactivate: [reservationCanDeactivate_Guard_1.ReservationCanDeactivateGuard] },
                        { path: '', name: 'RoomPlan', component: roomplan_component_1.RoomplanComponent, index: true },
                    ]
                }
            ]);
            exports_1("resRouting", resRouting = router_1.RouterModule.forChild(resRouter));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24ucm91dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7UUFTVSxTQUFTLEVBYVQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWJWLHVCQUFBLFNBQVMsR0FBVztnQkFDN0I7b0JBQ0ksSUFBSSxFQUFFLGFBQWE7b0JBQ25CLFNBQVMsRUFBRSw0Q0FBb0I7b0JBQy9CLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRTt3QkFDTixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsb0NBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUMsOERBQTZCLENBQUMsRUFBQzt3QkFDN0csRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLHNDQUFpQixFQUFFLGFBQWEsRUFBRSxDQUFDLDhEQUE2QixDQUFDLEVBQUM7d0JBQ2hILEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxzQ0FBaUIsRUFBRyxLQUFLLEVBQUUsSUFBSSxFQUFDO3FCQUN6RTtpQkFDSjthQUNKLENBQUEsQ0FBQztZQUVXLHdCQUFBLFVBQVUsR0FBd0IscUJBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLnJvdXRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNy8xNi8xNi5cbiAqL1xuXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGVja2luQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9jaGVja2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb29tcGxhbkNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVzZXJ2YXRpb24vcm9vbXBsYW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Jlc2VydmF0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZS5HdWFyZFwiO1xuXG5leHBvcnQgY29uc3QgcmVzUm91dGVyOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAncmVzZXJ2YXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFJlc2VydmF0aW9uQ29tcG9uZW50LFxuICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtwYXRoOidjaGVja2luJywgbmFtZTogJ0NoZWNraW4nLCBjb21wb25lbnQ6Q2hlY2tpbkNvbXBvbmVudCAsY2FuRGVhY3RpdmF0ZTogW1Jlc2VydmF0aW9uQ2FuRGVhY3RpdmF0ZUd1YXJkXX0sXG4gICAgICAgICAgICB7cGF0aDoncm9vbVBsYW4nLCBuYW1lOiAnUm9vbVBsYW4nLCBjb21wb25lbnQ6Um9vbXBsYW5Db21wb25lbnQgLGNhbkRlYWN0aXZhdGU6IFtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZF19LFxuICAgICAgICAgICAge3BhdGg6JycsIG5hbWU6ICdSb29tUGxhbicsIGNvbXBvbmVudDpSb29tcGxhbkNvbXBvbmVudCAsIGluZGV4OiB0cnVlfSxcbiAgICAgICAgXVxuICAgIH1cbl07XG5cbmV4cG9ydCBjb25zdCByZXNSb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJlc1JvdXRlcik7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
