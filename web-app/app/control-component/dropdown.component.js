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
    var DropdownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let DropdownComponent = class DropdownComponent {
                constructor() {
                    this.bindModelDataChange = new core_1.EventEmitter();
                }
                getText() {
                    const selectedTexts = this.values
                        .filter((itm) => itm[this.dataValue] == this.bindModelData)
                        .map((itm) => itm[this.dataText]);
                    return selectedTexts.join(', ');
                }
                selectItem(value) {
                    this.bindModelDataChange.emit(value[this.dataValue]);
                    this.bindModelData = value[this.dataValue];
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DropdownComponent.prototype, "values", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DropdownComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DropdownComponent.prototype, "dataValue", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DropdownComponent.prototype, "dataText", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], DropdownComponent.prototype, "bindModelDataChange", void 0);
            DropdownComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], DropdownComponent);
            exports_1("DropdownComponent", DropdownComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJIO2dCQU9JO29CQUNJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCxPQUFPO29CQUNILE1BQU0sYUFBYSxHQUNmLElBQUksQ0FBQyxNQUFNO3lCQUNOLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7eUJBQzFELEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRTFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELFVBQVUsQ0FBQyxLQUFLO29CQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7WUFFTCxDQUFDO1lBeEJHO2dCQUFDLFlBQUssRUFBRTs7NkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O29FQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztnRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7K0RBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7OzBFQUFBO1lBdEJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVg7aUJBQ0YsQ0FBQzs7aUNBQUE7WUFFRixpREF5QkMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNC8xNi8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItZHJvcGRvd24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBidG4tYmxvY2sgaW5wdXQtZ3JvdXBcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkcm9wZG93bk1lbnUxXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj57e2dldFRleHQoKX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIgaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLXNvcnQtZG93blwiPjwvaT4gPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBidG4tYmxvY2tcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnUxXCI+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB2YWx1ZXNcIiAoY2xpY2spPVwic2VsZWN0SXRlbSh2YWx1ZSlcIj57e3ZhbHVlW2RhdGFUZXh0XX19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSB2YWx1ZXM6IGFueTtcbiAgICBASW5wdXQoKSBiaW5kTW9kZWxEYXRhOiBhbnk7XG4gICAgQElucHV0KCkgZGF0YVZhbHVlOiBhbnk7XG4gICAgQElucHV0KCkgZGF0YVRleHQ6IGFueTtcbiAgICBAT3V0cHV0KCkgYmluZE1vZGVsRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBnZXRUZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRzOiBBcnJheTxzdHJpbmc+ID1cbiAgICAgICAgICAgIHRoaXMudmFsdWVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaXRtKSA9PiBpdG1bdGhpcy5kYXRhVmFsdWVdID09IHRoaXMuYmluZE1vZGVsRGF0YSlcbiAgICAgICAgICAgICAgICAubWFwKChpdG0pID0+IGl0bVt0aGlzLmRhdGFUZXh0XSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGV4dHMuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZS5lbWl0KHZhbHVlW3RoaXMuZGF0YVZhbHVlXSk7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YT12YWx1ZVt0aGlzLmRhdGFWYWx1ZV07XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
