System.register(['angular2/testing', 'angular2/core', '../portal/portal-directives', '../portal/portal', './overlay', './overlay-state'], function(exports_1, context_1) {
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
    var testing_1, core_1, portal_directives_1, portal_1, overlay_1, overlay_state_1;
    var PizzaMsg, TestComponentWithTemplatePortals, FakePositionStrategy;
    function main() {
        testing_1.describe('Overlay', () => {
            let builder;
            let overlay;
            let componentPortal;
            let templatePortal;
            let overlayContainerElement;
            testing_1.beforeEachProviders(() => [
                overlay_1.Overlay,
                core_1.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useFactory: () => {
                        overlayContainerElement = document.createElement('div');
                        return overlayContainerElement;
                    } })
            ]);
            let deps = [testing_1.TestComponentBuilder, overlay_1.Overlay];
            testing_1.beforeEach(testing_1.inject(deps, testing_1.fakeAsync((tcb, o) => {
                builder = tcb;
                overlay = o;
                builder.createAsync(TestComponentWithTemplatePortals).then(fixture => {
                    fixture.detectChanges();
                    templatePortal = fixture.componentInstance.templatePortal;
                    componentPortal = new portal_1.ComponentPortal(PizzaMsg, fixture.componentInstance.elementRef);
                });
                testing_1.flushMicrotasks();
            })));
            testing_1.it('should load a component into an overlay', fakeAsyncTest(() => {
                let overlayRef;
                overlay.create().then(ref => {
                    overlayRef = ref;
                    overlayRef.attach(componentPortal);
                });
                testing_1.flushMicrotasks();
                testing_1.expect(overlayContainerElement.textContent).toContain('Pizza');
                overlayRef.dispose();
                testing_1.expect(overlayContainerElement.childNodes.length).toBe(0);
                testing_1.expect(overlayContainerElement.textContent).toBe('');
            }));
            testing_1.it('should load a template portal into an overlay', fakeAsyncTest(() => {
                let overlayRef;
                overlay.create().then(ref => {
                    overlayRef = ref;
                    overlayRef.attach(templatePortal);
                });
                testing_1.flushMicrotasks();
                testing_1.expect(overlayContainerElement.textContent).toContain('Cake');
                overlayRef.dispose();
                testing_1.expect(overlayContainerElement.childNodes.length).toBe(0);
                testing_1.expect(overlayContainerElement.textContent).toBe('');
            }));
            testing_1.it('should open multiple overlays', fakeAsyncTest(() => {
                let pizzaOverlayRef;
                let cakeOverlayRef;
                overlay.create().then(ref => {
                    pizzaOverlayRef = ref;
                    pizzaOverlayRef.attach(componentPortal);
                });
                testing_1.flushMicrotasks();
                overlay.create().then(ref => {
                    cakeOverlayRef = ref;
                    cakeOverlayRef.attach(templatePortal);
                });
                testing_1.flushMicrotasks();
                testing_1.expect(overlayContainerElement.childNodes.length).toBe(2);
                testing_1.expect(overlayContainerElement.textContent).toContain('Pizza');
                testing_1.expect(overlayContainerElement.textContent).toContain('Cake');
                pizzaOverlayRef.dispose();
                testing_1.expect(overlayContainerElement.childNodes.length).toBe(1);
                testing_1.expect(overlayContainerElement.textContent).toContain('Cake');
                cakeOverlayRef.dispose();
                testing_1.expect(overlayContainerElement.childNodes.length).toBe(0);
                testing_1.expect(overlayContainerElement.textContent).toBe('');
            }));
            testing_1.describe('applyState', () => {
                let state;
                testing_1.beforeEach(() => {
                    state = new overlay_state_1.OverlayState();
                });
                testing_1.it('should apply the positioning strategy', fakeAsyncTest(() => {
                    state.positionStrategy = new FakePositionStrategy();
                    overlay.create(state).then(ref => {
                        ref.attach(componentPortal);
                    });
                    testing_1.flushMicrotasks();
                    testing_1.expect(overlayContainerElement.querySelectorAll('.fake-positioned').length).toBe(1);
                }));
            });
        });
    }
    exports_1("main", main);
    function fakeAsyncTest(fn) {
        return testing_1.inject([], testing_1.fakeAsync(fn));
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (portal_directives_1_1) {
                portal_directives_1 = portal_directives_1_1;
            },
            function (portal_1_1) {
                portal_1 = portal_1_1;
            },
            function (overlay_1_1) {
                overlay_1 = overlay_1_1;
            },
            function (overlay_state_1_1) {
                overlay_state_1 = overlay_state_1_1;
            }],
        execute: function() {
            /** Simple component for testing ComponentPortal. */
            let PizzaMsg = class PizzaMsg {
            };
            PizzaMsg = __decorate([
                core_1.Component({
                    selector: 'pizza-msg',
                    template: '<p>Pizza</p>',
                }), 
                __metadata('design:paramtypes', [])
            ], PizzaMsg);
            /** Test-bed component that contains a TempatePortal and an ElementRef. */
            let TestComponentWithTemplatePortals = class TestComponentWithTemplatePortals {
                constructor(elementRef) {
                    this.elementRef = elementRef;
                }
            };
            __decorate([
                core_1.ViewChild(portal_directives_1.TemplatePortalDirective), 
                __metadata('design:type', portal_directives_1.TemplatePortalDirective)
            ], TestComponentWithTemplatePortals.prototype, "templatePortal", void 0);
            TestComponentWithTemplatePortals = __decorate([
                core_1.Component({
                    selector: 'portal-test',
                    template: `<template portal>Cake</template>`,
                    directives: [portal_directives_1.TemplatePortalDirective],
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], TestComponentWithTemplatePortals);
            class FakePositionStrategy {
                apply(element) {
                    element.classList.add('fake-positioned');
                    return Promise.resolve();
                }
            }
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9vdmVybGF5LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUF5QkE7UUFDRSxrQkFBUSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLE9BQTZCLENBQUM7WUFDbEMsSUFBSSxPQUFnQixDQUFDO1lBQ3JCLElBQUksZUFBZ0MsQ0FBQztZQUNyQyxJQUFJLGNBQThCLENBQUM7WUFDbkMsSUFBSSx1QkFBb0MsQ0FBQztZQUV6Qyw2QkFBbUIsQ0FBQyxNQUFNO2dCQUN4QixpQkFBTztnQkFDUCxjQUFPLENBQUMsaUNBQXVCLEVBQUUsRUFBQyxVQUFVLEVBQUU7d0JBQzVDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztvQkFDakMsQ0FBQyxFQUFDLENBQUM7YUFDSixDQUFDLENBQUM7WUFFSCxJQUFJLElBQUksR0FBRyxDQUFDLDhCQUFvQixFQUFFLGlCQUFPLENBQUMsQ0FBQztZQUMzQyxvQkFBVSxDQUFDLGdCQUFNLENBQUMsSUFBSSxFQUFFLG1CQUFTLENBQUMsQ0FBQyxHQUF5QixFQUFFLENBQVU7Z0JBQ3RFLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ2QsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFFWixPQUFPLENBQUMsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87b0JBQ2hFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDeEIsY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7b0JBQzFELGVBQWUsR0FBRyxJQUFJLHdCQUFlLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEYsQ0FBQyxDQUFDLENBQUM7Z0JBRUgseUJBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMs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cEQ7WUFBZ0IsQ0FBQztZQUpqQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsY0FBYztpQkFDekIsQ0FBQzs7d0JBQUE7WUFJRiwwRUFBMEU7WUFNMUU7Z0JBRUUsWUFBbUIsVUFBc0I7b0JBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Z0JBQUksQ0FBQztZQUNoRCxDQUFDO1lBRkM7Z0JBQUMsZ0JBQVMsQ0FBQywyQ0FBdUIsQ0FBQzs7b0ZBQUE7WUFOckM7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsVUFBVSxFQUFFLENBQUMsMkNBQXVCLENBQUM7aUJBQ3RDLENBQUM7O2dEQUFBO1lBTUY7Z0JBQ0UsS0FBSyxDQUFDLE9BQWdCO29CQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMzQixDQUFDO1lBRUgsQ0FBQztZQUFBIiwiZmlsZSI6ImNvcmUvb3ZlcmxheS9vdmVybGF5LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpdCxcbiAgZGVzY3JpYmUsXG4gIGV4cGVjdCxcbiAgYmVmb3JlRWFjaCxcbiAgaW5qZWN0LFxuICBUZXN0Q29tcG9uZW50QnVpbGRlcixcbiAgZmFrZUFzeW5jLFxuICBmbHVzaE1pY3JvdGFza3MsXG4gIGJlZm9yZUVhY2hQcm92aWRlcnMsXG59IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIHByb3ZpZGUsXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZX0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbC1kaXJlY3RpdmVzJztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFBvcnRhbH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQge092ZXJsYXksIE9WRVJMQVlfQ09OVEFJTkVSX1RPS0VOfSBmcm9tICcuL292ZXJsYXknO1xuaW1wb3J0IHtPdmVybGF5UmVmfSBmcm9tICcuL292ZXJsYXktcmVmJztcbmltcG9ydCB7T3ZlcmxheVN0YXRlfSBmcm9tICcuL292ZXJsYXktc3RhdGUnO1xuaW1wb3J0IHtQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL3Bvc2l0aW9uL3Bvc2l0aW9uLXN0cmF0ZWd5JztcblxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgZGVzY3JpYmUoJ092ZXJsYXknLCAoKSA9PiB7XG4gICAgbGV0IGJ1aWxkZXI6IFRlc3RDb21wb25lbnRCdWlsZGVyO1xuICAgIGxldCBvdmVybGF5OiBPdmVybGF5O1xuICAgIGxldCBjb21wb25lbnRQb3J0YWw6IENvbXBvbmVudFBvcnRhbDtcbiAgICBsZXQgdGVtcGxhdGVQb3J0YWw6IFRlbXBsYXRlUG9ydGFsO1xuICAgIGxldCBvdmVybGF5Q29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBiZWZvcmVFYWNoUHJvdmlkZXJzKCgpID0+IFtcbiAgICAgIE92ZXJsYXksXG4gICAgICBwcm92aWRlKE9WRVJMQVlfQ09OVEFJTkVSX1RPS0VOLCB7dXNlRmFjdG9yeTogKCkgPT4ge1xuICAgICAgICBvdmVybGF5Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZXR1cm4gb3ZlcmxheUNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9fSlcbiAgICBdKTtcblxuICAgIGxldCBkZXBzID0gW1Rlc3RDb21wb25lbnRCdWlsZGVyLCBPdmVybGF5XTtcbiAgICBiZWZvcmVFYWNoKGluamVjdChkZXBzLCBmYWtlQXN5bmMoKHRjYjogVGVzdENvbXBvbmVudEJ1aWxkZXIsIG86IE92ZXJsYXkpID0+IHtcbiAgICAgIGJ1aWxkZXIgPSB0Y2I7XG4gICAgICBvdmVybGF5ID0gbztcblxuICAgICAgYnVpbGRlci5jcmVhdGVBc3luYyhUZXN0Q29tcG9uZW50V2l0aFRlbXBsYXRlUG9ydGFscykudGhlbihmaXh0dXJlID0+IHtcbiAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRlbXBsYXRlUG9ydGFsID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZS50ZW1wbGF0ZVBvcnRhbDtcbiAgICAgICAgY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChQaXp6YU1zZywgZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZS5lbGVtZW50UmVmKTtcbiAgICAgIH0pO1xuXG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcbiAgICB9KSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBsb2FkIGEgY29tcG9uZW50IGludG8gYW4gb3ZlcmxheScsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgbGV0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgICAgIG92ZXJsYXkuY3JlYXRlKCkudGhlbihyZWYgPT4ge1xuICAgICAgICBvdmVybGF5UmVmID0gcmVmO1xuICAgICAgICBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnRQb3J0YWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICBleHBlY3Qob3ZlcmxheUNvbnRhaW5lckVsZW1lbnQudGV4dENvbnRlbnQpLnRvQ29udGFpbignUGl6emEnKTtcblxuICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICBleHBlY3Qob3ZlcmxheUNvbnRhaW5lckVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpLnRvQmUoMCk7XG4gICAgICBleHBlY3Qob3ZlcmxheUNvbnRhaW5lckVsZW1lbnQudGV4dENvbnRlbnQpLnRvQmUoJycpO1xuICAgIH0pKTtcblxuICAgIGl0KCdzaG91bGQgbG9hZCBhIHRlbXBsYXRlIHBvcnRhbCBpbnRvIGFuIG92ZXJsYXknLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgIGxldCBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuXG4gICAgICBvdmVybGF5LmNyZWF0ZSgpLnRoZW4ocmVmID0+IHtcbiAgICAgICAgb3ZlcmxheVJlZiA9IHJlZjtcbiAgICAgICAgb3ZlcmxheVJlZi5hdHRhY2godGVtcGxhdGVQb3J0YWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICBleHBlY3Qob3ZlcmxheUNvbnRhaW5lckVsZW1lbnQudGV4dENvbnRlbnQpLnRvQ29udGFpbignQ2FrZScpO1xuXG4gICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIGV4cGVjdChvdmVybGF5Q29udGFpbmVyRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCkudG9CZSgwKTtcbiAgICAgIGV4cGVjdChvdmVybGF5Q29udGFpbmVyRWxlbWVudC50ZXh0Q29udGVudCkudG9CZSgnJyk7XG4gICAgfSkpO1xuXG4gICAgaXQoJ3Nob3VsZCBvcGVuIG11bHRpcGxlIG92ZXJsYXlzJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICBsZXQgcGl6emFPdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICAgICAgbGV0IGNha2VPdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuXG4gICAgICBvdmVybGF5LmNyZWF0ZSgpLnRoZW4ocmVmID0+IHtcbiAgICAgICAgcGl6emFPdmVybGF5UmVmID0gcmVmO1xuICAgICAgICBwaXp6YU92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudFBvcnRhbCk7XG4gICAgICB9KTtcblxuICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgIG92ZXJsYXkuY3JlYXRlKCkudGhlbihyZWYgPT4ge1xuICAgICAgICBjYWtlT3ZlcmxheVJlZiA9IHJlZjtcbiAgICAgICAgY2FrZU92ZXJsYXlSZWYuYXR0YWNoKHRlbXBsYXRlUG9ydGFsKTtcbiAgICAgIH0pO1xuXG4gICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgZXhwZWN0KG92ZXJsYXlDb250YWluZXJFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKS50b0JlKDIpO1xuICAgICAgZXhwZWN0KG92ZXJsYXlDb250YWluZXJFbGVtZW50LnRleHRDb250ZW50KS50b0NvbnRhaW4oJ1BpenphJyk7XG4gICAgICBleHBlY3Qob3ZlcmxheUNvbnRhaW5lckVsZW1lbnQudGV4dENvbnRlbnQpLnRvQ29udGFpbignQ2FrZScpO1xuXG4gICAgICBwaXp6YU92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgZXhwZWN0KG92ZXJsYXlDb250YWluZXJFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKS50b0JlKDEpO1xuICAgICAgZXhwZWN0KG92ZXJsYXlDb250YWluZXJFbGVtZW50LnRleHRDb250ZW50KS50b0NvbnRhaW4oJ0Nha2UnKTtcblxuICAgICAgY2FrZU92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgZXhwZWN0KG92ZXJsYXlDb250YWluZXJFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoKS50b0JlKDApO1xuICAgICAgZXhwZWN0KG92ZXJsYXlDb250YWluZXJFbGVtZW50LnRleHRDb250ZW50KS50b0JlKCcnKTtcbiAgICB9KSk7XG5cbiAgICBkZXNjcmliZSgnYXBwbHlTdGF0ZScsICgpID0+IHtcbiAgICAgIGxldCBzdGF0ZTogT3ZlcmxheVN0YXRlO1xuXG4gICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgc3RhdGUgPSBuZXcgT3ZlcmxheVN0YXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgaXQoJ3Nob3VsZCBhcHBseSB0aGUgcG9zaXRpb25pbmcgc3RyYXRlZ3knLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgICAgc3RhdGUucG9zaXRpb25TdHJhdGVneSA9IG5ldyBGYWtlUG9zaXRpb25TdHJhdGVneSgpO1xuXG4gICAgICAgIG92ZXJsYXkuY3JlYXRlKHN0YXRlKS50aGVuKHJlZiA9PiB7XG4gICAgICAgICAgcmVmLmF0dGFjaChjb21wb25lbnRQb3J0YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgICBleHBlY3Qob3ZlcmxheUNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZha2UtcG9zaXRpb25lZCcpLmxlbmd0aCkudG9CZSgxKTtcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLyoqIFNpbXBsZSBjb21wb25lbnQgZm9yIHRlc3RpbmcgQ29tcG9uZW50UG9ydGFsLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGl6emEtbXNnJyxcbiAgdGVtcGxhdGU6ICc8cD5QaXp6YTwvcD4nLFxufSlcbmNsYXNzIFBpenphTXNnIHt9XG5cblxuLyoqIFRlc3QtYmVkIGNvbXBvbmVudCB0aGF0IGNvbnRhaW5zIGEgVGVtcGF0ZVBvcnRhbCBhbmQgYW4gRWxlbWVudFJlZi4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcnRhbC10ZXN0JyxcbiAgdGVtcGxhdGU6IGA8dGVtcGxhdGUgcG9ydGFsPkNha2U8L3RlbXBsYXRlPmAsXG4gIGRpcmVjdGl2ZXM6IFtUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZV0sXG59KVxuY2xhc3MgVGVzdENvbXBvbmVudFdpdGhUZW1wbGF0ZVBvcnRhbHMge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlKSB0ZW1wbGF0ZVBvcnRhbDogVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cbn1cblxuY2xhc3MgRmFrZVBvc2l0aW9uU3RyYXRlZ3kgaW1wbGVtZW50cyBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgYXBwbHkoZWxlbWVudDogRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFrZS1wb3NpdGlvbmVkJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZmFrZUFzeW5jVGVzdChmbjogKCkgPT4gdm9pZCkge1xuICByZXR1cm4gaW5qZWN0KFtdLCBmYWtlQXN5bmMoZm4pKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
