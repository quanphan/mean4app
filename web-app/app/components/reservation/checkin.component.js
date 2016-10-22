System.register(['@angular/core', '../../services/auth.service', '../../services/common.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, auth_service_1, common_service_1, router_1;
    var CheckinComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (common_service_1_1) {
                common_service_1 = common_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let CheckinComponent = class CheckinComponent {
                constructor(router, authService, commonService) {
                    this.router = router;
                    this.authService = authService;
                    this.commonService = commonService;
                    this.res = { RoomNo: '201', RoomType: 'Superior Room', CompanyID: '' };
                    this.guestList = [
                        { Name: 'Tran Van Nam', Passport: '323232323', Brithday: '2014-03-09', National: 'VietNam', Made: 'Nam' },
                        { Name: 'Tran Van Tuan', Passport: '323232323', Brithday: '2014-03-09', National: 'VietNam', Made: 'Nam' }
                    ];
                    this.guestSeleted = { Name: 'Tran Van Nam', Passport: '323232323', Brithday: '2014-03-09', National: 'VietNam', Made: 'Nam' };
                    this.companyList = [
                        { value: '1', label: " Success software" },
                        { value: '2', label: " Aperia Solutions software" },
                        { value: '3', label: " Kobe" },
                        { value: '4', label: " Apple Computer" },
                    ];
                    this.authService.setPageTitle('Checkin');
                }
                onGuestClick(item) {
                    this.guestSeleted = item;
                }
            };
            CheckinComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/reservation/checkin.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, common_service_1.CommonService])
            ], CheckinComponent);
            exports_1("CheckinComponent", CheckinComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vY2hlY2tpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDSSxZQUFvQixNQUFhLEVBQ2IsV0FBdUIsRUFDdkIsYUFBMkI7b0JBRjNCLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUsvQyxRQUFHLEdBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUV6RCxjQUFTLEdBQUM7d0JBQ04sRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUM7d0JBQ2hHLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDO3FCQUNwRyxDQUFBO29CQUVELGlCQUFZLEdBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsQ0FBQTtvQkFFdEcsZ0JBQVcsR0FBQzt3QkFDZixFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLG1CQUFtQixFQUFDO3dCQUNyQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixFQUFDO3dCQUM5QyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQzt3QkFDekIsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxpQkFBaUIsRUFBQztxQkFDdEMsQ0FBQztvQkFqQkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBa0JELFlBQVksQ0FBQyxJQUFJO29CQUNiLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDO2dCQUMzQixDQUFDO1lBQ0wsQ0FBQztZQS9CRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyxpQ0FBaUM7aUJBQ2hELENBQUM7O2dDQUFBO1lBRUYsK0NBMkJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9yZXNlcnZhdGlvbi9jaGVja2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiAzLzI2LzE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGVja2luQ29tcG9uZW50fSBmcm9tIFwiY29tcG9uZW50cy9yZXNlcnZhdGlvbi9jaGVja2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Q29tbW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOicvdmlld3MvcmVzZXJ2YXRpb24vY2hlY2tpbi5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGVja2luQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldFBhZ2VUaXRsZSgnQ2hlY2tpbicpO1xuICAgIH1cblxuICAgIHJlcz17Um9vbU5vOicyMDEnLFJvb21UeXBlOidTdXBlcmlvciBSb29tJyxDb21wYW55SUQ6Jyd9O1xuXG4gICAgZ3Vlc3RMaXN0PVtcbiAgICAgICAge05hbWU6ICdUcmFuIFZhbiBOYW0nLCBQYXNzcG9ydDonMzIzMjMyMzIzJyxCcml0aGRheTonMjAxNC0wMy0wOScsTmF0aW9uYWw6J1ZpZXROYW0nLE1hZGU6J05hbSd9LFxuICAgICAgICB7TmFtZTogJ1RyYW4gVmFuIFR1YW4nLCBQYXNzcG9ydDonMzIzMjMyMzIzJyxCcml0aGRheTonMjAxNC0wMy0wOScsTmF0aW9uYWw6J1ZpZXROYW0nLE1hZGU6J05hbSd9XG4gICAgXVxuXG4gICAgZ3Vlc3RTZWxldGVkPXtOYW1lOiAnVHJhbiBWYW4gTmFtJywgUGFzc3BvcnQ6JzMyMzIzMjMyMycsQnJpdGhkYXk6JzIwMTQtMDMtMDknLE5hdGlvbmFsOidWaWV0TmFtJyxNYWRlOidOYW0nfVxuXG4gICAgcHVibGljIGNvbXBhbnlMaXN0PVtcbiAgICAgICAge3ZhbHVlOicxJyxsYWJlbDpcIiBTdWNjZXNzIHNvZnR3YXJlXCJ9LFxuICAgICAgICB7dmFsdWU6JzInLGxhYmVsOlwiIEFwZXJpYSBTb2x1dGlvbnMgc29mdHdhcmVcIn0sXG4gICAgICAgIHt2YWx1ZTonMycsbGFiZWw6XCIgS29iZVwifSxcbiAgICAgICAge3ZhbHVlOic0JyxsYWJlbDpcIiBBcHBsZSBDb21wdXRlclwifSxcbiAgICBdO1xuXG4gICAgb25HdWVzdENsaWNrKGl0ZW0pe1xuICAgICAgICB0aGlzLmd1ZXN0U2VsZXRlZD1pdGVtO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
