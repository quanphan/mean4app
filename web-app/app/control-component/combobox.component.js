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
            (keyup)="onKeyup($event)" (keypress)="onKeyPress($event.keyCode)"/>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2NvbWJvYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JIO2dCQVdJLFlBQXFCLEtBQWdCO29CQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO29CQUpyQyxXQUFNLEdBQVksS0FBSyxDQUFDO29CQUN4QixlQUFVLEdBQVEsRUFBRSxDQUFDO29CQUNyQixrQkFBYSxHQUFDLFVBQVUsQ0FBQztvQkFLekIsYUFBUSxHQUFTLEtBQUssQ0FBQztvQkFGbkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELFFBQVE7Z0JBRVIsQ0FBQztnQkFFRCxjQUFjO29CQUNWLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoQixDQUFDO3dCQUNHLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM5QixDQUFDO29CQUVELFNBQVM7b0JBQ1QsdUNBQXVDO29CQUN2QywyQ0FBMkM7Z0JBQy9DLENBQUM7Z0JBRUQsVUFBVSxDQUFDLEdBQVc7b0JBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pFLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxNQUFNLGFBQWEsR0FDZixJQUFJLENBQUMsTUFBTTt5QkFDTixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO3lCQUMxRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUUxQyxFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxhQUFhLENBQUM7b0JBQ3pCLENBQUM7b0JBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsT0FBTyxDQUFDLEVBQUU7b0JBRU4sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFL0UsQ0FBQztvQkFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELFVBQVUsQ0FBQyxPQUFPO29CQUNkLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNaLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakgsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQ1YsQ0FBQzs0QkFDRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM1QixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDO3dCQUMxQixDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxVQUFVLENBQUMsS0FBSztvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLGFBQWEsR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsQ0FBQztZQUNMLENBQUM7WUFqRkc7Z0JBQUMsWUFBSyxFQUFFOzswREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7MkRBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7O3VFQUFBO1lBOUJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CWDtpQkFDRixDQUFDOzs4QkFBQTtZQUVGLDJDQWtGQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2NvbWJvYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzEwLzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItY29tYm9ib3gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm5nLWxhYmVsXCIgW2NsYXNzLmhhcy1hY3RpdmVdPVwiX2ZvY3VzZWRcIj57e25nTGFiZWx9fTwvbGFiZWw+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGJ0bi1ibG9jayBpbnB1dC1ncm91cFwiIHR5cGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudTFcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIFtjbGFzcy5hcmlhLWV4cGFuZGVkXT1cImlzT3BlblwiIChjbGljayk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLWlucHV0XCIgdHlwZT1cInRleHRcIiBbbmdNb2RlbF09XCJnZXRUZXh0KClcIiAoaW5wdXQpPVwic2VsZWN0VGV4dD0kZXZlbnQudGFyZ2V0LnZhbHVlXCJcbiAgICAgICAgICAgIChrZXl1cCk9XCJvbktleXVwKCRldmVudClcIiAoa2V5cHJlc3MpPVwib25LZXlQcmVzcygkZXZlbnQua2V5Q29kZSlcIi8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiBpbnB1dC1ncm91cC1hZGRvblwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtc29ydC1kb3duXCI+PC9pPiA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8dWwgY2xhc3M9XCJidG4tYmxvY2sgbmdjb250cm9sLW1lbnUgZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudTFcIj5cbiAgICAgICAgICAgIDxsaT48cD5UeXBlIGxpc3Q8L3A+PC9saT5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdmFsdWVzXCIgKGNsaWNrKT1cInNlbGVjdEl0ZW0odmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJzZWxlY3RUZXh0PT0nJyB8fCBpc1Nob3dJdGVtKHZhbHVlLmxhYmVsKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIlwiPjwvaT57e3ZhbHVlW2RhdGFUZXh0XX19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbWJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIEBJbnB1dCgpIHZhbHVlczogYW55O1xuICAgIEBJbnB1dCgpIGJpbmRNb2RlbERhdGE6IGFueTtcbiAgICBASW5wdXQoKSBkYXRhVmFsdWU6IGFueTtcbiAgICBASW5wdXQoKSBkYXRhVGV4dDogYW55O1xuICAgIEBJbnB1dCgpIG5nTGFiZWw6IGFueTtcbiAgICBAT3V0cHV0KCkgYmluZE1vZGVsRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyO1xuICAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNlbGVjdFRleHQ6c3RyaW5nPScnO1xuICAgIGRyb3Bkb3duQ2xhc3M9J2Ryb3Bkb3duJztcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGVsUmVmOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBfZm9jdXNlZDpib29sZWFuPWZhbHNlO1xuICAgIG5nT25Jbml0KCk6YW55e1xuXG4gICAgfVxuXG4gICAgdG9nZ2xlRHJvcGRvd24oKXtcbiAgICAgICAgaWYoIXRoaXMuaXNPcGVuKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IXRoaXMuaXNPcGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcnVuIE9rXG4gICAgICAgIC8valF1ZXJ5KCcuZHJvcGRvd24nKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAvLyQoJy5kcm9wZG93bi10b2dnbGUnKS5kcm9wZG93bigndG9nZ2xlJyk7XG4gICAgfVxuXG4gICAgaXNTaG93SXRlbSh0eHQ6IHN0cmluZykgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5zZWxlY3RUZXh0LnRvTG93ZXJDYXNlKCkpID49IDA7XG4gICAgfVxuXG4gICAgZ2V0VGV4dCgpOnN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dHM6IEFycmF5PHN0cmluZz4gPVxuICAgICAgICAgICAgdGhpcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChpdG0pID0+IGl0bVt0aGlzLmRhdGFWYWx1ZV0gPT0gdGhpcy5iaW5kTW9kZWxEYXRhKVxuICAgICAgICAgICAgICAgIC5tYXAoKGl0bSkgPT4gaXRtW3RoaXMuZGF0YVRleHRdKTtcblxuICAgICAgICBpZihzZWxlY3RlZFRleHRzLmxlbmd0aD09MCl7XG4gICAgICAgICAgICByZXR1cm4gJ1NlbGVjdCBpdGVtJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRleHRzLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgb25LZXl1cChldilcbiAgICB7XG4gICAgICAgIGlmKHRoaXMudmFsdWVzLmZpbmRJbmRleCgoaXRtKSA9PiBpdG1bdGhpcy5kYXRhVGV4dF0gPT0gdGhpcy5zZWxlY3RUZXh0KSA+PTApIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgIH1cblxuICAgIG9uRm9jdXMoKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQmx1cigpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3Moa2V5Q29kZSl7XG4gICAgICAgIGlmKGtleUNvZGU9PTEzKXtcbiAgICAgICAgICAgIHZhciBfaXRlbXM9dGhpcy52YWx1ZXMuZmluZCgoaXRtKSA9PiBpdG1bdGhpcy5kYXRhVGV4dF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VsZWN0VGV4dC50b0xvd2VyQ2FzZSgpKT49MCk7XG4gICAgICAgICAgICBpZihfaXRlbXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtKF9pdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGE9Jyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RJdGVtKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZS5lbWl0KHZhbHVlW3RoaXMuZGF0YVZhbHVlXSk7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YT12YWx1ZVt0aGlzLmRhdGFWYWx1ZV07XG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
