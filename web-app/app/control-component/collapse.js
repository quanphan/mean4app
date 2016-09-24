/**
 * Created by phanquan on 3/12/16.
 */
System.register(['@angular/core', 'ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, ng2_bootstrap_1;
    var template, CollapseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            template = require('./collapse-demo.html');
            let CollapseComponent = class CollapseComponent {
                constructor() {
                    this.isCollapsed = false;
                }
            };
            CollapseComponent = __decorate([
                core_1.Component({
                    selector: 'collapse-demo',
                    directives: [ng2_bootstrap_1.Collapse],
                    template: template
                }), 
                __metadata('design:paramtypes', [])
            ], CollapseComponent);
            exports_1("CollapseComponent", CollapseComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtY29tcG9uZW50L2NvbGxhcHNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7OztRQUtDLFFBQVE7Ozs7Ozs7Ozs7WUFBUixRQUFRLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFPL0M7Z0JBQUE7b0JBQ1csZ0JBQVcsR0FBVyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7WUFBRCxDQUFDO1lBUkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsVUFBVSxFQUFFLENBQUMsd0JBQVEsQ0FBQztvQkFDdEIsUUFBUSxFQUFFLFFBQVE7aUJBQ3JCLENBQUM7O2lDQUFBO1lBRUYsaURBRUMsQ0FBQSIsImZpbGUiOiJjb250cm9sLWNvbXBvbmVudC9jb2xsYXBzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiAzLzEyLzE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sbGFwc2V9IGZyb20gJ25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHtDb2xsYXBzZUNvbXBvbmVudH0gZnJvbSAgJy4vY29sbGFwc2UnO1xubGV0IHRlbXBsYXRlID0gcmVxdWlyZSgnLi9jb2xsYXBzZS1kZW1vLmh0bWwnKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29sbGFwc2UtZGVtbycsXG4gICAgZGlyZWN0aXZlczogW0NvbGxhcHNlXSxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb2xsYXBzZUNvbXBvbmVudCB7XG4gICAgcHVibGljIGlzQ29sbGFwc2VkOmJvb2xlYW4gPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
