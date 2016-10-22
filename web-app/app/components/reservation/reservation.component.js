/**
 * Created by phanquan on 3/5/16.
 */
System.register(['@angular/core', '@angular/router', '../../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var ReservationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let ReservationComponent = class ReservationComponent {
                constructor(authService) {
                    this.authService = authService;
                    authService.setPageTitle("Reservation");
                }
            };
            ReservationComponent = __decorate([
                core_1.Component({
                    templateUrl: './views/reservation/reservation.html',
                    directives: [router_1.RouterOutlet],
                }), 
                __metadata('design:paramtypes', [auth_service_1.AuthService])
            ], ReservationComponent);
            exports_1("ReservationComponent", ReservationComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkg7Z0JBQ0ksWUFBb0IsV0FBdUI7b0JBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2QyxXQUFXLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQztZQVZEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLHNDQUFzQztvQkFDbkQsVUFBVSxFQUFFLENBQUMscUJBQVksQ0FBQztpQkFFN0IsQ0FBQzs7b0NBQUE7WUFFRix1REFJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDMvNS8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Jlc2VydmF0aW9uQ29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5jb21wb25lbnRcIlxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldCwgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0NoZWNraW5Db21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jlc2VydmF0aW9uL2NoZWNraW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1Jvb21wbGFuQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yb29tcGxhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbi5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0XSxcblxufSlcblxuZXhwb3J0IGNsYXNzIFJlc2VydmF0aW9uQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcbiAgICAgICAgYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKFwiUmVzZXJ2YXRpb25cIilcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
