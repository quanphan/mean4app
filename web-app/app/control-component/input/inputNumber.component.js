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
    var InputNumberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let InputNumberComponent = class InputNumberComponent {
            };
            InputNumberComponent = __decorate([
                core_1.Component({
                    selector: 'ng2-InputNumber',
                    template: `
                 <label class="ng-label" [class.has-active]="_focused">{{ngLabel}}</label>
                 <input  *ngIf="ngMask" [textMask]="mask"  class="form-control ng-input"
                 [ngModel]="bindModelData" (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur($event)"
                 [required]="required"
                 >
                  <input  *ngIf="!ngMask"  class="form-control ng-input"
                 [ngModel]="bindModelData" (ngModelChange)="updateData($event)"
                 [disabled]="disabled" [attr.maxlength]="maxLength" (focus)="onFocus()" (blur)="onBlur($event)"
                 [required]="required"
                 >
              `,
                }), 
                __metadata('design:paramtypes', [])
            ], InputNumberComponent);
            exports_1("InputNumberComponent", InputNumberComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0TnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JIO1lBRUEsQ0FBQztZQXRCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7O2VBWUU7aUJBSWQsQ0FBQzs7b0NBQUE7WUFFRix1REFFQyxDQUFBIiwiZmlsZSI6ImNvbnRyb2wtY29tcG9uZW50L2lucHV0L2lucHV0TnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDQvMTcvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZzItSW5wdXROdW1iZXInLFxuICAgIHRlbXBsYXRlOmBcbiAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibmctbGFiZWxcIiBbY2xhc3MuaGFzLWFjdGl2ZV09XCJfZm9jdXNlZFwiPnt7bmdMYWJlbH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgPGlucHV0ICAqbmdJZj1cIm5nTWFza1wiIFt0ZXh0TWFza109XCJtYXNrXCIgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiYmluZE1vZGVsRGF0YVwiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZURhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthdHRyLm1heGxlbmd0aF09XCJtYXhMZW5ndGhcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgICpuZ0lmPVwiIW5nTWFza1wiICBjbGFzcz1cImZvcm0tY29udHJvbCBuZy1pbnB1dFwiXG4gICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cImJpbmRNb2RlbERhdGFcIiAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVEYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbYXR0ci5tYXhsZW5ndGhdPVwibWF4TGVuZ3RoXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBgXG4gICAgLFxuXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dE51bWJlckNvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
