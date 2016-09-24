/**
 * Created by phanquan on 4/10/16.
 */

import {Component,Input,Output,EventEmitter,ElementRef} from '@angular/core';
import {OnInit} from "@angular/core";

declare var jQuery:any;

@Component({
    selector: 'ng2-combobox',
    template: `
    <div class="dropdown" [class.open]="isOpen">
        <label class="ng-label" [class.has-active]="_focused">{{ngLabel}}</label>
        <span class="dropdown-toggle btn-block input-group" type="button" id="dropdownMenu1"
                data-toggle="dropdown" aria-haspopup="true" [class.aria-expanded]="isOpen" (click)="onFocus()" (blur)="onBlur()">
            <input class="form-control ng-input" type="text" [ngModel]="getText()" (input)="selectText=$event.target.value"
            (keyup)="onKeyup($even)" (keypress)="onKeyPress($event.keyCode)"/>
            <span class=" input-group-addon"><i class="fa fa-fw fa-sort-down"></i> </span>
        </span>

        <ul class="btn-block ngcontrol-menu dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><p>Type list</p></li>
            <li *ngFor="let value of values" (click)="selectItem(value)">
                <a *ngIf="selectText=='' || isShowItem(value.label)">
                    <i class=""></i>{{value[dataText]}}
                </a>
            </li>
        </ul>
    </div>
  `
})

export class ComboComponent implements OnInit{
    @Input() values: any;
    @Input() bindModelData: any;
    @Input() dataValue: any;
    @Input() dataText: any;
    @Input() ngLabel: any;
    @Output() bindModelDataChange: EventEmitter;
    isOpen: boolean = false;
    selectText:string='';
    dropdownClass='dropdown';

    constructor( private elRef:ElementRef) {
        this.bindModelDataChange = new EventEmitter();
    }
    _focused:boolean=false;
    ngOnInit():any{

    }

    toggleDropdown(){
        if(!this.isOpen)
        {
            this.isOpen =!this.isOpen;
        }

        // run Ok
        //jQuery('.dropdown').addClass('open');
        //$('.dropdown-toggle').dropdown('toggle');
    }

    isShowItem(txt: string) : boolean {
        return txt.toLowerCase().indexOf(this.selectText.toLowerCase()) >= 0;
    }

    getText():string {
        const selectedTexts: Array<string> =
            this.values
                .filter((itm) => itm[this.dataValue] == this.bindModelData)
                .map((itm) => itm[this.dataText]);

        if(selectedTexts.length==0){
            return 'Select item';
        }

        return selectedTexts.join(', ');
    }

    onKeyup(ev)
    {
        if(this.values.findIndex((itm) => itm[this.dataText] == this.selectText) >=0) {

        }

        this.toggleDropdown();
    }

    onFocus() {
        this._focused = true;
    }

    onBlur() {
        this._focused = false;
    }

    onKeyPress(keyCode){
        if(keyCode==13){
            var _items=this.values.find((itm) => itm[this.dataText].toLowerCase().indexOf(this.selectText.toLowerCase())>=0);
            if(_items)
            {
                this.selectItem(_items);
            }
            else {
                this.bindModelData='';
            }
        }
    }

    selectItem(value) {
        this.bindModelDataChange.emit(value[this.dataValue]);
        this.bindModelData=value[this.dataValue];
        this._focused = false;
    }
}
