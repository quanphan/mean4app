System.register(['@angular/core', '../../services/auth.service', '../../services/common.service', '@angular/router', '../../control-component/input/search.component', '../../control-component/input/input.component', '../../control-component/select.component', '../../control-component/checkbox.component', '../../control-component/togglebutton.component'], function(exports_1, context_1) {
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
    var core_1, auth_service_1, common_service_1, router_1, search_component_1, input_component_1, select_component_1, checkbox_component_1, togglebutton_component_1;
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
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (select_component_1_1) {
                select_component_1 = select_component_1_1;
            },
            function (checkbox_component_1_1) {
                checkbox_component_1 = checkbox_component_1_1;
            },
            function (togglebutton_component_1_1) {
                togglebutton_component_1 = togglebutton_component_1_1;
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
                    providers: [common_service_1.CommonService],
                    directives: [select_component_1.SelectComponent, search_component_1.SearchComponent, input_component_1.InputComponent, checkbox_component_1.CheckboxComponent, togglebutton_component_1.TogglebuttonComponent],
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, common_service_1.CommonService])
            ], CheckinComponent);
            exports_1("CheckinComponent", CheckinComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vY2hlY2tpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQ0ksWUFBb0IsTUFBYSxFQUNiLFdBQXVCLEVBQ3ZCLGFBQTJCO29CQUYzQixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFLL0MsUUFBRyxHQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFFekQsY0FBUyxHQUFDO3dCQUNOLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDO3dCQUNoRyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQztxQkFDcEcsQ0FBQTtvQkFFRCxpQkFBWSxHQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLENBQUE7b0JBRXRHLGdCQUFXLEdBQUM7d0JBQ2YsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxtQkFBbUIsRUFBQzt3QkFDckMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyw0QkFBNEIsRUFBQzt3QkFDOUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUM7d0JBQ3pCLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUM7cUJBQ3RDLENBQUM7b0JBakJFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQWtCRCxZQUFZLENBQUMsSUFBSTtvQkFDYixJQUFJLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQztnQkFDM0IsQ0FBQztZQUNMLENBQUM7WUFqQ0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUMsaUNBQWlDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO29CQUMxQixVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFDLGtDQUFlLEVBQUMsZ0NBQWMsRUFBQyxzQ0FBaUIsRUFBQyw4Q0FBcUIsQ0FBQztpQkFDdkcsQ0FBQzs7Z0NBQUE7WUFFRiwrQ0EyQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Jlc2VydmF0aW9uL2NoZWNraW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDMvMjYvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoZWNraW5Db21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3Jlc2VydmF0aW9uL2NoZWNraW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9pbnB1dC9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoZWNrYm94Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb2dnbGVidXR0b25Db21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L3RvZ2dsZWJ1dHRvbi5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9yZXNlcnZhdGlvbi9jaGVja2luLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbW1vblNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtTZWxlY3RDb21wb25lbnQsU2VhcmNoQ29tcG9uZW50LElucHV0Q29tcG9uZW50LENoZWNrYm94Q29tcG9uZW50LFRvZ2dsZWJ1dHRvbkNvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgQ2hlY2tpbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21tb25TZXJ2aWNlOkNvbW1vblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJ0NoZWNraW4nKTtcbiAgICB9XG5cbiAgICByZXM9e1Jvb21ObzonMjAxJyxSb29tVHlwZTonU3VwZXJpb3IgUm9vbScsQ29tcGFueUlEOicnfTtcblxuICAgIGd1ZXN0TGlzdD1bXG4gICAgICAgIHtOYW1lOiAnVHJhbiBWYW4gTmFtJywgUGFzc3BvcnQ6JzMyMzIzMjMyMycsQnJpdGhkYXk6JzIwMTQtMDMtMDknLE5hdGlvbmFsOidWaWV0TmFtJyxNYWRlOidOYW0nfSxcbiAgICAgICAge05hbWU6ICdUcmFuIFZhbiBUdWFuJywgUGFzc3BvcnQ6JzMyMzIzMjMyMycsQnJpdGhkYXk6JzIwMTQtMDMtMDknLE5hdGlvbmFsOidWaWV0TmFtJyxNYWRlOidOYW0nfVxuICAgIF1cblxuICAgIGd1ZXN0U2VsZXRlZD17TmFtZTogJ1RyYW4gVmFuIE5hbScsIFBhc3Nwb3J0OiczMjMyMzIzMjMnLEJyaXRoZGF5OicyMDE0LTAzLTA5JyxOYXRpb25hbDonVmlldE5hbScsTWFkZTonTmFtJ31cblxuICAgIHB1YmxpYyBjb21wYW55TGlzdD1bXG4gICAgICAgIHt2YWx1ZTonMScsbGFiZWw6XCIgU3VjY2VzcyBzb2Z0d2FyZVwifSxcbiAgICAgICAge3ZhbHVlOicyJyxsYWJlbDpcIiBBcGVyaWEgU29sdXRpb25zIHNvZnR3YXJlXCJ9LFxuICAgICAgICB7dmFsdWU6JzMnLGxhYmVsOlwiIEtvYmVcIn0sXG4gICAgICAgIHt2YWx1ZTonNCcsbGFiZWw6XCIgQXBwbGUgQ29tcHV0ZXJcIn0sXG4gICAgXTtcblxuICAgIG9uR3Vlc3RDbGljayhpdGVtKXtcbiAgICAgICAgdGhpcy5ndWVzdFNlbGV0ZWQ9aXRlbTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
