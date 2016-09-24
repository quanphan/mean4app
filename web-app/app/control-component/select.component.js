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
    var SelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let SelectComponent = class SelectComponent {
                constructor() {
                    this.notShowLabel = false;
                    this._focused = false;
                    this.bindModelDataChange = new core_1.EventEmitter();
                }
                ngOnInit() {
                    if (this.ngShowLable != "undefined") {
                        if (this.ngShowLable == "false")
                            this.notShowLabel = true;
                    }
                }
                getText() {
                    const selectedTexts = this.values
                        .filter((itm) => itm[this.dataValue] == this.bindModelData)
                        .map((itm) => itm[this.dataText]);
                    let text = selectedTexts.join(', ');
                    if (text == '') {
                        text = this.ngLabel;
                    }
                    return text;
                }
                selectItem(value) {
                    this.bindModelDataChange.emit(value[this.dataValue]);
                    this.bindModelData = value[this.dataValue];
                    this._focused = false;
                }
                onFocus() {
                    this._focused = true;
                }
                onBlur() {
                    this._focused = false;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SelectComponent.prototype, "values", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SelectComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SelectComponent.prototype, "dataValue", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SelectComponent.prototype, "dataText", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SelectComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SelectComponent.prototype, "ngShowLable", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], SelectComponent.prototype, "bindModelDataChange", void 0);
            SelectComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], SelectComponent);
            exports_1("SelectComponent", SelectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBVUk7b0JBREEsaUJBQVksR0FBUyxLQUFLLENBQUM7b0JBVzNCLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBVG5CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCxRQUFRO29CQUNKLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUUsV0FBVyxDQUFDLENBQ2pDLENBQUM7d0JBQ0csRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBRSxPQUFPLENBQUM7NEJBQUUsSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUM7b0JBQzFELENBQUM7Z0JBQ0wsQ0FBQztnQkFJRCxPQUFPO29CQUNILE1BQU0sYUFBYSxHQUNmLElBQUksQ0FBQyxNQUFNO3lCQUNOLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7eUJBQzFELEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBRTFDLElBQUksSUFBSSxHQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBRSxFQUFFLENBQUMsQ0FDWixDQUFDO3dCQUNHLElBQUksR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN0QixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBRWhCLENBQUM7Z0JBRUQsVUFBVSxDQUFDLEtBQUs7b0JBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO1lBRUwsQ0FBQztZQW5ERztnQkFBQyxZQUFLLEVBQUU7OzJEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztrRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7OERBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7Z0VBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7O3dFQUFBO1lBNUJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCWDtpQkFDRixDQUFDOzsrQkFBQTtZQUVGLDZDQW9EQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L3NlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNC8xNy8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLXNlbGVjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgICA8bGFiZWwgKm5nSWY9XCIhbm90U2hvd0xhYmVsXCIgY2xhc3M9XCJuZy1sYWJlbFwiIFtjbGFzcy5oYXMtYWN0aXZlXT1cIl9mb2N1c2VkXCI+e3tuZ0xhYmVsfX08L2xhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZSBpbnB1dC1ncm91cCBidG4tYmxvY2tcIiBpZD1cImRyb3Bkb3duTWVudTFcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCIgKGNsaWNrKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm0tY29udHJvbCBuZy1pbnB1dCBub3dyYXBcIiBbY2xhc3MubmctaW5wdXQtYWN0aXZlXT1cIl9mb2N1c2VkXCI+e3tnZXRUZXh0KCl9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiBbY2xhc3MubmctaW5wdXQtYWN0aXZlXT1cIl9mb2N1c2VkXCI+PGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1zb3J0LWRvd25cIj48L2k+PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBuZ2NvbnRyb2wtbWVudSBidG4tYmxvY2tcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnUxXCI+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB2YWx1ZXNcIiAoY2xpY2spPVwic2VsZWN0SXRlbSh2YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICA8YT57e3ZhbHVlW2RhdGFUZXh0XX19PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlPVwiYm9yZGVyOiBub25lO3RleHQtYWxpZ246IGNlbnRlcjtcIj5DbG9zZTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHZhbHVlczogYW55O1xuICAgIEBJbnB1dCgpIGJpbmRNb2RlbERhdGE6IGFueTtcbiAgICBASW5wdXQoKSBkYXRhVmFsdWU6IGFueTtcbiAgICBASW5wdXQoKSBkYXRhVGV4dDogYW55O1xuICAgIEBJbnB1dCgpIG5nTGFiZWw6IGFueTtcbiAgICBASW5wdXQoKSBuZ1Nob3dMYWJsZTogYW55O1xuICAgIEBPdXRwdXQoKSBiaW5kTW9kZWxEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI7XG5cbiAgICBub3RTaG93TGFiZWw6Ym9vbGVhbj1mYWxzZTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZih0aGlzLm5nU2hvd0xhYmxlIT1cInVuZGVmaW5lZFwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLm5nU2hvd0xhYmxlPT1cImZhbHNlXCIpICB0aGlzLm5vdFNob3dMYWJlbD10cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9mb2N1c2VkOmJvb2xlYW49ZmFsc2U7XG5cblxuICAgIGdldFRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dHM6IEFycmF5PHN0cmluZz4gPVxuICAgICAgICAgICAgdGhpcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpdG0pID0+IGl0bVt0aGlzLmRhdGFWYWx1ZV0gPT0gdGhpcy5iaW5kTW9kZWxEYXRhKVxuICAgICAgICAgICAgICAgIC5tYXAoKGl0bSkgPT4gaXRtW3RoaXMuZGF0YVRleHRdKTtcblxuICAgICAgICBsZXQgdGV4dD0gc2VsZWN0ZWRUZXh0cy5qb2luKCcsICcpO1xuICAgICAgICBpZih0ZXh0PT0nJylcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dD10aGlzLm5nTGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQ7XG5cbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZS5lbWl0KHZhbHVlW3RoaXMuZGF0YVZhbHVlXSk7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YT12YWx1ZVt0aGlzLmRhdGFWYWx1ZV07XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkZvY3VzKCkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkJsdXIoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
