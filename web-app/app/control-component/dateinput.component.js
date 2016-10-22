/**
 * Created by phanquan on 7/2/16.
 */
System.register(['@angular/core', '@angular/common', "@angular/forms", 'moment'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, moment_;
    var moment, DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (moment_1) {
                moment_ = moment_1;
            }],
        execute: function() {
            moment = moment_['default'] || moment_;
            let DatePicker_1;
            let DatePicker = DatePicker_1 = class DatePicker {
                constructor(viewContainer) {
                    this.type = "text";
                    this.dataModelChange = new core_1.EventEmitter(); // EventEmitter<Date> = new EventEmitter<Date>();
                    this.cd = this.dataModel;
                    this._focused = false;
                    this.defaultModelFormat = "YYYY-MM-DD";
                    this.defaultViewFormat = "YYYY-MM-DD";
                    this.viewValue = this.dataModel;
                    //this.cd.valueAccessor = this.NgModel.valueAccessor;
                    this.viewContainer = viewContainer;
                    this.el = viewContainer.element.nativeElement;
                    this.init();
                }
                ngAfterViewInit() {
                    if (!this.modelFormat) {
                        this.modelFormat = this.defaultModelFormat;
                    }
                    if (!this.viewFormat) {
                        this.viewFormat = this.defaultViewFormat;
                    }
                }
                openDatepicker() {
                    this._focused = true;
                    this.isOpened = true;
                }
                closeDatepicker() {
                    this._focused = false;
                    this.isOpened = false;
                }
                prevYear() {
                    this.date.subtract(1, 'Y');
                    this.generateCalendar(this.date);
                }
                prevMonth() {
                    this.date.subtract(1, 'M');
                    this.generateCalendar(this.date);
                }
                nextYear() {
                    this.date.add(1, 'Y');
                    this.generateCalendar(this.date);
                }
                nextMonth() {
                    this.date.add(1, 'M');
                    this.generateCalendar(this.date);
                }
                selectDate(e, date) {
                    e.preventDefault();
                    if (this.isSelected(date))
                        return;
                    let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
                    this.setValue(selectedDate);
                    this.closeDatepicker();
                    //this.dataModelChange.emit(selectedDate.toDate());
                    let dateView = moment(selectedDate);
                    this.dataModelChange.emit(dateView.format(this.modelFormat));
                }
                generateCalendar(date) {
                    let lastDayOfMonth = date.endOf('month').date();
                    let month = date.month();
                    let year = date.year();
                    let n = 1;
                    let firstWeekDay = null;
                    this.dateValue = date.format('MMMM YYYY');
                    this.days = [];
                    if (this.firstWeekDaySunday === true) {
                        firstWeekDay = date.set('date', 2).day();
                    }
                    else {
                        firstWeekDay = date.set('date', 1).day();
                    }
                    if (firstWeekDay !== 1) {
                        n -= (firstWeekDay + 6) % 7;
                    }
                    for (let i = n; i <= lastDayOfMonth; i += 1) {
                        if (i > 0) {
                            this.days.push({ day: i, month: month + 1, year: year, enabled: true });
                        }
                        else {
                            this.days.push({ day: null, month: null, year: null, enabled: false });
                        }
                    }
                }
                isSelected(date) {
                    let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
                    return selectedDate.toDate().getTime() === this.cannonical;
                }
                generateDayNames() {
                    this.dayNames = [];
                    let date = this.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
                    for (let i = 0; i < 7; i += 1) {
                        this.dayNames.push(date.format('ddd'));
                        date.add('1', 'd');
                    }
                }
                initMouseEvents() {
                    let body = document.getElementsByTagName('body')[0];
                    body.addEventListener('click', (e) => {
                        if (!this.isOpened || !e.target)
                            return;
                        if (this.el !== e.target && !this.el.contains(e.target)) {
                            this.closeDatepicker();
                        }
                    }, false);
                }
                getviewValues() {
                    let val = moment(this.dataModel, this.defaultViewFormat);
                    if (val.isValid()) {
                        return val.format(this.viewFormat);
                    }
                    else {
                        if (this.initDate) {
                            let initDate = moment();
                            return initDate.format(this.viewFormat);
                        }
                        else {
                            return "";
                        }
                    }
                }
                setValue(value) {
                    let val = moment(value, this.modelFormat);
                    if (val.isValid()) {
                        this.dataModel = val;
                    }
                    this.cannonical = val.toDate().getTime();
                }
                writeValue(value) {
                    if (!value)
                        return;
                    this.setValue(value);
                }
                registerOnChange(fn) {
                    this.onChange = fn;
                }
                registerOnTouched(fn) {
                    this.onTouched = fn;
                }
                setDisabledState(isDisabled) {
                    this.setDisabledState(isDisabled);
                }
                init() {
                    this.isOpened = false;
                    this.date = moment();
                    this.firstWeekDaySunday = false;
                    this.generateDayNames();
                    this.generateCalendar(this.date);
                    this.initMouseEvents();
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], DatePicker.prototype, "type", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], DatePicker.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input('model-format'), 
                __metadata('design:type', String)
            ], DatePicker.prototype, "modelFormat", void 0);
            __decorate([
                core_1.Input('view-format'), 
                __metadata('design:type', String)
            ], DatePicker.prototype, "viewFormat", void 0);
            __decorate([
                core_1.Input('init-date'), 
                __metadata('design:type', Boolean)
            ], DatePicker.prototype, "initDate", void 0);
            __decorate([
                core_1.Input('first-week-day-sunday'), 
                __metadata('design:type', Boolean)
            ], DatePicker.prototype, "firstWeekDaySunday", void 0);
            __decorate([
                core_1.Input('static'), 
                __metadata('design:type', Boolean)
            ], DatePicker.prototype, "isStatic", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DatePicker.prototype, "dataModel", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], DatePicker.prototype, "dataModelChange", void 0);
            DatePicker = DatePicker_1 = __decorate([
                core_1.Component({
                    selector: 'datepicker',
                    templateUrl: './views/controls/datetimeInput.html',
                    directives: [common_1.NgIf, common_1.NgFor, common_1.NgClass],
                    pipes: [],
                    providers: [
                        {
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(() => DatePicker),
                            multi: true
                        }
                    ]
                }), 
                __metadata('design:paramtypes', [core_1.ViewContainerRef])
            ], DatePicker);
            exports_1("DatePicker", DatePicker);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2RhdGVpbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7O1FBT0csTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztZQUFOLE1BQU0sR0FBK0IsT0FBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQztZQXVCMUU7O2dCQXdCSSxZQUFZLGFBQStCO29CQVhsQyxTQUFJLEdBQVUsTUFBTSxDQUFDO29CQVFwQixvQkFBZSxHQUFPLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUcsaURBQWlEO29CQUVoRyxPQUFFLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFRekIsYUFBUSxHQUFTLEtBQUssQ0FBQztvQkFDdkIsdUJBQWtCLEdBQUMsWUFBWSxDQUFDO29CQUNoQyxzQkFBaUIsR0FBQyxZQUFZLENBQUM7b0JBQ3hCLGNBQVMsR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQVRuQyxxREFBcUQ7b0JBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO29CQUNuQyxJQUFJLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO29CQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7Z0JBTUQsZUFBZTtvQkFDWCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDckIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztvQkFDN0MsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDcEIsQ0FBQzt3QkFDRyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztvQkFDM0MsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLGNBQWM7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFFTSxlQUFlO29CQUNsQixJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBRU0sUUFBUTtvQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU0sU0FBUztvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU0sUUFBUTtvQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU0sU0FBUztvQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU0sVUFBVSxDQUFDLENBQWEsRUFBRSxJQUFrQjtvQkFDL0MsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFFbEMsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ3ZGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFFdkIsbURBQW1EO29CQUNuRCxJQUFJLFFBQVEsR0FBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLENBQUM7Z0JBRU8sZ0JBQWdCLENBQUMsSUFBb0I7b0JBQ3pDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1YsSUFBSSxZQUFZLEdBQVcsSUFBSSxDQUFDO29CQUVoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUVmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzdDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUM3QyxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxDQUFDO29CQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQzVFLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDM0UsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsVUFBVSxDQUFDLElBQWtCO29CQUN6QixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDdkYsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMvRCxDQUFDO2dCQUVPLGdCQUFnQjtvQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDO2dCQUNMLENBQUM7Z0JBRU8sZUFBZTtvQkFDbkIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzt3QkFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs0QkFBQyxNQUFNLENBQUM7d0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQztvQkFDTCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxhQUFhO29CQUVULElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUN4RCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFDRCxJQUFJLENBQUEsQ0FBQzt3QkFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQzs0QkFDZCxJQUFJLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQzs0QkFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM1QyxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNGLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQ2QsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7Z0JBR08sUUFBUSxDQUFDLEtBQVU7b0JBQ3ZCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUN6QixDQUFDO29CQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELFVBQVUsQ0FBQyxLQUFhO29CQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFBQyxNQUFNLENBQUM7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsZ0JBQWdCLENBQUMsRUFBa0I7b0JBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELGlCQUFpQixDQUFDLEVBQWtCO29CQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtvQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUdPLElBQUk7b0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1lBckxHO2dCQUFDLFlBQUssRUFBRTs7b0RBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O3VEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxDQUFDLGNBQWMsQ0FBQzs7MkRBQUE7WUFDdEI7Z0JBQUMsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7MERBQUE7WUFDckI7Z0JBQUMsWUFBSyxDQUFDLFdBQVcsQ0FBQzs7d0RBQUE7WUFDbkI7Z0JBQUMsWUFBSyxDQUFDLHVCQUF1QixDQUFDOztrRUFBQTtZQUMvQjtnQkFBQyxZQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBQTtZQUNoQjtnQkFBQyxZQUFLLEVBQUU7O3lEQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzsrREFBQTtZQW5DYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixXQUFXLEVBQUUscUNBQXFDO29CQUNsRCxVQUFVLEVBQUUsQ0FBRSxhQUFJLEVBQUUsY0FBSyxFQUFFLGdCQUFPLENBQUM7b0JBQ25DLEtBQUssRUFBRSxFQUFFO29CQUNULFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUseUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQzs0QkFDekMsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7aUJBQ0osQ0FBQzs7MEJBQUE7WUFFRixtQ0FrTUMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9kYXRlaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMi8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgZm9yd2FyZFJlZiwgT25Jbml0LCBJbnB1dCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIE91dHB1dCxQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nSWYsIE5nRm9yLCBOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQ6IG1vbWVudDEuTW9tZW50U3RhdGljID0gKDxhbnk+bW9tZW50XylbJ2RlZmF1bHQnXSB8fCBtb21lbnRfO1xuXG5pbnRlcmZhY2UgQ2FsZW5kYXJEYXRlIHtcbiAgICBkYXk6IG51bWJlcjtcbiAgICBtb250aDogbnVtYmVyO1xuICAgIHllYXI6IG51bWJlcjtcbiAgICBlbmFibGVkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGVwaWNrZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9jb250cm9scy9kYXRldGltZUlucHV0Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFsgTmdJZiwgTmdGb3IsIE5nQ2xhc3NdLFxuICAgIHBpcGVzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyKSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0e1xuICAgIHB1YmxpYyBpc09wZW5lZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgZGF0ZVZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIGRheXM6IEFycmF5PENhbGVuZGFyRGF0ZT47XG4gICAgcHVibGljIGRheU5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgZWw6IGFueTtcbiAgICBwcml2YXRlIGRhdGU6IGFueTtcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gICAgcHJpdmF0ZSBvbkNoYW5nZTogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgY2Q6IGFueTtcbiAgICBwcml2YXRlIGNhbm5vbmljYWw6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHR5cGUgOiBzdHJpbmc9XCJ0ZXh0XCI7XG4gICAgQElucHV0KCkgbmdMYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgnbW9kZWwtZm9ybWF0JykgbW9kZWxGb3JtYXQ6IHN0cmluZztcbiAgICBASW5wdXQoJ3ZpZXctZm9ybWF0Jykgdmlld0Zvcm1hdDogc3RyaW5nO1xuICAgIEBJbnB1dCgnaW5pdC1kYXRlJykgaW5pdERhdGU6IGJvb2xlYW47XG4gICAgQElucHV0KCdmaXJzdC13ZWVrLWRheS1zdW5kYXknKSBmaXJzdFdlZWtEYXlTdW5kYXk6IGJvb2xlYW47XG4gICAgQElucHV0KCdzdGF0aWMnKSBpc1N0YXRpYzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBkYXRhTW9kZWw6IGFueTtcbiAgICBAT3V0cHV0KCkgZGF0YU1vZGVsQ2hhbmdlOmFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgICAvLyBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICBwdWJsaWMgY2Q9dGhpcy5kYXRhTW9kZWw7XG4gICAgY29uc3RydWN0b3Iodmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICAvL3RoaXMuY2QudmFsdWVBY2Nlc3NvciA9IHRoaXMuTmdNb2RlbC52YWx1ZUFjY2Vzc29yO1xuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIgPSB2aWV3Q29udGFpbmVyO1xuICAgICAgICB0aGlzLmVsID0gdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIF9mb2N1c2VkOmJvb2xlYW49ZmFsc2U7XG4gICAgZGVmYXVsdE1vZGVsRm9ybWF0PVwiWVlZWS1NTS1ERFwiO1xuICAgIGRlZmF1bHRWaWV3Rm9ybWF0PVwiWVlZWS1NTS1ERFwiO1xuICAgIHB1YmxpYyB2aWV3VmFsdWU6c3RyaW5nPXRoaXMuZGF0YU1vZGVsO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxGb3JtYXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JtYXQ9dGhpcy5kZWZhdWx0TW9kZWxGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMudmlld0Zvcm1hdClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy52aWV3Rm9ybWF0PXRoaXMuZGVmYXVsdFZpZXdGb3JtYXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRhdGVwaWNrZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQ9dHJ1ZTtcbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlRGF0ZXBpY2tlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZD1mYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmV2WWVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlLnN1YnRyYWN0KDEsICdZJyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmV2TW9udGgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZS5zdWJ0cmFjdCgxLCAnTScpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmV4dFllYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZS5hZGQoMSwgJ1knKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5leHRNb250aCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRlLmFkZCgxLCAnTScpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0RGF0ZShlOiBNb3VzZUV2ZW50LCBkYXRlOiBDYWxlbmRhckRhdGUpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKGRhdGUpKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG1vbWVudChkYXRlLmRheSArICcuJyArIGRhdGUubW9udGggKyAnLicgKyBkYXRlLnllYXIsICdERC5NTS5ZWVlZJyk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgdGhpcy5jbG9zZURhdGVwaWNrZXIoKTtcblxuICAgICAgICAvL3RoaXMuZGF0YU1vZGVsQ2hhbmdlLmVtaXQoc2VsZWN0ZWREYXRlLnRvRGF0ZSgpKTtcbiAgICAgICAgbGV0IGRhdGVWaWV3ID0gIG1vbWVudChzZWxlY3RlZERhdGUpO1xuICAgICAgICB0aGlzLmRhdGFNb2RlbENoYW5nZS5lbWl0KGRhdGVWaWV3LmZvcm1hdCh0aGlzLm1vZGVsRm9ybWF0KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNhbGVuZGFyKGRhdGU6IG1vbWVudDEuTW9tZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBsYXN0RGF5T2ZNb250aCA9IGRhdGUuZW5kT2YoJ21vbnRoJykuZGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBkYXRlLm1vbnRoKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS55ZWFyKCk7XG4gICAgICAgIGxldCBuID0gMTtcbiAgICAgICAgbGV0IGZpcnN0V2Vla0RheTogbnVtYmVyID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IGRhdGUuZm9ybWF0KCdNTU1NIFlZWVknKTtcbiAgICAgICAgdGhpcy5kYXlzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RXZWVrRGF5U3VuZGF5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmaXJzdFdlZWtEYXkgPSBkYXRlLnNldCgnZGF0ZScsIDIpLmRheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlyc3RXZWVrRGF5ID0gZGF0ZS5zZXQoJ2RhdGUnLCAxKS5kYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdFdlZWtEYXkgIT09IDEpIHtcbiAgICAgICAgICAgIG4gLT0gKGZpcnN0V2Vla0RheSArIDYpICUgNztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBuOyBpIDw9IGxhc3REYXlPZk1vbnRoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cy5wdXNoKHsgZGF5OiBpLCBtb250aDogbW9udGggKyAxLCB5ZWFyOiB5ZWFyLCBlbmFibGVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRheXMucHVzaCh7IGRheTogbnVsbCwgbW9udGg6IG51bGwsIHllYXI6IG51bGwsIGVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChkYXRlOiBDYWxlbmRhckRhdGUpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkRGF0ZSA9IG1vbWVudChkYXRlLmRheSArICcuJyArIGRhdGUubW9udGggKyAnLicgKyBkYXRlLnllYXIsICdERC5NTS5ZWVlZJyk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZERhdGUudG9EYXRlKCkuZ2V0VGltZSgpID09PSB0aGlzLmNhbm5vbmljYWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZURheU5hbWVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRheU5hbWVzID0gW107XG4gICAgICAgIGxldCBkYXRlID0gdGhpcy5maXJzdFdlZWtEYXlTdW5kYXkgPT09IHRydWUgPyBtb21lbnQoJzIwMTUtMDYtMDcnKSA6IG1vbWVudCgnMjAxNS0wNi0wMScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5kYXlOYW1lcy5wdXNoKGRhdGUuZm9ybWF0KCdkZGQnKSk7XG4gICAgICAgICAgICBkYXRlLmFkZCgnMScsICdkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRNb3VzZUV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3BlbmVkIHx8ICFlLnRhcmdldCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWwgIT09IGUudGFyZ2V0ICYmICF0aGlzLmVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VEYXRlcGlja2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBnZXR2aWV3VmFsdWVzKClcbiAgICB7XG4gICAgICAgIGxldCB2YWwgPSBtb21lbnQodGhpcy5kYXRhTW9kZWwsdGhpcy5kZWZhdWx0Vmlld0Zvcm1hdCk7XG4gICAgICAgIGlmKHZhbC5pc1ZhbGlkKCkpe1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5mb3JtYXQodGhpcy52aWV3Rm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYodGhpcy5pbml0RGF0ZSl7XG4gICAgICAgICAgICAgICAgbGV0IGluaXREYXRlID0gbW9tZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXREYXRlLmZvcm1hdCh0aGlzLnZpZXdGb3JtYXQpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgdmFsID0gbW9tZW50KHZhbHVlLHRoaXMubW9kZWxGb3JtYXQpO1xuICAgICAgICBpZih2YWwuaXNWYWxpZCgpKXtcbiAgICAgICAgICAgIHRoaXMuZGF0YU1vZGVsID0gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2Fubm9uaWNhbCA9IHZhbC50b0RhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlID0gbW9tZW50KCk7XG4gICAgICAgIHRoaXMuZmlyc3RXZWVrRGF5U3VuZGF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVEYXlOYW1lcygpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy5kYXRlKTtcbiAgICAgICAgdGhpcy5pbml0TW91c2VFdmVudHMoKTtcbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
