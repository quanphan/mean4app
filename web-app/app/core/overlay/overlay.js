System.register(['angular2/core', './overlay-state', '../portal/dom-portal-host', './overlay-ref', './position/global-position-strategy', './position/relative-position-strategy', './overlay-container'], function(exports_1, context_1) {
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
    var core_1, overlay_state_1, dom_portal_host_1, overlay_ref_1, global_position_strategy_1, relative_position_strategy_1;
    var OVERLAY_CONTAINER_TOKEN, nextUniqueId, defaultState, Overlay, OverlayPositionBuilder, POSITION_BUILDER;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (overlay_state_1_1) {
                overlay_state_1 = overlay_state_1_1;
                exports_1({
                    "OverlayState": overlay_state_1_1["OverlayState"]
                });
            },
            function (dom_portal_host_1_1) {
                dom_portal_host_1 = dom_portal_host_1_1;
            },
            function (overlay_ref_1_1) {
                overlay_ref_1 = overlay_ref_1_1;
                exports_1({
                    "OverlayRef": overlay_ref_1_1["OverlayRef"]
                });
            },
            function (global_position_strategy_1_1) {
                global_position_strategy_1 = global_position_strategy_1_1;
            },
            function (relative_position_strategy_1_1) {
                relative_position_strategy_1 = relative_position_strategy_1_1;
            },
            function (overlay_container_1_1) {
                exports_1({
                    "createOverlayContainer": overlay_container_1_1["createOverlayContainer"]
                });
            }],
        execute: function() {
            /** Token used to inject the DOM element that serves as the overlay container. */
            exports_1("OVERLAY_CONTAINER_TOKEN", OVERLAY_CONTAINER_TOKEN = new core_1.OpaqueToken('overlayContainer'));
            /** Next overlay unique ID. */
            nextUniqueId = 0;
            /** The default state for newly created overlays. */
            defaultState = new overlay_state_1.OverlayState();
            /**
             * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
             * used as a low-level building building block for other components. Dialogs, tooltips, menus,
             * selects, etc. can all be built using overlays. The service should primarily be used by authors
             * of re-usable components rather than developers building end-user applications.
             *
             * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
             */
            let Overlay = class Overlay {
                constructor(_overlayContainerElement, _dynamicComponentLoader, _appViewManager) {
                    this._overlayContainerElement = _overlayContainerElement;
                    this._dynamicComponentLoader = _dynamicComponentLoader;
                    this._appViewManager = _appViewManager;
                }
                /**
                 * Creates an overlay.
                 * @param state State to apply to the overlay.
                 * @returns A reference to the created overlay.
                 */
                create(state = defaultState) {
                    return this._createPaneElement(state).then(pane => this._createOverlayRef(pane));
                }
                /**
                 * Returns a position builder that can be used, via fluent API,
                 * to construct and configure a position strategy.
                 */
                position() {
                    return POSITION_BUILDER;
                }
                /**
                 * Creates the DOM element for an overlay.
                 * @param state State to apply to the created element.
                 * @returns Promise resolving to the created element.
                 */
                _createPaneElement(state) {
                    var pane = document.createElement('div');
                    pane.id = `md-overlay-${nextUniqueId++}`;
                    pane.classList.add('md-overlay-pane');
                    this.applyState(pane, state);
                    this._overlayContainerElement.appendChild(pane);
                    return Promise.resolve(pane);
                }
                /**
                 * Applies a given state to the given pane element.
                 * @param pane The pane to modify.
                 * @param state The state to apply.
                 */
                applyState(pane, state) {
                    if (state.positionStrategy != null) {
                        state.positionStrategy.apply(pane);
                    }
                }
                /**
                 * Create a DomPortalHost into which the overlay content can be loaded.
                 * @param pane The DOM element to turn into a portal host.
                 * @returns A portal host for the given DOM element.
                 */
                _createPortalHost(pane) {
                    return new dom_portal_host_1.DomPortalHost(pane, this._dynamicComponentLoader, this._appViewManager);
                }
                /**
                 * Creates an OverlayRef for an overlay in the given DOM element.
                 * @param pane DOM element for the overlay
                 * @returns {OverlayRef}
                 */
                _createOverlayRef(pane) {
                    return new overlay_ref_1.OverlayRef(this._createPortalHost(pane));
                }
            };
            Overlay = __decorate([
                core_1.Injectable(),
                __param(0, core_1.Inject(OVERLAY_CONTAINER_TOKEN)), 
                __metadata('design:paramtypes', [HTMLElement, core_1.DynamicComponentLoader, (typeof (_a = typeof core_1.AppViewManager !== 'undefined' && core_1.AppViewManager) === 'function' && _a) || Object])
            ], Overlay);
            exports_1("Overlay", Overlay);
            /** Builder for overlay position strategy. */
            class OverlayPositionBuilder {
                /** Creates a global position strategy. */
                global() {
                    return new global_position_strategy_1.GlobalPositionStrategy();
                }
                /** Creates a relative position strategy. */
                relativeTo(elementRef) {
                    return new relative_position_strategy_1.RelativePositionStrategy(elementRef);
                }
            }
            exports_1("OverlayPositionBuilder", OverlayPositionBuilder);
            // We only ever need one position builder.
            POSITION_BUILDER = new OverlayPositionBuilder();
        }
    }
    var _a;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUFxQmEsdUJBQXVCLEVBR2hDLFlBQVksRUFHWixZQUFZLG1DQW9HWixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTNHcEIsaUZBQWlGO1lBQ3BFLHFDQUFBLHVCQUF1QixHQUFHLElBQUksa0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUM7WUFFM0UsOEJBQThCO1lBQzFCLFlBQVksR0FBRyxDQUFDLENBQUM7WUFFckIsb0RBQW9EO1lBQ2hELFlBQVksR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztZQUd0Qzs7Ozs7OztlQU9HO1lBRUg7Z0JBQ0UsWUFDNkMsd0JBQXFDLEVBQ3RFLHVCQUErQyxFQUMvQyxlQUErQjtvQkFGRSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWE7b0JBQ3RFLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7b0JBQy9DLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtnQkFDM0MsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxNQUFNLENBQUMsS0FBSyxHQUFpQixZQUFZO29CQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBRUQ7OzttQkFHRztnQkFDSCxRQUFRO29CQUNOLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSyxrQkFBa0IsQ0FBQyxLQUFtQjtvQkFDNUMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEVBQUUsR0FBSSxjQUFjLFlBQVksRUFBRSxFQUFFLENBQUM7b0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBRXRDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVoRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSCxVQUFVLENBQUMsSUFBaUIsRUFBRSxLQUFtQjtvQkFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ25DLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRDs7OzttQkFJRztnQkFDSyxpQkFBaUIsQ0FBQyxJQUFpQjtvQkFDekMsTUFBTSxDQUFDLElBQUksK0JBQWEsQ0FDcEIsSUFBSSxFQUNKLElBQUksQ0FBQyx1QkFBdUIsRUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNLLGlCQUFpQixDQUFDLElBQWlCO29CQUN6QyxNQUFNLENBQUMsSUFBSSx3QkFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO1lBQ0gsQ0FBQztZQXhFQTtnQkFBQyxpQkFBVSxFQUFFOzJCQUdQLGFBQU0sQ0FBQyx1QkFBdUIsQ0FBQzs7dUJBSHhCO1lBQ2QsNkJBdUVDLENBQUE7WUFHRCw2Q0FBNkM7WUFDN0M7Z0JBQ0UsMENBQTBDO2dCQUMxQyxNQUFNO29CQUNKLE1BQU0sQ0FBQyxJQUFJLGlEQUFzQixFQUFFLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsNENBQTRDO2dCQUM1QyxVQUFVLENBQUMsVUFBc0I7b0JBQy9CLE1BQU0sQ0FBQyxJQUFJLHFEQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO1lBQ0gsQ0FBQztZQVZELDJEQVVDLENBQUE7WUFFRCwwQ0FBMEM7WUFDdEMsZ0JBQWdCLEdBQTJCLElBQUksc0JBQXNCLEVBQUUsQ0FBQyIsImZpbGUiOiJjb3JlL292ZXJsYXkvb3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIER5bmFtaWNDb21wb25lbnRMb2FkZXIsXG4gIEFwcFZpZXdNYW5hZ2VyLFxuICBPcGFxdWVUb2tlbixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5U3RhdGV9IGZyb20gJy4vb3ZlcmxheS1zdGF0ZSc7XG5pbXBvcnQge0RvbVBvcnRhbEhvc3R9IGZyb20gJy4uL3BvcnRhbC9kb20tcG9ydGFsLWhvc3QnO1xuaW1wb3J0IHtPdmVybGF5UmVmfSBmcm9tICcuL292ZXJsYXktcmVmJztcbmltcG9ydCB7R2xvYmFsUG9zaXRpb25TdHJhdGVneX0gZnJvbSAnLi9wb3NpdGlvbi9nbG9iYWwtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHtSZWxhdGl2ZVBvc2l0aW9uU3RyYXRlZ3l9IGZyb20gJy4vcG9zaXRpb24vcmVsYXRpdmUtcG9zaXRpb24tc3RyYXRlZ3knO1xuXG5cbi8vIFJlLWV4cG9ydCBvdmVybGF5LXJlbGF0ZWQgbW9kdWxlcyBzbyB0aGV5IGNhbiBiZSBpbXBvcnRlZCBkaXJlY3RseSBmcm9tIGhlcmUuXG5leHBvcnQge092ZXJsYXlTdGF0ZX0gZnJvbSAnLi9vdmVybGF5LXN0YXRlJztcbmV4cG9ydCB7T3ZlcmxheVJlZn0gZnJvbSAnLi9vdmVybGF5LXJlZic7XG5leHBvcnQge2NyZWF0ZU92ZXJsYXlDb250YWluZXJ9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG4vKiogVG9rZW4gdXNlZCB0byBpbmplY3QgdGhlIERPTSBlbGVtZW50IHRoYXQgc2VydmVzIGFzIHRoZSBvdmVybGF5IGNvbnRhaW5lci4gKi9cbmV4cG9ydCBjb25zdCBPVkVSTEFZX0NPTlRBSU5FUl9UT0tFTiA9IG5ldyBPcGFxdWVUb2tlbignb3ZlcmxheUNvbnRhaW5lcicpO1xuXG4vKiogTmV4dCBvdmVybGF5IHVuaXF1ZSBJRC4gKi9cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG4vKiogVGhlIGRlZmF1bHQgc3RhdGUgZm9yIG5ld2x5IGNyZWF0ZWQgb3ZlcmxheXMuICovXG5sZXQgZGVmYXVsdFN0YXRlID0gbmV3IE92ZXJsYXlTdGF0ZSgpO1xuXG5cbi8qKlxuICogU2VydmljZSB0byBjcmVhdGUgT3ZlcmxheXMuIE92ZXJsYXlzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBwaWVjZXMgb2YgZmxvYXRpbmcgVUksIG1lYW50IHRvIGJlXG4gKiB1c2VkIGFzIGEgbG93LWxldmVsIGJ1aWxkaW5nIGJ1aWxkaW5nIGJsb2NrIGZvciBvdGhlciBjb21wb25lbnRzLiBEaWFsb2dzLCB0b29sdGlwcywgbWVudXMsXG4gKiBzZWxlY3RzLCBldGMuIGNhbiBhbGwgYmUgYnVpbHQgdXNpbmcgb3ZlcmxheXMuIFRoZSBzZXJ2aWNlIHNob3VsZCBwcmltYXJpbHkgYmUgdXNlZCBieSBhdXRob3JzXG4gKiBvZiByZS11c2FibGUgY29tcG9uZW50cyByYXRoZXIgdGhhbiBkZXZlbG9wZXJzIGJ1aWxkaW5nIGVuZC11c2VyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBBbiBvdmVybGF5ICppcyogYSBQb3J0YWxIb3N0LCBzbyBhbnkga2luZCBvZiBQb3J0YWwgY2FuIGJlIGxvYWRlZCBpbnRvIG9uZS5cbiAqL1xuIEBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPdmVybGF5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBASW5qZWN0KE9WRVJMQVlfQ09OVEFJTkVSX1RPS0VOKSBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICBwcml2YXRlIF9keW5hbWljQ29tcG9uZW50TG9hZGVyOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLFxuICAgICAgcHJpdmF0ZSBfYXBwVmlld01hbmFnZXI6IEFwcFZpZXdNYW5hZ2VyKSB7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvdmVybGF5LlxuICAgKiBAcGFyYW0gc3RhdGUgU3RhdGUgdG8gYXBwbHkgdG8gdGhlIG92ZXJsYXkuXG4gICAqIEByZXR1cm5zIEEgcmVmZXJlbmNlIHRvIHRoZSBjcmVhdGVkIG92ZXJsYXkuXG4gICAqL1xuICBjcmVhdGUoc3RhdGU6IE92ZXJsYXlTdGF0ZSA9IGRlZmF1bHRTdGF0ZSk6IFByb21pc2U8T3ZlcmxheVJlZj4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVQYW5lRWxlbWVudChzdGF0ZSkudGhlbihwYW5lID0+IHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYocGFuZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwb3NpdGlvbiBidWlsZGVyIHRoYXQgY2FuIGJlIHVzZWQsIHZpYSBmbHVlbnQgQVBJLFxuICAgKiB0byBjb25zdHJ1Y3QgYW5kIGNvbmZpZ3VyZSBhIHBvc2l0aW9uIHN0cmF0ZWd5LlxuICAgKi9cbiAgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIFBPU0lUSU9OX0JVSUxERVI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgZm9yIGFuIG92ZXJsYXkuXG4gICAqIEBwYXJhbSBzdGF0ZSBTdGF0ZSB0byBhcHBseSB0byB0aGUgY3JlYXRlZCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHJlc29sdmluZyB0byB0aGUgY3JlYXRlZCBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZUVsZW1lbnQoc3RhdGU6IE92ZXJsYXlTdGF0ZSk6IFByb21pc2U8SFRNTEVsZW1lbnQ+IHtcbiAgICB2YXIgcGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmUuaWQgID0gYG1kLW92ZXJsYXktJHtuZXh0VW5pcXVlSWQrK31gO1xuICAgIHBhbmUuY2xhc3NMaXN0LmFkZCgnbWQtb3ZlcmxheS1wYW5lJyk7XG5cbiAgICB0aGlzLmFwcGx5U3RhdGUocGFuZSwgc3RhdGUpO1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHBhbmUpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYW5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgZ2l2ZW4gc3RhdGUgdG8gdGhlIGdpdmVuIHBhbmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHBhbmUgVGhlIHBhbmUgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlIHRvIGFwcGx5LlxuICAgKi9cbiAgYXBwbHlTdGF0ZShwYW5lOiBIVE1MRWxlbWVudCwgc3RhdGU6IE92ZXJsYXlTdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5wb3NpdGlvblN0cmF0ZWd5ICE9IG51bGwpIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kuYXBwbHkocGFuZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERvbVBvcnRhbEhvc3QgaW50byB3aGljaCB0aGUgb3ZlcmxheSBjb250ZW50IGNhbiBiZSBsb2FkZWQuXG4gICAqIEBwYXJhbSBwYW5lIFRoZSBET00gZWxlbWVudCB0byB0dXJuIGludG8gYSBwb3J0YWwgaG9zdC5cbiAgICogQHJldHVybnMgQSBwb3J0YWwgaG9zdCBmb3IgdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9ydGFsSG9zdChwYW5lOiBIVE1MRWxlbWVudCk6IERvbVBvcnRhbEhvc3Qge1xuICAgIHJldHVybiBuZXcgRG9tUG9ydGFsSG9zdChcbiAgICAgICAgcGFuZSxcbiAgICAgICAgdGhpcy5fZHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICAgICAgdGhpcy5fYXBwVmlld01hbmFnZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gT3ZlcmxheVJlZiBmb3IgYW4gb3ZlcmxheSBpbiB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBwYW5lIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheVxuICAgKiBAcmV0dXJucyB7T3ZlcmxheVJlZn1cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZU92ZXJsYXlSZWYocGFuZTogSFRNTEVsZW1lbnQpOiBPdmVybGF5UmVmIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlSZWYodGhpcy5fY3JlYXRlUG9ydGFsSG9zdChwYW5lKSk7XG4gIH1cbn1cblxuXG4vKiogQnVpbGRlciBmb3Igb3ZlcmxheSBwb3NpdGlvbiBzdHJhdGVneS4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5UG9zaXRpb25CdWlsZGVyIHtcbiAgLyoqIENyZWF0ZXMgYSBnbG9iYWwgcG9zaXRpb24gc3RyYXRlZ3kuICovXG4gIGdsb2JhbCgpIHtcbiAgICByZXR1cm4gbmV3IEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3koKTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgcmVsYXRpdmUgcG9zaXRpb24gc3RyYXRlZ3kuICovXG4gIHJlbGF0aXZlVG8oZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJldHVybiBuZXcgUmVsYXRpdmVQb3NpdGlvblN0cmF0ZWd5KGVsZW1lbnRSZWYpO1xuICB9XG59XG5cbi8vIFdlIG9ubHkgZXZlciBuZWVkIG9uZSBwb3NpdGlvbiBidWlsZGVyLlxubGV0IFBPU0lUSU9OX0JVSUxERVI6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIgPSBuZXcgT3ZlcmxheVBvc2l0aW9uQnVpbGRlcigpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
