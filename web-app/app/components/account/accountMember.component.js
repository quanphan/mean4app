/**
 * Created by phanquan on 8/28/16.
 */
System.register(['@angular/core', '../../services/account.service', '../../services/auth.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, account_service_1, auth_service_1, router_1;
    var AccountmemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let AccountmemberComponent = class AccountmemberComponent {
                constructor(router, accService, authService) {
                    this.router = router;
                    this.accService = accService;
                    this.authService = authService;
                    this.selectItem = { name: '' };
                    this.accFileter = '';
                    this.cardView = true;
                    this.authService.setPageTitle('');
                    this.accService.GetAccountList();
                }
                onSearch() {
                    //let searchDto={Name:this.comFileter};
                    //this.comService.getCompany(searchDto);
                }
                onViewItemClick(accId) {
                    this.router.navigate(['/account/member', accId]);
                }
                onNewItemClick() {
                    this.router.navigate(['/account/member']);
                }
                LoadView(mode) {
                    if (mode == 'card')
                        this.cardView = true;
                    if (mode == 'list')
                        this.cardView = false;
                }
            };
            AccountmemberComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/account/accMember.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, account_service_1.AccountService, auth_service_1.AuthService])
            ], AccountmemberComponent);
            exports_1("AccountmemberComponent", AccountmemberComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50TWVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUg7Z0JBQ0ksWUFBb0IsTUFBYSxFQUFVLFVBQXlCLEVBQ2hELFdBQXVCO29CQUR2QixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFVLGVBQVUsR0FBVixVQUFVLENBQWU7b0JBQ2hELGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQU1wQyxlQUFVLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7b0JBQ3ZCLGVBQVUsR0FBUSxFQUFFLENBQUM7b0JBQzVCLGFBQVEsR0FBUyxJQUFJLENBQUM7b0JBUGxCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUVsQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQUtELFFBQVE7b0JBRUosdUNBQXVDO29CQUN2Qyx3Q0FBd0M7Z0JBQzVDLENBQUM7Z0JBRUQsZUFBZSxDQUFDLEtBQUs7b0JBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxjQUFjO29CQUVWLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUNELFFBQVEsQ0FBQyxJQUFXO29CQUVoQixFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUUsTUFBTSxDQUFDO3dCQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO29CQUNwQyxFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUUsTUFBTSxDQUFDO3dCQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQztZQW5DRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQywrQkFBK0I7aUJBRTlDLENBQUM7O3NDQUFBO1lBRUYsMkRBOEJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hY2NvdW50L2FjY291bnRNZW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDgvMjgvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWNjb3VudFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOicvdmlld3MvYWNjb3VudC9hY2NNZW1iZXIuaHRtbCcsXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50bWVtYmVyQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgYWNjU2VydmljZTpBY2NvdW50U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJycpO1xuXG4gICAgICAgIHRoaXMuYWNjU2VydmljZS5HZXRBY2NvdW50TGlzdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RJdGVtID0ge25hbWU6Jyd9O1xuICAgIHB1YmxpYyBhY2NGaWxldGVyOnN0cmluZz0nJztcbiAgICBjYXJkVmlldzpib29sZWFuPXRydWU7XG4gICAgb25TZWFyY2goKVxuICAgIHtcbiAgICAgICAgLy9sZXQgc2VhcmNoRHRvPXtOYW1lOnRoaXMuY29tRmlsZXRlcn07XG4gICAgICAgIC8vdGhpcy5jb21TZXJ2aWNlLmdldENvbXBhbnkoc2VhcmNoRHRvKTtcbiAgICB9XG5cbiAgICBvblZpZXdJdGVtQ2xpY2soYWNjSWQpXG4gICAge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hY2NvdW50L21lbWJlcicsYWNjSWRdKTtcbiAgICB9XG4gICAgb25OZXdJdGVtQ2xpY2soKVxuICAgIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWNjb3VudC9tZW1iZXInXSk7XG4gICAgfVxuICAgIExvYWRWaWV3KG1vZGU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYobW9kZT09J2NhcmQnKSB0aGlzLmNhcmRWaWV3PXRydWU7XG4gICAgICAgIGlmKG1vZGU9PSdsaXN0JykgdGhpcy5jYXJkVmlldz1mYWxzZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
