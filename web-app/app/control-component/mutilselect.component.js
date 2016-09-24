/**
 * Created by phanquan on 4/16/16.
 */
System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MutliSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let MutliSelectComponent = class MutliSelectComponent {
                constructor() {
                    this.selectionModelChange = new core_1.EventEmitter();
                    this.isOpen = false;
                    this.searchFilter = '';
                }
                onBlur() {
                    this.isOpen = false;
                }
                toggleDropdown() {
                    this.isOpen = !this.isOpen;
                }
                clearSearch() {
                    this.searchFilter = '';
                }
                isShowItem(txt) {
                    return txt.toLowerCase().indexOf(this.searchFilter.toLowerCase()) >= 0;
                }
                deselectAll(ev) {
                    this.selectionModel = [];
                    this.clearSearch();
                    this.onUpdate();
                    ev.preventDefault();
                }
                isChecked(id) {
                    return this.selectionModel.findIndex((itm) => itm.id == id) >= 0;
                }
                onUpdate() {
                    this.selectionModelChange.emit(this.selectionModel);
                }
                toggleSelectedItem(ev, id) {
                    const idx = this.selectionModel.findIndex((itm) => itm.id == id);
                    if (idx >= 0) {
                        this.selectionModel.splice(idx, 1);
                    }
                    else {
                        this.selectionModel.push({ 'id': id });
                    }
                    this.onUpdate();
                    ev.preventDefault();
                }
                getButtonText() {
                    const selectedTexts = this.items
                        .filter((itm) => this.isChecked(itm.id))
                        .map((itm) => itm.text);
                    return selectedTexts.join(', ');
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], MutliSelectComponent.prototype, "selectionModel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], MutliSelectComponent.prototype, "items", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], MutliSelectComponent.prototype, "selectionModelChange", void 0);
            MutliSelectComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], MutliSelectComponent);
            exports_1("MutliSelectComponent", MutliSelectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L211dGlsc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0RIO2dCQUFBO29CQUdjLHlCQUFvQixHQUErQyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDaEcsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFDeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7Z0JBdUQ5QixDQUFDO2dCQXJERyxNQUFNO29CQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixDQUFDO2dCQUVELGNBQWM7b0JBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCxVQUFVLENBQUMsR0FBVztvQkFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFFRCxXQUFXLENBQUMsRUFBUztvQkFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsU0FBUyxDQUFDLEVBQVU7b0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUVELGtCQUFrQixDQUFDLEVBQVMsRUFBRSxFQUFVO29CQUNwQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUVqRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDNUMsQ0FBQztvQkFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sYUFBYSxHQUNmLElBQUksQ0FBQyxLQUFLO3lCQUNMLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDdkMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFaEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7WUFDTCxDQUFDO1lBM0RHO2dCQUFDLFlBQUssRUFBRTs7d0VBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OytEQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzs4RUFBQTtZQTNDYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQ1g7aUJBQ0YsQ0FBQzs7b0NBQUE7WUFFRix1REE0REMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9tdXRpbHNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNC8xNi8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JdGVtIHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHRleHQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duU2VsZWN0aW9uSXRlbSB7XG4gICAgaWQ6IG51bWJlclxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1tdWx0aXNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIiAoYmx1cik9XCJvbkJsdXIoKVwiPlxuICAgICAgPHNwYW4gIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGJ0bi1ibG9jayBpbnB1dC1ncm91cCBidG4tb3V0bGluZS1zZWxlY3QgYnRuLWZsYXQgcGFkZGluZy0wXCIgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKClcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuZ2Zvcm0tY29udHJvbCBuZy1pbnB1dFwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3Rpb25Nb2RlbC5sZW5ndGggPT0gMFwiPk5vIHNlbGVjdGVkIGl0ZW1zPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+e3sgZ2V0QnV0dG9uVGV4dCgpIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gcGFkZGluZy0wIGJhY2tncm91bmQtbm9uZVwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtc29ydC1kb3duXCI+PC9pPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cblxuICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBuZ2NvbnRyb2wtbWVudSBidG4tYmxvY2tcIiBbc3R5bGUuZGlzcGxheV09XCJpc09wZW4gPyAnYmxvY2snIDogJ25vbmUnXCIgc3R5bGU9XCJvdmVyZmxvdzogc2Nyb2xsXCIgPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJkZXNlbGVjdEFsbCgkZXZlbnQpO1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIj48L2k+Q2xlYXIgQWxsPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cInNlYXJjaEZpbHRlclwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGl0ZW1cIiAvPlxuICAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJtZW51aXRlbVwiIChjbGljayk9XCJ0b2dnbGVTZWxlY3RlZEl0ZW0oJGV2ZW50LCBpdGVtLmlkKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uXCIgW2NsYXNzLmdseXBoaWNvbi1va109XCJpc0NoZWNrZWQoaXRlbS5pZClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAge3tpdGVtLnRleHR9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8IS0tPHRlbXBsYXRlICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+LS0+XG4gICAgICAgICAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiAqbmdJZj1cInNlYXJjaEZpbHRlciA9PSAnJyB8fCBpc1Nob3dJdGVtKGl0ZW0udGV4dClcIj4tLT5cbiAgICAgICAgICAgICAgPCEtLTxhIGhyZWY9XCIjXCIgcm9sZT1cIm1lbnVpdGVtXCIgKGNsaWNrKT1cInRvZ2dsZVNlbGVjdGVkSXRlbSgkZXZlbnQsIGl0ZW0uaWQpXCI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uXCIgW2NsYXNzLmdseXBoaWNvbi1va109XCJpc0NoZWNrZWQoaXRlbS5pZClcIj48L3NwYW4+LS0+XG4gICAgICAgICAgICAgICAgPCEtLXt7aXRlbS50ZXh0fX0tLT5cbiAgICAgICAgICAgICAgPCEtLTwvYT4tLT5cbiAgICAgICAgICAgIDwhLS08L2xpPi0tPlxuICAgICAgICA8IS0tPC90ZW1wbGF0ZT4tLT5cbiAgICAgICAgPGxpICpuZ0lmPVwiaXRlbXMubGVuZ3RoID09IDBcIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiPk5vIGl0ZW1zPC9saT5cbiAgICAgICAgPGxpICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gMFwiIHN0eWxlPVwiYm9yZGVyOiBub25lO3RleHQtYWxpZ246IGNlbnRlcjtcIiAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiPkNsb3NlPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNdXRsaVNlbGVjdENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc2VsZWN0aW9uTW9kZWw6IEFycmF5PERyb3Bkb3duU2VsZWN0aW9uSXRlbT47XG4gICAgQElucHV0KCkgaXRlbXM6IEFycmF5PERyb3Bkb3duSXRlbT47XG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbk1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8QXJyYXk8RHJvcGRvd25TZWxlY3Rpb25JdGVtPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2VhcmNoRmlsdGVyOiBzdHJpbmcgPSAnJztcblxuICAgIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wZG93bigpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoKCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2hGaWx0ZXIgPSAnJztcbiAgICB9XG5cbiAgICBpc1Nob3dJdGVtKHR4dDogc3RyaW5nKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaEZpbHRlci50b0xvd2VyQ2FzZSgpKSA+PSAwO1xuICAgIH1cblxuICAgIGRlc2VsZWN0QWxsKGV2OiBFdmVudCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbCA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyU2VhcmNoKCk7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpc0NoZWNrZWQoaWQ6IG51bWJlcikgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZWwuZmluZEluZGV4KChpdG0pID0+IGl0bS5pZCA9PSBpZCkgPj0gMDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGlvbk1vZGVsKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3RlZEl0ZW0oZXY6IEV2ZW50LCBpZDogbnVtYmVyKSA6IHZvaWQge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGlvbk1vZGVsLmZpbmRJbmRleCgoaXRtKSA9PiBpdG0uaWQgPT0gaWQpO1xuXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwucHVzaCh7ICdpZCcgOiBpZCB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBnZXRCdXR0b25UZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dHM6IEFycmF5PHN0cmluZz4gPVxuICAgICAgICAgICAgdGhpcy5pdGVtc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0bSkgPT4gdGhpcy5pc0NoZWNrZWQoaXRtLmlkKSlcbiAgICAgICAgICAgICAgICAubWFwKChpdG0pID0+IGl0bS50ZXh0KTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRUZXh0cy5qb2luKCcsICcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
