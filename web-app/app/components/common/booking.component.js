/**
 * Created by phanquan on 4/21/16.
 */
System.register(['@angular/core', '@angular/forms', '../../services/company.service', '../../control-component/combobox.component', '../../control-component/mutilselect.component', '../../control-component/input/input.component', '../../control-component/select.component', '../../control-component/dateinput.component', '../../control-component/input/inputNumber.component', '../../core/validators'], function(exports_1, context_1) {
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
    var core_1, forms_1, company_service_1, combobox_component_1, mutilselect_component_1, input_component_1, select_component_1, dateinput_component_1, inputNumber_component_1, validators_1;
    var BookingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (combobox_component_1_1) {
                combobox_component_1 = combobox_component_1_1;
            },
            function (mutilselect_component_1_1) {
                mutilselect_component_1 = mutilselect_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (select_component_1_1) {
                select_component_1 = select_component_1_1;
            },
            function (dateinput_component_1_1) {
                dateinput_component_1 = dateinput_component_1_1;
            },
            function (inputNumber_component_1_1) {
                inputNumber_component_1 = inputNumber_component_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            let BookingComponent = class BookingComponent {
                constructor(_formBuilder, _Validators) {
                    this._formBuilder = _formBuilder;
                    this._Validators = _Validators;
                    this.comp = { Code: '', Name: 'Quan phan', FullName: 'Phan Van Quan', Address: '', Mail: 'phanquanpc@gmail.com', WebSite: '',
                        Phone: '', Description: '', Birthday: '',
                        State: '', Mobile: '', Country: '', Type: '', TaxCode: '', BankCode: '', Status: '' };
                    this.myForm = _formBuilder.group({
                        Code: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(5)])],
                        //TaxCode:["",Validators.maxLength(5)],
                        //Address : ["",Validators.maxLength(5)],
                        State: ["", forms_1.Validators.pattern('[A-Za-z]{5}')],
                        FullName: ["", forms_1.Validators.required],
                        Mail: ["", this._Validators.validateEmail],
                    });
                }
                ngOnInit() {
                }
                onSubmit() {
                    alert("submit");
                }
                validateEmail(c) {
                    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    return EMAIL_REGEXP.test(c.value) ? null : {
                        validateEmail: {
                            valid: false
                        }
                    };
                }
            };
            BookingComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/common/booking.html',
                    providers: [company_service_1.CompanyService, validators_1.ValidatorCore],
                    directives: [combobox_component_1.ComboComponent, input_component_1.InputComponent, select_component_1.SelectComponent, dateinput_component_1.DatePicker, inputNumber_component_1.InputNumberComponent, mutilselect_component_1.MutliSelectComponent],
                }), 
                __metadata('design:paramtypes', [forms_1.FormBuilder, validators_1.ValidatorCore])
            ], BookingComponent);
            exports_1("BookingComponent", BookingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2Jvb2tpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0Qkg7Z0JBUUksWUFBc0IsWUFBMEIsRUFBVSxXQUEwQjtvQkFBOUQsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWU7b0JBTjdFLFNBQUksR0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLE9BQU8sRUFBQyxFQUFFO3dCQUMzRyxLQUFLLEVBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLEVBQUU7d0JBQ25DLEtBQUssRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFLekUsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFFO3dCQUM5QixJQUFJLEVBQUcsQ0FBQyxFQUFFLEVBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlFLHVDQUF1Qzt3QkFDdkMseUNBQXlDO3dCQUN6QyxLQUFLLEVBQUcsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQy9DLFFBQVEsRUFBRyxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsSUFBSSxFQUFHLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO3FCQUU3QyxDQUFFLENBQUM7Z0JBQ1IsQ0FBQztnQkFFRCxRQUFRO2dCQUVSLENBQUM7Z0JBRUQsUUFBUTtvQkFFSixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsYUFBYSxDQUFDLENBQWM7b0JBQ3hCLElBQUksWUFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUV2SCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHO3dCQUN2QyxhQUFhLEVBQUU7NEJBQ1gsS0FBSyxFQUFFLEtBQUs7eUJBQ2Y7cUJBQ0osQ0FBQztnQkFDTixDQUFDO1lBQ0wsQ0FBQztZQTdDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyw0QkFBNEI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUMsMEJBQWEsQ0FBQztvQkFDekMsVUFBVSxFQUFFLENBQUMsbUNBQWMsRUFBQyxnQ0FBYyxFQUFDLGtDQUFlLEVBQUMsZ0NBQVUsRUFBQyw0Q0FBb0IsRUFBQyw0Q0FBb0IsQ0FBQztpQkFDbkgsQ0FBQzs7Z0NBQUE7WUFHRiwrQ0FzQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbW1vbi9ib29raW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzIxLzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLEZPUk1fRElSRUNUSVZFUywgRk9STV9QUk9WSURFUlMsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBOZ0Zvcm0sQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLE5nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge0Jvb2tpbmdDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9ib29raW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb21wYW55U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tYm9Db21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2NvbWJvYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge0Ryb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHtNdXRsaVNlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvbXV0aWxzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7SW5wdXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gJy4uLy4uL2NvbnRyb2wtY29tcG9uZW50L2RhdGVpbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtJbnB1dE51bWJlckNvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvaW5wdXQvaW5wdXROdW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7VmFsaWRhdG9yQ29yZX0gZnJvbSAnLi4vLi4vY29yZS92YWxpZGF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9jb21tb24vYm9va2luZy5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDb21wYW55U2VydmljZSxWYWxpZGF0b3JDb3JlXSxcbiAgICBkaXJlY3RpdmVzOiBbQ29tYm9Db21wb25lbnQsSW5wdXRDb21wb25lbnQsU2VsZWN0Q29tcG9uZW50LERhdGVQaWNrZXIsSW5wdXROdW1iZXJDb21wb25lbnQsTXV0bGlTZWxlY3RDb21wb25lbnRdLFxufSlcblxuXG5leHBvcnQgY2xhc3MgQm9va2luZ0NvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgY29tcD17Q29kZTonJyxOYW1lOidRdWFuIHBoYW4nLEZ1bGxOYW1lOidQaGFuIFZhbiBRdWFuJyxBZGRyZXNzOicnLE1haWw6J3BoYW5xdWFucGNAZ21haWwuY29tJyxXZWJTaXRlOicnXG4gICAgICAgICxQaG9uZTonJyxEZXNjcmlwdGlvbjonJyxCaXJ0aGRheTonJ1xuICAgICAgICAsU3RhdGU6JycsTW9iaWxlOicnLENvdW50cnk6JycsVHlwZTonJyxUYXhDb2RlOicnLEJhbmtDb2RlOicnLFN0YXR1czonJ307XG5cbiAgICBteUZvcm07XG5cbiAgICBjb25zdHJ1Y3RvciAoIHByaXZhdGUgX2Zvcm1CdWlsZGVyIDogRm9ybUJ1aWxkZXIgLHByaXZhdGUgX1ZhbGlkYXRvcnM6IFZhbGlkYXRvckNvcmUpIHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSBfZm9ybUJ1aWxkZXIuZ3JvdXAoIHtcbiAgICAgICAgICAgIENvZGUgOiBbXCJcIixWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUpXSldLFxuICAgICAgICAgICAgLy9UYXhDb2RlOltcIlwiLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUpXSxcbiAgICAgICAgICAgIC8vQWRkcmVzcyA6IFtcIlwiLFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUpXSxcbiAgICAgICAgICAgIFN0YXRlIDogW1wiXCIsIFZhbGlkYXRvcnMucGF0dGVybignW0EtWmEtel17NX0nKV0sXG4gICAgICAgICAgICBGdWxsTmFtZSA6IFtcIlwiLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgTWFpbCA6IFtcIlwiLHRoaXMuX1ZhbGlkYXRvcnMudmFsaWRhdGVFbWFpbF0sXG5cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgb25TdWJtaXQoKVxuICAgIHtcbiAgICAgICAgYWxlcnQoXCJzdWJtaXRcIik7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVFbWFpbChjOiBGb3JtQ29udHJvbCkge1xuICAgICAgICBsZXQgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG5cbiAgICAgICAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGMudmFsdWUpID8gbnVsbCA6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlRW1haWw6IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
