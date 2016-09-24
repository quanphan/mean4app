System.register(['./portal-exceptions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var portal_exceptions_1;
    var Portal, ComponentPortal, TemplatePortal, BasePortalHost;
    return {
        setters:[
            function (portal_exceptions_1_1) {
                portal_exceptions_1 = portal_exceptions_1_1;
            }],
        execute: function() {
            /**
             * A `Portal` is something that you want to render somewhere else.
             * It can be attach to / detached from a `PortalHost`.
             */
            class Portal {
                /** Attach this portal to a host. */
                attach(host) {
                    if (host == null) {
                        throw new portal_exceptions_1.MdNullPortalHostException();
                    }
                    if (host.hasAttached()) {
                        throw new portal_exceptions_1.MdPortalAlreadyAttachedException();
                    }
                    this._attachedHost = host;
                    return host.attach(this);
                }
                /** Detach this portal from its host */
                detach() {
                    let host = this._attachedHost;
                    if (host == null) {
                        throw new portal_exceptions_1.MdNoPortalAttachedException();
                    }
                    this._attachedHost = null;
                    return host.detach();
                }
                /** Whether this portal is attached to a host. */
                get isAttached() {
                    return this._attachedHost != null;
                }
                /**
                 * Sets the PortalHost reference without performing `attach()`. This is used directly by
                 * the PortalHost when it is performing an `attach()` or `detatch()`.
                 */
                setAttachedHost(host) {
                    this._attachedHost = host;
                }
            }
            exports_1("Portal", Portal);
            /**
             * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
             */
            class ComponentPortal extends Portal {
                constructor(component, origin = null) {
                    super();
                    this.component = component;
                    this.origin = origin;
                }
            }
            exports_1("ComponentPortal", ComponentPortal);
            /**
             * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
             */
            class TemplatePortal extends Portal {
                constructor(template) {
                    super();
                    /**
                     * Additional locals for the instantiated embedded view.
                     * These locals can be seen as "exports" for the template, such as how ngFor has
                     * index / event / odd.
                     * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
                     */
                    this.locals = new Map();
                    this.templateRef = template;
                }
                get origin() {
                    return this.templateRef.elementRef;
                }
                attach(host, locals) {
                    this.locals = locals == null ? new Map() : locals;
                    return super.attach(host);
                }
                detach() {
                    this.locals = new Map();
                    return super.detach();
                }
            }
            exports_1("TemplatePortal", TemplatePortal);
            /**
             * Partial implementation of PortalHost that only deals with attaching either a
             * ComponentPortal or a TemplatePortal.
             */
            class BasePortalHost {
                constructor() {
                    /** Whether this host has already been permanently disposed. */
                    this._isDisposed = false;
                }
                /** Whether this host has an attached portal. */
                hasAttached() {
                    return this._attachedPortal != null;
                }
                attach(portal) {
                    if (portal == null) {
                        throw new portal_exceptions_1.MdNullPortalException();
                    }
                    if (this.hasAttached()) {
                        throw new portal_exceptions_1.MdPortalAlreadyAttachedException();
                    }
                    if (this._isDisposed) {
                        throw new portal_exceptions_1.MdPortalHostAlreadyDisposedException();
                    }
                    if (portal instanceof ComponentPortal) {
                        this._attachedPortal = portal;
                        return this.attachComponentPortal(portal);
                    }
                    else if (portal instanceof TemplatePortal) {
                        this._attachedPortal = portal;
                        return this.attachTemplatePortal(portal);
                    }
                    throw new portal_exceptions_1.MdUnknownPortalTypeException();
                }
                detach() {
                    this._attachedPortal.setAttachedHost(null);
                    this._attachedPortal = null;
                    if (this._disposeFn != null) {
                        this._disposeFn();
                        this._disposeFn = null;
                    }
                    return Promise.resolve(null);
                }
                dispose() {
                    if (this.hasAttached()) {
                        this.detach();
                    }
                    this._isDisposed = true;
                }
                setDisposeFn(fn) {
                    this._disposeFn = fn;
                }
            }
            exports_1("BasePortalHost", BasePortalHost);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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RyxJQUFJLENBQUM7b0JBQ3pCLENBQUM7b0JBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsT0FBTztvQkFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hCLENBQUM7b0JBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsWUFBWSxDQUFDLEVBQWM7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQztZQWpFRCwyQ0FpRUMsQ0FBQSIsImZpbGUiOiJjb3JlL3BvcnRhbC9wb3J0YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RlbXBsYXRlUmVmLCBUeXBlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE1kTnVsbFBvcnRhbEhvc3RFeGNlcHRpb24sXG4gIE1kUG9ydGFsQWxyZWFkeUF0dGFjaGVkRXhjZXB0aW9uLFxuICBNZE5vUG9ydGFsQXR0YWNoZWRFeGNlcHRpb24sXG4gIE1kTnVsbFBvcnRhbEV4Y2VwdGlvbixcbiAgTWRQb3J0YWxIb3N0QWxyZWFkeURpc3Bvc2VkRXhjZXB0aW9uLFxuICBNZFVua25vd25Qb3J0YWxUeXBlRXhjZXB0aW9uXG59IGZyb20gJy4vcG9ydGFsLWV4Y2VwdGlvbnMnO1xuXG5cbi8qKlxuICogQSBgUG9ydGFsYCBpcyBzb21ldGhpbmcgdGhhdCB5b3Ugd2FudCB0byByZW5kZXIgc29tZXdoZXJlIGVsc2UuXG4gKiBJdCBjYW4gYmUgYXR0YWNoIHRvIC8gZGV0YWNoZWQgZnJvbSBhIGBQb3J0YWxIb3N0YC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvcnRhbDxUPiB7XG4gIHByaXZhdGUgX2F0dGFjaGVkSG9zdDogUG9ydGFsSG9zdDtcblxuICAvKiogQXR0YWNoIHRoaXMgcG9ydGFsIHRvIGEgaG9zdC4gKi9cbiAgYXR0YWNoKGhvc3Q6IFBvcnRhbEhvc3QpOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAoaG9zdCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgTWROdWxsUG9ydGFsSG9zdEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChob3N0Lmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRocm93IG5ldyBNZFBvcnRhbEFscmVhZHlBdHRhY2hlZEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XG4gICAgcmV0dXJuIDxQcm9taXNlPFQ+PiBob3N0LmF0dGFjaCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBEZXRhY2ggdGhpcyBwb3J0YWwgZnJvbSBpdHMgaG9zdCAqL1xuICBkZXRhY2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGhvc3QgPSB0aGlzLl9hdHRhY2hlZEhvc3Q7XG4gICAgaWYgKGhvc3QgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IE1kTm9Qb3J0YWxBdHRhY2hlZEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IG51bGw7XG4gICAgcmV0dXJuIGhvc3QuZGV0YWNoKCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIHBvcnRhbCBpcyBhdHRhY2hlZCB0byBhIGhvc3QuICovXG4gIGdldCBpc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdHRhY2hlZEhvc3QgIT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBQb3J0YWxIb3N0IHJlZmVyZW5jZSB3aXRob3V0IHBlcmZvcm1pbmcgYGF0dGFjaCgpYC4gVGhpcyBpcyB1c2VkIGRpcmVjdGx5IGJ5XG4gICAqIHRoZSBQb3J0YWxIb3N0IHdoZW4gaXQgaXMgcGVyZm9ybWluZyBhbiBgYXR0YWNoKClgIG9yIGBkZXRhdGNoKClgLlxuICAgKi9cbiAgc2V0QXR0YWNoZWRIb3N0KGhvc3Q6IFBvcnRhbEhvc3QpIHtcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xuICB9XG59XG5cblxuLyoqXG4gKiBBIGBDb21wb25lbnRQb3J0YWxgIGlzIGEgcG9ydGFsIHRoYXQgaW5zdGFudGlhdGVzIHNvbWUgQ29tcG9uZW50IHVwb24gYXR0YWNobWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbCBleHRlbmRzIFBvcnRhbDxDb21wb25lbnRSZWY+IHtcbiAgLyoqIFRoZSB0eXBlIG9mIHRoZSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBmb3IgYXR0YWNobWVudC4gKi9cbiAgcHVibGljIGNvbXBvbmVudDogVHlwZTtcblxuICAvKipcbiAgICogW09wdGlvbmFsXSBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXG4gICAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gd2hlcmUgdGhlIGNvbXBvbmVudCAqcmVuZGVycyosIHdoaWNoIGlzIGRldGVybWluZWQgYnkgdGhlIFBvcnRhbEhvc3QuXG4gICAqIFRoZSBvcmlnaW4gbmVjZXNzYXJ5IHdoZW4gdGhlIGhvc3QgaXMgb3V0c2lkZSBvZiB0aGUgQW5ndWxhciBhcHBsaWNhdGlvbiBjb250ZXh0LlxuICAgKi9cbiAgcHVibGljIG9yaWdpbjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6IFR5cGUsIG9yaWdpbjogRWxlbWVudFJlZiA9IG51bGwpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xuICB9XG59XG5cblxuLyoqXG4gKiBBIGBUZW1wbGF0ZVBvcnRhbGAgaXMgYSBwb3J0YWwgdGhhdCByZXByZXNlbnRzIHNvbWUgZW1iZWRkZWQgdGVtcGxhdGUgKFRlbXBsYXRlUmVmKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUG9ydGFsIGV4dGVuZHMgUG9ydGFsPE1hcDxzdHJpbmcsIGFueT4+IHtcbiAgLyoqIFRoZSBlbWJlZGRlZCB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgdXNlZCB0byBpbnN0YW50aWF0ZSBhbiBlbWJlZGRlZCBWaWV3IGluIHRoZSBob3N0LiAqL1xuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY7XG5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgbG9jYWxzIGZvciB0aGUgaW5zdGFudGlhdGVkIGVtYmVkZGVkIHZpZXcuXG4gICAqIFRoZXNlIGxvY2FscyBjYW4gYmUgc2VlbiBhcyBcImV4cG9ydHNcIiBmb3IgdGhlIHRlbXBsYXRlLCBzdWNoIGFzIGhvdyBuZ0ZvciBoYXNcbiAgICogaW5kZXggLyBldmVudCAvIG9kZC5cbiAgICogU2VlIGh0dHBzOi8vYW5ndWxhci5pby9kb2NzL3RzL2xhdGVzdC9hcGkvY29yZS9FbWJlZGRlZFZpZXdSZWYtY2xhc3MuaHRtbFxuICAgKi9cbiAgbG9jYWxzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGVSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldCBvcmlnaW4oKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVSZWYuZWxlbWVudFJlZjtcbiAgfVxuXG4gIGF0dGFjaChob3N0OiBQb3J0YWxIb3N0LCBsb2NhbHM/OiBNYXA8c3RyaW5nLCBhbnk+KTogUHJvbWlzZTxNYXA8c3RyaW5nLCBhbnk+PiB7XG4gICAgdGhpcy5sb2NhbHMgPSBsb2NhbHMgPT0gbnVsbCA/IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCkgOiBsb2NhbHM7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChob3N0KTtcbiAgfVxuXG4gIGRldGFjaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmxvY2FscyA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgcmV0dXJuIHN1cGVyLmRldGFjaCgpO1xuICB9XG59XG5cblxuLyoqXG4gKiBBIGBQb3J0YWxIb3N0YCBpcyBhbiBzcGFjZSB0aGF0IGNhbiBjb250YWluIGEgc2luZ2xlIGBQb3J0YWxgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvcnRhbEhvc3Qge1xuICBhdHRhY2gocG9ydGFsOiBQb3J0YWw8YW55Pik6IFByb21pc2U8YW55PjtcblxuICBkZXRhY2goKTogUHJvbWlzZTxhbnk+O1xuXG4gIGRpc3Bvc2UoKTogdm9pZDtcblxuICBoYXNBdHRhY2hlZCgpOiBib29sZWFuO1xufVxuXG5cbi8qKlxuICogUGFydGlhbCBpbXBsZW1lbnRhdGlvbiBvZiBQb3J0YWxIb3N0IHRoYXQgb25seSBkZWFscyB3aXRoIGF0dGFjaGluZyBlaXRoZXIgYVxuICogQ29tcG9uZW50UG9ydGFsIG9yIGEgVGVtcGxhdGVQb3J0YWwuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUG9ydGFsSG9zdCBpbXBsZW1lbnRzIFBvcnRhbEhvc3Qge1xuICAvKiogVGhlIHBvcnRhbCBjdXJyZW50bHkgYXR0YWNoZWQgdG8gdGhlIGhvc3QuICovXG4gIHByaXZhdGUgX2F0dGFjaGVkUG9ydGFsOiBQb3J0YWw8YW55PjtcblxuICAvKiogQSBmdW5jdGlvbiB0aGF0IHdpbGwgcGVybWFuZW50bHkgZGlzcG9zZSB0aGlzIGhvc3QuICovXG4gIHByaXZhdGUgX2Rpc3Bvc2VGbjogKCkgPT4gdm9pZDtcblxuICAvKiogV2hldGhlciB0aGlzIGhvc3QgaGFzIGFscmVhZHkgYmVlbiBwZXJtYW5lbnRseSBkaXNwb3NlZC4gKi9cbiAgcHJpdmF0ZSBfaXNEaXNwb3NlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGV0aGVyIHRoaXMgaG9zdCBoYXMgYW4gYXR0YWNoZWQgcG9ydGFsLiAqL1xuICBoYXNBdHRhY2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNoZWRQb3J0YWwgIT0gbnVsbDtcbiAgfVxuXG4gIGF0dGFjaChwb3J0YWw6IFBvcnRhbDxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAocG9ydGFsID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBNZE51bGxQb3J0YWxFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgTWRQb3J0YWxBbHJlYWR5QXR0YWNoZWRFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNEaXNwb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IE1kUG9ydGFsSG9zdEFscmVhZHlEaXNwb3NlZEV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChwb3J0YWwgaW5zdGFuY2VvZiBDb21wb25lbnRQb3J0YWwpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gcG9ydGFsO1xuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XG4gICAgfSBlbHNlIGlmIChwb3J0YWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVBvcnRhbCkge1xuICAgICAgdGhpcy5fYXR0YWNoZWRQb3J0YWwgPSBwb3J0YWw7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2hUZW1wbGF0ZVBvcnRhbChwb3J0YWwpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBNZFVua25vd25Qb3J0YWxUeXBlRXhjZXB0aW9uKCk7XG4gIH1cblxuICBhYnN0cmFjdCBhdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsOiBDb21wb25lbnRQb3J0YWwpOiBQcm9taXNlPENvbXBvbmVudFJlZj47XG5cbiAgYWJzdHJhY3QgYXR0YWNoVGVtcGxhdGVQb3J0YWwocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbCk6IFByb21pc2U8TWFwPHN0cmluZywgYW55Pj47XG5cbiAgZGV0YWNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdChudWxsKTtcbiAgICB0aGlzLl9hdHRhY2hlZFBvcnRhbCA9IG51bGw7XG4gICAgaWYgKHRoaXMuX2Rpc3Bvc2VGbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlRm4oKTtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHNldERpc3Bvc2VGbihmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2Rpc3Bvc2VGbiA9IGZuO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
