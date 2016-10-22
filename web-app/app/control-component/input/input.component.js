/**
 * Created by phanquan on 4/17/16.
 */
System.register(['@angular/core', '@angular/forms', '../../core/xfunctions/checkfn'], function(exports_1, context_1) {
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
    var core_1, forms_1, checkfn_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (checkfn_1_1) {
                checkfn_1 = checkfn_1_1;
            }],
        execute: function() {
            let InputComponent = class InputComponent {
                constructor() {
                    this.type = "text";
                    this.disabled = false;
                    this.bindModelDataChange = new core_1.EventEmitter();
                    this._focused = false;
                    this.mask = { mask: '' };
                }
                ngOnInit() {
                    if (this.ngMask) {
                        this.mask = { mask: this.ngMask };
                    }
                    if (!this.control) {
                        this.control = new forms_1.FormControl([""]);
                    }
                }
                //get isValid() {
                //    if(!this.control) return true;
                //    if(this.control.valid || this.control.pristine)
                //        return true;
                //    return false;
                //}
                get Id() {
                    return this.id ? this.id : `ng2-input-`;
                }
                updateData(event) {
                    this.bindModelData = event;
                    if (checkfn_1.fnCheck.CheckPhoneNo(event))
                        this.bindModelDataChange.emit(event);
                }
                onFocus() {
                    this._focused = true;
                }
                onBlur() {
                    this._focused = false;
                }
                onKeyup(ev) {
                    var Exp = /^[0-9]+$/;
                    var keyCode = (ev.key);
                    if (!keyCode.match(Exp)) {
                        ev.preventDefault();
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "id", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngClass", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "type", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngLabel", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngMask", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], InputComponent.prototype, "ngPlaceholder", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], InputComponent.prototype, "disabled", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], InputComponent.prototype, "maxLength", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], InputComponent.prototype, "bindModelData", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', forms_1.FormControl)
            ], InputComponent.prototype, "control", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], InputComponent.prototype, "bindModelDataChange", void 0);
            InputComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-Input',
                    template: `
             <div >
                 <label for="control" class="ng-label" [class.has-active]="_focused" >{{ngLabel}}
                    <i class="fa fa-fw alerterror-icon" [class.fa-star]="control.hasError('required')"></i>
                 </label>
                 <input *ngIf="ngMask" [textMask]="mask" [id]="Id" class="form-control ng-input" type={{type}}
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()"
                  [formControl]="control"
                 >
                 <input *ngIf="!ngMask" [id]="Id" class="form-control ng-input" type={{type}} placeholder="{{ngPlaceholder}}"
                 [ngModel]=bindModelData (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur()"
                 [formControl]="control"
                 >
                <error-messages [control]="control"></error-messages>
              </div>
              `,
                }), 
                __metadata('design:paramtypes', [])
            ], InputComponent);
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJIO2dCQUFBO29CQUdhLFNBQUksR0FBVSxNQUFNLENBQUM7b0JBSXJCLGFBQVEsR0FBUyxLQUFLLENBQUM7b0JBSXRCLHdCQUFtQixHQUFRLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUV4RCxhQUFRLEdBQVMsS0FBSyxDQUFDO29CQUN2QixTQUFJLEdBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLENBQUM7Z0JBK0NuQixDQUFDO2dCQTdDRyxRQUFRO29CQUNKLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDZixDQUFDO3dCQUNHLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsQyxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsaUJBQWlCO2dCQUNqQixvQ0FBb0M7Z0JBQ3BDLHFEQUFxRDtnQkFDckQsc0JBQXNCO2dCQUN0QixtQkFBbUI7Z0JBQ25CLEdBQUc7Z0JBRUgsSUFBSSxFQUFFO29CQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELFVBQVUsQ0FBQyxLQUFLO29CQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMzQixFQUFFLENBQUEsQ0FBQyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCxPQUFPO29CQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELE1BQU07b0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsT0FBTyxDQUFDLEVBQUU7b0JBRU4sSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDO29CQUNyQixJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDcEIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN4QixDQUFDO2dCQUVMLENBQUM7WUFFTCxDQUFDO1lBNURHO2dCQUFDLFlBQUssRUFBRTs7c0RBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzJEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt3REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7MkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzBEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztpRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NERBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztpRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7MkRBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7O3VFQUFBO1lBbkNiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFpQkU7aUJBR2QsQ0FBQzs7OEJBQUE7WUFFRiwyQ0E2REMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9pbnB1dC9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNC8xNy8xNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsT3V0cHV0LCBFdmVudEVtaXR0ZXIsQXR0cmlidXRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Zm5DaGVja30gZnJvbSAnLi4vLi4vY29yZS94ZnVuY3Rpb25zL2NoZWNrZm4nO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItSW5wdXQnLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRyb2xcIiBjbGFzcz1cIm5nLWxhYmVsXCIgW2NsYXNzLmhhcy1hY3RpdmVdPVwiX2ZvY3VzZWRcIiA+e3tuZ0xhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mdyBhbGVydGVycm9yLWljb25cIiBbY2xhc3MuZmEtc3Rhcl09XCJjb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+PC9pPlxuICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJuZ01hc2tcIiBbdGV4dE1hc2tdPVwibWFza1wiIFtpZF09XCJJZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLWlucHV0XCIgdHlwZT17e3R5cGV9fVxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09YmluZE1vZGVsRGF0YSAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4TGVuZ3RoXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhbmdNYXNrXCIgW2lkXT1cIklkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctaW5wdXRcIiB0eXBlPXt7dHlwZX19IHBsYWNlaG9sZGVyPVwie3tuZ1BsYWNlaG9sZGVyfX1cIlxuICAgICAgICAgICAgICAgICBbbmdNb2RlbF09YmluZE1vZGVsRGF0YSAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4TGVuZ3RoXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCJcbiAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGVycm9yLW1lc3NhZ2VzIFtjb250cm9sXT1cImNvbnRyb2xcIj48L2Vycm9yLW1lc3NhZ2VzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICxcblxufSlcblxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBpZCA6IHN0cmluZztcbiAgICBASW5wdXQoKSBuZ0NsYXNzIDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGUgOiBzdHJpbmc9XCJ0ZXh0XCI7XG4gICAgQElucHV0KCkgbmdMYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5nTWFzazogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5nUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBASW5wdXQoKSBkaXNhYmxlZDpib29sZWFuPWZhbHNlO1xuICAgIEBJbnB1dCgpIG1heExlbmd0aDpudW1iZXI7XG4gICAgQElucHV0KCkgYmluZE1vZGVsRGF0YTogYW55O1xuICAgIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIEBPdXRwdXQoKSBiaW5kTW9kZWxEYXRhQ2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBfZm9jdXNlZDpib29sZWFuPWZhbHNlO1xuICAgIG1hc2s9e21hc2s6Jyd9O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmKHRoaXMubmdNYXNrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1hc2s9e21hc2s6dGhpcy5uZ01hc2sgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5jb250cm9sKXtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbD1uZXcgRm9ybUNvbnRyb2woW1wiXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZ2V0IGlzVmFsaWQoKSB7XG4gICAgLy8gICAgaWYoIXRoaXMuY29udHJvbCkgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgaWYodGhpcy5jb250cm9sLnZhbGlkIHx8IHRoaXMuY29udHJvbC5wcmlzdGluZSlcbiAgICAvLyAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vfVxuXG4gICAgZ2V0IElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID8gdGhpcy5pZCA6IGBuZzItaW5wdXQtYDtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYmluZE1vZGVsRGF0YSA9IGV2ZW50O1xuICAgICAgICBpZihmbkNoZWNrLkNoZWNrUGhvbmVObyhldmVudCkpXG4gICAgICAgICAgICB0aGlzLmJpbmRNb2RlbERhdGFDaGFuZ2UuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25CbHVyKCkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25LZXl1cChldilcbiAgICB7XG4gICAgICAgIHZhciBFeHAgPSAvXlswLTldKyQvO1xuICAgICAgICB2YXIga2V5Q29kZSA9IChldi5rZXkpO1xuICAgICAgICBpZigha2V5Q29kZS5tYXRjaChFeHApKXtcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
