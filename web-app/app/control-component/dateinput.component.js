/**
 * Created by phanquan on 7/2/16.
 */
System.register(['@angular/core', '@angular/common', 'moment'], function(exports_1, context_1) {
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
    var core_1, common_1, moment_;
    var moment, DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (moment_1) {
                moment_ = moment_1;
            }],
        execute: function() {
            moment = moment_['default'] || moment_;
            let DatePicker = class DatePicker {
                constructor(viewContainer) {
                    this.type = "text";
                    this.changed = new core_1.EventEmitter();
                    //constructor(cd: NgModel, viewContainer: ViewContainerRef) {
                    //    cd.valueAccessor = this;
                    //    this.cd = cd;
                    //    this.viewContainer = viewContainer;
                    //    this.el = viewContainer.element.nativeElement;
                    //    this.init();
                    //}
                    this._focused = false;
                    this.cd = this.NgModel;
                    this.viewContainer = viewContainer;
                    this.el = viewContainer.element.nativeElement;
                    this.init();
                }
                ngAfterViewInit() {
                    this.initValue();
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
                    this.changed.emit(selectedDate.toDate());
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
                setValue(value) {
                    let val = moment(value, this.modelFormat || 'YYYY-MM-DD');
                    this.viewValue = val.format(this.viewFormat || 'Do MMMM YYYY');
                    this.cd.viewToModelUpdate(val.format(this.modelFormat || 'YYYY-MM-DD'));
                    this.cannonical = val.toDate().getTime();
                }
                initValue() {
                    setTimeout(() => {
                        if (!this.initDate) {
                            this.setValue(moment().format(this.modelFormat || 'YYYY-MM-DD'));
                        }
                        else {
                            this.setValue(moment(this.initDate, this.modelFormat || 'YYYY-MM-DD'));
                        }
                    });
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
                __metadata('design:type', String)
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
            ], DatePicker.prototype, "NgModel", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], DatePicker.prototype, "changed", void 0);
            DatePicker = __decorate([
                core_1.Component({
                    selector: 'datepicker[ngModel]',
                    templateUrl: './views/controls/datetimeInput.html',
                    providers: [],
                    directives: [common_1.NgIf, common_1.NgFor, common_1.NgClass],
                    pipes: []
                }), 
                __metadata('design:paramtypes', [core_1.ViewContainerRef])
            ], DatePicker);
            exports_1("DatePicker", DatePicker);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2RhdGVpbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7O1FBT0csTUFBTTs7Ozs7Ozs7Ozs7OztZQUFOLE1BQU0sR0FBK0IsT0FBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQztZQWdCMUU7Z0JBd0JJLFlBQWEsYUFBK0I7b0JBVm5DLFNBQUksR0FBVSxNQUFNLENBQUM7b0JBUXBCLFlBQU8sR0FBdUIsSUFBSSxtQkFBWSxFQUFRLENBQUM7b0JBU2pFLDZEQUE2RDtvQkFDN0QsOEJBQThCO29CQUM5QixtQkFBbUI7b0JBQ25CLHlDQUF5QztvQkFDekMsb0RBQW9EO29CQUNwRCxrQkFBa0I7b0JBQ2xCLEdBQUc7b0JBQ0gsYUFBUSxHQUFTLEtBQUssQ0FBQztvQkFabkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQVNELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVNLGNBQWM7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFFTSxlQUFlO29CQUNsQixJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBRU0sUUFBUTtvQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFD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O1lBQ1I7Z0JBQUMsWUFBSyxDQUFDLGNBQWMsQ0FBQzs7MkRBQUE7WUFDdEI7Z0JBQUMsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7MERBQUE7WUFDckI7Z0JBQUMsWUFBSyxDQUFDLFdBQVcsQ0FBQzs7d0RBQUE7WUFDbkI7Z0JBQUMsWUFBSyxDQUFDLHVCQUF1QixDQUFDOztrRUFBQTtZQUMvQjtnQkFBQyxZQUFLLENBQUMsUUFBUSxDQUFDOzt3REFBQTtZQUNoQjtnQkFBQyxZQUFLLEVBQUU7O3VEQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzt1REFBQTtZQTdCYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxFQUFFO29CQUNiLFVBQVUsRUFBRSxDQUFFLGFBQUksRUFBRSxjQUFLLEVBQUUsZ0JBQU8sQ0FBQztvQkFDbkMsS0FBSyxFQUFFLEVBQUU7aUJBQ1osQ0FBQzs7MEJBQUE7WUFDRixtQ0FnTEMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9kYXRlaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMi8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdJZiwgTmdGb3IsIE5nQ2xhc3N9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudDogbW9tZW50MS5Nb21lbnRTdGF0aWMgPSAoPGFueT5tb21lbnRfKVsnZGVmYXVsdCddIHx8IG1vbWVudF87XG5cbmludGVyZmFjZSBDYWxlbmRhckRhdGUge1xuICAgIGRheTogbnVtYmVyO1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZGF0ZXBpY2tlcltuZ01vZGVsXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2NvbnRyb2xzL2RhdGV0aW1lSW5wdXQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBkaXJlY3RpdmVzOiBbIE5nSWYsIE5nRm9yLCBOZ0NsYXNzXSxcbiAgICBwaXBlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlcntcbiAgICBwdWJsaWMgaXNPcGVuZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGRhdGVWYWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyB2aWV3VmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgZGF5czogQXJyYXk8Q2FsZW5kYXJEYXRlPjtcbiAgICBwdWJsaWMgZGF5TmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBlbDogYW55O1xuICAgIHByaXZhdGUgZGF0ZTogYW55O1xuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcbiAgICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIG9uVG91Y2hlZDogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBjZDogYW55O1xuICAgIHByaXZhdGUgY2Fubm9uaWNhbDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdHlwZSA6IHN0cmluZz1cInRleHRcIjtcbiAgICBASW5wdXQoKSBuZ0xhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCdtb2RlbC1mb3JtYXQnKSBtb2RlbEZvcm1hdDogc3RyaW5nO1xuICAgIEBJbnB1dCgndmlldy1mb3JtYXQnKSB2aWV3Rm9ybWF0OiBzdHJpbmc7XG4gICAgQElucHV0KCdpbml0LWRhdGUnKSBpbml0RGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgnZmlyc3Qtd2Vlay1kYXktc3VuZGF5JykgZmlyc3RXZWVrRGF5U3VuZGF5OiBib29sZWFuO1xuICAgIEBJbnB1dCgnc3RhdGljJykgaXNTdGF0aWM6IGJvb2xlYW47XG4gICAgQElucHV0KCkgTmdNb2RlbDogYW55O1xuICAgIEBPdXRwdXQoKSBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgICBjb25zdHJ1Y3Rvciggdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuXG4gICAgICAgIHRoaXMuY2QgPSB0aGlzLk5nTW9kZWw7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lciA9IHZpZXdDb250YWluZXI7XG4gICAgICAgIHRoaXMuZWwgPSB2aWV3Q29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIC8vY29uc3RydWN0b3IoY2Q6IE5nTW9kZWwsIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAvLyAgICBjZC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICAvLyAgICB0aGlzLmNkID0gY2Q7XG4gICAgLy8gICAgdGhpcy52aWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcbiAgICAvLyAgICB0aGlzLmVsID0gdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gICAgdGhpcy5pbml0KCk7XG4gICAgLy99XG4gICAgX2ZvY3VzZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EYXRlcGlja2VyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9mb2N1c2VkPXRydWU7XG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZURhdGVwaWNrZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQ9ZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJldlllYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZS5zdWJ0cmFjdCgxLCAnWScpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJldk1vbnRoKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGUuc3VidHJhY3QoMSwgJ00nKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5leHRZZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGUuYWRkKDEsICdZJyk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZXh0TW9udGgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0ZS5hZGQoMSwgJ00nKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdERhdGUoZTogTW91c2VFdmVudCwgZGF0ZTogQ2FsZW5kYXJEYXRlKTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZChkYXRlKSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBzZWxlY3RlZERhdGUgPSBtb21lbnQoZGF0ZS5kYXkgKyAnLicgKyBkYXRlLm1vbnRoICsgJy4nICsgZGF0ZS55ZWFyLCAnREQuTU0uWVlZWScpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIHRoaXMuY2xvc2VEYXRlcGlja2VyKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHNlbGVjdGVkRGF0ZS50b0RhdGUoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUNhbGVuZGFyKGRhdGU6IG1vbWVudDEuTW9tZW50KTogdm9pZCB7XG4gICAgICAgIGxldCBsYXN0RGF5T2ZNb250aCA9IGRhdGUuZW5kT2YoJ21vbnRoJykuZGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBkYXRlLm1vbnRoKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS55ZWFyKCk7XG4gICAgICAgIGxldCBuID0gMTtcbiAgICAgICAgbGV0IGZpcnN0V2Vla0RheTogbnVtYmVyID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IGRhdGUuZm9ybWF0KCdNTU1NIFlZWVknKTtcbiAgICAgICAgdGhpcy5kYXlzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RXZWVrRGF5U3VuZGF5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBmaXJzdFdlZWtEYXkgPSBkYXRlLnNldCgnZGF0ZScsIDIpLmRheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlyc3RXZWVrRGF5ID0gZGF0ZS5zZXQoJ2RhdGUnLCAxKS5kYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdFdlZWtEYXkgIT09IDEpIHtcbiAgICAgICAgICAgIG4gLT0gKGZpcnN0V2Vla0RheSArIDYpICUgNztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBuOyBpIDw9IGxhc3REYXlPZk1vbnRoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cy5wdXNoKHsgZGF5OiBpLCBtb250aDogbW9udGggKyAxLCB5ZWFyOiB5ZWFyLCBlbmFibGVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRheXMucHVzaCh7IGRheTogbnVsbCwgbW9udGg6IG51bGwsIHllYXI6IG51bGwsIGVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTZWxlY3RlZChkYXRlOiBDYWxlbmRhckRhdGUpIHtcblxuICAgICAgICBsZXQgc2VsZWN0ZWREYXRlID0gbW9tZW50KGRhdGUuZGF5ICsgJy4nICsgZGF0ZS5tb250aCArICcuJyArIGRhdGUueWVhciwgJ0RELk1NLllZWVknKTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkRGF0ZS50b0RhdGUoKS5nZXRUaW1lKCkgPT09IHRoaXMuY2Fubm9uaWNhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlRGF5TmFtZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF5TmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLmZpcnN0V2Vla0RheVN1bmRheSA9PT0gdHJ1ZSA/IG1vbWVudCgnMjAxNS0wNi0wNycpIDogbW9tZW50KCcyMDE1LTA2LTAxJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmRheU5hbWVzLnB1c2goZGF0ZS5mb3JtYXQoJ2RkZCcpKTtcbiAgICAgICAgICAgIGRhdGUuYWRkKCcxJywgJ2QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdE1vdXNlRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuZWQgfHwgIWUudGFyZ2V0KSByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5lbCAhPT0gZS50YXJnZXQgJiYgIXRoaXMuZWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZURhdGVwaWNrZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgdmFsID0gbW9tZW50KHZhbHVlLCB0aGlzLm1vZGVsRm9ybWF0IHx8ICdZWVlZLU1NLUREJyk7XG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gdmFsLmZvcm1hdCh0aGlzLnZpZXdGb3JtYXQgfHwgJ0RvIE1NTU0gWVlZWScpO1xuICAgICAgICB0aGlzLmNkLnZpZXdUb01vZGVsVXBkYXRlKHZhbC5mb3JtYXQodGhpcy5tb2RlbEZvcm1hdCB8fCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgICAgdGhpcy5jYW5ub25pY2FsID0gdmFsLnRvRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdERhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKG1vbWVudCgpLmZvcm1hdCh0aGlzLm1vZGVsRm9ybWF0IHx8ICdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKG1vbWVudCh0aGlzLmluaXREYXRlLCB0aGlzLm1vZGVsRm9ybWF0IHx8ICdZWVlZLU1NLUREJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLmZpcnN0V2Vla0RheVN1bmRheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRGF5TmFtZXMoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMuZGF0ZSk7XG4gICAgICAgIHRoaXMuaW5pdE1vdXNlRXZlbnRzKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
