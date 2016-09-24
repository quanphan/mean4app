System.register(['@angular/core', '../../services/auth.service', '../../services/common.service', '@angular/router', '../../control-component/input/search.component', '../../control-component/input/input.component', '../../control-component/select.component', '../../control-component/checkbox.component', '../../control-component/togglebutton.component', '../../components/reservation/roomitem.component', '../../components/commonfs'], function(exports_1, context_1) {
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
    var core_1, auth_service_1, common_service_1, router_1, search_component_1, input_component_1, select_component_1, checkbox_component_1, togglebutton_component_1, roomitem_component_1, commonfs_1;
    var RoomplanComponent;
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
            },
            function (roomitem_component_1_1) {
                roomitem_component_1 = roomitem_component_1_1;
            },
            function (commonfs_1_1) {
                commonfs_1 = commonfs_1_1;
            }],
        execute: function() {
            let RoomplanComponent = class RoomplanComponent {
                constructor(router, authService, commonService, datetime, elRef) {
                    this.router = router;
                    this.authService = authService;
                    this.commonService = commonService;
                    this.datetime = datetime;
                    this.elRef = elRef;
                    this.dayView = 15;
                    this.dates = [];
                    this.yearMonth = [];
                    this.res = { RoomNo: '201', RoomType: 'Superior Room', CompanyID: '' };
                    this.rooms = [
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '101' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '102' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '103' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '104' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '105' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '106' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '107' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '201' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '202' },
                        { Type: 'SUP', TypeName: 'Del', RoomNo: '203' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '204' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '205' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '206' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '207' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '301' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '302' },
                        { Type: 'SUP', TypeName: 'Sta', RoomNo: '303' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '304' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '305' },
                        { Type: 'SUP', TypeName: 'Del', RoomNo: '401' },
                        { Type: 'SUP', TypeName: 'Sup', RoomNo: '402' },
                        { Type: 'SUP', TypeName: 'Del', RoomNo: '403' },
                    ];
                    //guestList=[
                    //    {Name: 'Tran Van Nam', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'},
                    //    {Name: 'Tran Van Tuan', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'}
                    //]
                    //
                    //guestSeleted={Name: 'Tran Van Nam', Passport:'323232323',Brithday:'2014-03-09',National:'VietNam',Made:'Nam'}
                    //
                    //public companyList=[
                    //    {value:'1',label:" Success software"},
                    //    {value:'2',label:" Aperia Solutions software"},
                    //    {value:'3',label:" Kobe"},
                    //    {value:'4',label:" Apple Computer"},
                    //];
                    //onGuestClick(item){
                    //    this.guestSeleted=item;
                    //}
                    this.resSelect = { ID: '', RoomNo: '', FromDate: '', ToDate: '', tempID: '', selected: false };
                    this.resData = [
                        { ResID: '1', RoomNo: '102', FromDate: '8', ToDate: '11', Status: '3' },
                        { ResID: '2', RoomNo: '105', FromDate: '9', ToDate: '14', Status: '1' },
                        { ResID: '3', RoomNo: '203', FromDate: '11', ToDate: '16', Status: '1' },
                        { ResID: '4', RoomNo: '301', FromDate: '8', ToDate: '12', Status: '3' },
                        { ResID: '5', RoomNo: '201', FromDate: '14', ToDate: '15', Status: '1' },
                    ];
                    this._res = { ResID: '', RoomNo: '', FromDate: '', ToDate: '', Status: '' };
                    this.authService.setPageTitle('Room plans');
                    this.getDate(this.dayView);
                }
                getDate(days) {
                    let curDate = this.datetime.getCurDate();
                    let Ds = 0;
                    let MY;
                    for (var _i = -1; _i <= days; _i++) {
                        let _date = this.datetime.addDate(curDate, _i);
                        let _my = this.datetime.getYearMonth(_date);
                        let _month = this.datetime.getMonth(_date);
                        let _year = this.datetime.getYear(_date);
                        let _day = this.datetime.getDate(_date);
                        this.dates.push({ day: _day, month: _month, year: _year });
                        Ds++;
                        if (_i == -1) {
                            MY = _my;
                            this.yearMonth.push({ days: Ds, month: MY });
                            this.yesterday = _day;
                        }
                        else {
                            if (MY != _my) {
                                MY = _my;
                                this.yearMonth.push({ days: Ds, month: MY });
                                Ds = 1;
                            }
                            else {
                                for (var k = 0; k <= this.yearMonth.length; k++) {
                                    if (this.yearMonth[k].month == _my) {
                                        this.yearMonth[k].days = Ds;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                IsSelectRoom(room, date) {
                    if (room == this.resSelect.RoomNo &&
                        parseInt(date.day) >= parseInt(this.resSelect.FromDate) && parseInt(date.day) <= parseInt(this.resSelect.ToDate)) {
                        return true;
                    }
                    return false;
                }
                CheckStatusRoom(room, date, status) {
                    let _tempRes = this.CheckRes(room, date);
                    if (_tempRes != null) {
                        if (_tempRes.Status == status)
                            return true;
                    }
                    return false;
                }
                resSelected() {
                    this.resSelect.selected = true;
                }
                resItem(room, date) {
                    let _tempRes = this.CheckRes(room, date);
                    if (_tempRes != null) {
                        this.resSelect.ID = _tempRes.ResID;
                        this.resSelect.RoomNo = _tempRes.RoomNo;
                        this.resSelect.FromDate = _tempRes.FromDate;
                        this.resSelect.ToDate = _tempRes.ToDate;
                        this.resSelect.selected = true;
                    }
                }
                setResUI(room, date) {
                    if (room == this.resSelect.RoomNo && this.resSelect.selected) {
                        if (parseInt(date.day) == parseInt(this.resSelect.FromDate)) {
                            let night = parseInt(this.resSelect.ToDate) - parseInt(this.resSelect.FromDate);
                            return night + 1;
                        }
                    }
                    let _tempRes = this.CheckRes(room, date);
                    if (_tempRes != null) {
                        let night = parseInt(_tempRes.ToDate) - parseInt(_tempRes.FromDate);
                        return night + 1;
                    }
                    return 1;
                }
                checkDateUISelect(room, date) {
                    if (room == this.resSelect.RoomNo && this.resSelect.selected) {
                        if (parseInt(date.day) > parseInt(this.resSelect.FromDate) && parseInt(date.day) <= parseInt(this.resSelect.ToDate)) {
                            return false;
                        }
                    }
                    let _tempRes = this.CheckRes(room, date);
                    if (_tempRes != null) {
                        if (parseInt(date.day) > parseInt(_tempRes.FromDate) && parseInt(date.day) <= parseInt(_tempRes.ToDate)) {
                            return false;
                        }
                    }
                    return true;
                }
                GetRes(room, date) {
                    let res = this._res;
                    let _tempRes = this.CheckRes(room, date);
                    if (_tempRes != null) {
                        return _tempRes;
                    }
                    if (room == this.resSelect.RoomNo && parseInt(date.day) == parseInt(this.resSelect.FromDate) && this.resSelect.selected) {
                        return this.resSelect;
                    }
                    return res;
                }
                CheckRes(room, date) {
                    for (var k = 0; k < this.resData.length; k++) {
                        if (this.resData[k].RoomNo == room && parseInt(date.day) == parseInt(this.resData[k].FromDate)) {
                            return this.resData[k];
                        }
                    }
                    return null;
                }
            };
            RoomplanComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/reservation/roomplan.html',
                    providers: [common_service_1.CommonService, commonfs_1.Datetime],
                    directives: [select_component_1.SelectComponent, search_component_1.SearchComponent, input_component_1.InputComponent, checkbox_component_1.CheckboxComponent, togglebutton_component_1.TogglebuttonComponent, roomitem_component_1.RoomitemComponent],
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, common_service_1.CommonService, commonfs_1.Datetime, core_1.ElementRef])
            ], RoomplanComponent);
            exports_1("RoomplanComponent", RoomplanComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcm9vbXBsYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUtJLFlBQW9CLE1BQWEsRUFDYixXQUF1QixFQUN2QixhQUEyQixFQUM1QixRQUFpQixFQUNoQixLQUFnQjtvQkFKaEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDYixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtvQkFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzVCLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQ2hCLFVBQUssR0FBTCxLQUFLLENBQVc7b0JBUjdCLFlBQU8sR0FBQyxFQUFFLENBQUM7b0JBQ2xCLFVBQUssR0FBSyxFQUFFLENBQUM7b0JBQ2IsY0FBUyxHQUFLLEVBQUUsQ0FBQztvQkFZakIsUUFBRyxHQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkEwQ3pELFVBQUssR0FBQzt3QkFDRixFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO3dCQUN4QyxFQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFD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QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBRUwsQ0FBQztZQTdORDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyxrQ0FBa0M7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUMsbUJBQVEsQ0FBQztvQkFDbkMsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBQyxrQ0FBZSxFQUFDLGdDQUFjLEVBQUMsc0NBQWlCLEVBQUMsOENBQXFCLEVBQUMsc0NBQWlCLENBQUM7aUJBQ3pILENBQUM7O2lDQUFBO1lBRUYsaURBdU5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yb29tcGxhbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNS8xNC8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoZWNraW5Db21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL3Jlc2VydmF0aW9uL2NoZWNraW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21tb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9pbnB1dC9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NoZWNrYm94Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb2dnbGVidXR0b25Db21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L3RvZ2dsZWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtSb29taXRlbUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXNlcnZhdGlvbi9yb29taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRldGltZSx9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uZnMnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9yZXNlcnZhdGlvbi9yb29tcGxhbi5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb21tb25TZXJ2aWNlLERhdGV0aW1lXSxcbiAgICBkaXJlY3RpdmVzOiBbU2VsZWN0Q29tcG9uZW50LFNlYXJjaENvbXBvbmVudCxJbnB1dENvbXBvbmVudCxDaGVja2JveENvbXBvbmVudCxUb2dnbGVidXR0b25Db21wb25lbnQsUm9vbWl0ZW1Db21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIFJvb21wbGFuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgZGF5Vmlldz0xNTtcbiAgICBkYXRlczphbnk9W107XG4gICAgeWVhck1vbnRoOmFueT1bXTtcbiAgICB5ZXN0ZXJkYXk6YW55O1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29tbW9uU2VydmljZTpDb21tb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBkYXRldGltZTpEYXRldGltZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGVsUmVmOkVsZW1lbnRSZWZcbiAgICApIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJ1Jvb20gcGxhbnMnKTtcbiAgICAgICAgdGhpcy5nZXREYXRlKHRoaXMuZGF5Vmlldyk7XG4gICAgfVxuXG4gICAgcmVzPXtSb29tTm86JzIwMScsUm9vbVR5cGU6J1N1cGVyaW9yIFJvb20nLENvbXBhbnlJRDonJ307XG5cbiAgICBnZXREYXRlKGRheXMpXG4gICAge1xuICAgICAgICBsZXQgY3VyRGF0ZT10aGlzLmRhdGV0aW1lLmdldEN1ckRhdGUoKTtcbiAgICAgICAgbGV0IERzOm51bWJlcj0wO1xuICAgICAgICBsZXQgTVk7XG4gICAgICAgIGZvciAodmFyIF9pID0gLTE7IF9pIDw9IGRheXM7IF9pKyspIHtcbiAgICAgICAgICAgIGxldCBfZGF0ZT10aGlzLmRhdGV0aW1lLmFkZERhdGUoY3VyRGF0ZSxfaSk7XG4gICAgICAgICAgICBsZXQgX215PXRoaXMuZGF0ZXRpbWUuZ2V0WWVhck1vbnRoKF9kYXRlKTtcbiAgICAgICAgICAgIGxldCBfbW9udGg9dGhpcy5kYXRldGltZS5nZXRNb250aChfZGF0ZSk7XG4gICAgICAgICAgICBsZXQgX3llYXI9dGhpcy5kYXRldGltZS5nZXRZZWFyKF9kYXRlKTtcbiAgICAgICAgICAgIGxldCBfZGF5PXRoaXMuZGF0ZXRpbWUuZ2V0RGF0ZShfZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmRhdGVzLnB1c2goe2RheTpfZGF5LG1vbnRoOl9tb250aCx5ZWFyOl95ZWFyfSk7XG5cbiAgICAgICAgICAgIERzKys7XG4gICAgICAgICAgICBpZihfaT09LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgTVk9X215O1xuICAgICAgICAgICAgICAgIHRoaXMueWVhck1vbnRoLnB1c2goe2RheXM6RHMsbW9udGg6TVl9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnllc3RlcmRheT1fZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoTVkhPV9teSl7XG4gICAgICAgICAgICAgICAgICAgIE1ZPV9teTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyTW9udGgucHVzaCh7ZGF5czpEcyxtb250aDpNWX0pO1xuICAgICAgICAgICAgICAgICAgICBEcz0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaz0wO2s8PSB0aGlzLnllYXJNb250aC5sZW5ndGg7aysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy55ZWFyTW9udGhba10ubW9udGggPT0gX215KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyTW9udGhba10uZGF5cyA9IERzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJvb21zPVtcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDEnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDInfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDMnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDQnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDUnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDYnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicxMDcnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicyMDEnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicyMDInfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J0RlbCcsUm9vbU5vOicyMDMnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicyMDQnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicyMDUnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicyMDYnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOicyMDcnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOiczMDEnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOiczMDInfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N0YScsUm9vbU5vOiczMDMnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOiczMDQnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOiczMDUnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J0RlbCcsUm9vbU5vOic0MDEnfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J1N1cCcsUm9vbU5vOic0MDInfSxcbiAgICAgICAge1R5cGU6J1NVUCcsVHlwZU5hbWU6J0RlbCcsUm9vbU5vOic0MDMnfSxcbiAgICBdXG4gICAgLy9ndWVzdExpc3Q9W1xuICAgIC8vICAgIHtOYW1lOiAnVHJhbiBWYW4gTmFtJywgUGFzc3BvcnQ6JzMyMzIzMjMyMycsQnJpdGhkYXk6JzIwMTQtMDMtMDknLE5hdGlvbmFsOidWaWV0TmFtJyxNYWRlOidOYW0nfSxcbiAgICAvLyAgICB7TmFtZTogJ1RyYW4gVmFuIFR1YW4nLCBQYXNzcG9ydDonMzIzMjMyMzIzJyxCcml0aGRheTonMjAxNC0wMy0wOScsTmF0aW9uYWw6J1ZpZXROYW0nLE1hZGU6J05hbSd9XG4gICAgLy9dXG4gICAgLy9cbiAgICAvL2d1ZXN0U2VsZXRlZD17TmFtZTogJ1RyYW4gVmFuIE5hbScsIFBhc3Nwb3J0OiczMjMyMzIzMjMnLEJyaXRoZGF5OicyMDE0LTAzLTA5JyxOYXRpb25hbDonVmlldE5hbScsTWFkZTonTmFtJ31cbiAgICAvL1xuICAgIC8vcHVibGljIGNvbXBhbnlMaXN0PVtcbiAgICAvLyAgICB7dmFsdWU6JzEnLGxhYmVsOlwiIFN1Y2Nlc3Mgc29mdHdhcmVcIn0sXG4gICAgLy8gICAge3ZhbHVlOicyJyxsYWJlbDpcIiBBcGVyaWEgU29sdXRpb25zIHNvZnR3YXJlXCJ9LFxuICAgIC8vICAgIHt2YWx1ZTonMycsbGFiZWw6XCIgS29iZVwifSxcbiAgICAvLyAgICB7dmFsdWU6JzQnLGxhYmVsOlwiIEFwcGxlIENvbXB1dGVyXCJ9LFxuICAgIC8vXTtcbiAgICAvL29uR3Vlc3RDbGljayhpdGVtKXtcbiAgICAvLyAgICB0aGlzLmd1ZXN0U2VsZXRlZD1pdGVtO1xuICAgIC8vfVxuXG5cbiAgICByZXNTZWxlY3Q9e0lEOicnLFJvb21ObzonJyxGcm9tRGF0ZTonJyxUb0RhdGU6JycsdGVtcElEOicnLHNlbGVjdGVkOmZhbHNlfVxuICAgIHJlc0RhdGE9W1xuICAgICAgICB7UmVzSUQ6JzEnLFJvb21ObzonMTAyJyxGcm9tRGF0ZTonOCcsIFRvRGF0ZTonMTEnLFN0YXR1czonMyd9LFxuICAgICAgICB7UmVzSUQ6JzInLFJvb21ObzonMTA1JyxGcm9tRGF0ZTonOScsIFRvRGF0ZTonMTQnLFN0YXR1czonMSd9LFxuICAgICAgICB7UmVzSUQ6JzMnLFJvb21ObzonMjAzJyxGcm9tRGF0ZTonMTEnLCBUb0RhdGU6JzE2JyxTdGF0dXM6JzEnfSxcbiAgICAgICAge1Jlc0lEOic0JyxSb29tTm86JzMwMScsRnJvbURhdGU6JzgnLCBUb0RhdGU6JzEyJyxTdGF0dXM6JzMnfSxcbiAgICAgICAge1Jlc0lEOic1JyxSb29tTm86JzIwMScsRnJvbURhdGU6JzE0JywgVG9EYXRlOicxNScsU3RhdHVzOicxJ30sXG4gICAgXVxuICAgIF9yZXM9e1Jlc0lEOicnLFJvb21ObzonJyxGcm9tRGF0ZTonJywgVG9EYXRlOicnLFN0YXR1czonJ307XG5cbiAgICBJc1NlbGVjdFJvb20ocm9vbSxkYXRlKVxuICAgIHtcbiAgICAgICAgaWYocm9vbT09dGhpcy5yZXNTZWxlY3QuUm9vbU5vICYmXG4gICAgICAgICAgICBwYXJzZUludChkYXRlLmRheSk+PSBwYXJzZUludCh0aGlzLnJlc1NlbGVjdC5Gcm9tRGF0ZSkgJiYgcGFyc2VJbnQoZGF0ZS5kYXkpPD0gcGFyc2VJbnQodGhpcy5yZXNTZWxlY3QuVG9EYXRlKSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBDaGVja1N0YXR1c1Jvb20ocm9vbSxkYXRlLHN0YXR1cylcbiAgICB7XG4gICAgICAgIGxldCBfdGVtcFJlcz10aGlzLkNoZWNrUmVzKHJvb20sZGF0ZSk7XG4gICAgICAgIGlmKF90ZW1wUmVzIT1udWxsIClcbiAgICAgICAge1xuICAgICAgICAgICBpZihfdGVtcFJlcy5TdGF0dXM9PXN0YXR1cylcbiAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlc1NlbGVjdGVkKClcbiAgICB7XG4gICAgICAgIHRoaXMucmVzU2VsZWN0LnNlbGVjdGVkPXRydWU7XG4gICAgfVxuXG4gICAgcmVzSXRlbShyb29tLGRhdGUpXG4gICAge1xuICAgICAgICBsZXQgX3RlbXBSZXM9dGhpcy5DaGVja1Jlcyhyb29tLGRhdGUpO1xuICAgICAgICBpZihfdGVtcFJlcyE9bnVsbCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVzU2VsZWN0LklEPV90ZW1wUmVzLlJlc0lEO1xuICAgICAgICAgICAgdGhpcy5yZXNTZWxlY3QuUm9vbU5vPV90ZW1wUmVzLlJvb21ObztcbiAgICAgICAgICAgIHRoaXMucmVzU2VsZWN0LkZyb21EYXRlPV90ZW1wUmVzLkZyb21EYXRlO1xuICAgICAgICAgICAgdGhpcy5yZXNTZWxlY3QuVG9EYXRlPV90ZW1wUmVzLlRvRGF0ZTtcbiAgICAgICAgICAgIHRoaXMucmVzU2VsZWN0LnNlbGVjdGVkPXRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRSZXNVSShyb29tLGRhdGUpXG4gICAge1xuICAgICAgICBpZihyb29tPT10aGlzLnJlc1NlbGVjdC5Sb29tTm8gJiYgdGhpcy5yZXNTZWxlY3Quc2VsZWN0ZWQgKXtcbiAgICAgICAgICAgIGlmKHBhcnNlSW50KGRhdGUuZGF5KT09IHBhcnNlSW50KHRoaXMucmVzU2VsZWN0LkZyb21EYXRlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgbmlnaHQ9cGFyc2VJbnQodGhpcy5yZXNTZWxlY3QuVG9EYXRlKS1wYXJzZUludCh0aGlzLnJlc1NlbGVjdC5Gcm9tRGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5pZ2h0KzE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX3RlbXBSZXM9dGhpcy5DaGVja1Jlcyhyb29tLGRhdGUpO1xuICAgICAgICBpZihfdGVtcFJlcyE9bnVsbCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuaWdodD1wYXJzZUludChfdGVtcFJlcy5Ub0RhdGUpLXBhcnNlSW50KF90ZW1wUmVzLkZyb21EYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBuaWdodCsxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY2hlY2tEYXRlVUlTZWxlY3Qocm9vbSxkYXRlKVxuICAgIHtcbiAgICAgICAgaWYocm9vbT09dGhpcy5yZXNTZWxlY3QuUm9vbU5vICYmIHRoaXMucmVzU2VsZWN0LnNlbGVjdGVkICl7XG4gICAgICAgICAgICBpZihwYXJzZUludChkYXRlLmRheSk+IHBhcnNlSW50KHRoaXMucmVzU2VsZWN0LkZyb21EYXRlKSAmJiBwYXJzZUludChkYXRlLmRheSk8PSBwYXJzZUludCh0aGlzLnJlc1NlbGVjdC5Ub0RhdGUpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfdGVtcFJlcz10aGlzLkNoZWNrUmVzKHJvb20sZGF0ZSk7XG4gICAgICAgIGlmKF90ZW1wUmVzIT1udWxsIClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYocGFyc2VJbnQoZGF0ZS5kYXkpPiBwYXJzZUludChfdGVtcFJlcy5Gcm9tRGF0ZSkgJiYgcGFyc2VJbnQoZGF0ZS5kYXkpPD0gcGFyc2VJbnQoX3RlbXBSZXMuVG9EYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuXG4gICAgR2V0UmVzKHJvb20sZGF0ZSlcbiAgICB7XG4gICAgICAgIGxldCByZXM9dGhpcy5fcmVzO1xuICAgICAgICBsZXQgX3RlbXBSZXM9dGhpcy5DaGVja1Jlcyhyb29tLGRhdGUpO1xuXG4gICAgICAgIGlmKF90ZW1wUmVzIT1udWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gX3RlbXBSZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZihyb29tPT10aGlzLnJlc1NlbGVjdC5Sb29tTm8gJiYgcGFyc2VJbnQoZGF0ZS5kYXkpPT0gcGFyc2VJbnQodGhpcy5yZXNTZWxlY3QuRnJvbURhdGUpICYmIHRoaXMucmVzU2VsZWN0LnNlbGVjdGVkKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc1NlbGVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgQ2hlY2tSZXMocm9vbSxkYXRlKVxuICAgIHtcbiAgICAgICAgZm9yICh2YXIgaz0wO2s8IHRoaXMucmVzRGF0YS5sZW5ndGg7aysrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNEYXRhW2tdLlJvb21ObyA9PSByb29tICYmIHBhcnNlSW50KGRhdGUuZGF5KT09IHBhcnNlSW50KHRoaXMucmVzRGF0YVtrXS5Gcm9tRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNEYXRhW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
