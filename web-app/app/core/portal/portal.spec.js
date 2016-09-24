System.register(['angular2/testing', 'angular2/core', './portal-directives', './portal', './dom-portal-host'], function(exports_1, context_1) {
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
    var testing_1, core_1, portal_directives_1, portal_1, portal_directives_2, testing_2, testing_3, core_2, core_3, dom_portal_host_1;
    var PizzaMsg, ArbitraryElementRefComponent, PortalTestApp;
    function main() {
        testing_1.describe('Portals', () => {
            let builder;
            testing_1.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], (tcb) => {
                builder = tcb;
            }));
            testing_1.describe('PortalHostDirective', () => {
                testing_1.it('should load a component into the portal', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    // Set the selectedHost to be a ComponentPortal.
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    testAppComponent.selectedPortal = new portal_1.ComponentPortal(PizzaMsg);
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    // Expect that the content of the attached portal is present.
                    let hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                    testing_1.expect(hostContainer.textContent).toContain('Pizza');
                }));
                testing_1.it('should load a <template> portal', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    // Detect changes initially so that the component's ViewChildren are resolved.
                    appFixture.detectChanges();
                    // Set the selectedHost to be a TemplatePortal.
                    testAppComponent.selectedPortal = testAppComponent.cakePortal;
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    // Expect that the content of the attached portal is present.
                    let hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                    testing_1.expect(hostContainer.textContent).toContain('Cake');
                }));
                testing_1.it('should load a <template> portal with the `*` sugar', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    // Detect changes initially so that the component's ViewChildren are resolved.
                    appFixture.detectChanges();
                    // Set the selectedHost to be a TemplatePortal (with the `*` syntax).
                    testAppComponent.selectedPortal = testAppComponent.piePortal;
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    // Expect that the content of the attached portal is present.
                    let hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                    testing_1.expect(hostContainer.textContent).toContain('Pie');
                }));
                testing_1.it('should load a <template> portal with a binding', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    // Detect changes initially so that the component's ViewChildren are resolved.
                    appFixture.detectChanges();
                    // Set the selectedHost to be a TemplatePortal.
                    testAppComponent.selectedPortal = testAppComponent.portalWithBinding;
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    // Now that the portal is attached, change detection has to happen again in order
                    // for the bindings to update.
                    appFixture.detectChanges();
                    // Expect that the content of the attached portal is present.
                    let hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                    testing_1.expect(hostContainer.textContent).toContain('Banana');
                    // When updating the binding value.
                    testAppComponent.fruit = 'Mango';
                    appFixture.detectChanges();
                    // Expect the new value to be reflected in the rendered output.
                    testing_1.expect(hostContainer.textContent).toContainError('Mango');
                }));
                testing_1.it('should load a <template> portal with extra locals', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    // Detect changes initially so that the component's ViewChildren are resolved.
                    appFixture.detectChanges();
                    let locals = new Map();
                    locals.set('appetizer', 'Samosa');
                    let templatePortal = testAppComponent.portalWithLocals;
                    templatePortal.locals = locals;
                    // Set the selectedHost to be a TemplatePortal.
                    testAppComponent.selectedPortal = templatePortal;
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    // Now that the portal is attached, change detection has to happen again in order
                    // for the bindings to update.
                    appFixture.detectChanges();
                    // Expect that the content of the attached portal is present.
                    let hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                    testing_1.expect(hostContainer.textContent).toContain('Samosa');
                }));
                testing_1.it('should change the attached portal', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    // Detect changes initially so that the component's ViewChildren are resolved.
                    appFixture.detectChanges();
                    // Set the selectedHost to be a ComponentPortal.
                    testAppComponent.selectedPortal = testAppComponent.piePortal;
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    appFixture.detectChanges();
                    // Expect that the content of the attached portal is present.
                    let hostContainer = appFixture.nativeElement.querySelector('.portal-container');
                    testing_1.expect(hostContainer.textContent).toContain('Pie');
                    testAppComponent.selectedPortal = new portal_1.ComponentPortal(PizzaMsg);
                    appFixture.detectChanges();
                    testing_3.flushMicrotasks();
                    testing_1.expect(hostContainer.textContent).toContain('Pizza');
                }));
            });
            testing_1.describe('DomPortalHost', function () {
                let componentLoader;
                let viewManager;
                let someElementRef;
                let someDomElement;
                let host;
                testing_1.beforeEach(testing_1.inject([core_2.DynamicComponentLoader, core_3.AppViewManager], testing_2.fakeAsync((dcl, avm) => {
                    viewManager = avm;
                    componentLoader = dcl;
                    someDomElement = document.createElement('div');
                    host = new dom_portal_host_1.DomPortalHost(someDomElement, componentLoader, viewManager);
                    builder.createAsync(ArbitraryElementRefComponent).then(fixture => {
                        someElementRef = fixture.componentInstance.elementRef;
                    });
                    testing_3.flushMicrotasks();
                })));
                testing_1.it('should attach and detach a component portal', fakeAsyncTest(() => {
                    let portal = new portal_1.ComponentPortal(PizzaMsg, someElementRef);
                    let componentInstance;
                    portal.attach(host).then(ref => {
                        componentInstance = ref.instance;
                    });
                    testing_3.flushMicrotasks();
                    testing_1.expect(componentInstance).toBeAnInstanceOf(PizzaMsg);
                    testing_1.expect(someDomElement.textContent).toContain('Pizza');
                    host.detach();
                    testing_3.flushMicrotasks();
                    testing_1.expect(someDomElement.innerHTML).toBe('');
                }));
                testing_1.it('should attach and detach a template portal', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    appFixture.detectChanges();
                    appFixture.componentInstance.cakePortal.attach(host);
                    testing_3.flushMicrotasks();
                    testing_1.expect(someDomElement.textContent).toContain('Cake');
                }));
                testing_1.it('should attach and detach a template portal with a binding', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    let testAppComponent = appFixture.debugElement.componentInstance;
                    // Detect changes initially so that the component's ViewChildren are resolved.
                    appFixture.detectChanges();
                    // Attach the TemplatePortal.
                    testAppComponent.portalWithBinding.attach(host);
                    appFixture.detectChanges();
                    // Flush the attachment of the Portal.
                    testing_3.flushMicrotasks();
                    // Now that the portal is attached, change detection has to happen again in order
                    // for the bindings to update.
                    appFixture.detectChanges();
                    // Expect that the content of the attached portal is present.
                    testing_1.expect(someDomElement.textContent).toContain('Banana');
                    // When updating the binding value.
                    testAppComponent.fruit = 'Mango';
                    appFixture.detectChanges();
                    // Expect the new value to be reflected in the rendered output.
                    testing_1.expect(someDomElement.textContent).toContainError('Mango');
                    host.detach();
                    testing_1.expect(someDomElement.innerHTML).toBe('');
                }));
                testing_1.it('should change the attached portal', fakeAsyncTest(() => {
                    let appFixture;
                    builder.createAsync(PortalTestApp).then(fixture => {
                        appFixture = fixture;
                    });
                    // Flush the async creation of the PortalTestApp.
                    testing_3.flushMicrotasks();
                    appFixture.detectChanges();
                    appFixture.componentInstance.piePortal.attach(host);
                    testing_3.flushMicrotasks();
                    testing_1.expect(someDomElement.textContent).toContain('Pie');
                    host.detach();
                    testing_3.flushMicrotasks();
                    host.attach(new portal_1.ComponentPortal(PizzaMsg, someElementRef));
                    testing_3.flushMicrotasks();
                    testing_1.expect(someDomElement.textContent).toContain('Pizza');
                }));
            });
        });
    }
    exports_1("main", main);
    function fakeAsyncTest(fn) {
        return testing_1.inject([], testing_2.fakeAsync(fn));
    }
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
                testing_2 = testing_1_1;
                testing_3 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (portal_directives_1_1) {
                portal_directives_1 = portal_directives_1_1;
                portal_directives_2 = portal_directives_1_1;
            },
            function (portal_1_1) {
                portal_1 = portal_1_1;
            },
            function (dom_portal_host_1_1) {
                dom_portal_host_1 = dom_portal_host_1_1;
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
            /** Simple component to grab an arbitrary ElementRef */
            let ArbitraryElementRefComponent = class ArbitraryElementRefComponent {
                constructor(elementRef) {
                    this.elementRef = elementRef;
                }
            };
            ArbitraryElementRefComponent = __decorate([
                core_1.Component({
                    selector: 'some-placeholder',
                    template: '<p>Hello</p>'
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], ArbitraryElementRefComponent);
            /** Test-bed component that contains a portal host and a couple of template portals. */
            let PortalTestApp = class PortalTestApp {
                constructor() {
                    this.fruit = 'Banana';
                }
                get cakePortal() {
                    return this.portals.first;
                }
                get piePortal() {
                    return this.portals.toArray()[1];
                }
                get portalWithBinding() {
                    return this.portals.toArray()[2];
                }
                get portalWithLocals() {
                    return this.portals.last;
                }
            };
            __decorate([
                core_1.ViewChildren(portal_directives_1.TemplatePortalDirective), 
                __metadata('design:type', core_1.QueryList)
            ], PortalTestApp.prototype, "portals", void 0);
            PortalTestApp = __decorate([
                core_1.Component({
                    selector: 'portal-test',
                    template: `
  <div class="portal-container">
    <template [portalHost]="selectedPortal"></template>
  </div>

  <template portal>Cake</template>

  <div *portal>Pie</div>

  <template portal> {{fruit}} </template>

  <template portal #yum="appetizer">{{yum}}</template>
  `,
                    directives: [portal_directives_2.PortalHostDirective, portal_directives_1.TemplatePortalDirective],
                }), 
                __metadata('design:paramtypes', [])
            ], PortalTestApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcG9ydGFsL3BvcnRhbC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBc0JBO1FBQ0Usa0JBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxPQUE2QixDQUFDO1lBRWxDLG9CQUFVLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLDhCQUFvQixDQUFDLEVBQUUsQ0FBQyxHQUF5QjtnQkFDbEUsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRUosa0JBQVEsQ0FBQyxxQkFBcUIsRUFBRTtnQkFDOUIsWUFBRSxDQUFDLHlDQUF5QyxFQUFFLGFBQWEsQ0FBQztvQkFDMUQsSUFBSSxVQUE0QixDQUFDO29CQUVqQyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO3dCQUM3QyxVQUFVLEdBQUcsT0FBTyxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQztvQkFFSCxpREFBaUQ7b0JBQ2pELHlCQUFlLEVBQUUsQ0FBQztvQkFFbEIsZ0RBQWdEO29CQUNoRCxJQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pFLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxJQUFJLHdCQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFFM0Isc0NBQXNDO29CQUN0Qyx5QkFBZSxFQUFFLENBQUM7b0JBRWxCLDZEQUE2RDtvQkFDN0QsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDaEYsZ0JBQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVKLFlBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxhQUFh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O1lBTkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsY0FBYztpQkFDekIsQ0FBQzs7NENBQUE7WUFNRix1RkFBdUY7WUFrQnZGO2dCQUFBO29CQUdFLFVBQUssR0FBVyxRQUFRLENBQUM7Z0JBaUIzQixDQUFDO2dCQWZDLElBQUksVUFBVTtvQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsSUFBSSxTQUFTO29CQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELElBQUksaUJBQWlCO29CQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxJQUFJLGdCQUFnQjtvQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQztZQW5CQztnQkFBQyxtQkFBWSxDQUFDLDJDQUF1QixDQUFDOzswREFBQTtZQWxCeEM7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBbUIsRUFBRSwyQ0FBdUIsQ0FBQztpQkFDM0QsQ0FBQzs7NkJBQUE7WUFxQkQiLCJmaWxlIjoiY29yZS9wb3J0YWwvcG9ydGFsLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBpdCxcbiAgZGVzY3JpYmUsXG4gIGV4cGVjdCxcbiAgYmVmb3JlRWFjaCxcbiAgaW5qZWN0LFxuICBDb21wb25lbnRGaXh0dXJlLFxuICBUZXN0Q29tcG9uZW50QnVpbGRlcixcbn0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZX0gZnJvbSAnLi9wb3J0YWwtZGlyZWN0aXZlcyc7XG5pbXBvcnQge1BvcnRhbH0gZnJvbSAnLi9wb3J0YWwnO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWx9IGZyb20gJy4vcG9ydGFsJztcbmltcG9ydCB7UG9ydGFsSG9zdERpcmVjdGl2ZX0gZnJvbSAnLi9wb3J0YWwtZGlyZWN0aXZlcyc7XG5pbXBvcnQge2Zha2VBc3luY30gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5pbXBvcnQge2ZsdXNoTWljcm90YXNrc30gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5pbXBvcnQge0R5bmFtaWNDb21wb25lbnRMb2FkZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBcHBWaWV3TWFuYWdlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RvbVBvcnRhbEhvc3R9IGZyb20gJy4vZG9tLXBvcnRhbC1ob3N0JztcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICBkZXNjcmliZSgnUG9ydGFscycsICgpID0+IHtcbiAgICBsZXQgYnVpbGRlcjogVGVzdENvbXBvbmVudEJ1aWxkZXI7XG5cbiAgICBiZWZvcmVFYWNoKGluamVjdChbVGVzdENvbXBvbmVudEJ1aWxkZXJdLCAodGNiOiBUZXN0Q29tcG9uZW50QnVpbGRlcikgPT4ge1xuICAgICAgYnVpbGRlciA9IHRjYjtcbiAgICB9KSk7XG5cbiAgICBkZXNjcmliZSgnUG9ydGFsSG9zdERpcmVjdGl2ZScsICgpID0+IHtcbiAgICAgIGl0KCdzaG91bGQgbG9hZCBhIGNvbXBvbmVudCBpbnRvIHRoZSBwb3J0YWwnLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFwcEZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU7XG5cbiAgICAgICAgYnVpbGRlci5jcmVhdGVBc3luYyhQb3J0YWxUZXN0QXBwKS50aGVuKGZpeHR1cmUgPT4ge1xuICAgICAgICAgIGFwcEZpeHR1cmUgPSBmaXh0dXJlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGbHVzaCB0aGUgYXN5bmMgY3JlYXRpb24gb2YgdGhlIFBvcnRhbFRlc3RBcHAuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWRIb3N0IHRvIGJlIGEgQ29tcG9uZW50UG9ydGFsLlxuICAgICAgICBsZXQgdGVzdEFwcENvbXBvbmVudCA9IGFwcEZpeHR1cmUuZGVidWdFbGVtZW50LmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICB0ZXN0QXBwQ29tcG9uZW50LnNlbGVjdGVkUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChQaXp6YU1zZyk7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhdHRhY2htZW50IG9mIHRoZSBQb3J0YWwuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIC8vIEV4cGVjdCB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSBhdHRhY2hlZCBwb3J0YWwgaXMgcHJlc2VudC5cbiAgICAgICAgbGV0IGhvc3RDb250YWluZXIgPSBhcHBGaXh0dXJlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRhbC1jb250YWluZXInKTtcbiAgICAgICAgZXhwZWN0KGhvc3RDb250YWluZXIudGV4dENvbnRlbnQpLnRvQ29udGFpbignUGl6emEnKTtcbiAgICAgIH0pKTtcblxuICAgICAgaXQoJ3Nob3VsZCBsb2FkIGEgPHRlbXBsYXRlPiBwb3J0YWwnLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFwcEZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU7XG5cbiAgICAgICAgYnVpbGRlci5jcmVhdGVBc3luYyhQb3J0YWxUZXN0QXBwKS50aGVuKGZpeHR1cmUgPT4ge1xuICAgICAgICAgIGFwcEZpeHR1cmUgPSBmaXh0dXJlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGbHVzaCB0aGUgYXN5bmMgY3JlYXRpb24gb2YgdGhlIFBvcnRhbFRlc3RBcHAuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIGxldCB0ZXN0QXBwQ29tcG9uZW50ID0gYXBwRml4dHVyZS5kZWJ1Z0VsZW1lbnQuY29tcG9uZW50SW5zdGFuY2U7XG5cbiAgICAgICAgLy8gRGV0ZWN0IGNoYW5nZXMgaW5pdGlhbGx5IHNvIHRoYXQgdGhlIGNvbXBvbmVudCdzIFZpZXdDaGlsZHJlbiBhcmUgcmVzb2x2ZWQuXG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWRIb3N0IHRvIGJlIGEgVGVtcGxhdGVQb3J0YWwuXG4gICAgICAgIHRlc3RBcHBDb21wb25lbnQuc2VsZWN0ZWRQb3J0YWwgPSB0ZXN0QXBwQ29tcG9uZW50LmNha2VQb3J0YWw7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhdHRhY2htZW50IG9mIHRoZSBQb3J0YWwuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIC8vIEV4cGVjdCB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSBhdHRhY2hlZCBwb3J0YWwgaXMgcHJlc2VudC5cbiAgICAgICAgbGV0IGhvc3RDb250YWluZXIgPSBhcHBGaXh0dXJlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRhbC1jb250YWluZXInKTtcbiAgICAgICAgZXhwZWN0KGhvc3RDb250YWluZXIudGV4dENvbnRlbnQpLnRvQ29udGFpbignQ2FrZScpO1xuICAgICAgfSkpO1xuXG4gICAgICBpdCgnc2hvdWxkIGxvYWQgYSA8dGVtcGxhdGU+IHBvcnRhbCB3aXRoIHRoZSBgKmAgc3VnYXInLCBmYWtlQXN5bmNUZXN0KCgpID0+IHtcbiAgICAgICAgbGV0IGFwcEZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU7XG5cbiAgICAgICAgYnVpbGRlci5jcmVhdGVBc3luYyhQb3J0YWxUZXN0QXBwKS50aGVuKGZpeHR1cmUgPT4ge1xuICAgICAgICAgIGFwcEZpeHR1cmUgPSBmaXh0dXJlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBGbHVzaCB0aGUgYXN5bmMgY3JlYXRpb24gb2YgdGhlIFBvcnRhbFRlc3RBcHAuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIGxldCB0ZXN0QXBwQ29tcG9uZW50ID0gYXBwRml4dHVyZS5kZWJ1Z0VsZW1lbnQuY29tcG9uZW50SW5zdGFuY2U7XG5cbiAgICAgICAgLy8gRGV0ZWN0IGNoYW5nZXMgaW5pdGlhbGx5IHNvIHRoYXQgdGhlIGNvbXBvbmVudCdzIFZpZXdDaGlsZHJlbiBhcmUgcmVzb2x2ZWQuXG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWRIb3N0IHRvIGJlIGEgVGVtcGxhdGVQb3J0YWwgKHdpdGggdGhlIGAqYCBzeW50YXgpLlxuICAgICAgICB0ZXN0QXBwQ29tcG9uZW50LnNlbGVjdGVkUG9ydGFsID0gdGVzdEFwcENvbXBvbmVudC5waWVQb3J0YWw7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhdHRhY2htZW50IG9mIHRoZSBQb3J0YWwuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIC8vIEV4cGVjdCB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSBhdHRhY2hlZCBwb3J0YWwgaXMgcHJlc2VudC5cbiAgICAgICAgbGV0IGhvc3RDb250YWluZXIgPSBhcHBGaXh0dXJlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRhbC1jb250YWluZXInKTtcbiAgICAgICAgZXhwZWN0KGhvc3RDb250YWluZXIudGV4dENvbnRlbnQpLnRvQ29udGFpbignUGllJyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGl0KCdzaG91bGQgbG9hZCBhIDx0ZW1wbGF0ZT4gcG9ydGFsIHdpdGggYSBiaW5kaW5nJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICAgIGxldCBhcHBGaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlO1xuXG4gICAgICAgIGJ1aWxkZXIuY3JlYXRlQXN5bmMoUG9ydGFsVGVzdEFwcCkudGhlbihmaXh0dXJlID0+IHtcbiAgICAgICAgICBhcHBGaXh0dXJlID0gZml4dHVyZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmx1c2ggdGhlIGFzeW5jIGNyZWF0aW9uIG9mIHRoZSBQb3J0YWxUZXN0QXBwLlxuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgICBsZXQgdGVzdEFwcENvbXBvbmVudCA9IGFwcEZpeHR1cmUuZGVidWdFbGVtZW50LmNvbXBvbmVudEluc3RhbmNlO1xuXG4gICAgICAgIC8vIERldGVjdCBjaGFuZ2VzIGluaXRpYWxseSBzbyB0aGF0IHRoZSBjb21wb25lbnQncyBWaWV3Q2hpbGRyZW4gYXJlIHJlc29sdmVkLlxuICAgICAgICBhcHBGaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkSG9zdCB0byBiZSBhIFRlbXBsYXRlUG9ydGFsLlxuICAgICAgICB0ZXN0QXBwQ29tcG9uZW50LnNlbGVjdGVkUG9ydGFsID0gdGVzdEFwcENvbXBvbmVudC5wb3J0YWxXaXRoQmluZGluZztcbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgLy8gRmx1c2ggdGhlIGF0dGFjaG1lbnQgb2YgdGhlIFBvcnRhbC5cbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgLy8gTm93IHRoYXQgdGhlIHBvcnRhbCBpcyBhdHRhY2hlZCwgY2hhbmdlIGRldGVjdGlvbiBoYXMgdG8gaGFwcGVuIGFnYWluIGluIG9yZGVyXG4gICAgICAgIC8vIGZvciB0aGUgYmluZGluZ3MgdG8gdXBkYXRlLlxuICAgICAgICBhcHBGaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAvLyBFeHBlY3QgdGhhdCB0aGUgY29udGVudCBvZiB0aGUgYXR0YWNoZWQgcG9ydGFsIGlzIHByZXNlbnQuXG4gICAgICAgIGxldCBob3N0Q29udGFpbmVyID0gYXBwRml4dHVyZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0YWwtY29udGFpbmVyJyk7XG4gICAgICAgIGV4cGVjdChob3N0Q29udGFpbmVyLnRleHRDb250ZW50KS50b0NvbnRhaW4oJ0JhbmFuYScpO1xuXG4gICAgICAgIC8vIFdoZW4gdXBkYXRpbmcgdGhlIGJpbmRpbmcgdmFsdWUuXG4gICAgICAgIHRlc3RBcHBDb21wb25lbnQuZnJ1aXQgPSAnTWFuZ28nO1xuICAgICAgICBhcHBGaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICAvLyBFeHBlY3QgdGhlIG5ldyB2YWx1ZSB0byBiZSByZWZsZWN0ZWQgaW4gdGhlIHJlbmRlcmVkIG91dHB1dC5cbiAgICAgICAgZXhwZWN0KGhvc3RDb250YWluZXIudGV4dENvbnRlbnQpLnRvQ29udGFpbkVycm9yKCdNYW5nbycpO1xuICAgICAgfSkpO1xuXG4gICAgICBpdCgnc2hvdWxkIGxvYWQgYSA8dGVtcGxhdGU+IHBvcnRhbCB3aXRoIGV4dHJhIGxvY2FscycsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBwRml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTtcblxuICAgICAgICBidWlsZGVyLmNyZWF0ZUFzeW5jKFBvcnRhbFRlc3RBcHApLnRoZW4oZml4dHVyZSA9PiB7XG4gICAgICAgICAgYXBwRml4dHVyZSA9IGZpeHR1cmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhc3luYyBjcmVhdGlvbiBvZiB0aGUgUG9ydGFsVGVzdEFwcC5cbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgbGV0IHRlc3RBcHBDb21wb25lbnQgPSBhcHBGaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcblxuICAgICAgICAvLyBEZXRlY3QgY2hhbmdlcyBpbml0aWFsbHkgc28gdGhhdCB0aGUgY29tcG9uZW50J3MgVmlld0NoaWxkcmVuIGFyZSByZXNvbHZlZC5cbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgbGV0IGxvY2FscyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgICAgIGxvY2Fscy5zZXQoJ2FwcGV0aXplcicsICdTYW1vc2EnKTtcblxuICAgICAgICBsZXQgdGVtcGxhdGVQb3J0YWwgPSB0ZXN0QXBwQ29tcG9uZW50LnBvcnRhbFdpdGhMb2NhbHM7XG4gICAgICAgIHRlbXBsYXRlUG9ydGFsLmxvY2FscyA9IGxvY2FscztcblxuICAgICAgICAvLyBTZXQgdGhlIHNlbGVjdGVkSG9zdCB0byBiZSBhIFRlbXBsYXRlUG9ydGFsLlxuICAgICAgICB0ZXN0QXBwQ29tcG9uZW50LnNlbGVjdGVkUG9ydGFsID0gdGVtcGxhdGVQb3J0YWw7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhdHRhY2htZW50IG9mIHRoZSBQb3J0YWwuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIC8vIE5vdyB0aGF0IHRoZSBwb3J0YWwgaXMgYXR0YWNoZWQsIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHRvIGhhcHBlbiBhZ2FpbiBpbiBvcmRlclxuICAgICAgICAvLyBmb3IgdGhlIGJpbmRpbmdzIHRvIHVwZGF0ZS5cbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgLy8gRXhwZWN0IHRoYXQgdGhlIGNvbnRlbnQgb2YgdGhlIGF0dGFjaGVkIHBvcnRhbCBpcyBwcmVzZW50LlxuICAgICAgICBsZXQgaG9zdENvbnRhaW5lciA9IGFwcEZpeHR1cmUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGFsLWNvbnRhaW5lcicpO1xuICAgICAgICBleHBlY3QoaG9zdENvbnRhaW5lci50ZXh0Q29udGVudCkudG9Db250YWluKCdTYW1vc2EnKTtcbiAgICAgIH0pKTtcblxuICAgICAgaXQoJ3Nob3VsZCBjaGFuZ2UgdGhlIGF0dGFjaGVkIHBvcnRhbCcsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBwRml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTtcblxuICAgICAgICBidWlsZGVyLmNyZWF0ZUFzeW5jKFBvcnRhbFRlc3RBcHApLnRoZW4oZml4dHVyZSA9PiB7XG4gICAgICAgICAgYXBwRml4dHVyZSA9IGZpeHR1cmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhc3luYyBjcmVhdGlvbiBvZiB0aGUgUG9ydGFsVGVzdEFwcC5cbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgbGV0IHRlc3RBcHBDb21wb25lbnQgPSBhcHBGaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcblxuICAgICAgICAvLyBEZXRlY3QgY2hhbmdlcyBpbml0aWFsbHkgc28gdGhhdCB0aGUgY29tcG9uZW50J3MgVmlld0NoaWxkcmVuIGFyZSByZXNvbHZlZC5cbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZEhvc3QgdG8gYmUgYSBDb21wb25lbnRQb3J0YWwuXG4gICAgICAgIHRlc3RBcHBDb21wb25lbnQuc2VsZWN0ZWRQb3J0YWwgPSB0ZXN0QXBwQ29tcG9uZW50LnBpZVBvcnRhbDtcbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgLy8gRmx1c2ggdGhlIGF0dGFjaG1lbnQgb2YgdGhlIFBvcnRhbC5cbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEV4cGVjdCB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSBhdHRhY2hlZCBwb3J0YWwgaXMgcHJlc2VudC5cbiAgICAgICAgbGV0IGhvc3RDb250YWluZXIgPSBhcHBGaXh0dXJlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRhbC1jb250YWluZXInKTtcbiAgICAgICAgZXhwZWN0KGhvc3RDb250YWluZXIudGV4dENvbnRlbnQpLnRvQ29udGFpbignUGllJyk7XG5cbiAgICAgICAgdGVzdEFwcENvbXBvbmVudC5zZWxlY3RlZFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoUGl6emFNc2cpO1xuICAgICAgICBhcHBGaXh0dXJlLmRldGVjdENoYW5nZXMoKTtcblxuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgICBleHBlY3QoaG9zdENvbnRhaW5lci50ZXh0Q29udGVudCkudG9Db250YWluKCdQaXp6YScpO1xuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ0RvbVBvcnRhbEhvc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjb21wb25lbnRMb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXI7XG4gICAgICBsZXQgdmlld01hbmFnZXI6IEFwcFZpZXdNYW5hZ2VyO1xuICAgICAgbGV0IHNvbWVFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgICAgbGV0IHNvbWVEb21FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICAgIGxldCBob3N0OiBEb21Qb3J0YWxIb3N0O1xuXG4gICAgICBiZWZvcmVFYWNoKGluamVjdChcbiAgICAgICAgICBbRHluYW1pY0NvbXBvbmVudExvYWRlciwgQXBwVmlld01hbmFnZXJdLFxuICAgICAgICAgIGZha2VBc3luYygoZGNsOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBhdm06IEFwcFZpZXdNYW5hZ2VyKSA9PiB7XG4gICAgICAgIHZpZXdNYW5hZ2VyID0gYXZtO1xuICAgICAgICBjb21wb25lbnRMb2FkZXIgPSBkY2w7XG4gICAgICAgIHNvbWVEb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvc3QgPSBuZXcgRG9tUG9ydGFsSG9zdChzb21lRG9tRWxlbWVudCwgY29tcG9uZW50TG9hZGVyLCB2aWV3TWFuYWdlcik7XG5cbiAgICAgICAgYnVpbGRlci5jcmVhdGVBc3luYyhBcmJpdHJhcnlFbGVtZW50UmVmQ29tcG9uZW50KS50aGVuKGZpeHR1cmUgPT4ge1xuICAgICAgICAgIHNvbWVFbGVtZW50UmVmID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZS5lbGVtZW50UmVmO1xuICAgICAgICB9KTtcblxuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcbiAgICAgIH0pKSk7XG5cbiAgICAgIGl0KCdzaG91bGQgYXR0YWNoIGFuZCBkZXRhY2ggYSBjb21wb25lbnQgcG9ydGFsJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICAgIGxldCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKFBpenphTXNnLCBzb21lRWxlbWVudFJlZik7XG5cbiAgICAgICAgbGV0IGNvbXBvbmVudEluc3RhbmNlOiBQaXp6YU1zZztcbiAgICAgICAgcG9ydGFsLmF0dGFjaChob3N0KS50aGVuKHJlZiA9PiB7XG4gICAgICAgICAgY29tcG9uZW50SW5zdGFuY2UgPSByZWYuaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIGV4cGVjdChjb21wb25lbnRJbnN0YW5jZSkudG9CZUFuSW5zdGFuY2VPZihQaXp6YU1zZyk7XG4gICAgICAgIGV4cGVjdChzb21lRG9tRWxlbWVudC50ZXh0Q29udGVudCkudG9Db250YWluKCdQaXp6YScpO1xuXG4gICAgICAgIGhvc3QuZGV0YWNoKCk7XG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIGV4cGVjdChzb21lRG9tRWxlbWVudC5pbm5lckhUTUwpLnRvQmUoJycpO1xuICAgICAgfSkpO1xuXG4gICAgICBpdCgnc2hvdWxkIGF0dGFjaCBhbmQgZGV0YWNoIGEgdGVtcGxhdGUgcG9ydGFsJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICAgIGxldCBhcHBGaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlO1xuXG4gICAgICAgIGJ1aWxkZXIuY3JlYXRlQXN5bmMoUG9ydGFsVGVzdEFwcCkudGhlbihmaXh0dXJlID0+IHtcbiAgICAgICAgICBhcHBGaXh0dXJlID0gZml4dHVyZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmx1c2ggdGhlIGFzeW5jIGNyZWF0aW9uIG9mIHRoZSBQb3J0YWxUZXN0QXBwLlxuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgYXBwRml4dHVyZS5jb21wb25lbnRJbnN0YW5jZS5jYWtlUG9ydGFsLmF0dGFjaChob3N0KTtcbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgZXhwZWN0KHNvbWVEb21FbGVtZW50LnRleHRDb250ZW50KS50b0NvbnRhaW4oJ0Nha2UnKTtcbiAgICAgIH0pKTtcblxuICAgICAgaXQoJ3Nob3VsZCBhdHRhY2ggYW5kIGRldGFjaCBhIHRlbXBsYXRlIHBvcnRhbCB3aXRoIGEgYmluZGluZycsIGZha2VBc3luY1Rlc3QoKCkgPT4ge1xuICAgICAgICBsZXQgYXBwRml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTtcblxuICAgICAgICBidWlsZGVyLmNyZWF0ZUFzeW5jKFBvcnRhbFRlc3RBcHApLnRoZW4oZml4dHVyZSA9PiB7XG4gICAgICAgICAgYXBwRml4dHVyZSA9IGZpeHR1cmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhc3luYyBjcmVhdGlvbiBvZiB0aGUgUG9ydGFsVGVzdEFwcC5cbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgbGV0IHRlc3RBcHBDb21wb25lbnQgPSBhcHBGaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcblxuICAgICAgICAvLyBEZXRlY3QgY2hhbmdlcyBpbml0aWFsbHkgc28gdGhhdCB0aGUgY29tcG9uZW50J3MgVmlld0NoaWxkcmVuIGFyZSByZXNvbHZlZC5cbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHRoZSBUZW1wbGF0ZVBvcnRhbC5cbiAgICAgICAgdGVzdEFwcENvbXBvbmVudC5wb3J0YWxXaXRoQmluZGluZy5hdHRhY2goaG9zdCk7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEZsdXNoIHRoZSBhdHRhY2htZW50IG9mIHRoZSBQb3J0YWwuXG4gICAgICAgIGZsdXNoTWljcm90YXNrcygpO1xuXG4gICAgICAgIC8vIE5vdyB0aGF0IHRoZSBwb3J0YWwgaXMgYXR0YWNoZWQsIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHRvIGhhcHBlbiBhZ2FpbiBpbiBvcmRlclxuICAgICAgICAvLyBmb3IgdGhlIGJpbmRpbmdzIHRvIHVwZGF0ZS5cbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgLy8gRXhwZWN0IHRoYXQgdGhlIGNvbnRlbnQgb2YgdGhlIGF0dGFjaGVkIHBvcnRhbCBpcyBwcmVzZW50LlxuICAgICAgICBleHBlY3Qoc29tZURvbUVsZW1lbnQudGV4dENvbnRlbnQpLnRvQ29udGFpbignQmFuYW5hJyk7XG5cbiAgICAgICAgLy8gV2hlbiB1cGRhdGluZyB0aGUgYmluZGluZyB2YWx1ZS5cbiAgICAgICAgdGVzdEFwcENvbXBvbmVudC5mcnVpdCA9ICdNYW5nbyc7XG4gICAgICAgIGFwcEZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgIC8vIEV4cGVjdCB0aGUgbmV3IHZhbHVlIHRvIGJlIHJlZmxlY3RlZCBpbiB0aGUgcmVuZGVyZWQgb3V0cHV0LlxuICAgICAgICBleHBlY3Qoc29tZURvbUVsZW1lbnQudGV4dENvbnRlbnQpLnRvQ29udGFpbkVycm9yKCdNYW5nbycpO1xuXG4gICAgICAgIGhvc3QuZGV0YWNoKCk7XG4gICAgICAgIGV4cGVjdChzb21lRG9tRWxlbWVudC5pbm5lckhUTUwpLnRvQmUoJycpO1xuICAgICAgfSkpO1xuXG4gICAgICBpdCgnc2hvdWxkIGNoYW5nZSB0aGUgYXR0YWNoZWQgcG9ydGFsJywgZmFrZUFzeW5jVGVzdCgoKSA9PiB7XG4gICAgICAgIGxldCBhcHBGaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlO1xuXG4gICAgICAgIGJ1aWxkZXIuY3JlYXRlQXN5bmMoUG9ydGFsVGVzdEFwcCkudGhlbihmaXh0dXJlID0+IHtcbiAgICAgICAgICBhcHBGaXh0dXJlID0gZml4dHVyZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmx1c2ggdGhlIGFzeW5jIGNyZWF0aW9uIG9mIHRoZSBQb3J0YWxUZXN0QXBwLlxuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcbiAgICAgICAgYXBwRml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgYXBwRml4dHVyZS5jb21wb25lbnRJbnN0YW5jZS5waWVQb3J0YWwuYXR0YWNoKGhvc3QpO1xuICAgICAgICBmbHVzaE1pY3JvdGFza3MoKTtcblxuICAgICAgICBleHBlY3Qoc29tZURvbUVsZW1lbnQudGV4dENvbnRlbnQpLnRvQ29udGFpbignUGllJyk7XG5cbiAgICAgICAgaG9zdC5kZXRhY2goKTtcbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgaG9zdC5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChQaXp6YU1zZywgc29tZUVsZW1lbnRSZWYpKTtcbiAgICAgICAgZmx1c2hNaWNyb3Rhc2tzKCk7XG5cbiAgICAgICAgZXhwZWN0KHNvbWVEb21FbGVtZW50LnRleHRDb250ZW50KS50b0NvbnRhaW4oJ1BpenphJyk7XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbi8qKiBTaW1wbGUgY29tcG9uZW50IGZvciB0ZXN0aW5nIENvbXBvbmVudFBvcnRhbC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpenphLW1zZycsXG4gIHRlbXBsYXRlOiAnPHA+UGl6emE8L3A+Jyxcbn0pXG5jbGFzcyBQaXp6YU1zZyB7fVxuXG4vKiogU2ltcGxlIGNvbXBvbmVudCB0byBncmFiIGFuIGFyYml0cmFyeSBFbGVtZW50UmVmICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb21lLXBsYWNlaG9sZGVyJyxcbiAgdGVtcGxhdGU6ICc8cD5IZWxsbzwvcD4nXG59KVxuY2xhc3MgQXJiaXRyYXJ5RWxlbWVudFJlZkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cbn1cblxuXG4vKiogVGVzdC1iZWQgY29tcG9uZW50IHRoYXQgY29udGFpbnMgYSBwb3J0YWwgaG9zdCBhbmQgYSBjb3VwbGUgb2YgdGVtcGxhdGUgcG9ydGFscy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcnRhbC10ZXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInBvcnRhbC1jb250YWluZXJcIj5cbiAgICA8dGVtcGxhdGUgW3BvcnRhbEhvc3RdPVwic2VsZWN0ZWRQb3J0YWxcIj48L3RlbXBsYXRlPlxuICA8L2Rpdj5cblxuICA8dGVtcGxhdGUgcG9ydGFsPkNha2U8L3RlbXBsYXRlPlxuXG4gIDxkaXYgKnBvcnRhbD5QaWU8L2Rpdj5cblxuICA8dGVtcGxhdGUgcG9ydGFsPiB7e2ZydWl0fX0gPC90ZW1wbGF0ZT5cblxuICA8dGVtcGxhdGUgcG9ydGFsICN5dW09XCJhcHBldGl6ZXJcIj57e3l1bX19PC90ZW1wbGF0ZT5cbiAgYCxcbiAgZGlyZWN0aXZlczogW1BvcnRhbEhvc3REaXJlY3RpdmUsIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlXSxcbn0pXG5jbGFzcyBQb3J0YWxUZXN0QXBwIHtcbiAgQFZpZXdDaGlsZHJlbihUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSkgcG9ydGFsczogUXVlcnlMaXN0PFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlPjtcbiAgc2VsZWN0ZWRQb3J0YWw6IFBvcnRhbDxhbnk+O1xuICBmcnVpdDogc3RyaW5nID0gJ0JhbmFuYSc7XG5cbiAgZ2V0IGNha2VQb3J0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9ydGFscy5maXJzdDtcbiAgfVxuXG4gIGdldCBwaWVQb3J0YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9ydGFscy50b0FycmF5KClbMV07XG4gIH1cblxuICBnZXQgcG9ydGFsV2l0aEJpbmRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9ydGFscy50b0FycmF5KClbMl07XG4gIH1cblxuICBnZXQgcG9ydGFsV2l0aExvY2FscygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3J0YWxzLmxhc3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmFrZUFzeW5jVGVzdChmbjogKCkgPT4gdm9pZCkge1xuICByZXR1cm4gaW5qZWN0KFtdLCBmYWtlQXN5bmMoZm4pKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
