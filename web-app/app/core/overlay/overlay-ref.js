System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OverlayRef;
    return {
        setters:[],
        execute: function() {
            /**
             * Reference to an overlay that has been created with the Overlay service.
             * Used to manipulate or dispose of said overlay.
             */
            class OverlayRef {
                constructor(_portalHost) {
                    this._portalHost = _portalHost;
                }
                attach(portal) {
                    return this._portalHost.attach(portal);
                }
                detach() {
                    return this._portalHost.detach();
                }
                dispose() {
                    this._portalHost.dispose();
                }
                hasAttached() {
                    return this._portalHost.hasAttached();
                }
            }
            exports_1("OverlayRef", OverlayRef);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9vdmVybGF5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7OztlQUdHO1lBQ0g7Z0JBQ0UsWUFBb0IsV0FBdUI7b0JBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO2dCQUFJLENBQUM7Z0JBRWhELE1BQU0sQ0FBQyxNQUFtQjtvQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELE1BQU07b0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsT0FBTztvQkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELFdBQVc7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3hDLENBQUM7WUFHSCxDQUFDO1lBcEJELG1DQW9CQyxDQUFBIiwiZmlsZSI6ImNvcmUvb3ZlcmxheS9vdmVybGF5LXJlZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9ydGFsSG9zdCwgUG9ydGFsfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcblxuLyoqXG4gKiBSZWZlcmVuY2UgdG8gYW4gb3ZlcmxheSB0aGF0IGhhcyBiZWVuIGNyZWF0ZWQgd2l0aCB0aGUgT3ZlcmxheSBzZXJ2aWNlLlxuICogVXNlZCB0byBtYW5pcHVsYXRlIG9yIGRpc3Bvc2Ugb2Ygc2FpZCBvdmVybGF5LlxuICovXG5leHBvcnQgY2xhc3MgT3ZlcmxheVJlZiBpbXBsZW1lbnRzIFBvcnRhbEhvc3Qge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3J0YWxIb3N0OiBQb3J0YWxIb3N0KSB7IH1cblxuICBhdHRhY2gocG9ydGFsOiBQb3J0YWw8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbEhvc3QuYXR0YWNoKHBvcnRhbCk7XG4gIH1cblxuICBkZXRhY2goKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5kZXRhY2goKTtcbiAgfVxuXG4gIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fcG9ydGFsSG9zdC5kaXNwb3NlKCk7XG4gIH1cblxuICBoYXNBdHRhY2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5oYXNBdHRhY2hlZCgpO1xuICB9XG5cbiAgLy8gVE9ETyhqZWxib3Vybik6IGFkZCBhZGRpdGlvbmFsIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyB0aGUgb3ZlcmxheS5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
