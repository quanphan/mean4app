/**
 * Created by phanquan on 5/8/16.
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
    var TogglebuttonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let TogglebuttonComponent = class TogglebuttonComponent {
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
            ], TogglebuttonComponent.prototype, "ngLabelYes", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TogglebuttonComponent.prototype, "ngLabelNo", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TogglebuttonComponent.prototype, "ngItemWidth", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], TogglebuttonComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], TogglebuttonComponent.prototype, "bindModelDataChange", void 0);
            TogglebuttonComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-togglebutton',
                    template: `
     <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default btn-flat " [class.status-active]="isChecked"  [style.width]="ngItemWidth" (click)="onClick()">{{ngLabelYes}}</button>
            <button type="button" class="btn btn-default btn-flat" [class.status-active]="!isChecked" [style.width]="ngItemWidth" (click)="onClick()">{{ngLabelNo}}</button>
     </div>
  `
                }), 
                __metadata('design:paramtypes', [])
            ], TogglebuttonComponent);
            exports_1("TogglebuttonComponent", TogglebuttonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L3RvZ2dsZWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNIO2dCQU9JO29CQUlBLGNBQVMsR0FBUyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUhqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQ2xELENBQUM7Z0JBSUQsT0FBTztvQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUVMLENBQUM7WUFsQkc7Z0JBQUMsWUFBSyxFQUFFOztxRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7b0VBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O3NFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt3RUFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7OEVBQUE7WUFmYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRTs7Ozs7R0FLWDtpQkFDRixDQUFDOztxQ0FBQTtZQUVGLHlEQW1CQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L3RvZ2dsZWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNS84LzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi10b2dnbGVidXR0b24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiLi4uXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tZmxhdCBcIiBbY2xhc3Muc3RhdHVzLWFjdGl2ZV09XCJpc0NoZWNrZWRcIiAgW3N0eWxlLndpZHRoXT1cIm5nSXRlbVdpZHRoXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPnt7bmdMYWJlbFllc319PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tZmxhdFwiIFtjbGFzcy5zdGF0dXMtYWN0aXZlXT1cIiFpc0NoZWNrZWRcIiBbc3R5bGUud2lkdGhdPVwibmdJdGVtV2lkdGhcIiAoY2xpY2spPVwib25DbGljaygpXCI+e3tuZ0xhYmVsTm99fTwvYnV0dG9uPlxuICAgICA8L2Rpdj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZWJ1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbmdMYWJlbFllczogYW55O1xuICAgIEBJbnB1dCgpIG5nTGFiZWxObzogYW55O1xuICAgIEBJbnB1dCgpIG5nSXRlbVdpZHRoOiBhbnk7XG4gICAgQElucHV0KCkgYmluZE1vZGVsRGF0YTogYm9vbGVhbjtcbiAgICBAT3V0cHV0KCkgYmluZE1vZGVsRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB9XG5cbiAgICBpc0NoZWNrZWQ6Ym9vbGVhbj10aGlzLmJpbmRNb2RlbERhdGE7XG5cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkPSF0aGlzLmlzQ2hlY2tlZDtcbiAgICAgICAgdGhpcy5iaW5kTW9kZWxEYXRhID0gdGhpcy5pc0NoZWNrZWQ7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YUNoYW5nZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
