/**
 * Created by phanquan on 4/24/16.
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
    var MailboxComponent;
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
            let MailboxComponent = class MailboxComponent {
                constructor(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.authentication = this.authService;
                    this.authService.pageTitle = 'Mail box';
                }
            };
            MailboxComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/public/mailbox.html',
                }), 
                __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
            ], MailboxComponent);
            exports_1("MailboxComponent", MailboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVjbGljL21haWxib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVSDtnQkFDSSxZQUFtQixNQUFhLEVBQVEsV0FBdUI7b0JBQTVDLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVEsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBSS9ELG1CQUFjLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFINUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUMsVUFBVSxDQUFDO2dCQUMxQyxDQUFDO1lBSUwsQ0FBQztZQVhEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLDRCQUE0QjtpQkFDNUMsQ0FBQzs7Z0NBQUE7WUFFRiwrQ0FPQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHVjbGljL21haWxib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDQvMjQvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy92aWV3cy9wdWJsaWMvbWFpbGJveC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYWlsYm94Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOlJvdXRlcixwdWJsaWMgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2Upe1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnBhZ2VUaXRsZT0nTWFpbCBib3gnO1xuICAgIH1cblxuICAgIGF1dGhlbnRpY2F0aW9uPXRoaXMuYXV0aFNlcnZpY2U7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
