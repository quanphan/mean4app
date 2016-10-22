System.register(["@angular/core", '@angular/http', '../headers', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, http_1, headers_1, router_1;
    var AuthService, MENU;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let AuthService = class AuthService {
                constructor(http, router) {
                    this.http = http;
                    this.router = router;
                    this.user = { name: '' };
                    this.isSidebar = false;
                    this.uriName = "";
                    this.pageTitle = 'Home';
                    this.menus = [];
                    this.user.name = "guest";
                    this.isAuth = false;
                    this.menus = MENU;
                    this.uriName = "Home";
                    this.checkAuth();
                }
                login(username, password) {
                    let body = JSON.stringify({ username: username, password: password });
                    this.http.post('http://localhost:3001/auth/signin', body, { headers: headers_1.contentHeaders })
                        .subscribe(response => {
                        localStorage.setItem('jwt', response.json().id_token);
                        localStorage.setItem('auth', JSON.stringify(response.json()));
                        this.user = response.json().user;
                        this.isAuth = response.json().isAuth;
                        this.isSidebar = true;
                        //this.router.navigate(['/dashboard']);
                    }, error => {
                        this.isAuth = false;
                    });
                }
                logout() {
                    this.http.get('http://localhost:3001/auth/signout', { headers: headers_1.contentHeaders })
                        .subscribe(response => {
                        localStorage.removeItem('jwt');
                        localStorage.removeItem('auth');
                        this.user.name = "";
                        this.isAuth = false;
                        this.isSidebar = false;
                    }, error => {
                        alert(error.text());
                        console.log(error.text());
                    });
                }
                checkAuth() {
                    let auth = JSON.parse(localStorage.getItem('auth'));
                    if (auth) {
                        this.user = auth.user;
                        this.isAuth = auth.isAuth;
                        if (this.isAuth) {
                            this.isSidebar = true;
                        }
                        else {
                            this.isSidebar = false;
                        }
                    }
                    //let body = JSON.stringify({username: 'quanphan', password: 'sa123456'});
                    //this.http.get('http://localhost:3001/auth',{ headers: contentHeaders })
                    //    .subscribe(
                    //        response => {
                    //            this.user=response.json().user;
                    //            this.isAuth=response.json().isAuth;
                    //            if(this.isAuth)
                    //            {
                    //                this.isSidebar=true;
                    //            }else {
                    //                this.isSidebar=false;
                    //            }
                    //
                    //        },
                    //        error => {
                    //            alert(error.text());
                    //            console.log(error.text());
                    //        }
                    //    );
                }
                getmenus() {
                    return this.menus;
                }
                setSideBar(isSideBar) {
                    this.isSidebar = isSideBar;
                }
                setPageTitle(pageTitle) {
                    this.pageTitle = pageTitle;
                }
            };
            AuthService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, router_1.Router])
            ], AuthService);
            exports_1("AuthService", AuthService);
            MENU = [
                { id: '1', code: '/dashboard', icon: 'glyphicon glyphicon-dashboard', name: 'Dashboard' },
                { id: '2', code: '/demo', icon: 'fa fa-th', name: 'Demo' },
                { id: '3', code: '/reservation', icon: 'glyphicon glyphicon-move', name: 'Reservations' },
                { id: '4', code: '/company', icon: 'glyphicon glyphicon-folder-open', name: 'Company' },
                { id: '4', code: '/booking', icon: 'glyphicon glyphicon-retweet', name: 'Booking' },
                { id: '4', code: '/setup', icon: 'glyphicon glyphicon-wrench', name: 'Setup' },
                { id: '4', code: '', icon: 'glyphicon glyphicon-list-alt', name: 'Back end',
                    sub: [
                        { id: '4', code: '', icon: 'fa fa-circle-o', name: 'Company1' },
                        { id: '4', code: '', icon: 'fa fa-circle-o', name: 'Company2' },
                    ]
                },
            ];
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3FCQStHSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O1lBckdSO2dCQU9JLFlBQW1CLElBQVMsRUFBUSxNQUFhO29CQUE5QixTQUFJLEdBQUosSUFBSSxDQUFLO29CQUFRLFdBQU0sR0FBTixNQUFNLENBQU87b0JBTmpELFNBQUksR0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFFZixjQUFTLEdBQVUsS0FBSyxDQUFDO29CQUN6QixZQUFPLEdBQUMsRUFBRSxDQUFDO29CQUNYLGNBQVMsR0FBUSxNQUFNLENBQUM7b0JBQ3hCLFVBQUssR0FBQyxFQUFFLENBQUM7b0JBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztvQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUMsTUFBTSxDQUFDO29CQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXJCLENBQUM7Z0JBRUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRO29CQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUFjLEVBQUUsQ0FBQzt5QkFDakYsU0FBUyxDQUNOLFFBQVE7d0JBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0RCxZQUFZLENBQUMsT0FBTyxDQUFDLE1B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QUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztnQkFDcEYsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO2dCQUNyRCxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztnQkFDcEYsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLGlDQUFpQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7Z0JBQ2xGLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO2dCQUM5RSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztnQkFDekUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLDhCQUE4QixFQUFFLElBQUksRUFBRSxVQUFVO29CQUNuRSxHQUFHLEVBQUM7d0JBQ0ksRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7d0JBQzFELEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO3FCQUM3RDtpQkFDUjthQUNKLENBQUMiLCJmaWxlIjoic2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDIvMjgvMTYuXG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAgXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge2NvbnRlbnRIZWFkZXJzfSBmcm9tICcuLi9oZWFkZXJzJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIHVzZXI9e25hbWU6Jyd9O1xuICAgIGlzQXV0aDpib29sZWFuO1xuICAgIGlzU2lkZWJhcjpib29sZWFuID1mYWxzZTtcbiAgICB1cmlOYW1lPVwiXCI7XG4gICAgcGFnZVRpdGxlOnN0cmluZz0nSG9tZSc7XG4gICAgbWVudXM9W107XG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cCxwdWJsaWMgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnVzZXIubmFtZSA9IFwiZ3Vlc3RcIjtcbiAgICAgICAgdGhpcy5pc0F1dGg9ZmFsc2U7XG4gICAgICAgIHRoaXMubWVudXM9TUVOVTtcbiAgICAgICAgdGhpcy51cmlOYW1lPVwiSG9tZVwiO1xuICAgICAgICB0aGlzLmNoZWNrQXV0aCgpO1xuXG4gICAgfVxuXG4gICAgIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCl7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aC9zaWduaW4nLCBib2R5LCB7IGhlYWRlcnM6IGNvbnRlbnRIZWFkZXJzIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIHJlc3BvbnNlLmpzb24oKS5pZF90b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuanNvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcj1yZXNwb25zZS5qc29uKCkudXNlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGg9cmVzcG9uc2UuanNvbigpLmlzQXV0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NpZGViYXI9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoPWZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCl7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoL3NpZ25vdXQnLHsgaGVhZGVyczogY29udGVudEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnand0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5uYW1lPVwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhcj1mYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNoZWNrQXV0aCgpXG4gICAge1xuICAgICAgICBsZXQgYXV0aD1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBpZihhdXRoKXtcbiAgICAgICAgICAgIHRoaXMudXNlcj1hdXRoLnVzZXI7XG4gICAgICAgICAgICB0aGlzLmlzQXV0aD1hdXRoLmlzQXV0aDtcblxuICAgICAgICAgICAgaWYodGhpcy5pc0F1dGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NpZGViYXI9dHJ1ZTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhcj1mYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6ICdxdWFucGhhbicsIHBhc3N3b3JkOiAnc2ExMjM0NTYnfSk7XG4gICAgICAgIC8vdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgnLHsgaGVhZGVyczogY29udGVudEhlYWRlcnMgfSlcbiAgICAgICAgLy8gICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICB0aGlzLnVzZXI9cmVzcG9uc2UuanNvbigpLnVzZXI7XG4gICAgICAgIC8vICAgICAgICAgICAgdGhpcy5pc0F1dGg9cmVzcG9uc2UuanNvbigpLmlzQXV0aDtcbiAgICAgICAgLy8gICAgICAgICAgICBpZih0aGlzLmlzQXV0aClcbiAgICAgICAgLy8gICAgICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuaXNTaWRlYmFyPXRydWU7XG4gICAgICAgIC8vICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhcj1mYWxzZTtcbiAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgIGFsZXJ0KGVycm9yLnRleHQoKSk7XG4gICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcbiAgICAgICAgLy8gICAgICAgIH1cbiAgICAgICAgLy8gICAgKTtcbiAgICB9XG5cblxuXG4gICAgZ2V0bWVudXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudXM7XG4gICAgfVxuXG4gICAgc2V0U2lkZUJhcihpc1NpZGVCYXI6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyPWlzU2lkZUJhcjtcbiAgICB9XG4gICAgc2V0UGFnZVRpdGxlKHBhZ2VUaXRsZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnBhZ2VUaXRsZT1wYWdlVGl0bGU7XG4gICAgfVxuXG59XG52YXIgTUVOVSA9IFtcbiAgICB7aWQ6JzEnLGNvZGU6Jy9kYXNoYm9hcmQnLCBpY29uOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1kYXNoYm9hcmQnLCBuYW1lOiAnRGFzaGJvYXJkJ30sXG4gICAge2lkOicyJyxjb2RlOicvZGVtbycsIGljb246ICdmYSBmYS10aCcsIG5hbWU6ICdEZW1vJ30sXG4gICAge2lkOiczJyxjb2RlOicvcmVzZXJ2YXRpb24nLCBpY29uOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1tb3ZlJywgbmFtZTogJ1Jlc2VydmF0aW9ucyd9LFxuICAgIHtpZDonNCcsY29kZTonL2NvbXBhbnknLCBpY29uOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb2xkZXItb3BlbicsIG5hbWU6ICdDb21wYW55J30sXG4gICAge2lkOic0Jyxjb2RlOicvYm9va2luZycsIGljb246ICdnbHlwaGljb24gZ2x5cGhpY29uLXJldHdlZXQnLCBuYW1lOiAnQm9va2luZyd9LFxuICAgIHtpZDonNCcsY29kZTonL3NldHVwJywgaWNvbjogJ2dseXBoaWNvbiBnbHlwaGljb24td3JlbmNoJywgbmFtZTogJ1NldHVwJ30sXG4gICAge2lkOic0Jyxjb2RlOicnLCBpY29uOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCcsIG5hbWU6ICdCYWNrIGVuZCcsXG4gICAgICAgIHN1YjpbXG4gICAgICAgICAgICAgICAge2lkOic0Jyxjb2RlOicnLCBpY29uOiAnZmEgZmEtY2lyY2xlLW8nLCBuYW1lOiAnQ29tcGFueTEnfSxcbiAgICAgICAgICAgICAgICB7aWQ6JzQnLGNvZGU6JycsIGljb246ICdmYSBmYS1jaXJjbGUtbycsIG5hbWU6ICdDb21wYW55Mid9LFxuICAgICAgICAgICAgXVxuICAgIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
