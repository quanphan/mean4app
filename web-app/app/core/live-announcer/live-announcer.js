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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var LIVE_ANNOUNCER_ELEMENT_TOKEN, MdLiveAnnouncer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("LIVE_ANNOUNCER_ELEMENT_TOKEN", LIVE_ANNOUNCER_ELEMENT_TOKEN = new core_1.OpaqueToken('mdLiveAnnouncerElement'));
            let MdLiveAnnouncer = class MdLiveAnnouncer {
                constructor(elementToken) {
                    this._liveElement = elementToken || this._createLiveElement();
                }
                /**
                 * @param message Message to be announced to the screenreader
                 * @param politeness The politeness of the announcer element.
                 */
                announce(message, politeness = 'polite') {
                    this._liveElement.textContent = '';
                    // TODO: ensure changing the politeness works on all environments we support.
                    this._liveElement.setAttribute('aria-live', politeness);
                    // This 100ms timeout is necessary for some browser + screen-reader combinations:
                    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
                    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
                    //   second time without clearing and then using a non-zero delay.
                    // (using JAWS 17 at time of this writing).
                    setTimeout(() => this._liveElement.textContent = message, 100);
                }
                _createLiveElement() {
                    let liveEl = document.createElement('div');
                    liveEl.classList.add('md-live-announcer');
                    liveEl.setAttribute('aria-atomic', 'true');
                    liveEl.setAttribute('aria-live', 'polite');
                    document.body.appendChild(liveEl);
                    return liveEl;
                }
            };
            MdLiveAnnouncer = __decorate([
                core_1.Injectable(),
                __param(0, core_1.Optional()),
                __param(0, core_1.Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)), 
                __metadata('design:paramtypes', [Element])
            ], MdLiveAnnouncer);
            exports_1("MdLiveAnnouncer", MdLiveAnnouncer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQU9hLDRCQUE0Qjs7Ozs7OztZQUE1QiwwQ0FBQSw0QkFBNEIsR0FBSSxJQUFJLGtCQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQSxDQUFDO1lBS3ZGO2dCQUlFLFlBQThELFlBQXFCO29CQUNqRixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDaEUsQ0FBQztnQkFFRDs7O21CQUdHO2dCQUNILFFBQVEsQ0FBQyxPQUFlLEVBQUUsVUFBVSxHQUF1QixRQUFRO29CQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBRW5DLDZFQUE2RTtvQkFDN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUV4RCxpRkFBaUY7b0JBQ2pGLHdGQUF3RjtvQkFDeEYsMkZBQTJGO29CQUMzRixrRUFBa0U7b0JBQ2xFLDJDQUEyQztvQkFDM0MsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDO2dCQUVPLGtCQUFrQjtvQkFDeEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDMUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDaEIsQ0FBQztZQUVILENBQUM7WUF2Q0Q7Z0JBQUMsaUJBQVUsRUFBRTsyQkFLRSxlQUFRLEVBQUU7MkJBQUUsYUFBTSxDQUFDLDRCQUE0QixDQUFDOzsrQkFMbEQ7WUFDYiw2Q0FzQ0MsQ0FBQSIsImZpbGUiOiJjb3JlL2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgT3BhcXVlVG9rZW4sXG4gIE9wdGlvbmFsLFxuICBJbmplY3Rcbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOICA9IG5ldyBPcGFxdWVUb2tlbignbWRMaXZlQW5ub3VuY2VyRWxlbWVudCcpO1xuXG5leHBvcnQgdHlwZSBBcmlhTGl2ZVBvbGl0ZW5lc3MgPSAnb2ZmJyB8ICdwb2xpdGUnIHwgJ2Fzc2VydGl2ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZExpdmVBbm5vdW5jZXIge1xuXG4gIHByaXZhdGUgX2xpdmVFbGVtZW50OiBFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTElWRV9BTk5PVU5DRVJfRUxFTUVOVF9UT0tFTikgZWxlbWVudFRva2VuOiBFbGVtZW50KSB7XG4gICAgdGhpcy5fbGl2ZUVsZW1lbnQgPSBlbGVtZW50VG9rZW4gfHwgdGhpcy5fY3JlYXRlTGl2ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gbWVzc2FnZSBNZXNzYWdlIHRvIGJlIGFubm91bmNlZCB0byB0aGUgc2NyZWVucmVhZGVyXG4gICAqIEBwYXJhbSBwb2xpdGVuZXNzIFRoZSBwb2xpdGVuZXNzIG9mIHRoZSBhbm5vdW5jZXIgZWxlbWVudC5cbiAgICovXG4gIGFubm91bmNlKG1lc3NhZ2U6IHN0cmluZywgcG9saXRlbmVzczogQXJpYUxpdmVQb2xpdGVuZXNzID0gJ3BvbGl0ZScpOiB2b2lkIHtcbiAgICB0aGlzLl9saXZlRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gVE9ETzogZW5zdXJlIGNoYW5naW5nIHRoZSBwb2xpdGVuZXNzIHdvcmtzIG9uIGFsbCBlbnZpcm9ubWVudHMgd2Ugc3VwcG9ydC5cbiAgICB0aGlzLl9saXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBvbGl0ZW5lc3MpO1xuXG4gICAgLy8gVGhpcyAxMDBtcyB0aW1lb3V0IGlzIG5lY2Vzc2FyeSBmb3Igc29tZSBicm93c2VyICsgc2NyZWVuLXJlYWRlciBjb21iaW5hdGlvbnM6XG4gICAgLy8gLSBCb3RoIEpBV1MgYW5kIE5WREEgb3ZlciBJRTExIHdpbGwgbm90IGFubm91bmNlIGFueXRoaW5nIHdpdGhvdXQgYSBub24temVybyB0aW1lb3V0LlxuICAgIC8vIC0gV2l0aCBDaHJvbWUgYW5kIElFMTEgd2l0aCBOVkRBIG9yIEpBV1MsIGEgcmVwZWF0ZWQgKGlkZW50aWNhbCkgbWVzc2FnZSB3b24ndCBiZSByZWFkIGFcbiAgICAvLyAgIHNlY29uZCB0aW1lIHdpdGhvdXQgY2xlYXJpbmcgYW5kIHRoZW4gdXNpbmcgYSBub24temVybyBkZWxheS5cbiAgICAvLyAodXNpbmcgSkFXUyAxNyBhdCB0aW1lIG9mIHRoaXMgd3JpdGluZykuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9saXZlRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2UsIDEwMCk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVMaXZlRWxlbWVudCgpOiBFbGVtZW50IHtcbiAgICBsZXQgbGl2ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsaXZlRWwuY2xhc3NMaXN0LmFkZCgnbWQtbGl2ZS1hbm5vdW5jZXInKTtcbiAgICBsaXZlRWwuc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG4gICAgbGl2ZUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaXZlRWwpO1xuXG4gICAgcmV0dXJuIGxpdmVFbDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
