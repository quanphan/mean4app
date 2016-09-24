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
    var CompanyViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let CompanyViewComponent = class CompanyViewComponent {
                constructor() {
                    this.bookingList = [
                        { Date: '2015-10-08', GuestName: 'Nguyen Van Binh', RoomType: 'SUP', RoomNumber: '3', Nights: '2', NightRate: '30$' },
                        { Date: '2015-10-08', GuestName: 'Nguyen Van Binh', RoomType: 'SUP', RoomNumber: '3', Nights: '2', NightRate: '30$' },
                        { Date: '2015-10-08', GuestName: 'Nguyen Van Binh', RoomType: 'SUP', RoomNumber: '3', Nights: '2', NightRate: '30$' },
                        { Date: '2015-10-08', GuestName: 'Nguyen Van Binh', RoomType: 'SUP', RoomNumber: '3', Nights: '2', NightRate: '30$' },
                        { Date: '2015-10-08', GuestName: 'Nguyen Van Binh', RoomType: 'SUP', RoomNumber: '3', Nights: '2', NightRate: '30$' },
                        { Date: '2015-10-08', GuestName: 'Nguyen Van Binh', RoomType: 'SUP', RoomNumber: '3', Nights: '2', NightRate: '30$' },
                    ];
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompanyViewComponent.prototype, "company", void 0);
            CompanyViewComponent = __decorate([
                core_1.Component({
                    selector: 'com-view',
                    templateUrl: '/views/common/companyView.html',
                }), 
                __metadata('design:paramtypes', [])
            ], CompanyViewComponent);
            exports_1("CompanyViewComponent", CompanyViewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlWaWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVJO29CQU1BLGdCQUFXLEdBQUM7d0JBQ1IsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUMsS0FBSyxFQUFHLFVBQVUsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO3dCQUNoSCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBQyxLQUFLLEVBQUcsVUFBVSxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7d0JBQ2hILEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBRyxVQUFVLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQzt3QkFDaEgsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUMsS0FBSyxFQUFHLFVBQVUsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDO3dCQUNoSCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBQyxLQUFLLEVBQUcsVUFBVSxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7d0JBQ2hILEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBRyxVQUFVLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBQztxQkFDbkgsQ0FBQTtnQkFURCxDQUFDO1lBVUwsQ0FBQztZQWZHO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFOWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUMsZ0NBQWdDO2lCQUMvQyxDQUFDOztvQ0FBQTtZQUVGLHVEQWdCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL2NvbXBhbnlWaWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzgvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Q29tcGFueVZpZXdDb21wb25lbnR9IGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9jb21wYW55Vmlldy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb20tdmlldycsXG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9jb21tb24vY29tcGFueVZpZXcuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcGFueVZpZXdDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbXBhbnk6YW55O1xuICAgIGNvbnN0cnVjdG9yKFxuXG4gICAgKXtcblxuICAgIH1cblxuICAgIGJvb2tpbmdMaXN0PVtcbiAgICAgICAge0RhdGU6ICcyMDE1LTEwLTA4JywgR3Vlc3ROYW1lOidOZ3V5ZW4gVmFuIEJpbmgnLCBSb29tVHlwZTonU1VQJyAsIFJvb21OdW1iZXI6JzMnLCBOaWdodHM6JzInLCBOaWdodFJhdGU6ICczMCQnfSAsXG4gICAgICAgIHtEYXRlOiAnMjAxNS0xMC0wOCcsIEd1ZXN0TmFtZTonTmd1eWVuIFZhbiBCaW5oJywgUm9vbVR5cGU6J1NVUCcgLCBSb29tTnVtYmVyOiczJywgTmlnaHRzOicyJywgTmlnaHRSYXRlOiAnMzAkJ30gLFxuICAgICAgICB7RGF0ZTogJzIwMTUtMTAtMDgnLCBHdWVzdE5hbWU6J05ndXllbiBWYW4gQmluaCcsIFJvb21UeXBlOidTVVAnICwgUm9vbU51bWJlcjonMycsIE5pZ2h0czonMicsIE5pZ2h0UmF0ZTogJzMwJCd9ICxcbiAgICAgICAge0RhdGU6ICcyMDE1LTEwLTA4JywgR3Vlc3ROYW1lOidOZ3V5ZW4gVmFuIEJpbmgnLCBSb29tVHlwZTonU1VQJyAsIFJvb21OdW1iZXI6JzMnLCBOaWdodHM6JzInLCBOaWdodFJhdGU6ICczMCQnfSAsXG4gICAgICAgIHtEYXRlOiAnMjAxNS0xMC0wOCcsIEd1ZXN0TmFtZTonTmd1eWVuIFZhbiBCaW5oJywgUm9vbVR5cGU6J1NVUCcgLCBSb29tTnVtYmVyOiczJywgTmlnaHRzOicyJywgTmlnaHRSYXRlOiAnMzAkJ30gLFxuICAgICAgICB7RGF0ZTogJzIwMTUtMTAtMDgnLCBHdWVzdE5hbWU6J05ndXllbiBWYW4gQmluaCcsIFJvb21UeXBlOidTVVAnICwgUm9vbU51bWJlcjonMycsIE5pZ2h0czonMicsIE5pZ2h0UmF0ZTogJzMwJCd9ICxcbiAgICBdXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
