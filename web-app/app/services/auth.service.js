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
                { id: '1', code: '/dashboard', icon: 'fa fa-th', name: 'Dashboard' },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3FCQStHSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O1lBckdSO2dCQU9JLFlBQW1CLElBQVMsRUFBUSxNQUFhO29CQUE5QixTQUFJLEdBQUosSUFBSSxDQUFLO29CQUFRLFdBQU0sR0FBTixNQUFNLENBQU87b0JBTmpELFNBQUksR0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFFZixjQUFTLEdBQVUsS0FBSyxDQUFDO29CQUN6QixZQUFPLEdBQUMsRUFBRSxDQUFDO29CQUNYLGNBQVMsR0FBUSxNQUFNLENBQUM7b0JBQ3hCLFVBQUssR0FBQyxFQUFFLENBQUM7b0JBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO29CQUN6QixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztvQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUMsTUFBTSxDQUFDO29CQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXJCLENBQUM7Z0JBRUEsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRO29CQUNyQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLHdCQUFjLEVBQUUsQ0FBQzt5QkFDakYsU0FBUyxDQUNOLFFBQVE7d0JBQ0osWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0RCxZQUFZLENBQUMsT0FBTyxDQUFDLE1B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QUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7Z0JBQy9ELEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO2dCQUNwRixFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztnQkFDbEYsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7Z0JBQzlFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO2dCQUN6RSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLFVBQVU7b0JBQ25FLEdBQUcsRUFBQzt3QkFDSSxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt3QkFDMUQsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7cUJBQzdEO2lCQUNSO2FBQ0osQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gMi8yOC8xNi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAgXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSxIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Y29udGVudEhlYWRlcnN9IGZyb20gJy4uL2hlYWRlcnMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgdXNlcj17bmFtZTonJ307XG4gICAgaXNBdXRoOmJvb2xlYW47XG4gICAgaXNTaWRlYmFyOmJvb2xlYW4gPWZhbHNlO1xuICAgIHVyaU5hbWU9XCJcIjtcbiAgICBwYWdlVGl0bGU6c3RyaW5nPSdIb21lJztcbiAgICBtZW51cz1bXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwLHB1YmxpYyByb3V0ZXI6Um91dGVyKSB7XG4gICAgICAgIHRoaXMudXNlci5uYW1lID0gXCJndWVzdFwiO1xuICAgICAgICB0aGlzLmlzQXV0aD1mYWxzZTtcbiAgICAgICAgdGhpcy5tZW51cz1NRU5VO1xuICAgICAgICB0aGlzLnVyaU5hbWU9XCJIb21lXCI7XG4gICAgICAgIHRoaXMuY2hlY2tBdXRoKCk7XG5cbiAgICB9XG5cbiAgICAgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmR9KTtcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoL3NpZ25pbicsIGJvZHksIHsgaGVhZGVyczogY29udGVudEhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzcG9uc2UuanNvbigpLmlkX3Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5qc29uKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyPXJlc3BvbnNlLmpzb24oKS51c2VyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aD1yZXNwb25zZS5qc29uKCkuaXNBdXRoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhcj10cnVlO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGg9ZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgvc2lnbm91dCcseyBoZWFkZXJzOiBjb250ZW50SGVhZGVycyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdqd3QnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLm5hbWU9XCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0F1dGg9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaWRlYmFyPWZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgY2hlY2tBdXRoKClcbiAgICB7XG4gICAgICAgIGxldCBhdXRoPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGlmKGF1dGgpe1xuICAgICAgICAgICAgdGhpcy51c2VyPWF1dGgudXNlcjtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoPWF1dGguaXNBdXRoO1xuXG4gICAgICAgICAgICBpZih0aGlzLmlzQXV0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhcj10cnVlO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaWRlYmFyPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9sZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTogJ3F1YW5waGFuJywgcGFzc3dvcmQ6ICdzYTEyMzQ1Nid9KTtcbiAgICAgICAgLy90aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aCcseyBoZWFkZXJzOiBjb250ZW50SGVhZGVycyB9KVxuICAgICAgICAvLyAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMudXNlcj1yZXNwb25zZS5qc29uKCkudXNlcjtcbiAgICAgICAgLy8gICAgICAgICAgICB0aGlzLmlzQXV0aD1yZXNwb25zZS5qc29uKCkuaXNBdXRoO1xuICAgICAgICAvLyAgICAgICAgICAgIGlmKHRoaXMuaXNBdXRoKVxuICAgICAgICAvLyAgICAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgdGhpcy5pc1NpZGViYXI9dHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuaXNTaWRlYmFyPWZhbHNlO1xuICAgICAgICAvLyAgICAgICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCgpKTtcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAvLyAgICAgICAgfVxuICAgICAgICAvLyAgICApO1xuICAgIH1cblxuXG5cbiAgICBnZXRtZW51cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZW51cztcbiAgICB9XG5cbiAgICBzZXRTaWRlQmFyKGlzU2lkZUJhcjpib29sZWFuKXtcbiAgICAgICAgdGhpcy5pc1NpZGViYXI9aXNTaWRlQmFyO1xuICAgIH1cbiAgICBzZXRQYWdlVGl0bGUocGFnZVRpdGxlOnN0cmluZyl7XG4gICAgICAgIHRoaXMucGFnZVRpdGxlPXBhZ2VUaXRsZTtcbiAgICB9XG5cbn1cbnZhciBNRU5VID0gW1xuICAgIHtpZDonMScsY29kZTonL2Rhc2hib2FyZCcsIGljb246ICdmYSBmYS10aCcsIG5hbWU6ICdEYXNoYm9hcmQnfSxcbiAgICB7aWQ6JzMnLGNvZGU6Jy9yZXNlcnZhdGlvbicsIGljb246ICdnbHlwaGljb24gZ2x5cGhpY29uLW1vdmUnLCBuYW1lOiAnUmVzZXJ2YXRpb25zJ30sXG4gICAge2lkOic0Jyxjb2RlOicvY29tcGFueScsIGljb246ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbGRlci1vcGVuJywgbmFtZTogJ0NvbXBhbnknfSxcbiAgICB7aWQ6JzQnLGNvZGU6Jy9ib29raW5nJywgaWNvbjogJ2dseXBoaWNvbiBnbHlwaGljb24tcmV0d2VldCcsIG5hbWU6ICdCb29raW5nJ30sXG4gICAge2lkOic0Jyxjb2RlOicvc2V0dXAnLCBpY29uOiAnZ2x5cGhpY29uIGdseXBoaWNvbi13cmVuY2gnLCBuYW1lOiAnU2V0dXAnfSxcbiAgICB7aWQ6JzQnLGNvZGU6JycsIGljb246ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpc3QtYWx0JywgbmFtZTogJ0JhY2sgZW5kJyxcbiAgICAgICAgc3ViOltcbiAgICAgICAgICAgICAgICB7aWQ6JzQnLGNvZGU6JycsIGljb246ICdmYSBmYS1jaXJjbGUtbycsIG5hbWU6ICdDb21wYW55MSd9LFxuICAgICAgICAgICAgICAgIHtpZDonNCcsY29kZTonJywgaWNvbjogJ2ZhIGZhLWNpcmNsZS1vJywgbmFtZTogJ0NvbXBhbnkyJ30sXG4gICAgICAgICAgICBdXG4gICAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
