System.register(['angular2/testing', 'angular2/core', 'angular2/platform/browser', './live-announcer'], function(exports_1, context_1) {
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
    var testing_1, core_1, browser_1, live_announcer_1;
    var TestApp;
    function main() {
        testing_1.describe('MdLiveAnnouncer', () => {
            let live;
            let builder;
            let liveEl;
            testing_1.beforeEachProviders(() => [live_announcer_1.MdLiveAnnouncer]);
            testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder, live_announcer_1.MdLiveAnnouncer], (tcb, _live) => {
                builder = tcb;
                live = _live;
                liveEl = getLiveElement();
            }));
            afterEach(() => {
                // In our tests we always remove the current live element, because otherwise we would have
                // multiple live elements due multiple service instantiations.
                liveEl.parentNode.removeChild(liveEl);
            });
            testing_1.it('should correctly update the announce text', fakeAsyncTest(() => {
                let appFixture = null;
                builder.createAsync(TestApp).then(fixture => {
                    appFixture = fixture;
                });
                testing_1.flushMicrotasks();
                let buttonElement = appFixture.debugElement
                    .query(browser_1.By.css('button')).nativeElement;
                buttonElement.click();
                // This flushes our 100ms timeout for the screenreaders.
                testing_1.tick(100);
                testing_1.expect(liveEl.textContent).toBe('Test');
            }));
            testing_1.it('should correctly update the politeness attribute', fakeAsyncTest(() => {
                let appFixture = null;
                builder.createAsync(TestApp).then(fixture => {
                    appFixture = fixture;
                });
                testing_1.flushMicrotasks();
                live.announce('Hey Google', 'assertive');
                // This flushes our 100ms timeout for the screenreaders.
                testing_1.tick(100);
                testing_1.expect(liveEl.textContent).toBe('Hey Google');
                testing_1.expect(liveEl.getAttribute('aria-live')).toBe('assertive');
            }));
            testing_1.it('should apply the aria-live value polite by default', fakeAsyncTest(() => {
                let appFixture = null;
                builder.createAsync(TestApp).then(fixture => {
                    appFixture = fixture;
                });
                testing_1.flushMicrotasks();
                live.announce('Hey Google');
                // This flushes our 100ms timeout for the screenreaders.
                testing_1.tick(100);
                testing_1.expect(liveEl.textContent).toBe('Hey Google');
                testing_1.expect(liveEl.getAttribute('aria-live')).toBe('polite');
            }));
            testing_1.it('should allow to use a custom live element', fakeAsyncTest(() => {
                let customLiveEl = document.createElement('div');
                // We need to reset our test injector here, because it is already instantiated above.
                testing_1.getTestInjector().reset();
                testing_1.getTestInjector().addProviders([
                    core_1.provide(live_announcer_1.LIVE_ANNOUNCER_ELEMENT_TOKEN, { useValue: customLiveEl }),
                    live_announcer_1.MdLiveAnnouncer
                ]);
                let injector = testing_1.getTestInjector().createInjector();
                let liveService = injector.get(live_announcer_1.MdLiveAnnouncer);
                liveService.announce('Custom Element');
                // This flushes our 100ms timeout for the screenreaders.
                testing_1.tick(100);
                testing_1.expect(customLiveEl.textContent).toBe('Custom Element');
            }));
        });
    }
    exports_1("main", main);
    function fakeAsyncTest(fn) {
        return testing_1.inject([], testing_1.fakeAsync(fn));
    }
    function getLiveElement() {
        return document.body.querySelector('.md-live-announcer');
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (live_announcer_1_1) {
                live_announcer_1 = live_announcer_1_1;
            }],
        execute: function() {
            let TestApp = class TestApp {
                constructor(live) {
                    this.live = live;
                }
                ;
                announceText(message) {
                    this.live.announce(message);
                }
            };
            TestApp = __decorate([
                core_1.Component({
                    selector: 'test-app',
                    template: `<button (click)="announceText('Test')">Announce</button>`,
                }), 
                __metadata('design:paramtypes', [live_announcer_1.MdLiveAnnouncer])
            ], TestApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQWtCQTtRQUNFLGtCQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxJQUFxQixDQUFDO1lBQzFCLElBQUksT0FBNkIsQ0FBQztZQUNsQyxJQUFJLE1BQWUsQ0FBQztZQUVwQiw2QkFBbUIsQ0FBQyxNQUFNLENBQUMsZ0NBQWUsQ0FBQyxDQUFDLENBQUM7WUFFN0Msb0JBQVUsQ0FBQyxnQkFBTSxDQUFDLENBQUMsOEJBQW9CLEVBQUUsZ0NBQWUsQ0FBQyxFQUN2RCxDQUFDLEdBQXlCLEVBQUUsS0FBc0I7Z0JBQ2hELE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ2QsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDYixNQUFNLEdBQUcsY0FBYyxFQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLFNBQVMsQ0FBQztnQkFDUiwwRkFBMEY7Z0JBQzFGLDhEQUE4RDtnQkFDOUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxZQUFFLENBQUMsMkNBQTJDLEVBQUUsYUFBYSxDQUFDO2dCQUM1RCxJQUFJLFVBQVUsR0FBcUIsSUFBSSxDQUFDO2dCQUV4QyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO29CQUN2QyxVQUFVLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztnQkFFSCx5QkFBZSxFQUFFLENBQUM7Z0JBRWxCLElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZO3FCQUN4QyxLQUFLLENBQUMsWUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFFekMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dC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QUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFFRSxZQUFvQixJQUFxQjtvQkFBckIsU0FBSSxHQUFKLElBQUksQ0FBaUI7Z0JBQUcsQ0FBQzs7Z0JBRTdDLFlBQVksQ0FBQyxPQUFlO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztZQUVILENBQUM7WUFaRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMERBQTBEO2lCQUNyRSxDQUFDOzt1QkFBQTtZQVNEIiwiZmlsZSI6ImNvcmUvbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGl0LFxuICBkZXNjcmliZSxcbiAgZXhwZWN0LFxuICBiZWZvcmVFYWNoLFxuICBpbmplY3QsXG4gIFRlc3RDb21wb25lbnRCdWlsZGVyLFxuICBDb21wb25lbnRGaXh0dXJlLFxuICBmYWtlQXN5bmMsXG4gIGZsdXNoTWljcm90YXNrcyxcbiAgdGljayxcbiAgYmVmb3JlRWFjaFByb3ZpZGVycyxcbiAgZ2V0VGVzdEluamVjdG9yXG59IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuaW1wb3J0IHtDb21wb25lbnQsIHByb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCeX0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge01kTGl2ZUFubm91bmNlciwgTElWRV9BTk5PVU5DRVJfRUxFTUVOVF9UT0tFTn0gZnJvbSAnLi9saXZlLWFubm91bmNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICBkZXNjcmliZSgnTWRMaXZlQW5ub3VuY2VyJywgKCkgPT4ge1xuICAgIGxldCBsaXZlOiBNZExpdmVBbm5vdW5jZXI7XG4gICAgbGV0IGJ1aWxkZXI6IFRlc3RDb21wb25lbnRCdWlsZGVyO1xuICAgIGxldCBsaXZlRWw6IEVsZW1lbnQ7XG5cbiAgICBiZWZvcmVFYWNoUHJvdmlkZXJzKCgpID0+IFtNZExpdmVBbm5vdW5jZXJdKTtcblxuICAgIGJlZm9yZUVhY2goaW5qZWN0KFtUZXN0Q29tcG9uZW50QnVpbGRlciwgTWRMaXZlQW5ub3VuY2VyXSxcbiAgICAgICh0Y2I6IFRlc3RDb21wb25lbnRCdWlsZGVyLCBfbGl2ZTogTWRMaXZlQW5ub3VuY2VyKSA9PiB7XG4gICAgICAgIGJ1aWxkZXIgPSB0Y2I7XG4gICAgICAgIGxpdmUgPSBfbGl2ZTtcbiAgICAgICAgbGl2ZUVsID0gZ2V0TGl2ZUVsZW1lbnQoKTtcbiAgICB9KSk7XG5cbiAgICBhZnRlckVhY2goKCkgPT4ge1xuICAgICAgLy8gSW4gb3VyIHRlc3RzIHdlIGFsd2F5cyByZW1vdmUgdGhlIGN1cnJlbnQgbGl2ZSBlbGVtZW50LCBiZWNhdXNlIG90aGVyd2lzZSB3ZSB3b3VsZCBoYXZlXG4gICAgICAvLyBtdWx0aXBsZSBsaXZlIGVsZW1lbnRzIGR1ZSBtdWx0aXBsZSBzZXJ2aWNlIGluc3RhbnRpYXRpb25zLlxuICAgICAgbGl2ZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGl2ZUVsKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgY29ycmVjdGx5IHVwZGF0ZSB0aGUgYW5ub3VuY2UgdGV4dCcsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgbGV0IGFwcEZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmUgPSBudWxsO1xuXG4gICAgICBidWlsZGVyLmNyZWF0ZUFzeW5jKFRlc3RBcHApLnRoZW4oZml4dHVyZSA9PiB7XG4gICAgICAgIGFwcEZpeHR1cmUgPSBmaXh0dXJlO1xuICAgICAgfSk7XG5cbiAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICBsZXQgYnV0dG9uRWxlbWVudCA9IGFwcEZpeHR1cmUuZGVidWdFbGVtZW50XG4gICAgICAgIC5xdWVyeShCeS5jc3MoJ2J1dHRvbicpKS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBidXR0b25FbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgIC8vIFRoaXMgZmx1c2hlcyBvdXIgMTAwbXMgdGltZW91dCBmb3IgdGhlIHNjcmVlbnJlYWRlcnMuXG4gICAgICB0aWNrKDEwMCk7XG5cbiAgICAgIGV4cGVjdChsaXZlRWwudGV4dENvbnRlbnQpLnRvQmUoJ1Rlc3QnKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIGNvcnJlY3RseSB1cGRhdGUgdGhlIHBvbGl0ZW5lc3MgYXR0cmlidXRlJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICBsZXQgYXBwRml4dHVyZTogQ29tcG9uZW50Rml4dHVyZSA9IG51bGw7XG5cbiAgICAgIGJ1aWxkZXIuY3JlYXRlQXN5bmMoVGVzdEFwcCkudGhlbihmaXh0dXJlID0+IHtcbiAgICAgICAgYXBwRml4dHVyZSA9IGZpeHR1cmU7XG4gICAgICB9KTtcblxuICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgIGxpdmUuYW5ub3VuY2UoJ0hleSBHb29nbGUnLCAnYXNzZXJ0aXZlJyk7XG5cbiAgICAgIC8vIFRoaXMgZmx1c2hlcyBvdXIgMTAwbXMgdGltZW91dCBmb3IgdGhlIHNjcmVlbnJlYWRlcnMuXG4gICAgICB0aWNrKDEwMCk7XG5cbiAgICAgIGV4cGVjdChsaXZlRWwudGV4dENvbnRlbnQpLnRvQmUoJ0hleSBHb29nbGUnKTtcbiAgICAgIGV4cGVjdChsaXZlRWwuZ2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnKSkudG9CZSgnYXNzZXJ0aXZlJyk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBhcHBseSB0aGUgYXJpYS1saXZlIHZhbHVlIHBvbGl0ZSBieSBkZWZhdWx0JywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICBsZXQgYXBwRml4dHVyZTogQ29tcG9uZW50Rml4dHVyZSA9IG51bGw7XG5cbiAgICAgIGJ1aWxkZXIuY3JlYXRlQXN5bmMoVGVzdEFwcCkudGhlbihmaXh0dXJlID0+IHtcbiAgICAgICAgYXBwRml4dHVyZSA9IGZpeHR1cmU7XG4gICAgICB9KTtcblxuICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgIGxpdmUuYW5ub3VuY2UoJ0hleSBHb29nbGUnKTtcblxuICAgICAgLy8gVGhpcyBmbHVzaGVzIG91ciAxMDBtcyB0aW1lb3V0IGZvciB0aGUgc2NyZWVucmVhZGVycy5cbiAgICAgIHRpY2soMTAwKTtcblxuICAgICAgZXhwZWN0KGxpdmVFbC50ZXh0Q29udGVudCkudG9CZSgnSGV5IEdvb2dsZScpO1xuICAgICAgZXhwZWN0KGxpdmVFbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpKS50b0JlKCdwb2xpdGUnKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IHRvIHVzZSBhIGN1c3RvbSBsaXZlIGVsZW1lbnQnLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgIGxldCBjdXN0b21MaXZlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgLy8gV2UgbmVlZCB0byByZXNldCBvdXIgdGVzdCBpbmplY3RvciBoZXJlLCBiZWNhdXNlIGl0IGlzIGFscmVhZHkgaW5zdGFudGlhdGVkIGFib3ZlLlxuICAgICAgZ2V0VGVzdEluamVjdG9yKCkucmVzZXQoKTtcblxuICAgICAgZ2V0VGVzdEluamVjdG9yKCkuYWRkUHJvdmlkZXJzKFtcbiAgICAgICAgcHJvdmlkZShMSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOLCB7dXNlVmFsdWU6IGN1c3RvbUxpdmVFbH0pLFxuICAgICAgICBNZExpdmVBbm5vdW5jZXJcbiAgICAgIF0pO1xuXG4gICAgICBsZXQgaW5qZWN0b3IgPSBnZXRUZXN0SW5qZWN0b3IoKS5jcmVhdGVJbmplY3RvcigpO1xuICAgICAgbGV0IGxpdmVTZXJ2aWNlOiBNZExpdmVBbm5vdW5jZXIgPSBpbmplY3Rvci5nZXQoTWRMaXZlQW5ub3VuY2VyKTtcblxuICAgICAgbGl2ZVNlcnZpY2UuYW5ub3VuY2UoJ0N1c3RvbSBFbGVtZW50Jyk7XG5cbiAgICAgIC8vIFRoaXMgZmx1c2hlcyBvdXIgMTAwbXMgdGltZW91dCBmb3IgdGhlIHNjcmVlbnJlYWRlcnMuXG4gICAgICB0aWNrKDEwMCk7XG5cbiAgICAgIGV4cGVjdChjdXN0b21MaXZlRWwudGV4dENvbnRlbnQpLnRvQmUoJ0N1c3RvbSBFbGVtZW50Jyk7XG4gICAgfSkpO1xuXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmYWtlQXN5bmNUZXN0KGZuOiAoKSA9PiB2b2lkKSB7XG4gIHJldHVybiBpbmplY3QoW10sIGZha2VBc3luYyhmbikpO1xufVxuXG5mdW5jdGlvbiBnZXRMaXZlRWxlbWVudCgpOiBFbGVtZW50IHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLm1kLWxpdmUtYW5ub3VuY2VyJyk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtYXBwJyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIChjbGljayk9XCJhbm5vdW5jZVRleHQoJ1Rlc3QnKVwiPkFubm91bmNlPC9idXR0b24+YCxcbn0pXG5jbGFzcyBUZXN0QXBwIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpdmU6IE1kTGl2ZUFubm91bmNlcikge307XG5cbiAgYW5ub3VuY2VUZXh0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubGl2ZS5hbm5vdW5jZShtZXNzYWdlKTtcbiAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
