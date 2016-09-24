/**
 * Created by phanquan on 7/16/16.
 */
System.register(["../../components/reservation/checkin.component", "../../components/reservation/roomplan.component", "../../components/reservation/reservation.component", "../../components/reservation/reservationCanDeactivate.Guard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var checkin_component_1, roomplan_component_1, reservation_component_1, reservationCanDeactivate_Guard_1;
    var resRouter;
    return {
        setters:[
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
                //{
                //    path: '',
                //    redirectTo: '/reservation',
                //    pathMatch: 'full'
                //},
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
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24ucm91dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7UUFTVSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O1lBQVQsdUJBQUEsU0FBUyxHQUFXO2dCQUM3QixHQUFHO2dCQUNILGVBQWU7Z0JBQ2YsaUNBQWlDO2dCQUNqQyx1QkFBdUI7Z0JBQ3ZCLElBQUk7Z0JBRUo7b0JBQ0ksSUFBSSxFQUFFLGFBQWE7b0JBQ25CLFNBQVMsRUFBRSw0Q0FBb0I7b0JBQy9CLEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRTt3QkFDTixFQUFDLElBQUksRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsb0NBQWdCLEVBQUUsYUFBYSxFQUFFLENBQUMsOERBQTZCLENBQUMsRUFBQzt3QkFDN0csRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLHNDQUFpQixFQUFFLGFBQWEsRUFBRSxDQUFDLDhEQUE2QixDQUFDLEVBQUM7d0JBQ2hILEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxzQ0FBaUIsRUFBRyxLQUFLLEVBQUUsSUFBSSxFQUFDO3FCQUN6RTtpQkFDSjthQUNKLENBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLnJvdXRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNy8xNi8xNi5cbiAqL1xuXG5pbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0NoZWNraW5Db21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL2NoZWNraW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Jvb21wbGFuQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yb29tcGxhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVzZXJ2YXRpb25Db21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL3Jlc2VydmF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlLkd1YXJkXCI7XG5cbmV4cG9ydCBjb25zdCByZXNSb3V0ZXI6IFJvdXRlcyA9IFtcbiAgICAvL3tcbiAgICAvLyAgICBwYXRoOiAnJyxcbiAgICAvLyAgICByZWRpcmVjdFRvOiAnL3Jlc2VydmF0aW9uJyxcbiAgICAvLyAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgIC8vfSxcblxuICAgIHtcbiAgICAgICAgcGF0aDogJ3Jlc2VydmF0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBSZXNlcnZhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgaW5kZXg6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7cGF0aDonY2hlY2tpbicsIG5hbWU6ICdDaGVja2luJywgY29tcG9uZW50OkNoZWNraW5Db21wb25lbnQgLGNhbkRlYWN0aXZhdGU6IFtSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZF19LFxuICAgICAgICAgICAge3BhdGg6J3Jvb21QbGFuJywgbmFtZTogJ1Jvb21QbGFuJywgY29tcG9uZW50OlJvb21wbGFuQ29tcG9uZW50ICxjYW5EZWFjdGl2YXRlOiBbUmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlR3VhcmRdfSxcbiAgICAgICAgICAgIHtwYXRoOicnLCBuYW1lOiAnUm9vbVBsYW4nLCBjb21wb25lbnQ6Um9vbXBsYW5Db21wb25lbnQgLCBpbmRleDogdHJ1ZX0sXG4gICAgICAgIF1cbiAgICB9XG5dO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
