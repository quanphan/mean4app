/**
 * Created by phanquan on 5/21/16.
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
    var RoomitemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let RoomitemComponent = class RoomitemComponent {
                constructor(elRef) {
                    this.elRef = elRef;
                    this.ngRoomChange = new core_1.EventEmitter();
                    this.ngResSelected = new core_1.EventEmitter();
                    this._focused = false;
                    this._isSelect = true;
                }
                setRoomItem() {
                    let _resItem = { tempID: '1', RoomNo: this.room, FromDate: this.date.day, ToDate: this.date.day };
                    return _resItem;
                }
                setRoomItemF() {
                    let _resItem = { tempID: '', RoomNo: this.room, FromDate: this.date.day };
                    return _resItem;
                }
                setRoomItemT() {
                    let _resItem = { tempID: '1', RoomNo: this.room, FromDate: this.ngRoom.FromDate, ToDate: this.date.day };
                    return _resItem;
                }
                //Even
                onFocus(event) {
                    if (this.ngRes.RoomNo != '') {
                        this._focused = false;
                        event.preventDefault;
                    }
                    else {
                        this._focused = true;
                        this.ngRoomChange.emit(this.setRoomItem());
                        this.ngResSelected.emit(event);
                    }
                }
                onMousedown(event) {
                    //nhấn chuột
                    if (this.ngRes.RoomNo != '') {
                        this._focused = false;
                        event.preventDefault;
                    }
                    else {
                        this._focused = true;
                        this.ngRoomChange.emit(this.setRoomItemF());
                    }
                }
                onMouseup(event) {
                    //nha chuot
                    if (this.ngRes.RoomNo != '') {
                        this._focused = false;
                        event.preventDefault;
                    }
                    else {
                        this.ngRoomChange.emit(this.setRoomItemT());
                        this.ngResSelected.emit(event);
                    }
                }
                onMouseleave(event) {
                    //khi con trỏ chuột bắt đầu rời khỏi thẻ HTML
                    if (event.which != 1)
                        this._focused = false;
                }
                onMouseenter(event) {
                    // khi con trỏ chuột bắt đầu đi vào thẻ HTML
                    if (this.ngRoom.RoomNo == this.room && event.which == 1) {
                        //this.ngRoomChange.emit(this.setRoomItemT());
                        this._focused = true;
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], RoomitemComponent.prototype, "room", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], RoomitemComponent.prototype, "date", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], RoomitemComponent.prototype, "ngRoom", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], RoomitemComponent.prototype, "ngRes", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], RoomitemComponent.prototype, "ngRoomChange", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], RoomitemComponent.prototype, "ngResSelected", void 0);
            RoomitemComponent = __decorate([
                core_1.Component({
                    selector: 'room-item',
                    template: `
   <div class="roomno" [class.room-select]="_focused" (click)="onFocus($event)" (mouseleave)="onMouseleave($event)"
   (mouseenter)="onMouseenter($event)" (mouseup)="onMouseup($event)" (mousedown)="onMousedown($event)">
        <span [hidden]="!_focused">{{date.day}}</span>
        <span >{{ngRes.RoomNo}}</span>
    </div>
  `
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], RoomitemComponent);
            exports_1("RoomitemComponent", RoomitemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcm9vbWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlSDtnQkFPSSxZQUFvQixLQUFnQjtvQkFBaEIsVUFBSyxHQUFMLEtBQUssQ0FBVztvQkFGMUIsaUJBQVksR0FBUSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDdkMsa0JBQWEsR0FBUSxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFJbEQsYUFBUSxHQUFTLEtBQUssQ0FBQztvQkFDdkIsY0FBUyxHQUFDLElBQUksQ0FBQztnQkFGZixDQUFDO2dCQUdELFdBQVc7b0JBRVAsSUFBSSxRQUFRLEdBQUMsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQztvQkFDdkYsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQztnQkFDRCxZQUFZO29CQUVSLElBQUksUUFBUSxHQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQztvQkFDbEUsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxZQUFZO29CQUVSLElBQUksUUFBUSxHQUFDLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUM7b0JBQzlGLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsTUFBTTtnQkFDTixPQUFPLENBQUMsS0FBSztvQkFDVCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztvQkFDekIsQ0FBQztvQkFBQSxJQUFJLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsV0FBVyxDQUFDLEtBQUs7b0JBQ2IsWUFBWTtvQkFDWixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztvQkFDekIsQ0FBQztvQkFBQSxJQUFJLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7b0JBQ2hELENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxTQUFTLENBQUMsS0FBSztvQkFDWCxXQUFXO29CQUNYLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixLQUFLLENBQUMsY0FBYyxDQUFDO29CQUN6QixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsQ0FBQztnQkFFTCxDQUFDO2dCQUVELFlBQVksQ0FBQyxLQUFLO29CQUNkLDZDQUE2QztvQkFDN0MsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBRSxDQUFDLENBQUM7d0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsWUFBWSxDQUFDLEtBQUs7b0JBQ2QsNENBQTRDO29CQUM1QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUUsQ0FBQyxDQUFDLENBQ25ELENBQUM7d0JBQ0csOENBQThDO3dCQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztvQkFDdkIsQ0FBQztnQkFFTCxDQUFDO1lBQ0wsQ0FBQztZQTlFRztnQkFBQyxZQUFLLEVBQUU7OzJEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzsyREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzREQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzttRUFBQTtZQUNUO2dCQUFDLGFBQU0sRUFBRTs7b0VBQUE7WUFqQmI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOzs7Ozs7R0FNWDtpQkFDRixDQUFDOztpQ0FBQTtZQUVGLGlEQStFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcm9vbWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDUvMjEvMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyb29tLWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICA8ZGl2IGNsYXNzPVwicm9vbW5vXCIgW2NsYXNzLnJvb20tc2VsZWN0XT1cIl9mb2N1c2VkXCIgKGNsaWNrKT1cIm9uRm9jdXMoJGV2ZW50KVwiIChtb3VzZWxlYXZlKT1cIm9uTW91c2VsZWF2ZSgkZXZlbnQpXCJcbiAgIChtb3VzZWVudGVyKT1cIm9uTW91c2VlbnRlcigkZXZlbnQpXCIgKG1vdXNldXApPVwib25Nb3VzZXVwKCRldmVudClcIiAobW91c2Vkb3duKT1cIm9uTW91c2Vkb3duKCRldmVudClcIj5cbiAgICAgICAgPHNwYW4gW2hpZGRlbl09XCIhX2ZvY3VzZWRcIj57e2RhdGUuZGF5fX08L3NwYW4+XG4gICAgICAgIDxzcGFuID57e25nUmVzLlJvb21Ob319PC9zcGFuPlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUm9vbWl0ZW1Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIHJvb206IGFueTtcbiAgICBASW5wdXQoKSBkYXRlOiBhbnk7XG4gICAgQElucHV0KCkgbmdSb29tOiBhbnk7XG4gICAgQElucHV0KCkgbmdSZXM6IGFueTtcbiAgICBAT3V0cHV0KCkgbmdSb29tQ2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG5nUmVzU2VsZWN0ZWQ6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOkVsZW1lbnRSZWYpIHtcblxuICAgIH1cbiAgICBfZm9jdXNlZDpib29sZWFuPWZhbHNlO1xuICAgIF9pc1NlbGVjdD10cnVlO1xuICAgIHNldFJvb21JdGVtKClcbiAgICB7XG4gICAgICAgIGxldCBfcmVzSXRlbT17dGVtcElEOicxJyxSb29tTm86dGhpcy5yb29tLEZyb21EYXRlOnRoaXMuZGF0ZS5kYXksVG9EYXRlOnRoaXMuZGF0ZS5kYXl9O1xuICAgICAgICByZXR1cm4gX3Jlc0l0ZW07XG4gICAgfVxuICAgIHNldFJvb21JdGVtRigpXG4gICAge1xuICAgICAgICBsZXQgX3Jlc0l0ZW09e3RlbXBJRDonJyxSb29tTm86dGhpcy5yb29tLEZyb21EYXRlOnRoaXMuZGF0ZS5kYXl9O1xuICAgICAgIHJldHVybiBfcmVzSXRlbTtcbiAgICB9XG4gICAgc2V0Um9vbUl0ZW1UKClcbiAgICB7XG4gICAgICAgIGxldCBfcmVzSXRlbT17dGVtcElEOicxJyxSb29tTm86dGhpcy5yb29tLEZyb21EYXRlOnRoaXMubmdSb29tLkZyb21EYXRlLFRvRGF0ZTp0aGlzLmRhdGUuZGF5fTtcbiAgICAgICAgcmV0dXJuIF9yZXNJdGVtO1xuICAgIH1cblxuICAgIC8vRXZlblxuICAgIG9uRm9jdXMoZXZlbnQpIHtcbiAgICAgICAgaWYodGhpcy5uZ1Jlcy5Sb29tTm8hPScnKXtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdSb29tQ2hhbmdlLmVtaXQodGhpcy5zZXRSb29tSXRlbSgpKTtcbiAgICAgICAgICAgIHRoaXMubmdSZXNTZWxlY3RlZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2Vkb3duKGV2ZW50KSB7XG4gICAgICAgIC8vbmjhuqVuIGNodeG7mXRcbiAgICAgICAgaWYodGhpcy5uZ1Jlcy5Sb29tTm8hPScnKXtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubmdSb29tQ2hhbmdlLmVtaXQodGhpcy5zZXRSb29tSXRlbUYoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNldXAoZXZlbnQpIHtcbiAgICAgICAgLy9uaGEgY2h1b3RcbiAgICAgICAgaWYodGhpcy5uZ1Jlcy5Sb29tTm8hPScnKXtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZ1Jvb21DaGFuZ2UuZW1pdCh0aGlzLnNldFJvb21JdGVtVCgpKTtcbiAgICAgICAgICAgIHRoaXMubmdSZXNTZWxlY3RlZC5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25Nb3VzZWxlYXZlKGV2ZW50KSB7XG4gICAgICAgIC8va2hpIGNvbiB0cuG7jyBjaHXhu5l0IGLhuq90IMSR4bqndSBy4budaSBraOG7j2kgdGjhursgSFRNTFxuICAgICAgICBpZihldmVudC53aGljaCE9MSlcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1vdXNlZW50ZXIoZXZlbnQpIHtcbiAgICAgICAgLy8ga2hpIGNvbiB0cuG7jyBjaHXhu5l0IGLhuq90IMSR4bqndSDEkWkgdsOgbyB0aOG6uyBIVE1MXG4gICAgICAgIGlmKHRoaXMubmdSb29tLlJvb21Obz09dGhpcy5yb29tICYmIGV2ZW50LndoaWNoPT0xKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL3RoaXMubmdSb29tQ2hhbmdlLmVtaXQodGhpcy5zZXRSb29tSXRlbVQoKSk7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkPXRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
