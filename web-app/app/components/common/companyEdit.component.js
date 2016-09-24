/**
 * Created by phanquan on 4/8/16.
 */
System.register(['@angular/core', '../../services/company.service'], function(exports_1, context_1) {
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
    var core_1, company_service_1;
    var CompanyEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            }],
        execute: function() {
            //import {SelectComponent} from '../../control-component/select.component';
            let CompanyEditComponent = class CompanyEditComponent {
                constructor(
                    //private _routeParams:RouteParams
                    comService) {
                    this.comService = comService;
                }
                onSubmit() {
                    this.comService.updateCompany(this.comp);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompanyEditComponent.prototype, "comp", void 0);
            CompanyEditComponent = __decorate([
                core_1.Component({
                    selector: 'com-edit',
                    templateUrl: '/views/common/companyEdit.html',
                }), 
                __metadata('design:paramtypes', [company_service_1.CompanyService])
            ], CompanyEditComponent);
            exports_1("CompanyEditComponent", CompanyEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlFZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUgsMkVBQTJFO1lBTzNFO2dCQUVJO29CQUNJLGtDQUFrQztvQkFDMUIsVUFBeUI7b0JBQXpCLGVBQVUsR0FBVixVQUFVLENBQWU7Z0JBR3JDLENBQUM7Z0JBRUQsUUFBUTtvQkFFSixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7WUFFTCxDQUFDO1lBYkc7Z0JBQUMsWUFBSyxFQUFFOzs4REFBQTtZQVBaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFdBQVcsRUFBQyxnQ0FBZ0M7aUJBRS9DLENBQUM7O29DQUFBO1lBRUYsdURBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbW1vbi9jb21wYW55RWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNC84LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29tcGFueUVkaXRDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9jb21wYW55RWRpdC5jb21wb25lbnRcIjtcbi8vaW1wb3J0IHtDb21ib0NvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvY29tYm9ib3guY29tcG9uZW50Jztcbi8vaW1wb3J0IHtEcm9wZG93bkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvZHJvcGRvd24uY29tcG9uZW50Jztcbi8vaW1wb3J0IHtNdXRsaVNlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvbXV0aWxzZWxlY3QuY29tcG9uZW50Jztcbi8vaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvaW5wdXQvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcGFueVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZSc7XG4vL2ltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOicvdmlld3MvY29tbW9uL2NvbXBhbnlFZGl0Lmh0bWwnLFxuICAgIC8vZGlyZWN0aXZlczogW0Ryb3Bkb3duQ29tcG9uZW50LE11dGxpU2VsZWN0Q29tcG9uZW50LENvbWJvQ29tcG9uZW50LElucHV0Q29tcG9uZW50LFNlbGVjdENvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcGFueUVkaXRDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbXA7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIC8vcHJpdmF0ZSBfcm91dGVQYXJhbXM6Um91dGVQYXJhbXNcbiAgICAgICAgcHJpdmF0ZSBjb21TZXJ2aWNlOkNvbXBhbnlTZXJ2aWNlXG4gICAgKXtcblxuICAgIH1cblxuICAgIG9uU3VibWl0KClcbiAgICB7XG4gICAgICAgIHRoaXMuY29tU2VydmljZS51cGRhdGVDb21wYW55KHRoaXMuY29tcCk7XG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
