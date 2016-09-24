/**
 * Created by phanquan on 3/30/16.
 * Now, Not use
 */
System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var LoggedInRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let LoggedInRouterOutlet_1;
            let LoggedInRouterOutlet = LoggedInRouterOutlet_1 = class LoggedInRouterOutlet extends router_1.RouterOutlet {
            };
            LoggedInRouterOutlet = LoggedInRouterOutlet_1 = __decorate([
                core_1.Directive({
                    selector: 'router-outlet',
                    directives: [router_1.ROUTER_DIRECTIVES, LoggedInRouterOutlet],
                }), 
                __metadata('design:paramtypes', [])
            ], LoggedInRouterOutlet);
            exports_1("LoggedInRouterOutlet", LoggedInRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxvZ2dlZEluT3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0g7bUdBQTBDLHFCQUFZO1lBeUJ0RCxDQUFDO1lBOUJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLG9CQUFvQixDQUFDO2lCQUN2RCxDQUFDOztvQ0FBQTtZQUVGLHVEQXlCQyxDQUFBIiwiZmlsZSI6IkxvZ2dlZEluT3V0bGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDMvMzAvMTYuXG4gKiBOb3csIE5vdCB1c2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgQXR0cmlidXRlLCBWaWV3Q29udGFpbmVyUmVmLCBEeW5hbWljQ29tcG9uZW50TG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbi8vaW1wb3J0IHtSb3V0ZXIsIFJvdXRlck91dGxldH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIsUm91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3B1Y2xpYy9sb2dpbi5jb21wb25lbnRcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdyb3V0ZXItb3V0bGV0JyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsTG9nZ2VkSW5Sb3V0ZXJPdXRsZXRdLFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2dlZEluUm91dGVyT3V0bGV0IGV4dGVuZHMgUm91dGVyT3V0bGV0IHtcbiAgICBwdWJsaWNSb3V0ZXM6IGFueTtcbiAgICBwcml2YXRlIHBhcmVudFJvdXRlcjogUm91dGVyO1xuXG4gICAgLy9jb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogVmlld0NvbnRhaW5lclJlZiwgX2xvYWRlcjogRHluYW1pY0NvbXBvbmVudExvYWRlcixcbiAgICAvLyAgICAgICAgICAgIF9wYXJlbnRSb3V0ZXI6IFJvdXRlciwgQEF0dHJpYnV0ZSgnbmFtZScpIG5hbWVBdHRyOiBzdHJpbmcpIHtcbiAgICAvLyAgICAvL3N1cGVyKF9lbGVtZW50UmVmLCBfbG9hZGVyLCBfcGFyZW50Um91dGVyLCBuYW1lQXR0cik7XG4gICAgLy9cbiAgICAvLyAgICB0aGlzLnBhcmVudFJvdXRlciA9IF9wYXJlbnRSb3V0ZXI7XG4gICAgLy8gICAgLy8gVGhlIEJvb2xlYW4gZm9sbG93aW5nIGVhY2ggcm91dGUgYmVsb3cgZGVub3RlcyB3aGV0aGVyIHRoZSByb3V0ZSByZXF1aXJlcyBhdXRoZW50aWNhdGlvbiB0byB2aWV3XG4gICAgLy8gICAgdGhpcy5wdWJsaWNSb3V0ZXMgPSB7XG4gICAgLy8gICAgICAgICdsb2dpbic6IHRydWUsXG4gICAgLy8gICAgICAgICdzaWdudXAnOiB0cnVlXG4gICAgLy8gICAgfTtcbiAgICAvL31cblxuICAgIC8vIGNoZWNrIGF1dGhcbiAgICAvL2FjdGl2YXRlKGluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbikge1xuICAgIC8vICAgIGxldCB1cmwgPSBpbnN0cnVjdGlvbi51cmxQYXRoO1xuICAgIC8vICAgIGlmICghdGhpcy5wdWJsaWNSb3V0ZXNbdXJsXSAmJiAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dCcpKSB7XG4gICAgLy8gICAgICAgIC8vIHRvZG86IHJlZGlyZWN0IHRvIExvZ2luLCBtYXkgYmUgdGhlcmUgYSBiZXR0ZXIgd2F5P1xuICAgIC8vICAgICAgICB0aGlzLnBhcmVudFJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcbiAgICAvLyAgICB9XG4gICAgLy8gICAgcmV0dXJuIHN1cGVyLmFjdGl2YXRlKGluc3RydWN0aW9uKTtcbiAgICAvL31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
