System.register(['angular2/core', '../../services/company.service'], function(exports_1, context_1) {
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
    var CompanyobjComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            }],
        execute: function() {
            CompanyobjComponent = (function () {
                function CompanyobjComponent(comService) {
                    this.comService = comService;
                    this.comService = comService;
                }
                CompanyobjComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/views/common/company.html',
                        providers: [company_service_1.CompanyService],
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService])
                ], CompanyobjComponent);
                return CompanyobjComponent;
            }());
            exports_1("CompanyobjComponent", CompanyobjComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlvYmouY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBRUksNkJBQW9CLFVBQXlCO29CQUF6QixlQUFVLEdBQVYsVUFBVSxDQUFlO29CQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDakMsQ0FBQztnQkFUTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBQyw0QkFBNEI7d0JBQ3hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzlCLENBQUM7O3VDQUFBO2dCQVNGLDBCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxREFPQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlvYmouY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDQvNi8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29tcGFueW9iakNvbXBvbmVudH0gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlvYmouY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBhbnlTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDonL3ZpZXdzL2NvbW1vbi9jb21wYW55Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0NvbXBhbnlTZXJ2aWNlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55b2JqQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tU2VydmljZTpDb21wYW55U2VydmljZSl7XG4gICAgICAgIHRoaXMuY29tU2VydmljZSA9IGNvbVNlcnZpY2U7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
