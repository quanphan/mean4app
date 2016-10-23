/**
 * Created by phanquan on 7/2/16.
 */

import {Component, ViewContainerRef, Input, Output, EventEmitter, AfterViewInit,forwardRef} from '@angular/core';
import {NgIf, NgFor, NgClass} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

import * as moment_ from 'moment';
const moment: moment1.MomentStatic = (<any>moment_)['default'] || moment_;

interface CalendarDate {
    day: number;
    month: number;
    year: number;
    enabled: boolean;
}

@Component({
    selector: 'datepicker',
    templateUrl: './views/controls/datetimeInput.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePicker),
            multi: true
        }
    ],
    pipes: []
})

export class DatePicker implements ControlValueAccessor, AfterViewInit{
    public isOpened: boolean;
    public dateValue: string;
    public viewValue: string;
    public days: Array<CalendarDate>;
    public dayNames: Array<string>;
    private el: any;
    private date: any;
    private viewContainer: ViewContainerRef;
    private onChange: Function;
    private onTouched: Function;
    private cd: any;
    private cannonical: number;

    @Input() type : string="text";
    @Input() ngLabel: string;
    @Input('model-format') modelFormat: string;
    @Input('view-format') viewFormat: string;
    @Input('init-date') initDate: boolean;
    @Input('first-week-day-sunday') firstWeekDaySunday: boolean;
    @Input('static') isStatic: boolean;
    @Input() ngModel: any;

    @Output() ngModelChange:any = new EventEmitter<string>();

    //constructor( viewContainer: ViewContainerRef) {
    //    this.cd = this.ngModel;
    //    this.viewContainer = viewContainer;
    //    this.el = viewContainer.element.nativeElement;
    //    this.init();
    //}

    constructor( viewContainer: ViewContainerRef) {
        this.cd = this.ngModel;
        //this.cd.valueAccessor = this;
        this.viewContainer = viewContainer;
        this.el = viewContainer.element.nativeElement;
        this.init();
    }

    defaultViewFomat:string="MM/DD/YYYY";
    defaultModelFomat:string="YYYY-MM-DD";

    _focused:boolean=false;

    ngAfterViewInit() {
        if(!this.modelFormat) this.modelFormat=this.defaultModelFomat;
        if(!this.viewFormat) this.viewFormat=this.defaultViewFomat;
        if(!this.ngModel && this.initDate){
            this.ngModel = moment().format(this.modelFormat);
            this.ngModelChange.emit( moment().format(this.modelFormat));
        }
    }

    public openDatepicker(): void {
        this._focused=true;
        this.isOpened = true;
    }

    public closeDatepicker(): void {
        this._focused=false;
        this.isOpened = false;
    }

    public prevYear(): void {
        this.date.subtract(1, 'Y');
        this.generateCalendar(this.date);
    }

    public prevMonth(): void {
        this.date.subtract(1, 'M');
        this.generateCalendar(this.date);
    }

    public nextYear(): void {
        this.date.add(1, 'Y');
        this.generateCalendar(this.date);
    }

    public nextMonth(): void {
        this.date.add(1, 'M');
        this.generateCalendar(this.date);
    }

    public selectDate(e: MouseEvent, date: CalendarDate): void {
        e.preventDefault();
        if (this.isSelected(date)) return;

        let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
        this.setValue(selectedDate);
        this.closeDatepicker();
        let modelval=moment(selectedDate);
        this.ngModelChange.emit(modelval.format(this.modelFormat));
    }

    private generateCalendar(date: moment1.Moment): void {
        let lastDayOfMonth = date.endOf('month').date();
        let month = date.month();
        let year = date.year();
        let n = 1;
        let firstWeekDay: number = null;

        this.dateValue = date.format('MMMM YYYY');
        this.days = [];

        if (this.firstWeekDaySunday === true) {
            firstWeekDay = date.set('date', 2).day();
        } else {
            firstWeekDay = date.set('date', 1).day();
        }

        if (firstWeekDay !== 1) {
            n -= (firstWeekDay + 6) % 7;
        }

        for (let i = n; i <= lastDayOfMonth; i += 1) {
            if (i > 0) {
                this.days.push({ day: i, month: month + 1, year: year, enabled: true });
            } else {
                this.days.push({ day: null, month: null, year: null, enabled: false });
            }
        }
    }

    isSelected(date: CalendarDate) {

        let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
        return selectedDate.toDate().getTime() === this.cannonical;
    }

    private generateDayNames(): void {
        this.dayNames = [];
        let date = this.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
        for (let i = 0; i < 7; i += 1) {
            this.dayNames.push(date.format('ddd'));
            date.add('1', 'd');
        }
    }

    private initMouseEvents(): void {
        let body = document.getElementsByTagName('body')[0];

        body.addEventListener('click', (e) => {
            if (!this.isOpened || !e.target) return;
            if (this.el !== e.target && !this.el.contains(e.target)) {
                this.closeDatepicker();
            }
        }, false);
    }

    private setValue(value: any): void {
        let val = moment(value, this.modelFormat);
        //this.viewValue = val.format(this.viewFormat || 'Do MMMM YYYY');
        //this.ngModel = val.format(this.modelFormat);
        this.cannonical = val.toDate().getTime();
    }

    viewValue(){
        let viewVal=moment(this.ngModel, this.modelFormat);
        if(viewVal.isValid()){
            return viewVal.format(this.viewFormat );
        }else{
            if(this.initDate){
                return moment().format(this.viewFormat )
            }else {
                return "";
            }
        }
    }

    writeValue(value: string): void {
        if (!value) return;
        this.setValue(value);
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: (_: any) => {}): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean) : void{
        this.setDisabledState(isDisabled);
    }

    private init(): void {
        this.isOpened = false;
        this.date = moment();
        this.firstWeekDaySunday = false;
        this.generateDayNames();
        this.generateCalendar(this.date);
        this.initMouseEvents();
    }
}
