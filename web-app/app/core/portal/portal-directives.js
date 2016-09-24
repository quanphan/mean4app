System.register(['angular2/core', './portal'], function(exports_1, context_1) {
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
    var core_1, portal_1;
    var TemplatePortalDirective, PortalHostDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (portal_1_1) {
                portal_1 = portal_1_1;
            }],
        execute: function() {
            /**
             * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
             * the directive instance itself can be attached to a host, enabling declarative use of portals.
             *
             * Usage:
             * <template portal #greeting>
             *   <p> Hello {{name}} </p>
             * </template>
             */
            let TemplatePortalDirective = class TemplatePortalDirective extends portal_1.TemplatePortal {
                constructor(templateRef) {
                    super(templateRef);
                }
            };
            TemplatePortalDirective = __decorate([
                core_1.Directive({
                    selector: '[portal]',
                    exportAs: 'portal',
                }), 
                __metadata('design:paramtypes', [core_1.TemplateRef])
            ], TemplatePortalDirective);
            exports_1("TemplatePortalDirective", TemplatePortalDirective);
            /**
             * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
             * directly attached to it, enabling declarative use.
             *
             * Usage:
             * <template [portalHost]="greeting"></template>
             */
            let PortalHostDirective = class PortalHostDirective extends portal_1.BasePortalHost {
                constructor(_dynamicComponentLoader, _elementRef, _viewContainerRef) {
                    super();
                    this._dynamicComponentLoader = _dynamicComponentLoader;
                    this._elementRef = _elementRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                get portal() {
                    return this._portal;
                }
                set portal(p) {
                    this._replaceAttachedPortal(p);
                }
                /** Attach the given ComponentPortal to this PortlHost using the DynamicComponentLoader. */
                attachComponentPortal(portal) {
                    portal.setAttachedHost(this);
                    // If the portal specifies an origin, use that as the logical location of the component
                    // in the application tree. Otherwise use the location of this PortalHost.
                    let elementRef = portal.origin != null ? portal.origin : this._elementRef;
                    // Typecast is necessary for Dart transpilation.
                    return this._dynamicComponentLoader.loadNextToLocation(portal.component, elementRef)
                        .then(ref => {
                        this.setDisposeFn(() => ref.dispose());
                        return ref;
                    });
                }
                /** Attach the given TemplatePortal to this PortlHost as an embedded View. */
                attachTemplatePortal(portal) {
                    portal.setAttachedHost(this);
                    let viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef);
                    portal.locals.forEach((v, k) => viewRef.setLocal(k, v));
                    this.setDisposeFn(() => this._viewContainerRef.clear());
                    // TODO(jelbourn): return locals from view
                    return Promise.resolve(new Map());
                }
                /** Detatches the currently attached Portal (if there is one) and attaches the given Portal. */
                _replaceAttachedPortal(p) {
                    let maybeDetach = this.hasAttached() ? this.detach() : Promise.resolve();
                    maybeDetach.then(() => {
                        if (p != null) {
                            this.attach(p);
                            this._portal = p;
                        }
                    });
                }
            };
            PortalHostDirective = __decorate([
                core_1.Directive({
                    selector: '[portalHost]',
                    inputs: ['portal: portalHost']
                }), 
                __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef, core_1.ViewContainerRef])
            ], PortalHostDirective);
            exports_1("PortalHostDirective", PortalHostDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcG9ydGFsL3BvcnRhbC1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Ozs7Ozs7O2VBUUc7WUFLSCxvRUFBNkMsdUJBQWM7Z0JBQ3pELFlBQVksV0FBd0I7b0JBQ2xDLE1BQU0sV0FBVyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDO1lBUkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFFBQVE7aUJBQ25CLENBQUM7O3VDQUFBO1lBQ0YsNkRBSUMsQ0FBQTtZQUdEOzs7Ozs7ZUFNRztZQUtILDREQUF5Qyx1QkFBYztnQkFJckQsWUFDWSx1QkFBK0MsRUFDL0MsV0FBdUIsRUFDdkIsaUJBQW1DO29CQUM3QyxPQUFPLENBQUM7b0JBSEUsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtvQkFDL0MsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7Z0JBRS9DLENBQUM7Z0JBRUQsSUFBSSxNQUFNO29CQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN0QixDQUFDO2dCQUVELElBQUksTUFBTSxDQUFDLENBQWM7b0JBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCwyRkFBMkY7Z0JBQzNGLHFCQUFxQixDQUFDLE1BQXVCO29CQUMzQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUU3Qix1RkFBdUY7b0JBQ3ZGLDBFQUEwRTtvQkFDMUUsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUUxRSxnREFBZ0Q7b0JBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7eUJBQ2pGLElBQUksQ0FBQyxHQUFHO3dCQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzt3QkFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDYixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDZFQUE2RTtnQkFDN0Usb0JBQW9CLENBQUMsTUFBc0I7b0JBQ3pDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRTdCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzVFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBRXhELDBDQUEwQztvQkFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQWUsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELCtGQUErRjtnQkFDdkYsc0JBQXNCLENBQUMsQ0FBYztvQkFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRXpFLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0JBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQztZQTlERDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDL0IsQ0FBQzs7bUNBQUE7WUFDRixxREEwREMsQ0FBQSIsImZpbGUiOiJjb3JlL3BvcnRhbC9wb3J0YWwtZGlyZWN0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50UmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCwgQ29tcG9uZW50UG9ydGFsLCBCYXNlUG9ydGFsSG9zdH0gZnJvbSAnLi9wb3J0YWwnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB2ZXJzaW9uIG9mIGEgYFRlbXBsYXRlUG9ydGFsYC4gQmVjYXVzZSB0aGUgZGlyZWN0aXZlICppcyogYSBUZW1wbGF0ZVBvcnRhbCxcbiAqIHRoZSBkaXJlY3RpdmUgaW5zdGFuY2UgaXRzZWxmIGNhbiBiZSBhdHRhY2hlZCB0byBhIGhvc3QsIGVuYWJsaW5nIGRlY2xhcmF0aXZlIHVzZSBvZiBwb3J0YWxzLlxuICpcbiAqIFVzYWdlOlxuICogPHRlbXBsYXRlIHBvcnRhbCAjZ3JlZXRpbmc+XG4gKiAgIDxwPiBIZWxsbyB7e25hbWV9fSA8L3A+XG4gKiA8L3RlbXBsYXRlPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcG9ydGFsXScsXG4gIGV4cG9ydEFzOiAncG9ydGFsJyxcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmKTtcbiAgfVxufVxuXG5cbi8qKlxuICogRGlyZWN0aXZlIHZlcnNpb24gb2YgYSBQb3J0YWxIb3N0LiBCZWNhdXNlIHRoZSBkaXJlY3RpdmUgKmlzKiBhIFBvcnRhbEhvc3QsIHBvcnRhbHMgY2FuIGJlXG4gKiBkaXJlY3RseSBhdHRhY2hlZCB0byBpdCwgZW5hYmxpbmcgZGVjbGFyYXRpdmUgdXNlLlxuICpcbiAqIFVzYWdlOlxuICogPHRlbXBsYXRlIFtwb3J0YWxIb3N0XT1cImdyZWV0aW5nXCI+PC90ZW1wbGF0ZT5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3BvcnRhbEhvc3RdJyxcbiAgaW5wdXRzOiBbJ3BvcnRhbDogcG9ydGFsSG9zdCddXG59KVxuZXhwb3J0IGNsYXNzIFBvcnRhbEhvc3REaXJlY3RpdmUgZXh0ZW5kcyBCYXNlUG9ydGFsSG9zdCB7XG4gIC8qKiBUaGUgYXR0YWNoZWQgcG9ydGFsLiAqL1xuICBwcml2YXRlIF9wb3J0YWw6IFBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfZHluYW1pY0NvbXBvbmVudExvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCBwb3J0YWwoKTogUG9ydGFsPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wb3J0YWw7XG4gIH1cblxuICBzZXQgcG9ydGFsKHA6IFBvcnRhbDxhbnk+KSB7XG4gICAgdGhpcy5fcmVwbGFjZUF0dGFjaGVkUG9ydGFsKHApO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGUgZ2l2ZW4gQ29tcG9uZW50UG9ydGFsIHRvIHRoaXMgUG9ydGxIb3N0IHVzaW5nIHRoZSBEeW5hbWljQ29tcG9uZW50TG9hZGVyLiAqL1xuICBhdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsOiBDb21wb25lbnRQb3J0YWwpOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICAgIHBvcnRhbC5zZXRBdHRhY2hlZEhvc3QodGhpcyk7XG5cbiAgICAvLyBJZiB0aGUgcG9ydGFsIHNwZWNpZmllcyBhbiBvcmlnaW4sIHVzZSB0aGF0IGFzIHRoZSBsb2dpY2FsIGxvY2F0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICAvLyBpbiB0aGUgYXBwbGljYXRpb24gdHJlZS4gT3RoZXJ3aXNlIHVzZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBQb3J0YWxIb3N0LlxuICAgIGxldCBlbGVtZW50UmVmID0gcG9ydGFsLm9yaWdpbiAhPSBudWxsID8gcG9ydGFsLm9yaWdpbiA6IHRoaXMuX2VsZW1lbnRSZWY7XG5cbiAgICAvLyBUeXBlY2FzdCBpcyBuZWNlc3NhcnkgZm9yIERhcnQgdHJhbnNwaWxhdGlvbi5cbiAgICByZXR1cm4gdGhpcy5fZHluYW1pY0NvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24ocG9ydGFsLmNvbXBvbmVudCwgZWxlbWVudFJlZilcbiAgICAgIC50aGVuKHJlZiA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGlzcG9zZUZuKCgpID0+IHJlZi5kaXNwb3NlKCkpO1xuICAgICAgICByZXR1cm4gcmVmO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogQXR0YWNoIHRoZSBnaXZlbiBUZW1wbGF0ZVBvcnRhbCB0byB0aGlzIFBvcnRsSG9zdCBhcyBhbiBlbWJlZGRlZCBWaWV3LiAqL1xuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbChwb3J0YWw6IFRlbXBsYXRlUG9ydGFsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBhbnk+PiB7XG4gICAgcG9ydGFsLnNldEF0dGFjaGVkSG9zdCh0aGlzKTtcblxuICAgIGxldCB2aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcocG9ydGFsLnRlbXBsYXRlUmVmKTtcbiAgICBwb3J0YWwubG9jYWxzLmZvckVhY2goKHYsIGspID0+IHZpZXdSZWYuc2V0TG9jYWwoaywgdikpO1xuICAgIHRoaXMuc2V0RGlzcG9zZUZuKCgpID0+IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKSk7XG5cbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV0dXJuIGxvY2FscyBmcm9tIHZpZXdcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBNYXA8c3RyaW5nLCBhbnk+KCkpO1xuICB9XG5cbiAgLyoqIERldGF0Y2hlcyB0aGUgY3VycmVudGx5IGF0dGFjaGVkIFBvcnRhbCAoaWYgdGhlcmUgaXMgb25lKSBhbmQgYXR0YWNoZXMgdGhlIGdpdmVuIFBvcnRhbC4gKi9cbiAgcHJpdmF0ZSBfcmVwbGFjZUF0dGFjaGVkUG9ydGFsKHA6IFBvcnRhbDxhbnk+KTogdm9pZCB7XG4gICAgbGV0IG1heWJlRGV0YWNoID0gdGhpcy5oYXNBdHRhY2hlZCgpID8gdGhpcy5kZXRhY2goKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgbWF5YmVEZXRhY2gudGhlbigoKSA9PiB7XG4gICAgICBpZiAocCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoKHApO1xuICAgICAgICB0aGlzLl9wb3J0YWwgPSBwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
