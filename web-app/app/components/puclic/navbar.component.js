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
                setActiveClass(code) {
                    let url = this.router.url;
                    return url.replace('/', '') == code;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVjbGljL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdIO2dCQUNJLFlBQW1CLE1BQWEsRUFBUSxXQUF1QjtvQkFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBUSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFHL0QsbUJBQWMsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQURoQyxDQUFDO2dCQUdELFdBQVcsQ0FBQyxJQUFJO29CQUVaLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUUsRUFBRSxDQUFDLENBQ2pCLENBQUM7d0JBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztnQkFFTCxDQUFDO2dCQUVELGNBQWMsQ0FBQyxJQUFXO29CQUV0QixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQztnQkFDckMsQ0FBQztZQUNMLENBQUM7WUExQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLDJCQUEyQjtpQkFDM0MsQ0FBQzs7K0JBQUE7WUFFRiw2Q0FxQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Y2xpYy9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDIvMjcvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NkLW5hdmJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvcHVibGljL25hdmJhci5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6Um91dGVyLHB1YmxpYyBhdXRoU2VydmljZTpBdXRoU2VydmljZSl7XG5cbiAgICB9XG4gICAgYXV0aGVudGljYXRpb249dGhpcy5hdXRoU2VydmljZTtcblxuICAgIG9uSXRlbUNsaWNrKGl0ZW0pXG4gICAge1xuICAgICAgICBpZihpdGVtLmNvZGUhPScnKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnVyaU5hbWU9aXRlbS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW0uY29kZV0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRBY3RpdmVDbGFzcyhjb2RlOnN0cmluZylcbiAgICB7XG4gICAgICAgIGxldCB1cmw9dGhpcy5yb3V0ZXIudXJsO1xuICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UoJy8nLCcnKT09Y29kZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
