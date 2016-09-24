System.register(['./portal', './portal-exceptions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var portal_1, portal_exceptions_1;
    var DomPortalHost;
    return {
        setters:[
            function (portal_1_1) {
                portal_1 = portal_1_1;
            },
            function (portal_exceptions_1_1) {
                portal_exceptions_1 = portal_exceptions_1_1;
            }],
        execute: function() {
            /**
             * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
             * application context.
             *
             * This is the only part of the portal core that directly touches the DOM.
             */
            class DomPortalHost extends portal_1.BasePortalHost {
                constructor(_hostDomElement, _componentLoader, _viewManager) {
                    super();
                    this._hostDomElement = _hostDomElement;
                    this._componentLoader = _componentLoader;
                    this._viewManager = _viewManager;
                }
                /** Attach the given ComponentPortal to DOM element using the DynamicComponentLoader. */
                attachComponentPortal(portal) {
                    if (portal.origin == null) {
                        throw new portal_exceptions_1.MdComponentPortalAttachedToDomWithoutOriginException();
                    }
                    return this._componentLoader.loadNextToLocation(portal.component, portal.origin).then(ref => {
                        this._hostDomElement.appendChild(ref.hostView.rootNodes[0]);
                        this.setDisposeFn(() => ref.dispose());
                        return ref;
                    });
                }
                attachTemplatePortal(portal) {
                    let viewContainer = this._viewManager.getViewContainer(portal.templateRef.elementRef);
                    let viewRef = viewContainer.createEmbeddedView(portal.templateRef);
                    // TODO(jelbourn): locals don't currently work with DomPortalHost; investigate whether there
                    // is a bug in Angular.
                    portal.locals.forEach((v, k) => viewRef.setLocal(k, v));
                    viewRef.rootNodes.forEach(rootNode => this._hostDomElement.appendChild(rootNode));
                    this.setDisposeFn((() => {
                        let index = viewContainer.indexOf(viewRef);
                        if (index != -1) {
                            viewContainer.remove(index);
                        }
                    }));
                    // TODO(jelbourn): Return locals from view.
                    return Promise.resolve(new Map());
                }
                dispose() {
                    super.dispose();
                    if (this._hostDomElement.parentNode != null) {
                        this._hostDomElement.parentNode.removeChild(this._hostDomElement);
                    }
                }
            }
            exports_1("DomPortalHost", DomPortalHost);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcG9ydGFsL2RvbS1wb3J0YWwtaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUtBOzs7OztlQUtHO1lBQ0gsNEJBQW1DLHVCQUFjO2dCQUMvQyxZQUNZLGVBQXdCLEVBQ3hCLGdCQUF3QyxFQUN4QyxZQUE0QjtvQkFDdEMsT0FBTyxDQUFDO29CQUhFLG9CQUFlLEdBQWYsZUFBZSxDQUFTO29CQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO29CQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7Z0JBRXhDLENBQUM7Z0JBRUQsd0ZBQXdGO2dCQUN4RixxQkFBcUIsQ0FBQyxNQUF1QjtvQkFDM0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixNQUFNLElBQUksd0VBQW9ELEVBQUUsQ0FBQztvQkFDbkUsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO3dCQUN2RixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7d0JBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxvQkFBb0IsQ0FBQyxNQUFzQjtvQkFDekMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RixJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNuRSw0RkFBNEY7b0JBQzVGLHVCQUF1QjtvQkFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRXhELE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUVsRixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2pCLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzlCLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFSiwyQ0FBMkM7b0JBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFlLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCxPQUFPO29CQUNMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDcEUsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQS9DRCx5Q0ErQ0MsQ0FBQSIsImZpbGUiOiJjb3JlL3BvcnRhbC9kb20tcG9ydGFsLWhvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0R5bmFtaWNDb21wb25lbnRMb2FkZXIsIEFwcFZpZXdNYW5hZ2VyLCBDb21wb25lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtCYXNlUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnLi9wb3J0YWwnO1xuaW1wb3J0IHtNZENvbXBvbmVudFBvcnRhbEF0dGFjaGVkVG9Eb21XaXRob3V0T3JpZ2luRXhjZXB0aW9ufSBmcm9tICcuL3BvcnRhbC1leGNlcHRpb25zJztcblxuXG4vKipcbiAqIEEgUG9ydGFsSG9zdCBmb3IgYXR0YWNoaW5nIHBvcnRhbHMgdG8gYW4gYXJiaXRyYXJ5IERPTSBlbGVtZW50IG91dHNpZGUgb2YgdGhlIEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uIGNvbnRleHQuXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBwYXJ0IG9mIHRoZSBwb3J0YWwgY29yZSB0aGF0IGRpcmVjdGx5IHRvdWNoZXMgdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNsYXNzIERvbVBvcnRhbEhvc3QgZXh0ZW5kcyBCYXNlUG9ydGFsSG9zdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfaG9zdERvbUVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgICBwcml2YXRlIF9jb21wb25lbnRMb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsXG4gICAgICBwcml2YXRlIF92aWV3TWFuYWdlcjogQXBwVmlld01hbmFnZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqIEF0dGFjaCB0aGUgZ2l2ZW4gQ29tcG9uZW50UG9ydGFsIHRvIERPTSBlbGVtZW50IHVzaW5nIHRoZSBEeW5hbWljQ29tcG9uZW50TG9hZGVyLiAqL1xuICBhdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsOiBDb21wb25lbnRQb3J0YWwpOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICAgIGlmIChwb3J0YWwub3JpZ2luID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBNZENvbXBvbmVudFBvcnRhbEF0dGFjaGVkVG9Eb21XaXRob3V0T3JpZ2luRXhjZXB0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudExvYWRlci5sb2FkTmV4dFRvTG9jYXRpb24ocG9ydGFsLmNvbXBvbmVudCwgcG9ydGFsLm9yaWdpbikudGhlbihyZWYgPT4ge1xuICAgICAgdGhpcy5faG9zdERvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVmLmhvc3RWaWV3LnJvb3ROb2Rlc1swXSk7XG4gICAgICB0aGlzLnNldERpc3Bvc2VGbigoKSA9PiByZWYuZGlzcG9zZSgpKTtcbiAgICAgIHJldHVybiByZWY7XG4gICAgfSk7XG4gIH1cblxuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbChwb3J0YWw6IFRlbXBsYXRlUG9ydGFsKTogUHJvbWlzZTxNYXA8c3RyaW5nLCBhbnk+PiB7XG4gICAgbGV0IHZpZXdDb250YWluZXIgPSB0aGlzLl92aWV3TWFuYWdlci5nZXRWaWV3Q29udGFpbmVyKHBvcnRhbC50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmKTtcbiAgICBsZXQgdmlld1JlZiA9IHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHBvcnRhbC50ZW1wbGF0ZVJlZik7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IGxvY2FscyBkb24ndCBjdXJyZW50bHkgd29yayB3aXRoIERvbVBvcnRhbEhvc3Q7IGludmVzdGlnYXRlIHdoZXRoZXIgdGhlcmVcbiAgICAvLyBpcyBhIGJ1ZyBpbiBBbmd1bGFyLlxuICAgIHBvcnRhbC5sb2NhbHMuZm9yRWFjaCgodiwgaykgPT4gdmlld1JlZi5zZXRMb2NhbChrLCB2KSk7XG5cbiAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IHRoaXMuX2hvc3REb21FbGVtZW50LmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG5cbiAgICB0aGlzLnNldERpc3Bvc2VGbigoKCkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdmlld0NvbnRhaW5lci5pbmRleE9mKHZpZXdSZWYpO1xuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGluZGV4KTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICAvLyBUT0RPKGplbGJvdXJuKTogUmV0dXJuIGxvY2FscyBmcm9tIHZpZXcuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgTWFwPHN0cmluZywgYW55PigpKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIGlmICh0aGlzLl9ob3N0RG9tRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faG9zdERvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
