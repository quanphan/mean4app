/**
 * Created by phanquan on 2/28/16.
 */
System.register(['@angular/core', '@angular/router', '../../services/auth.service', '../../services/dashboard.service', 'ng2-translate/ng2-translate'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, dashboard_service_1, ng2_translate_1;
    var DashboardComponent;
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
            },
            function (dashboard_service_1_1) {
                dashboard_service_1 = dashboard_service_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_routeParams, authService, dashboardService, translate, router) {
                    this._routeParams = _routeParams;
                    this.authService = authService;
                    this.dashboardService = dashboardService;
                    this.router = router;
                    this.param = "world";
                    this.urlType = 'sum';
                    //Total
                    this.Max = 100;
                    this.Value = 78;
                    this.Type = 'success';
                    this.Animate = true;
                    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
                    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translate.setDefaultLang('en');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    translate.use(userLang);
                    this.dashboardService = dashboardService;
                    this.authService.uriName = 'Dashboard';
                    this.authService.setPageTitle('');
                }
                ngOnInit() {
                }
                gotoSummary() {
                    this.urlType = 'sum';
                    this.router.navigate(['/dashboard/summary']);
                }
                gotoBookings() {
                    this.urlType = 'book';
                    this.router.navigate(['/dashboard/booking']);
                }
                isCurLink(iname) {
                    if (iname == this.urlType)
                        return true;
                    return false;
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    templateUrl: './views/dashboard/dashboard.html',
                    pipes: [ng2_translate_1.TranslatePipe],
                    directives: [router_1.RouterOutlet],
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, auth_service_1.AuthService, (typeof (_a = typeof dashboard_service_1.DashboardService !== 'undefined' && dashboard_service_1.DashboardService) === 'function' && _a) || Object, ng2_translate_1.TranslateService, router_1.Router])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
    var _a;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNIO2dCQUVJLFlBQ1ksWUFBMkIsRUFDM0IsV0FBdUIsRUFDdkIsZ0JBQWlDLEVBQ3pDLFNBQTJCLEVBQ25CLE1BQWE7b0JBSmIsaUJBQVksR0FBWixZQUFZLENBQWU7b0JBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUVqQyxXQUFNLEdBQU4sTUFBTSxDQUFPO29CQU56QixVQUFLLEdBQVcsT0FBTyxDQUFDO29CQXlCeEIsWUFBTyxHQUFDLEtBQUssQ0FBQztvQkFrQmQsT0FBTztvQkFDUCxRQUFHLEdBQVEsR0FBRyxDQUFDO29CQUNmLFVBQUssR0FBUSxFQUFFLENBQUM7b0JBQ2hCLFNBQUksR0FBRyxTQUFTLENBQUM7b0JBQ2pCLFlBQU8sR0FBUyxJQUFJLENBQUM7b0JBdENqQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztvQkFDbkYsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFFeEQsa0dBQWtHO29CQUNsRyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUUvQiwyRkFBMkY7b0JBQzNGLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUMsV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDckMsQ0FBQztnQkFDRCxRQUFRO2dCQUVSLENBQUM7Z0JBSUQsV0FBVztvQkFDUCxJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0QsWUFBWTtvQkFDUixJQUFJLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRUQsU0FBUyxDQUFDLEtBQUs7b0JBRVgsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFFcEMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztZQVVMLENBQUM7WUExREQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxLQUFLLEVBQUUsQ0FBQyw2QkFBYSxDQUFDO29CQUN0QixVQUFVLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO2lCQUM3QixDQUFDOztrQ0FBQTtZQUVGLG1EQW9EQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gMi8yOC8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsUm91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlLCBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZVN0YXRpY0xvYWRlcn0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbCcsXG4gICAgcGlwZXM6IFtUcmFuc2xhdGVQaXBlXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuICAgIHBhcmFtOiBzdHJpbmcgPSBcIndvcmxkXCI7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JvdXRlUGFyYW1zOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhc2hib2FyZFNlcnZpY2U6RGFzaGJvYXJkU2VydmljZSxcbiAgICAgICAgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXJcbiAgICApe1xuXG4gICAgICAgIHZhciB1c2VyTGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZS5zcGxpdCgnLScpWzBdOyAvLyB1c2UgbmF2aWdhdG9yIGxhbmcgaWYgYXZhaWxhYmxlXG4gICAgICAgIHVzZXJMYW5nID0gLyhmcnxlbikvZ2kudGVzdCh1c2VyTGFuZykgPyB1c2VyTGFuZyA6ICdlbic7XG5cbiAgICAgICAgLy8gdGhpcyBsYW5ndWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayB3aGVuIGEgdHJhbnNsYXRpb24gaXNuJ3QgZm91bmQgaW4gdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICAgICAgdHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKCdlbicpO1xuXG4gICAgICAgIC8vIHRoZSBsYW5nIHRvIHVzZSwgaWYgdGhlIGxhbmcgaXNuJ3QgYXZhaWxhYmxlLCBpdCB3aWxsIHVzZSB0aGUgY3VycmVudCBsb2FkZXIgdG8gZ2V0IHRoZW1cbiAgICAgICAgdHJhbnNsYXRlLnVzZSh1c2VyTGFuZyk7XG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZSA9IGRhc2hib2FyZFNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXJpTmFtZT0nRGFzaGJvYXJkJztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRQYWdlVGl0bGUoJycpXG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgdXJsVHlwZT0nc3VtJztcblxuICAgIGdvdG9TdW1tYXJ5KCl7XG4gICAgICAgIHRoaXMudXJsVHlwZT0nc3VtJztcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkL3N1bW1hcnknXSk7XG4gICAgfVxuICAgIGdvdG9Cb29raW5ncygpe1xuICAgICAgICB0aGlzLnVybFR5cGU9J2Jvb2snO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQvYm9va2luZyddKTtcbiAgICB9XG5cbiAgICBpc0N1ckxpbmsoaW5hbWUpXG4gICAge1xuICAgICAgICBpZihpbmFtZT09dGhpcy51cmxUeXBlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9Ub3RhbFxuICAgIE1heDpudW1iZXI9MTAwO1xuICAgIFZhbHVlOm51bWJlcj03ODtcbiAgICBUeXBlID0gJ3N1Y2Nlc3MnO1xuICAgIEFuaW1hdGU6Ym9vbGVhbj10cnVlO1xuXG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
