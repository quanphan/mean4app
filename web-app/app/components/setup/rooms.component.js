System.register(['@angular/core', '../../services/setup.service', '../../services/auth.service', '@angular/router', '../../control-component/select.component', '../../control-component/input/search.component', '../../control-component/input/input.component'], function(exports_1, context_1) {
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
    var core_1, setup_service_1, auth_service_1, router_1, select_component_1, search_component_1, input_component_1;
    var RoomComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (setup_service_1_1) {
                setup_service_1 = setup_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (select_component_1_1) {
                select_component_1 = select_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            }],
        execute: function() {
            let RoomComponent = class RoomComponent {
                constructor(router, setupService, authService) {
                    this.router = router;
                    this.setupService = setupService;
                    this.authService = authService;
                    this.roomSelete = {};
                    this.roomFileter = '';
                    this.addActive = false;
                    // Roomtype
                    this.roomTypeSelete = {};
                    // RoomCategory
                    this.roomCateSelete = {};
                    // Room rate
                    this.rateSelete = {};
                    //this.setupService = setupService;
                    this.authService.setPageTitle('Rooms');
                }
                onSearch() {
                }
                onClick(item) {
                    this.roomSelete = item;
                }
                edit(item) {
                    this.roomSelete = item;
                    this.addActive = true;
                }
                newRoom() {
                    this.roomSelete = {};
                    this.addActive = true;
                }
                doneSubmit() {
                    this.addActive = false;
                }
                onSubmit() {
                }
                roomTypeClick(item) {
                    this.roomTypeSelete = item;
                }
                onRoomTypeSubmit() {
                    this.roomTypeSelete = {};
                }
                onNewRoomType() {
                    this.roomTypeSelete = {};
                }
                roomCateClick(item) {
                    this.roomCateSelete = item;
                }
                onRoomCateSubmit() {
                    this.roomCateSelete = {};
                }
                onNewRoomCate() {
                    this.roomCateSelete = {};
                }
                rateClick(item) {
                    this.rateSelete = item;
                }
                onRateSubmit() {
                    this.rateSelete = {};
                }
                onNewRate() {
                    this.rateSelete = {};
                }
            };
            RoomComponent = __decorate([
                core_1.Component({
                    templateUrl: '/views/setup/rooms.html',
                    directives: [select_component_1.SelectComponent, search_component_1.SearchComponent, input_component_1.InputComponent],
                }), 
                __metadata('design:paramtypes', [router_1.Router, setup_service_1.SetupService, auth_service_1.AuthService])
            ], RoomComponent);
            exports_1("RoomComponent", RoomComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2V0dXAvcm9vbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUNJLFlBQW9CLE1BQWEsRUFBVSxZQUF5QixFQUNoRCxXQUF1QjtvQkFEdkIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDaEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBSTNDLGVBQVUsR0FBQyxFQUFFLENBQUM7b0JBQ2QsZ0JBQVcsR0FBQyxFQUFFLENBQUM7b0JBQ2YsY0FBUyxHQUFDLEtBQUssQ0FBQTtvQkEyQmYsV0FBVztvQkFDWCxtQkFBYyxHQUFDLEVBQUUsQ0FBQztvQkFZbEIsZUFBZTtvQkFDZixtQkFBYyxHQUFDLEVBQUUsQ0FBQztvQkFZbEIsWUFBWTtvQkFDWixlQUFVLEdBQUMsRUFBRSxDQUFDO29CQTNEVixtQ0FBbUM7b0JBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUlELFFBQVE7Z0JBRVIsQ0FBQztnQkFFRCxPQUFPLENBQUMsSUFBSTtvQkFDUixJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxJQUFJLENBQUMsSUFBSTtvQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztvQkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsT0FBTztvQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsVUFBVTtvQkFFTixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxRQUFRO2dCQUVSLENBQUM7Z0JBSUQsYUFBYSxDQUFDLElBQUk7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsZ0JBQWdCO29CQUNaLElBQUksQ0FBQyxjQUFjLEdBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUNELGFBQWE7b0JBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBSUQsYUFBYSxDQUFDLElBQUk7b0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsZ0JBQWdCO29CQUNaLElBQUksQ0FBQyxjQUFjLEdBQUMsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUNELGFBQWE7b0JBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBSUQsU0FBUyxDQUFDLElBQUk7b0JBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsWUFBWTtvQkFDUixJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRCxTQUFTO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDO2dCQUN2QixDQUFDO1lBQ0wsQ0FBQztZQTlFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBQyx5QkFBeUI7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUMsa0NBQWUsRUFBQyxnQ0FBYyxDQUFDO2lCQUMvRCxDQUFDOzs2QkFBQTtZQUVGLHlDQXlFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2V0dXAvcm9vbXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDUvMi8xNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um9vbUNvbXBvbmVudH0gZnJvbSBcImNvbXBvbmVudHMvc2V0dXAvcm9vbXMuY29tcG9uZW50XCI7XG5pbXBvcnQge1NldHVwU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2V0dXAuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29udHJvbC1jb21wb25lbnQvaW5wdXQvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250cm9sLWNvbXBvbmVudC9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6Jy92aWV3cy9zZXR1cC9yb29tcy5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbU2VsZWN0Q29tcG9uZW50LFNlYXJjaENvbXBvbmVudCxJbnB1dENvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgUm9vbUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHNldHVwU2VydmljZTpTZXR1cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSl7XG4gICAgICAgIC8vdGhpcy5zZXR1cFNlcnZpY2UgPSBzZXR1cFNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2V0UGFnZVRpdGxlKCdSb29tcycpO1xuICAgIH1cbiAgICByb29tU2VsZXRlPXt9O1xuICAgIHJvb21GaWxldGVyPScnO1xuICAgIGFkZEFjdGl2ZT1mYWxzZVxuICAgIG9uU2VhcmNoKCl7XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrKGl0ZW0pe1xuICAgICAgICB0aGlzLnJvb21TZWxldGU9aXRlbTtcbiAgICB9XG5cbiAgICBlZGl0KGl0ZW0pe1xuICAgICAgICB0aGlzLnJvb21TZWxldGU9aXRlbTtcbiAgICAgICAgdGhpcy5hZGRBY3RpdmU9dHJ1ZTtcbiAgICB9XG4gICAgbmV3Um9vbSgpe1xuICAgICAgICB0aGlzLnJvb21TZWxldGU9e307XG4gICAgICAgIHRoaXMuYWRkQWN0aXZlPXRydWU7XG4gICAgfVxuXG4gICAgZG9uZVN1Ym1pdCgpXG4gICAge1xuICAgICAgICB0aGlzLmFkZEFjdGl2ZT1mYWxzZTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpe1xuXG4gICAgfVxuXG4gICAgLy8gUm9vbXR5cGVcbiAgICByb29tVHlwZVNlbGV0ZT17fTtcbiAgICByb29tVHlwZUNsaWNrKGl0ZW0pe1xuICAgICAgICB0aGlzLnJvb21UeXBlU2VsZXRlPWl0ZW07XG4gICAgfVxuXG4gICAgb25Sb29tVHlwZVN1Ym1pdCgpe1xuICAgICAgICB0aGlzLnJvb21UeXBlU2VsZXRlPXt9O1xuICAgIH1cbiAgICBvbk5ld1Jvb21UeXBlKCl7XG4gICAgICAgIHRoaXMucm9vbVR5cGVTZWxldGU9e307XG4gICAgfVxuXG4gICAgLy8gUm9vbUNhdGVnb3J5XG4gICAgcm9vbUNhdGVTZWxldGU9e307XG4gICAgcm9vbUNhdGVDbGljayhpdGVtKXtcbiAgICAgICAgdGhpcy5yb29tQ2F0ZVNlbGV0ZT1pdGVtO1xuICAgIH1cblxuICAgIG9uUm9vbUNhdGVTdWJtaXQoKXtcbiAgICAgICAgdGhpcy5yb29tQ2F0ZVNlbGV0ZT17fTtcbiAgICB9XG4gICAgb25OZXdSb29tQ2F0ZSgpe1xuICAgICAgICB0aGlzLnJvb21DYXRlU2VsZXRlPXt9O1xuICAgIH1cblxuICAgIC8vIFJvb20gcmF0ZVxuICAgIHJhdGVTZWxldGU9e307XG4gICAgcmF0ZUNsaWNrKGl0ZW0pe1xuICAgICAgICB0aGlzLnJhdGVTZWxldGU9aXRlbTtcbiAgICB9XG5cbiAgICBvblJhdGVTdWJtaXQoKXtcbiAgICAgICAgdGhpcy5yYXRlU2VsZXRlPXt9O1xuICAgIH1cbiAgICBvbk5ld1JhdGUoKXtcbiAgICAgICAgdGhpcy5yYXRlU2VsZXRlPXt9O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
