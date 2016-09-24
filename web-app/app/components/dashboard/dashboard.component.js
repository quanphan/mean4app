/**
 * Created by phanquan on 2/28/16.
 */
System.register(['@angular/core', '@angular/router', 'ng2-translate/ng2-translate'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_translate_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_routeParams, translate) {
                    this._routeParams = _routeParams;
                    this.param = "world";
                    this.test = "";
                    this.test1 = "2016-07-12";
                    this.companyList = [
                        { value: '1', label: " Success software" },
                        { value: '2', label: " Aperia Solutions software" },
                        { value: '3', label: " Kobe" },
                        { value: '4', label: " Apple Computer" },
                    ];
                    this.typeList = [
                        { value: '1', label: " Type 1" },
                        { value: '2', label: " Type 2" },
                        { value: '3', label: " Type 3" },
                        { value: '4', label: " Type 4" },
                    ];
                    this.type = { value: '1', label: "Type 1" };
                    this.comp = { ID: '1', label: "abc", type: '1', value: '12345678', phone: '09887654321' };
                    this.dropItems = [{ id: 1, text: 'Item1' }, { id: 2, text: 'Item2' }];
                    this.selected = [{ id: 2 }];
                    var userLang = navigator.language.split('-')[0]; // use navigator lang if available
                    userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translate.setDefaultLang('en');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    translate.use(userLang);
                }
                ngOnInit() {
                }
                onUpdate(ev) {
                    this.selOut = ev;
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    templateUrl: './views/dashboard/dashboard.html',
                    //directives: [DropdownComponent,MutliSelectComponent,ComboComponent,InputComponent,
                    //    MaskedInputDirective,MaskInput,SelectComponent,DatePicker,InputNumberComponent],
                    pipes: [ng2_translate_1.TranslatePipe],
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_translate_1.TranslateService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNIO2dCQUVJLFlBQ1ksWUFBMkIsRUFDbkMsU0FBMkI7b0JBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFlO29CQUZ2QyxVQUFLLEdBQVcsT0FBTyxDQUFDO29CQW1CeEIsU0FBSSxHQUFDLEVBQUUsQ0FBQztvQkFDUixVQUFLLEdBQUMsWUFBWSxDQUFDO29CQUNaLGdCQUFXLEdBQUM7d0JBQ2YsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxtQkFBbUIsRUFBQzt3QkFDckMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyw0QkFBNEIsRUFBQzt3QkFDOUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUM7d0JBQ3pCLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUM7cUJBQ3RDLENBQUM7b0JBRUssYUFBUSxHQUFDO3dCQUNaLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDO3dCQUMzQixFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQzt3QkFDM0IsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUM7d0JBQzNCLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDO3FCQUM5QixDQUFDO29CQUNLLFNBQUksR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxDQUFDO29CQUVsQyxTQUFJLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUUsQ0FBQztvQkFJbkYsY0FBUyxHQUFFLENBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBQyxDQUFFLENBQUM7b0JBQzdELGFBQVEsR0FBRSxDQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFFLENBQUM7b0JBbkNsQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztvQkFDbkYsUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFFeEQsa0dBQWtHO29CQUNsRyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUUvQiwyRkFBMkY7b0JBQzNGLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0QsUUFBUTtnQkFFUixDQUFDO2dCQTJCRCxRQUFRLENBQUMsRUFBRTtvQkFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUVMLENBQUM7WUF4REQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxvRkFBb0Y7b0JBQ3BGLHNGQUFzRjtvQkFDdEYsS0FBSyxFQUFFLENBQUMsNkJBQWEsQ0FBQztpQkFDekIsQ0FBQzs7a0NBQUE7WUFFRixtREFpREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDIvMjgvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlU3RhdGljTG9hZGVyfSBmcm9tICduZzItdHJhbnNsYXRlL25nMi10cmFuc2xhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcbiAgICAvL2RpcmVjdGl2ZXM6IFtEcm9wZG93bkNvbXBvbmVudCxNdXRsaVNlbGVjdENvbXBvbmVudCxDb21ib0NvbXBvbmVudCxJbnB1dENvbXBvbmVudCxcbiAgICAvLyAgICBNYXNrZWRJbnB1dERpcmVjdGl2ZSxNYXNrSW5wdXQsU2VsZWN0Q29tcG9uZW50LERhdGVQaWNrZXIsSW5wdXROdW1iZXJDb21wb25lbnRdLFxuICAgIHBpcGVzOiBbVHJhbnNsYXRlUGlwZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgICBwYXJhbTogc3RyaW5nID0gXCJ3b3JsZFwiO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yb3V0ZVBhcmFtczpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgKXtcblxuICAgICAgICB2YXIgdXNlckxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXTsgLy8gdXNlIG5hdmlnYXRvciBsYW5nIGlmIGF2YWlsYWJsZVxuICAgICAgICB1c2VyTGFuZyA9IC8oZnJ8ZW4pL2dpLnRlc3QodXNlckxhbmcpID8gdXNlckxhbmcgOiAnZW4nO1xuXG4gICAgICAgIC8vIHRoaXMgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgd2hlbiBhIHRyYW5zbGF0aW9uIGlzbid0IGZvdW5kIGluIHRoZSBjdXJyZW50IGxhbmd1YWdlXG4gICAgICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcblxuICAgICAgICAvLyB0aGUgbGFuZyB0byB1c2UsIGlmIHRoZSBsYW5nIGlzbid0IGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIGN1cnJlbnQgbG9hZGVyIHRvIGdldCB0aGVtXG4gICAgICAgIHRyYW5zbGF0ZS51c2UodXNlckxhbmcpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIH1cblxuICAgIHRlc3Q9XCJcIjtcbiAgICB0ZXN0MT1cIjIwMTYtMDctMTJcIjtcbiAgICBwdWJsaWMgY29tcGFueUxpc3Q9W1xuICAgICAgICB7dmFsdWU6JzEnLGxhYmVsOlwiIFN1Y2Nlc3Mgc29mdHdhcmVcIn0sXG4gICAgICAgIHt2YWx1ZTonMicsbGFiZWw6XCIgQXBlcmlhIFNvbHV0aW9ucyBzb2Z0d2FyZVwifSxcbiAgICAgICAge3ZhbHVlOiczJyxsYWJlbDpcIiBLb2JlXCJ9LFxuICAgICAgICB7dmFsdWU6JzQnLGxhYmVsOlwiIEFwcGxlIENvbXB1dGVyXCJ9LFxuICAgIF07XG5cbiAgICBwdWJsaWMgdHlwZUxpc3Q9W1xuICAgICAgICB7dmFsdWU6JzEnLGxhYmVsOlwiIFR5cGUgMVwifSxcbiAgICAgICAge3ZhbHVlOicyJyxsYWJlbDpcIiBUeXBlIDJcIn0sXG4gICAgICAgIHt2YWx1ZTonMycsbGFiZWw6XCIgVHlwZSAzXCJ9LFxuICAgICAgICB7dmFsdWU6JzQnLGxhYmVsOlwiIFR5cGUgNFwifSxcbiAgICBdO1xuICAgIHB1YmxpYyB0eXBlID0ge3ZhbHVlOicxJyxsYWJlbDpcIlR5cGUgMVwifTtcblxuICAgIHB1YmxpYyBjb21wID0ge0lEOicxJyxsYWJlbDpcImFiY1wiLCB0eXBlOicxJyx2YWx1ZTonMTIzNDU2NzgnLHBob25lOicwOTg4NzY1NDMyMScgfTtcblxuXG5cbiAgICBkcm9wSXRlbXM9IFsge2lkOiAxLCB0ZXh0OiAnSXRlbTEnfSwge2lkOiAyLCB0ZXh0OidJdGVtMid9IF07XG4gICAgc2VsZWN0ZWQ9IFsge2lkOiAyfSBdO1xuICAgIHNlbE91dDtcblxuICAgIG9uVXBkYXRlKGV2KSB7XG4gICAgICAgIHRoaXMuc2VsT3V0ID0gZXY7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
