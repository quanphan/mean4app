System.register(['@angular/core', "./services/auth.service"], function(exports_1, context_1) {
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
    var core_1, auth_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(authService) {
                    this.authService = authService;
                    this.authentication = this.authService;
                }
                toggleMenu() {
                    this.authService.setSideBar(!this.authService.isSidebar);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    templateUrl: 'views/public/index.html',
                    provider: [auth_service_1.AuthService]
                }), 
                __metadata('design:paramtypes', [auth_service_1.AuthService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFDSSxZQUFtQixXQUF1QjtvQkFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBRzFDLG1CQUFjLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFEaEMsQ0FBQztnQkFHRCxVQUFVO29CQUVOLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztZQUNMLENBQUM7WUFoQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsV0FBVyxFQUFFLHlCQUF5QjtvQkFDdEMsUUFBUSxFQUFDLENBQUMsMEJBQVcsQ0FBQztpQkFDekIsQ0FBQzs7NEJBQUE7WUFFRix1Q0FVQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcHVibGljL2luZGV4Lmh0bWwnLFxuICAgIHByb3ZpZGVyOltBdXRoU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTpBdXRoU2VydmljZSApe1xuXG4gICAgfVxuICAgIGF1dGhlbnRpY2F0aW9uPXRoaXMuYXV0aFNlcnZpY2U7XG5cbiAgICB0b2dnbGVNZW51KClcbiAgICB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0U2lkZUJhcighdGhpcy5hdXRoU2VydmljZS5pc1NpZGViYXIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
