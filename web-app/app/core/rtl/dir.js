System.register(['angular2/core'], function(exports_1, context_1) {
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
    var Dir;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Directive to listen to changes of direction of part of the DOM.
             *
             * Applications should use this directive instead of the native attribute so that Material
             * components can listen on changes of direction.
             */
            let Dir = class Dir {
                constructor() {
                    this._dir = 'ltr';
                    this.dirChange = new core_1.EventEmitter();
                }
                get dir() {
                    return this._dir;
                }
                set dir(v) {
                    let old = this._dir;
                    this._dir = v;
                    if (old != this._dir) {
                        this.dirChange.emit(null);
                    }
                }
                get value() { return this.dir; }
                set value(v) { this.dir = v; }
            };
            __decorate([
                core_1.Input('dir'), 
                __metadata('design:type', String)
            ], Dir.prototype, "_dir", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], Dir.prototype, "dirChange", void 0);
            __decorate([
                core_1.HostBinding('attr.dir'), 
                __metadata('design:type', String)
            ], Dir.prototype, "dir", null);
            Dir = __decorate([
                core_1.Directive({
                    selector: '[dir]',
                    // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
                    exportAs: '$implicit'
                }), 
                __metadata('design:paramtypes', [])
            ], Dir);
            exports_1("Dir", Dir);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcnRsL2Rpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBOzs7OztlQUtHO1lBTUg7Z0JBQUE7b0JBQ3dCLFNBQUksR0FBb0IsS0FBSyxDQUFDO29CQUUxQyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7Z0JBZ0JqRCxDQUFDO2dCQWJDLElBQUksR0FBRztvQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxJQUFJLEdBQUcsQ0FBQyxDQUFrQjtvQkFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQ2QsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELElBQUksS0FBSyxLQUFzQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksS0FBSyxDQUFDLENBQWtCLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFsQkM7Z0JBQUMsWUFBSyxDQUFDLEtBQUssQ0FBQzs7NkNBQUE7WUFFYjtnQkFBQyxhQUFNLEVBQUU7O2tEQUFBO1lBRVQ7Z0JBQUMsa0JBQVcsQ0FBQyxVQUFVLENBQUM7OzBDQUFBO1lBVjFCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLGlHQUFpRztvQkFDakcsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCLENBQUM7O21CQUFBO1lBQ0YscUJBbUJDLENBQUEiLCJmaWxlIjoiY29yZS9ydGwvZGlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBMYXlvdXREaXJlY3Rpb24gPSAnbHRyJyB8ICdydGwnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBsaXN0ZW4gdG8gY2hhbmdlcyBvZiBkaXJlY3Rpb24gb2YgcGFydCBvZiB0aGUgRE9NLlxuICpcbiAqIEFwcGxpY2F0aW9ucyBzaG91bGQgdXNlIHRoaXMgZGlyZWN0aXZlIGluc3RlYWQgb2YgdGhlIG5hdGl2ZSBhdHRyaWJ1dGUgc28gdGhhdCBNYXRlcmlhbFxuICogY29tcG9uZW50cyBjYW4gbGlzdGVuIG9uIGNoYW5nZXMgb2YgZGlyZWN0aW9uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGlyXScsXG4gIC8vIFRPRE8oaGFuc2wpOiBtYXliZSBgJGltcGxpY2l0YCBpc24ndCB0aGUgYmVzdCBvcHRpb24gaGVyZSwgYnV0IGZvciBub3cgdGhhdCdzIHRoZSBiZXN0IHdlIGdvdC5cbiAgZXhwb3J0QXM6ICckaW1wbGljaXQnXG59KVxuZXhwb3J0IGNsYXNzIERpciB7XG4gIEBJbnB1dCgnZGlyJykgcHJpdmF0ZSBfZGlyOiBMYXlvdXREaXJlY3Rpb24gPSAnbHRyJztcblxuICBAT3V0cHV0KCkgZGlyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXInKVxuICBnZXQgZGlyKCk6IExheW91dERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcjtcbiAgfVxuICBzZXQgZGlyKHY6IExheW91dERpcmVjdGlvbikge1xuICAgIGxldCBvbGQgPSB0aGlzLl9kaXI7XG4gICAgdGhpcy5fZGlyID0gdjtcbiAgICBpZiAob2xkICE9IHRoaXMuX2Rpcikge1xuICAgICAgdGhpcy5kaXJDaGFuZ2UuZW1pdChudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogTGF5b3V0RGlyZWN0aW9uIHsgcmV0dXJuIHRoaXMuZGlyOyB9XG4gIHNldCB2YWx1ZSh2OiBMYXlvdXREaXJlY3Rpb24pIHsgdGhpcy5kaXIgPSB2OyB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
