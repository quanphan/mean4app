/**
 * Created by phanquan on 5/2/16.
 */
/**
 * Created by phanquan on 4/17/16.
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
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let SearchComponent = class SearchComponent {
                constructor() {
                    this.disabled = false;
                    this.bindModelDataChange = new core_1.EventEmitter();
                    this.onSearch = new core_1.EventEmitter();
                    this._focused = false;
                }
                updateData(event) {
                    this.bindModelData = event;
                    this.bindModelDataChange.emit(event);
                }
                onFocus() {
                    this._focused = true;
                }
                onBlur() {
                    this._focused = false;
                }
                onClick(event) {
                    this.onSearch.emit(event);
                }
                onKeyPress(keyCode) {
                    if (keyCode == 13) {
                        this.onSearch.emit(event);
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], SearchComponent.prototype, "ngClass", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], SearchComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], SearchComponent.prototype, "disabled", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], SearchComponent.prototype, "maxLength", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], SearchComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], SearchComponent.prototype, "bindModelDataChange", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], SearchComponent.prototype, "onSearch", void 0);
            SearchComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-Search',
                    template: `
                 <span class="input-group btn-block" (click)="onFocus()" (blur)="onBlur()">
                     <input class="form-control ng-search" type="text" placeholder="{{ngLabel}}"
                     [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                     [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()" (keypress)="onKeyPress($event.keyCode)">
                     <span class="input-group-addon pointer" [class.ng-input-active]="_focused" (click)="onClick($event)">
                     <i class="fa fa-search"></i></span>
                  </span>
              `
                }), 
                __metadata('design:paramtypes', [])
            ], SearchComponent);
            exports_1("SearchComponent", SearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0L3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JIO2dCQUFBO29CQUdhLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBR3RCLHdCQUFtQixHQUFRLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUM5QyxhQUFRLEdBQVEsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQzdDLGFBQVEsR0FBUyxLQUFLLENBQUM7Z0JBeUIzQixDQUFDO2dCQXZCRyxVQUFVLENBQUMsS0FBSztvQkFDWixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztvQkFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFFRCxPQUFPO29CQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELE1BQU07b0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsT0FBTyxDQUFDLEtBQUs7b0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsVUFBVSxDQUFDLE9BQU87b0JBQ2QsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCLENBQUM7Z0JBQ0wsQ0FBQztZQUVMLENBQUM7WUFoQ0c7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NERBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs4REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7a0VBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7O3dFQUFBO1lBQ1Q7Z0JBQUMsYUFBTSxFQUFFOzs2REFBQTtZQXBCYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUM7Ozs7Ozs7O2VBUUU7aUJBQ2QsQ0FBQzs7K0JBQUE7WUFFRiw2Q0FpQ0MsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9pbnB1dC9zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDUvMi8xNi5cbiAqL1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDQvMTcvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLVNlYXJjaCcsXG4gICAgdGVtcGxhdGU6YFxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwIGJ0bi1ibG9ja1wiIChjbGljayk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLXNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7e25nTGFiZWx9fVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbF09YmluZE1vZGVsRGF0YSAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2F0dHIubWF4bGVuZ3RoXT1cIm1heExlbmd0aFwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiIChrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudC5rZXlDb2RlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBwb2ludGVyXCIgW2NsYXNzLm5nLWlucHV0LWFjdGl2ZV09XCJfZm9jdXNlZFwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbmdDbGFzcyA6IHN0cmluZztcbiAgICBASW5wdXQoKSBuZ0xhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgICBASW5wdXQoKSBtYXhMZW5ndGg6bnVtYmVyO1xuICAgIEBJbnB1dCgpIGJpbmRNb2RlbERhdGE6IGFueTtcbiAgICBAT3V0cHV0KCkgYmluZE1vZGVsRGF0YUNoYW5nZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblNlYXJjaDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIF9mb2N1c2VkOmJvb2xlYW49ZmFsc2U7XG5cbiAgICB1cGRhdGVEYXRhKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YSA9IGV2ZW50O1xuICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIG9uS2V5UHJlc3Moa2V5Q29kZSl7XG4gICAgICAgIGlmKGtleUNvZGU9PTEzKXtcbiAgICAgICAgICAgIHRoaXMub25TZWFyY2guZW1pdChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
