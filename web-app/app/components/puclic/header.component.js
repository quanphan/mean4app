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
    var HeaderComponent;
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
            let HeaderComponent = class HeaderComponent {
                constructor(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.authentication = this.authService;
                }
                logOut() {
                    this.authService.logout();
                    this.router.navigate(['/home']);
                }
                proFile() {
                    this.router.navigate(['/profile']);
                }
                toggleMenu() {
                    if (this.isCollapsed) {
                        this.isCollapsed = false;
                        this.authService.setSideBar(false);
                    }
                    else {
                        this.isCollapsed = true;
                        this.authService.setSideBar(true);
                    }
                }
            };
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'sd-header',
                    templateUrl: '/views/public/header.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVjbGljL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdIO2dCQUNJLFlBQW1CLE1BQWEsRUFBUSxXQUF1QjtvQkFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBUSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFJL0QsbUJBQWMsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUZoQyxDQUFDO2dCQUlELE1BQU07b0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELE9BQU87b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUlELFVBQVU7b0JBRU4sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUMsS0FBSyxDQUFDO3dCQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLENBQUM7Z0JBRUwsQ0FBQztZQUNMLENBQUM7WUFuQ0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLDJCQUEyQjtpQkFFM0MsQ0FBQzs7K0JBQUE7WUFDRiw2Q0E4QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Y2xpYy9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDIvMjcvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NkLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvcHVibGljL2hlYWRlci5odG1sJyxcblxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjpSb3V0ZXIscHVibGljIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcblxuICAgIH1cblxuICAgIGF1dGhlbnRpY2F0aW9uPXRoaXMuYXV0aFNlcnZpY2U7XG5cbiAgICBsb2dPdXQoKXtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuICAgIH1cbiAgICBwcm9GaWxlKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGUnXSk7XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQ6Ym9vbGVhbjtcblxuICAgIHRvZ2dsZU1lbnUoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZD1mYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0U2lkZUJhcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkPXRydWU7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFNpZGVCYXIodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
