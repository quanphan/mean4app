/**
 * Created by phanquan on 5/7/16.
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
    var CheckboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let CheckboxComponent = class CheckboxComponent {
                constructor() {
                    this.isChecked = this.bindModelData;
                    this.bindModelDataChange = new core_1.EventEmitter();
                }
                onClick() {
                    this.isChecked = !this.isChecked;
                    this.bindModelData = this.isChecked;
                    this.bindModelDataChange.emit(this.isChecked);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CheckboxComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], CheckboxComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], CheckboxComponent.prototype, "bindModelDataChange", void 0);
            CheckboxComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-checkbox',
                    template: `
     <div class="ng-checkbox">
       <span (click)="onClick()"><i class="icheckbox glyphicon " [class.glyphicon-unchecked]="!isChecked" [class.glyphicon-ok]="isChecked"></i>{{ngLabel}}</span>
    </div>
  `
                }), 
                __metadata('design:paramtypes', [])
            ], CheckboxComponent);
            exports_1("CheckboxComponent", CheckboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUg7Z0JBS0k7b0JBSUEsY0FBUyxHQUFTLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBSGpDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQztnQkFJRCxPQUFPO29CQUNILElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO1lBRUwsQ0FBQztZQWhCRztnQkFBQyxZQUFLLEVBQUU7OzhEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztvRUFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7MEVBQUE7WUFaYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7R0FJWDtpQkFDRixDQUFDOztpQ0FBQTtZQUVGLGlEQWlCQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2NoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA1LzcvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmcyLWNoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICA8ZGl2IGNsYXNzPVwibmctY2hlY2tib3hcIj5cbiAgICAgICA8c3BhbiAoY2xpY2spPVwib25DbGljaygpXCI+PGkgY2xhc3M9XCJpY2hlY2tib3ggZ2x5cGhpY29uIFwiIFtjbGFzcy5nbHlwaGljb24tdW5jaGVja2VkXT1cIiFpc0NoZWNrZWRcIiBbY2xhc3MuZ2x5cGhpY29uLW9rXT1cImlzQ2hlY2tlZFwiPjwvaT57e25nTGFiZWx9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBuZ0xhYmVsOiBhbnk7XG4gICAgQElucHV0KCkgYmluZE1vZGVsRGF0YTogYm9vbGVhbjtcbiAgICBAT3V0cHV0KCkgYmluZE1vZGVsRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBpc0NoZWNrZWQ6Ym9vbGVhbj10aGlzLmJpbmRNb2RlbERhdGE7XG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkPSF0aGlzLmlzQ2hlY2tlZDtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhID0gdGhpcy5pc0NoZWNrZWQ7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
