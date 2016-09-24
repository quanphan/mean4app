/**
 * Created by phanquan on 2/27/16.
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
    var NavbarComponent;
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
            let NavbarComponent = class NavbarComponent {
                constructor(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.authentication = this.authService;
                }
                onItemClick(item) {
                    if (item.code != '') {
                        this.authService.uriName = item.name;
                        this.router.navigate([item.code]);
                    }
                }
            };
            NavbarComponent = __decorate([
                core_1.Component({
                    selector: 'sd-navbar',
                    templateUrl: '/views/public/navbar.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
            ], NavbarComponent);
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVjbGljL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdIO2dCQUNJLFlBQW1CLE1BQWEsRUFBUSxXQUF1QjtvQkFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBUSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFHL0QsbUJBQWMsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQURoQyxDQUFDO2dCQUdELFdBQVcsQ0FBQyxJQUFJO29CQUVaLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsRUFBRSxDQUFDLENBQ2pCLENBQUM7d0JBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztnQkFFTCxDQUFDO1lBQ0wsQ0FBQztZQXBCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixXQUFXLEVBQUUsMkJBQTJCO2lCQUMzQyxDQUFDOzsrQkFBQTtZQUVGLDZDQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWNsaWMvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiAyLzI3LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZC1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3B1YmxpYy9uYXZiYXIuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOlJvdXRlcixwdWJsaWMgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2Upe1xuXG4gICAgfVxuICAgIGF1dGhlbnRpY2F0aW9uPXRoaXMuYXV0aFNlcnZpY2U7XG5cbiAgICBvbkl0ZW1DbGljayhpdGVtKVxuICAgIHtcbiAgICAgICAgaWYoaXRlbS5jb2RlIT0nJylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS51cmlOYW1lPWl0ZW0ubmFtZTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtpdGVtLmNvZGVdKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
