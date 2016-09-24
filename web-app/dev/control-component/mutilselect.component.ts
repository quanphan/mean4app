/**
 * Created by phanquan on 4/16/16.
 */

import {Component,Input,Output,EventEmitter} from '@angular/core';
export interface DropdownItem {
    id: number,
    text: string
}

export interface DropdownSelectionItem {
    id: number
}

@Component({
    selector: 'ng2-multiselect',
    template: `
    <div class="dropdown" (blur)="onBlur()">
      <span  class="dropdown-toggle btn-block input-group btn-outline-select btn-flat padding-0" (click)="toggleDropdown()">
        <span class="ngform-control ng-input">
            <span *ngIf="selectionModel.length == 0">No selected items</span>
            <span>{{ getButtonText() }}</span>
        </span>
        <span class="input-group-addon padding-0 background-none"><i class="fa fa-fw fa-sort-down"></i></span>
      </span>

      <ul class="dropdown-menu ngcontrol-menu btn-block" [style.display]="isOpen ? 'block' : 'none'" style="overflow: scroll" >
        <li>
            <a href="#" (click)="deselectAll($event);"><i class="glyphicon glyphicon-remove"></i>Clear All</a>
        </li>
        <li>
             <input type="text" class="form-control" [(ngModel)]="searchFilter" placeholder="Search item" />
         </li>
        <li *ngFor="let item of items">
            <a href="#" role="menuitem" (click)="toggleSelectedItem($event, item.id)">
                <span class="glyphicon" [class.glyphicon-ok]="isChecked(item.id)"></span>
                {{item.text}}
            </a>
        </li>
        <!--<template *ngFor="let item of items">-->
            <!--<li role="presentation" *ngIf="searchFilter == '' || isShowItem(item.text)">-->
              <!--<a href="#" role="menuitem" (click)="toggleSelectedItem($event, item.id)">-->
                <!--<span class="glyphicon" [class.glyphicon-ok]="isChecked(item.id)"></span>-->
                <!--{{item.text}}-->
              <!--</a>-->
            <!--</li>-->
        <!--</template>-->
        <li *ngIf="items.length == 0" (click)="toggleDropdown()">No items</li>
        <li *ngIf="items.length > 0" style="border: none;text-align: center;" (click)="toggleDropdown()">Close</li>
      </ul>
    </div>
  `
})

export class MutliSelectComponent {
    @Input() selectionModel: Array<DropdownSelectionItem>;
    @Input() items: Array<DropdownItem>;
    @Output() selectionModelChange: EventEmitter<Array<DropdownSelectionItem>> = new EventEmitter();
    isOpen: boolean = false;
    searchFilter: string = '';

    onBlur() {
        this.isOpen = false;
    }

    toggleDropdown() : void {
        this.isOpen = !this.isOpen;
    }

    clearSearch() : void {
        this.searchFilter = '';
    }

    isShowItem(txt: string) : boolean {
        return txt.toLowerCase().indexOf(this.searchFilter.toLowerCase()) >= 0;
    }

    deselectAll(ev: Event) : void {
        this.selectionModel = [];
        this.clearSearch();
        this.onUpdate();
        ev.preventDefault();
    }

    isChecked(id: number) : boolean {
        return this.selectionModel.findIndex((itm) => itm.id == id) >= 0;
    }

    onUpdate() : void {
        this.selectionModelChange.emit(this.selectionModel);
    }

    toggleSelectedItem(ev: Event, id: number) : void {
        const idx = this.selectionModel.findIndex((itm) => itm.id == id);

        if (idx >= 0) {
            this.selectionModel.splice(idx, 1);
        }
        else {
            this.selectionModel.push({ 'id' : id });
        }

        this.onUpdate();
        ev.preventDefault();
    }

    getButtonText(): string {
        const selectedTexts: Array<string> =
            this.items
                .filter((itm) => this.isChecked(itm.id))
                .map((itm) => itm.text);

        return selectedTexts.join(', ');
    }
}
