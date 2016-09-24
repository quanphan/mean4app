System.register(['@angular/core', '../../services/setup.service', '../../services/auth.service', '@angular/router', '../../control-component/input/search.component', '../../control-component/input/input.component', '../../control-component/select.component'], function(exports_1, context_1) {
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
    var core_1, setup_service_1, auth_service_1, router_1, search_component_1, input_component_1, select_component_1;
    var PackageComponent;
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
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (select_component_1_1) {
                select_component_1 = select_component_1_1;
            }],
        execute: function() {
            let PackageComponent = class PackageComponent {
                constructor(router, setupService, authService) {
                    this.router = router;
                    this.setupService = setupService;
                    this.authService = authService;
                    this.packageSelete = {};
                    this.packageFileter = '';
                    this.addActive = false;
                    this.authService.setPageTitle('Packages');
                }
                onSearch() {
                }
                onClick(item) {
                    this.packageSelete = item;
                }
                edit(item) {
                    this.packageSelete = item;
                    this.addActive = true;
                }
                newPackage() {
                    this.packageSelete = {};
                    this.addActive = true;
                }
                doneSubmit() {
                    this.addActive = false;
                }
                onSubmit() {
                }
            };
            PackageComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/setup/package.html',
                    directives: [select_component_1.SelectComponent, search_component_1.SearchComponent, input_component_1.InputComponent],
                }), 
                __metadata('design:paramtypes', [router_1.Router, setup_service_1.SetupService, auth_service_1.AuthService])
            ], PackageComponent);
            exports_1("PackageComponent", PackageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dXAvcGFja2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQ0ksWUFBb0IsTUFBYSxFQUNiLFlBQXlCLEVBQ3pCLFdBQXVCO29CQUZ2QixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUNiLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFLM0Msa0JBQWEsR0FBQyxFQUFFLENBQUM7b0JBQ2pCLG1CQUFjLEdBQUMsRUFBRSxDQUFDO29CQUNsQixjQUFTLEdBQUMsS0FBSyxDQUFDO29CQUxaLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQU1ELFFBQVE7Z0JBRVIsQ0FBQztnQkFFRCxPQUFPLENBQUMsSUFBSTtvQkFDUixJQUFJLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxJQUFJLENBQUMsSUFBSTtvQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsVUFBVTtvQkFDTixJQUFJLENBQUMsYUFBYSxHQUFDLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsVUFBVTtvQkFFTixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxRQUFRO2dCQUVSLENBQUM7WUFFTCxDQUFDO1lBM0NEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFDLDJCQUEyQjtvQkFDdkMsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBQyxrQ0FBZSxFQUFDLGdDQUFjLENBQUM7aUJBQy9ELENBQUM7O2dDQUFBO1lBRUYsK0NBc0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZXR1cC9wYWNrYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA1LzIvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhY2thZ2VDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3NldHVwL3BhY2thZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQge1NldHVwU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2V0dXAuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvaW5wdXQvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L3NlbGVjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDonL3ZpZXdzL3NldHVwL3BhY2thZ2UuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1NlbGVjdENvbXBvbmVudCxTZWFyY2hDb21wb25lbnQsSW5wdXRDb21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhY2thZ2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNldHVwU2VydmljZTpTZXR1cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZVxuICAgICl7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCdQYWNrYWdlcycpO1xuICAgIH1cblxuICAgIHBhY2thZ2VTZWxldGU9e307XG4gICAgcGFja2FnZUZpbGV0ZXI9Jyc7XG4gICAgYWRkQWN0aXZlPWZhbHNlO1xuXG4gICAgb25TZWFyY2goKXtcblxuICAgIH1cblxuICAgIG9uQ2xpY2soaXRlbSl7XG4gICAgICAgIHRoaXMucGFja2FnZVNlbGV0ZT1pdGVtO1xuICAgIH1cblxuICAgIGVkaXQoaXRlbSl7XG4gICAgICAgIHRoaXMucGFja2FnZVNlbGV0ZT1pdGVtO1xuICAgICAgICB0aGlzLmFkZEFjdGl2ZT10cnVlO1xuICAgIH1cbiAgICBuZXdQYWNrYWdlKCl7XG4gICAgICAgIHRoaXMucGFja2FnZVNlbGV0ZT17fTtcbiAgICAgICAgdGhpcy5hZGRBY3RpdmU9dHJ1ZTtcbiAgICB9XG5cbiAgICBkb25lU3VibWl0KClcbiAgICB7XG4gICAgICAgIHRoaXMuYWRkQWN0aXZlPWZhbHNlO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCl7XG5cbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
