System.register(['@angular/router', '@angular/core', '../../services/auth.service', '../../services/setup.service'], function(exports_1, context_1) {
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
    var router_1, core_1, auth_service_1, setup_service_1;
    var SetupComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (setup_service_1_1) {
                setup_service_1 = setup_service_1_1;
            }],
        execute: function() {
            let SetupComponent = class SetupComponent {
                constructor(router, authService, setupService) {
                    this.router = router;
                    this.authService = authService;
                    this.setupService = setupService;
                    this.authService.setPageTitle('Set up system');
                }
            };
            SetupComponent = __decorate([
                core_1.Component({
                    templateUrl: './views/setup/setup.html',
                    providers: [setup_service_1.SetupService],
                    directives: [router_1.RouterOutlet],
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, setup_service_1.SetupService])
            ], SetupComponent);
            exports_1("SetupComponent", SetupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dXAvc2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQ0ksWUFBb0IsTUFBYSxFQUFVLFdBQXVCLEVBQzlDLFlBQXlCO29CQUR6QixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUM5QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFFekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELENBQUM7WUFDTCxDQUFDO1lBWkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO29CQUN6QixVQUFVLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO2lCQUM3QixDQUFDOzs4QkFBQTtZQUVGLDJDQU1DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZXR1cC9zZXR1cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gMy81LzE2LlxuICovXG5pbXBvcnQge1JvdXRlciwgUm91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtTZXR1cFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NldHVwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3Mvc2V0dXAvc2V0dXAuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbU2V0dXBTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXR1cENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2V0dXBTZXJ2aWNlOlNldHVwU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCdTZXQgdXAgc3lzdGVtJyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
