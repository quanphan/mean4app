/**
 * Created by phanquan on 4/17/16.
 */
import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'ng2-select',
    template: `
   <div class="dropdown">
        <label *ngIf="!notShowLabel" class="ng-label" [class.has-active]="_focused">{{ngLabel}}</label>
        <span class="dropdown-toggle input-group btn-block" id="dropdownMenu1"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" (click)="onFocus()" (blur)="onBlur()">
            <span class="form-control ng-input nowrap" [class.ng-input-active]="_focused">{{getText()}}</span>
            <span class="input-group-addon" [class.ng-input-active]="_focused"><i class="fa fa-fw fa-sort-down"></i></span>
        </span>

        <ul class="dropdown-menu ngcontrol-menu btn-block" aria-labelledby="dropdownMenu1">
          <li *ngFor="let value of values" (click)="selectItem(value)">
                <a>{{value[dataText]}}</a>
          </li>
          <li style="border: none;text-align: center;">Close</li>
        </ul>
    </div>
  `
})

export class SelectComponent {
    @Input() values: any;
    @Input() bindModelData: any;
    @Input() dataValue: any;
    @Input() dataText: any;
    @Input() ngLabel: any;
    @Input() ngShowLable: any;
    @Output() bindModelDataChange: EventEmitter;

    notShowLabel:boolean=false;
    constructor() {
        this.bindModelDataChange = new EventEmitter();
    }

    ngOnInit() {
        if(this.ngShowLable!="undefined")
        {
            if(this.ngShowLable=="false")  this.notShowLabel=true;
        }
    }
    _focused:boolean=false;


    getText() {
        const selectedTexts: Array<string> =
            this.values
                .filter((itm) => itm[this.dataValue] == this.bindModelData)
                .map((itm) => itm[this.dataText]);

        let text= selectedTexts.join(', ');
        if(text=='')
        {
            text=this.ngLabel;
        }
        return text;

    }

    selectItem(value) {
        this.bindModelDataChange.emit(value[this.dataValue]);
        this.bindModelData=value[this.dataValue];
        this._focused = false;
    }

    onFocus() {
        this._focused = true;
    }

    onBlur() {
        this._focused = false;
    }

}

