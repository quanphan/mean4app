/**
 * Created by phanquan on 4/10/16.
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
    var ComboComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ComboComponent = class ComboComponent {
                constructor(elRef) {
                    this.elRef = elRef;
                    this.isOpen = false;
                    this.selectText = '';
                    this.dropdownClass = 'dropdown';
                    this._focused = false;
                    this.bindModelDataChange = new core_1.EventEmitter();
                }
                ngOnInit() {
                }
                toggleDropdown() {
                    if (!this.isOpen) {
                        this.isOpen = !this.isOpen;
                    }
                    // run Ok
                    //jQuery('.dropdown').addClass('open');
                    //$('.dropdown-toggle').dropdown('toggle');
                }
                isShowItem(txt) {
                    return txt.toLowerCase().indexOf(this.selectText.toLowerCase()) >= 0;
                }
                getText() {
                    const selectedTexts = this.values
                        .filter((itm) => itm[this.dataValue] == this.bindModelData)
                        .map((itm) => itm[this.dataText]);
                    if (selectedTexts.length == 0) {
                        return 'Select item';
                    }
                    return selectedTexts.join(', ');
                }
                onKeyup(ev) {
                    if (this.values.findIndex((itm) => itm[this.dataText] == this.selectText) >= 0) {
                    }
                    this.toggleDropdown();
                }
                onFocus() {
                    this._focused = true;
                }
                onBlur() {
                    this._focused = false;
                }
                onKeyPress(keyCode) {
                    if (keyCode == 13) {
                        var _items = this.values.find((itm) => itm[this.dataText].toLowerCase().indexOf(this.selectText.toLowerCase()) >= 0);
                        if (_items) {
                            this.selectItem(_items);
                        }
                        else {
                            this.bindModelData = '';
                        }
                    }
                }
                selectItem(value) {
                    this.bindModelDataChange.emit(value[this.dataValue]);
                    this.bindModelData = value[this.dataValue];
                    this._focused = false;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], ComboComponent.prototype, "values", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], ComboComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], ComboComponent.prototype, "dataValue", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], ComboComponent.prototype, "dataText", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], ComboComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], ComboComponent.prototype, "bindModelDataChange", void 0);
            ComboComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], ComboComponent);
            exports_1("ComboComponent", ComboComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2NvbWJvYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JIO2dCQVdJLFlBQXFCLEtBQWdCO29CQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO29CQUpyQyxXQUFNLEdBQVksS0FBSyxDQUFDO29CQUN4QixlQUFVLEdBQVEsRUFBRSxDQUFDO29CQUNyQixrQkFBYSxHQUFDLFVBQVUsQ0FBQztvQkFLekIsYUFBUSxHQUFTLEtBQUssQ0FBQztvQkFGbkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELFFBQVE7Z0JBRVIsQ0FBQztnQkFFRCxjQUFjO29CQUNWLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoQixDQUFDO3dCQUNHLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM5QixDQUFDO29CQUVELFNBQVM7b0JBQ1QsdUNBQXVDO29CQUN2QywyQ0FBMkM7Z0JBQy9DLENBQUM7Z0JBRUQsVUFBVSxDQUFDLEdBQVc7b0JBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pFLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxNQUFNLGFBQWEsR0FDZixJQUFJLENBQUMsTUFBTTt5QkFDTixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO3lCQUMxRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUUxQyxFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3pCLENBQUM7b0JBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsT0FBTyxDQUFDLEVBQUU7b0JBRU4sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFL0UsQ0FBQztvQkFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELFVBQVUsQ0FBQyxPQUFPO29CQUNkLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNaLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakgsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQ1YsQ0FBQzs0QkFDRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM1QixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDO3dCQUMxQixDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxVQUFVLENBQUMsS0FBSztvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLGFBQWEsR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsQ0FBQztZQUNMLENBQUM7WUFqRkc7Z0JBQUMsWUFBSyxFQUFFOzswREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7MkRBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7O3VFQUFBO1lBOUJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CWDtpQkFDRixDQUFDOzs4QkFBQTtZQUVGLDJDQWtGQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2NvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzEwLzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItY29tYm9ib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm5nLWxhYmVsXCIgW2NsYXNzLmhhcy1hY3RpdmVdPVwiX2ZvY3VzZWRcIj57e25nTGFiZWx9fTwvbGFiZWw+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGJ0bi1ibG9jayBpbnB1dC1ncm91cFwiIHR5cGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudTFcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIFtjbGFzcy5hcmlhLWV4cGFuZGVkXT1cImlzT3BlblwiIChjbGljayk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLWlucHV0XCIgdHlwZT1cInRleHRcIiBbbmdNb2RlbF09XCJnZXRUZXh0KClcIiAoaW5wdXQpPVwic2VsZWN0VGV4dD0kZXZlbnQudGFyZ2V0LnZhbHVlXCJcbiAgICAgICAgICAgIChrZXl1cCk9XCJvbktleXVwKCRldmVuKVwiIChrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5rZXlDb2RlKVwiLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiIGlucHV0LWdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1zb3J0LWRvd25cIj48L2k+IDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImJ0bi1ibG9jayBuZ2NvbnRyb2wtbWVudSBkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51MVwiPlxuICAgICAgICAgICAgPGxpPjxwPlR5cGUgbGlzdDwvcD48L2xpPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB2YWx1ZXNcIiAoY2xpY2spPVwic2VsZWN0SXRlbSh2YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICA8YSAqbmdJZj1cInNlbGVjdFRleHQ9PScnIHx8IGlzU2hvd0l0ZW0odmFsdWUubGFiZWwpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiXCI+PC9pPnt7dmFsdWVbZGF0YVRleHRdfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tYm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgQElucHV0KCkgdmFsdWVzOiBhbnk7XG4gICAgQElucHV0KCkgYmluZE1vZGVsRGF0YTogYW55O1xuICAgIEBJbnB1dCgpIGRhdGFWYWx1ZTogYW55O1xuICAgIEBJbnB1dCgpIGRhdGFUZXh0OiBhbnk7XG4gICAgQElucHV0KCkgbmdMYWJlbDogYW55O1xuICAgIEBPdXRwdXQoKSBiaW5kTW9kZWxEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI7XG4gICAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2VsZWN0VGV4dDpzdHJpbmc9Jyc7XG4gICAgZHJvcGRvd25DbGFzcz0nZHJvcGRvd24nO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgZWxSZWY6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIF9mb2N1c2VkOmJvb2xlYW49ZmFsc2U7XG4gICAgbmdPbkluaXQoKTphbnl7XG5cbiAgICB9XG5cbiAgICB0b2dnbGVEcm9wZG93bigpe1xuICAgICAgICBpZighdGhpcy5pc09wZW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0hdGhpcy5pc09wZW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBydW4gT2tcbiAgICAgICAgLy9qUXVlcnkoJy5kcm9wZG93bicpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vJCgnLmRyb3Bkb3duLXRvZ2dsZScpLmRyb3Bkb3duKCd0b2dnbGUnKTtcbiAgICB9XG5cbiAgICBpc1Nob3dJdGVtKHR4dDogc3RyaW5nKSA6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlbGVjdFRleHQudG9Mb3dlckNhc2UoKSkgPj0gMDtcbiAgICB9XG5cbiAgICBnZXRUZXh0KCk6c3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0czogQXJyYXk8c3RyaW5nPiA9XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0bSkgPT4gaXRtW3RoaXMuZGF0YVZhbHVlXSA9PSB0aGlzLmJpbmRNb2RlbERhdGEpXG4gICAgICAgICAgICAgICAgLm1hcCgoaXRtKSA9PiBpdG1bdGhpcy5kYXRhVGV4dF0pO1xuXG4gICAgICAgIGlmKHNlbGVjdGVkVGV4dHMubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgIHJldHVybiAnU2VsZWN0IGl0ZW0nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGV4dHMuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBvbktleXVwKGV2KVxuICAgIHtcbiAgICAgICAgaWYodGhpcy52YWx1ZXMuZmluZEluZGV4KChpdG0pID0+IGl0bVt0aGlzLmRhdGFUZXh0XSA9PSB0aGlzLnNlbGVjdFRleHQpID49MCkge1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25LZXlQcmVzcyhrZXlDb2RlKXtcbiAgICAgICAgaWYoa2V5Q29kZT09MTMpe1xuICAgICAgICAgICAgdmFyIF9pdGVtcz10aGlzLnZhbHVlcy5maW5kKChpdG0pID0+IGl0bVt0aGlzLmRhdGFUZXh0XS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWxlY3RUZXh0LnRvTG93ZXJDYXNlKCkpPj0wKTtcbiAgICAgICAgICAgIGlmKF9pdGVtcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW0oX2l0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YT0nJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEl0ZW0odmFsdWUpIHtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhQ2hhbmdlLmVtaXQodmFsdWVbdGhpcy5kYXRhVmFsdWVdKTtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhPXZhbHVlW3RoaXMuZGF0YVZhbHVlXTtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
