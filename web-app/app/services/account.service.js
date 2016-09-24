/**
 * Created by phanquan on 8/20/16.
 */
System.register(["@angular/core", '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AccountService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let AccountService = class AccountService {
                constructor(http) {
                    this.http = http;
                    this.accountList = [];
                    this.accountRolsList = [];
                    this.account = {
                        DislayName: 'Quan Phan',
                        Email: 'quanphan@gmail.com',
                        Address: '31A Hien Vuong, Tan Phu, HCM',
                        Description: 'System Admin and Product Owner',
                        Contact: 'Quanphan',
                        Mobile: '098340993434',
                        RollName: 'Product Owner'
                    };
                    this.company = {
                        CompanyName: 'Cty TNHH Phuong Nam',
                        DislayName: 'Test company',
                        Email: 'test@gmail.com',
                        Address: '6 Thi Sach, Q1, HCM',
                        Description: 'Phuong Nam Hotel',
                        Contact: 'Quanphan',
                        Mobile: '098340993434',
                        Leved: '****'
                    };
                }
                GetAccountList() {
                    this.accountList = [
                        { Id: '1', Name: 'abc1', DislayName: 'quan phan', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'System Admin', Status: '0' },
                        { Id: '2', Name: 'abc1', DislayName: 'sdsd', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { Id: '3', Name: 'abc1', DislayName: 'sdsd', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { Id: '4', Name: 'abc1', DislayName: 'sdsd', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { Id: '5', Name: 'abc1', DislayName: 'sdsd', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { Id: '6', Name: 'abc1', DislayName: 'sdsd', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { Id: '7', Name: 'abc1', DislayName: 'sdsd', RollName: 'Admin', Email: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                    ];
                }
                GetAccountRolsList() {
                    this.accountRolsList = [
                        { ID: '1', Code: 'abc1', Name: 'Reseptions', Admin: 'Admin', Delegate: 'xxx@abc.com', Description: 'System Admin' },
                        { ID: '1', Code: 'abc1', Name: 'Housekeeping', Admin: 'Admin', Delegate: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { ID: '1', Code: 'abc1', Name: 'Sale Marketing', Admin: 'Admin', Delegate: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { ID: '1', Code: 'abc1', Name: 'Accounting', Admin: 'Admin', Delegate: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                        { ID: '1', Code: 'abc1', Name: 'Reporting', Admin: 'Admin', Delegate: 'xxx@abc.com', Description: 'sdsdsd sdsd sdsd sdsdsd' },
                    ];
                }
                GetAccountDetail(accId) {
                    this.account = {
                        Name: 'quanphan',
                        DislayName: '',
                        Email: 'quanphan@gmail.com',
                        Address: '',
                        Description: 'System Admin and Product Owner',
                        Contact: 'Quanphan',
                        Mobile: '098340993434',
                        RollName: 'Product Owner'
                    };
                }
                GetNewAccount() {
                    this.account = {
                        Name: '',
                        DislayName: '',
                        Email: '',
                        Address: '',
                        Description: '',
                        Contact: '',
                        Mobile: '',
                        RollName: ''
                    };
                }
            };
            AccountService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], AccountService);
            exports_1("AccountService", AccountService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FjY291bnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUg7Z0JBc0JJLFlBQW1CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFyQjVCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO29CQUNqQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsWUFBTyxHQUFPO3dCQUNWLFVBQVUsRUFBQyxXQUFXO3dCQUN0QixLQUFLLEVBQUMsb0JBQW9CO3dCQUMxQixPQUFPLEVBQUMsOEJBQThCO3dCQUN0QyxXQUFXLEVBQUMsZ0NBQWdDO3dCQUM1QyxPQUFPLEVBQUMsVUFBVTt3QkFDbEIsTUFBTSxFQUFDLGNBQWM7d0JBQ3JCLFFBQVEsRUFBQyxlQUFlO3FCQUMzQixDQUFDO29CQUNGLFlBQU8sR0FBTzt3QkFDVixXQUFXLEVBQUMscUJBQXFCO3dCQUNqQyxVQUFVLEVBQUMsY0FBYzt3QkFDekIsS0FBSyxFQUFDLGdCQUFnQjt3QkFDdEIsT0FBTyxFQUFDLHFCQUFxQjt3QkFDN0IsV0FBVyxFQUFDLGtCQUFrQjt3QkFDOUIsT0FBTyxFQUFDLFVBQVU7d0JBQ2xCLE1BQU0sRUFBQyxjQUFjO3dCQUNyQixLQUFLLEVBQUMsTUFBTTtxQkFDZixDQUFDO2dCQUdGLENBQUM7Z0JBRUQsY0FBYztvQkFDVixJQUFJLENBQUMsV0FBVyxHQUFDO3dCQUNiLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQzt3QkFDdEgsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FB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RTt3QkFDYixLQUFLLEVBQUMsRUFBRTt3QkFDUixPQUFPLEVBQUMsRUFBRTt3QkFDVixXQUFXLEVBQUMsRUFBRTt3QkFDZCxPQUFPLEVBQUMsRUFBRTt3QkFDVixNQUFNLEVBQUMsRUFBRTt3QkFDVCxRQUFRLEVBQUMsRUFBRTtxQkFDZCxDQUFBO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBMUVEO2dCQUFDLGlCQUFVLEVBQUU7OzhCQUFBO1lBQ2IsMkNBeUVDLENBQUEiLCJmaWxlIjoic2VydmljZXMvYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDgvMjAvMTYuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAgXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSxIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Y29udGVudEhlYWRlcnN9IGZyb20gJy4uL2hlYWRlcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xuICAgIGFjY291bnRMaXN0ID0gW107XG4gICAgYWNjb3VudFJvbHNMaXN0ID0gW107XG4gICAgYWNjb3VudDphbnkgPSB7XG4gICAgICAgIERpc2xheU5hbWU6J1F1YW4gUGhhbicsXG4gICAgICAgIEVtYWlsOidxdWFucGhhbkBnbWFpbC5jb20nLFxuICAgICAgICBBZGRyZXNzOiczMUEgSGllbiBWdW9uZywgVGFuIFBodSwgSENNJyxcbiAgICAgICAgRGVzY3JpcHRpb246J1N5c3RlbSBBZG1pbiBhbmQgUHJvZHVjdCBPd25lcicsXG4gICAgICAgIENvbnRhY3Q6J1F1YW5waGFuJyxcbiAgICAgICAgTW9iaWxlOicwOTgzNDA5OTM0MzQnLFxuICAgICAgICBSb2xsTmFtZTonUHJvZHVjdCBPd25lcidcbiAgICB9O1xuICAgIGNvbXBhbnk6YW55ID0ge1xuICAgICAgICBDb21wYW55TmFtZTonQ3R5IFROSEggUGh1b25nIE5hbScsXG4gICAgICAgIERpc2xheU5hbWU6J1Rlc3QgY29tcGFueScsXG4gICAgICAgIEVtYWlsOid0ZXN0QGdtYWlsLmNvbScsXG4gICAgICAgIEFkZHJlc3M6JzYgVGhpIFNhY2gsIFExLCBIQ00nLFxuICAgICAgICBEZXNjcmlwdGlvbjonUGh1b25nIE5hbSBIb3RlbCcsXG4gICAgICAgIENvbnRhY3Q6J1F1YW5waGFuJyxcbiAgICAgICAgTW9iaWxlOicwOTgzNDA5OTM0MzQnLFxuICAgICAgICBMZXZlZDonKioqKidcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcblxuICAgIH1cblxuICAgIEdldEFjY291bnRMaXN0KCl7XG4gICAgICAgIHRoaXMuYWNjb3VudExpc3Q9W1xuICAgICAgICAgICAge0lkOicxJyxOYW1lOidhYmMxJyxEaXNsYXlOYW1lOidxdWFuIHBoYW4nLFJvbGxOYW1lOidBZG1pbicsRW1haWw6J3h4eEBhYmMuY29tJyxEZXNjcmlwdGlvbjonU3lzdGVtIEFkbWluJyxTdGF0dXM6JzAnfSxcbiAgICAgICAgICAgIHtJZDonMicsTmFtZTonYWJjMScsRGlzbGF5TmFtZTonc2RzZCcsUm9sbE5hbWU6J0FkbWluJyxFbWFpbDoneHh4QGFiYy5jb20nLERlc2NyaXB0aW9uOidzZHNkc2Qgc2RzZCBzZHNkIHNkc2RzZCd9LFxuICAgICAgICAgICAge0lkOiczJyxOYW1lOidhYmMxJyxEaXNsYXlOYW1lOidzZHNkJyxSb2xsTmFtZTonQWRtaW4nLEVtYWlsOid4eHhAYWJjLmNvbScsRGVzY3JpcHRpb246J3Nkc2RzZCBzZHNkIHNkc2Qgc2RzZHNkJ30sXG4gICAgICAgICAgICB7SWQ6JzQnLE5hbWU6J2FiYzEnLERpc2xheU5hbWU6J3Nkc2QnLFJvbGxOYW1lOidBZG1pbicsRW1haWw6J3h4eEBhYmMuY29tJyxEZXNjcmlwdGlvbjonc2RzZHNkIHNkc2Qgc2RzZCBzZHNkc2QnfSxcbiAgICAgICAgICAgIHtJZDonNScsTmFtZTonYWJjMScsRGlzbGF5TmFtZTonc2RzZCcsUm9sbE5hbWU6J0FkbWluJyxFbWFpbDoneHh4QGFiYy5jb20nLERlc2NyaXB0aW9uOidzZHNkc2Qgc2RzZCBzZHNkIHNkc2RzZCd9LFxuICAgICAgICAgICAge0lkOic2JyxOYW1lOidhYmMxJyxEaXNsYXlOYW1lOidzZHNkJyxSb2xsTmFtZTonQWRtaW4nLEVtYWlsOid4eHhAYWJjLmNvbScsRGVzY3JpcHRpb246J3Nkc2RzZCBzZHNkIHNkc2Qgc2RzZHNkJ30sXG4gICAgICAgICAgICB7SWQ6JzcnLE5hbWU6J2FiYzEnLERpc2xheU5hbWU6J3Nkc2QnLFJvbGxOYW1lOidBZG1pbicsRW1haWw6J3h4eEBhYmMuY29tJyxEZXNjcmlwdGlvbjonc2RzZHNkIHNkc2Qgc2RzZCBzZHNkc2QnfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgR2V0QWNjb3VudFJvbHNMaXN0KCl7XG4gICAgICAgIHRoaXMuYWNjb3VudFJvbHNMaXN0PVtcbiAgICAgICAgICAgIHtJRDonMScsQ29kZTonYWJjMScsTmFtZTonUmVzZXB0aW9ucycsQWRtaW46J0FkbWluJyxEZWxlZ2F0ZToneHh4QGFiYy5jb20nLERlc2NyaXB0aW9uOidTeXN0ZW0gQWRtaW4nfSxcbiAgICAgICAgICAgIHtJRDonMScsQ29kZTonYWJjMScsTmFtZTonSG91c2VrZWVwaW5nJyxBZG1pbjonQWRtaW4nLERlbGVnYXRlOid4eHhAYWJjLmNvbScsRGVzY3JpcHRpb246J3Nkc2RzZCBzZHNkIHNkc2Qgc2RzZHNkJ30sXG4gICAgICAgICAgICB7SUQ6JzEnLENvZGU6J2FiYzEnLE5hbWU6J1NhbGUgTWFya2V0aW5nJyxBZG1pbjonQWRtaW4nLERlbGVnYXRlOid4eHhAYWJjLmNvbScsRGVzY3JpcHRpb246J3Nkc2RzZCBzZHNkIHNkc2Qgc2RzZHNkJ30sXG4gICAgICAgICAgICB7SUQ6JzEnLENvZGU6J2FiYzEnLE5hbWU6J0FjY291bnRpbmcnLEFkbWluOidBZG1pbicsRGVsZWdhdGU6J3h4eEBhYmMuY29tJyxEZXNjcmlwdGlvbjonc2RzZHNkIHNkc2Qgc2RzZCBzZHNkc2QnfSxcbiAgICAgICAgICAgIHtJRDonMScsQ29kZTonYWJjMScsTmFtZTonUmVwb3J0aW5nJyxBZG1pbjonQWRtaW4nLERlbGVnYXRlOid4eHhAYWJjLmNvbScsRGVzY3JpcHRpb246J3Nkc2RzZCBzZHNkIHNkc2Qgc2RzZHNkJ30sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgR2V0QWNjb3VudERldGFpbChhY2NJZDpzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmFjY291bnQ9e1xuICAgICAgICAgICAgTmFtZToncXVhbnBoYW4nLFxuICAgICAgICAgICAgRGlzbGF5TmFtZTonJyxcbiAgICAgICAgICAgIEVtYWlsOidxdWFucGhhbkBnbWFpbC5jb20nLFxuICAgICAgICAgICAgQWRkcmVzczonJyxcbiAgICAgICAgICAgIERlc2NyaXB0aW9uOidTeXN0ZW0gQWRtaW4gYW5kIFByb2R1Y3QgT3duZXInLFxuICAgICAgICAgICAgQ29udGFjdDonUXVhbnBoYW4nLFxuICAgICAgICAgICAgTW9iaWxlOicwOTgzNDA5OTM0MzQnLFxuICAgICAgICAgICAgUm9sbE5hbWU6J1Byb2R1Y3QgT3duZXInXG4gICAgICAgIH1cbiAgICB9XG4gICAgR2V0TmV3QWNjb3VudCgpXG4gICAge1xuICAgICAgICB0aGlzLmFjY291bnQ9e1xuICAgICAgICAgICAgTmFtZTonJyxcbiAgICAgICAgICAgIERpc2xheU5hbWU6JycsXG4gICAgICAgICAgICBFbWFpbDonJyxcbiAgICAgICAgICAgIEFkZHJlc3M6JycsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjonJyxcbiAgICAgICAgICAgIENvbnRhY3Q6JycsXG4gICAgICAgICAgICBNb2JpbGU6JycsXG4gICAgICAgICAgICBSb2xsTmFtZTonJ1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
