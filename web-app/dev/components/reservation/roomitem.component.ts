/**
 * Created by phanquan on 5/21/16.
 */

import {Component,Input,Output,EventEmitter,ElementRef} from '@angular/core';

@Component({
    selector: 'room-item',
    template: `
   <div class="roomno" [class.room-select]="_focused" (click)="onFocus($event)" (mouseleave)="onMouseleave($event)"
   (mouseenter)="onMouseenter($event)" (mouseup)="onMouseup($event)" (mousedown)="onMousedown($event)">
        <span [hidden]="!_focused">{{date.day}}</span>
        <span >{{ngRes.RoomNo}}</span>
    </div>
  `
})

export class RoomitemComponent {
    @Input() room: any;
    @Input() date: any;
    @Input() ngRoom: any;
    @Input() ngRes: any;
    @Output() ngRoomChange: any = new EventEmitter();
    @Output() ngResSelected: any = new EventEmitter();
    constructor(private elRef:ElementRef) {

    }
    _focused:boolean=false;
    _isSelect=true;
    setRoomItem()
    {
        let _resItem={tempID:'1',RoomNo:this.room,FromDate:this.date.day,ToDate:this.date.day};
        return _resItem;
    }
    setRoomItemF()
    {
        let _resItem={tempID:'',RoomNo:this.room,FromDate:this.date.day};
       return _resItem;
    }
    setRoomItemT()
    {
        let _resItem={tempID:'1',RoomNo:this.room,FromDate:this.ngRoom.FromDate,ToDate:this.date.day};
        return _resItem;
    }

    //Even
    onFocus(event) {
        if(this.ngRes.RoomNo!=''){
            this._focused = false;
            event.preventDefault;
        }else {
            this._focused = true;
            this.ngRoomChange.emit(this.setRoomItem());
            this.ngResSelected.emit(event);
        }
    }

    onMousedown(event) {
        //nhấn chuột
        if(this.ngRes.RoomNo!=''){
            this._focused = false;
            event.preventDefault;
        }else {
            this._focused = true;
            this.ngRoomChange.emit(this.setRoomItemF());
        }
    }

    onMouseup(event) {
        //nha chuot
        if(this.ngRes.RoomNo!=''){
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
        if(event.which!=1)
            this._focused = false;
    }

    onMouseenter(event) {
        // khi con trỏ chuột bắt đầu đi vào thẻ HTML
        if(this.ngRoom.RoomNo==this.room && event.which==1)
        {
            //this.ngRoomChange.emit(this.setRoomItemT());
            this._focused=true;
        }

    }
}

