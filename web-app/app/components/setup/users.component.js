System.register(['@angular/core', '../../services/setup.service', '../../services/auth.service', '@angular/router', '../../control-component/select.component', '../../control-component/input/search.component'], function(exports_1, context_1) {
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
    var core_1, setup_service_1, auth_service_1, router_1, select_component_1, search_component_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (setup_service_1_1) {
                setup_service_1 = setup_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (select_component_1_1) {
                select_component_1 = select_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            let UserComponent = class UserComponent {
                constructor(router, setupService, authService) {
                    this.router = router;
                    this.setupService = setupService;
                    this.authService = authService;
                    this.setupService = setup_service_1.SetupService;
                    this.authService.setPageTitle('Users');
                }
            };
            UserComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/setup/users.html',
                    directives: [select_component_1.SelectComponent, search_component_1.SearchComponent],
                }), 
                __metadata('design:paramtypes', [router_1.Router, setup_service_1.SetupService, auth_service_1.AuthService])
            ], UserComponent);
            exports_1("UserComponent", UserComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dXAvdXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQ0ksWUFBb0IsTUFBYSxFQUFVLFlBQXlCLEVBQ2hELFdBQXVCO29CQUR2QixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUNoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyw0QkFBWSxDQUFDO29CQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztZQUVMLENBQUM7WUFaRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyx5QkFBeUI7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUMsa0NBQWUsQ0FBQztpQkFDaEQsQ0FBQzs7NkJBQUE7WUFFRix5Q0FPQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2V0dXAvdXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDUvMi8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2V0dXBTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXR1cC5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9pbnB1dC9zZWFyY2guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9zZXR1cC91c2Vycy5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbU2VsZWN0Q29tcG9uZW50LFNlYXJjaENvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHNldHVwU2VydmljZTpTZXR1cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSl7XG4gICAgICAgIHRoaXMuc2V0dXBTZXJ2aWNlID0gU2V0dXBTZXJ2aWNlO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFBhZ2VUaXRsZSgnVXNlcnMnKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
