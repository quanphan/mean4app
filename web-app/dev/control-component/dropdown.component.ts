/**
 * Created by phanquan on 4/16/16.
 */

import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'ng2-dropdown',
    template: `
     <div class="dropdown">
        <span class="dropdown-toggle btn-block input-group" type="button" id="dropdownMenu1"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="form-control">{{getText()}}</span>
            <span class=" input-group-addon"><i class="fa fa-fw fa-sort-down"></i> </span>
        </span>

        <ul class="dropdown-menu btn-block" aria-labelledby="dropdownMenu1">
          <li *ngFor="let value of values" (click)="selectItem(value)">{{value[dataText]}}</li>
        </ul>
    </div>
  `
})

export class DropdownComponent {
    @Input() values: any;
    @Input() bindModelData: any;
    @Input() dataValue: any;
    @Input() dataText: any;
    @Output() bindModelDataChange: EventEmitter;

    constructor() {
        this.bindModelDataChange = new EventEmitter();
    }

    getText() {
        const selectedTexts: Array<string> =
            this.values
                .filter((itm) => itm[this.dataValue] == this.bindModelData)
                .map((itm) => itm[this.dataText]);

        return selectedTexts.join(', ');
    }

    selectItem(value) {
        this.bindModelDataChange.emit(value[this.dataValue]);
        this.bindModelData=value[this.dataValue];
    }

}
