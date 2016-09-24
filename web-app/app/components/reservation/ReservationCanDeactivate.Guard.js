/**
 * Created by phanquan on 7/16/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReservationCanDeactivateGuard;
    return {
        setters:[],
        execute: function() {
            class ReservationCanDeactivateGuard {
                canDeactivate(component) {
                    return component.canDeactivate ? component.canDeactivate() : true;
                }
            }
            exports_1("ReservationCanDeactivateGuard", ReservationCanDeactivateGuard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlLkd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7OztZQVFIO2dCQUNJLGFBQWEsQ0FBQyxTQUFpQztvQkFDM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDdEUsQ0FBQztZQUNMLENBQUM7WUFKRCx5RUFJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25DYW5EZWFjdGl2YXRlLkd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDcvMTYvMTYuXG4gKi9cblxuaW1wb3J0IHsgQ2FuRGVhY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db21wb25lbnREZWFjdGl2YXRlIHtcbiAgICBjYW5EZWFjdGl2YXRlOiAoKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcbn1cbmV4cG9ydCBjbGFzcyBSZXNlcnZhdGlvbkNhbkRlYWN0aXZhdGVHdWFyZCBpbXBsZW1lbnRzIENhbkRlYWN0aXZhdGU8Q2FuQ29tcG9uZW50RGVhY3RpdmF0ZT4ge1xuICAgIGNhbkRlYWN0aXZhdGUoY29tcG9uZW50OiBDYW5Db21wb25lbnREZWFjdGl2YXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUgPyBjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpIDogdHJ1ZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
