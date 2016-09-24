/**
 * Created by phanquan on 4/6/16.
 */
System.register(["@angular/core", '@angular/http', '../headers'], function(exports_1, context_1) {
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
    var core_1, http_1, headers_1;
    var CompanyService;
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
            }],
        execute: function() {
            let CompanyService = class CompanyService {
                constructor(http) {
                    this.http = http;
                    this.companyList = [];
                    this.company = {};
                    // Data ref
                    this.levedList = [
                        { value: '0', label: " Basic" },
                        { value: '1', label: " Parner" },
                        { value: '2', label: " Vip" },
                    ];
                    this.typeList = [
                        { value: '1', label: " Du Lich" },
                        { value: '2', label: " Thuong Mai" },
                        { value: '3', label: " Tu Nhan" },
                        { value: '4', label: " Nha nuoc" },
                    ];
                    this.countryList = [
                        { value: '1', label: " Type 1" },
                        { value: '2', label: " Type 2" },
                        { value: '3', label: " Type 3" },
                        { value: '4', label: " Type 4" },
                    ];
                    this.getCompanys();
                }
                getCompanys() {
                    this.http.get('http://localhost:3001/api/company', { headers: headers_1.contentHeaders })
                        .subscribe(response => {
                        this.companyList = response.json();
                    }, error => {
                        alert(error.text());
                        console.log(error.text());
                    });
                }
                getCompany(company) {
                    let body = JSON.stringify(company);
                    this.http.post('http://localhost:3001/api/companys', body, { headers: headers_1.contentHeaders })
                        .subscribe(response => {
                        this.companyList = response.json();
                    }, error => {
                        alert(error.text());
                        console.log(error.text());
                    });
                }
                getCompanyByID(comid) {
                    if (comid != '' && comid.length > 0) {
                        this.http.get('http://localhost:3001/api/company/' + comid, { headers: headers_1.contentHeaders })
                            .subscribe(response => {
                            this.company = response.json();
                        }, error => {
                            alert(error.text());
                            console.log(error.text());
                        });
                    }
                    else {
                        this.createNewCompany();
                    }
                }
                updateInfo(company) {
                    if (company._id != '' && company._id.length > 0) {
                        let body = JSON.stringify(company);
                        this.http.put('http://localhost:3001/api/company/' + company._id, body, { headers: headers_1.contentHeaders })
                            .subscribe(response => {
                            this.company = response.json();
                        }, error => {
                            alert(error.text());
                            console.log(error.text());
                        });
                    }
                }
                createNewCompany() {
                    this.company = {};
                }
                updateCompany(company) {
                    let body = JSON.stringify(company);
                    this.http.post('http://localhost:3001/api/company', body, { headers: headers_1.contentHeaders })
                        .subscribe(response => {
                        this.company = response.json();
                    }, error => {
                        alert(error.text());
                        console.log(error.text());
                    });
                }
            };
            CompanyService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], CompanyService);
            exports_1("CompanyService", CompanyService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbXBhbnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUg7Z0JBR0ksWUFBbUIsSUFBUztvQkFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO29CQUY1QixnQkFBVyxHQUFDLEVBQUUsQ0FBQztvQkFDZixZQUFPLEdBQUssRUFBRSxDQUFDO29CQTJGZixXQUFXO29CQUNYLGNBQVMsR0FBQzt3QkFDTixFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQzt3QkFDMUIsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUM7d0JBQzNCLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDO3FCQUMzQixDQUFDO29CQUVLLGFBQVEsR0FBQzt3QkFDWixFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQzt3QkFDNUIsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUM7d0JBQy9CLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDO3dCQUM1QixFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQztxQkFDaEMsQ0FBQztvQkFFRixnQkFBVyxHQUFDO3dCQUNSLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDO3dCQUMzQixFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQzt3QkFDM0IsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUM7d0JBQzNCLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDO3FCQUM5QixDQUFDO29CQTVHRSxJQUFJLENBQUMs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SSxDQUFDLE9BQU8sR0FBQyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsYUFBYSxDQUFDLE9BQU87b0JBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBYyxFQUFFLENBQUM7eUJBQ2pGLFNBQVMsQ0FDTixRQUFRO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNsQyxDQUFDLEVBQ0QsS0FBSzt3QkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzlCLENBQUMsQ0FDSixDQUFDO2dCQUNWLENBQUM7WUF1QkwsQ0FBQztZQW5IRDtnQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtZQUNiLDJDQWtIQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2NvbXBhbnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiA0LzYvMTYuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAgXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSxIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7Y29udGVudEhlYWRlcnN9IGZyb20gJy4uL2hlYWRlcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcGFueVNlcnZpY2Uge1xuICAgIGNvbXBhbnlMaXN0PVtdO1xuICAgIGNvbXBhbnk6YW55PXt9O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcbiAgICAgICAgdGhpcy5nZXRDb21wYW55cygpO1xuICAgIH1cblxuICAgIGdldENvbXBhbnlzKCl7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY29tcGFueScseyBoZWFkZXJzOiBjb250ZW50SGVhZGVycyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGFueUxpc3Q9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgZ2V0Q29tcGFueShjb21wYW55KXtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb21wYW55KTtcblxuICAgICAgICB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jb21wYW55cycsYm9keSx7IGhlYWRlcnM6IGNvbnRlbnRIZWFkZXJzIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYW55TGlzdD0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGFueUJ5SUQoY29taWQpe1xuICAgICAgICBpZihjb21pZCE9JycgJiYgY29taWQubGVuZ3RoPjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY29tcGFueS8nK2NvbWlkLHsgaGVhZGVyczogY29udGVudEhlYWRlcnMgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBhbnk9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld0NvbXBhbnkoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgdXBkYXRlSW5mbyhjb21wYW55KXtcbiAgICAgICAgaWYoY29tcGFueS5faWQhPScnICYmIGNvbXBhbnkuX2lkLmxlbmd0aD4wKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbXBhbnkpO1xuICAgICAgICAgICAgdGhpcy5odHRwLnB1dCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jb21wYW55LycrY29tcGFueS5faWQsYm9keSx7IGhlYWRlcnM6IGNvbnRlbnRIZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYW55PSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGNyZWF0ZU5ld0NvbXBhbnkoKXtcbiAgICAgICAgdGhpcy5jb21wYW55PXt9O1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBhbnkoY29tcGFueSl7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29tcGFueSk7XG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2NvbXBhbnknLCBib2R5LCB7IGhlYWRlcnM6IGNvbnRlbnRIZWFkZXJzIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYW55PSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBEYXRhIHJlZlxuICAgIGxldmVkTGlzdD1bXG4gICAgICAgIHt2YWx1ZTonMCcsbGFiZWw6XCIgQmFzaWNcIn0sXG4gICAgICAgIHt2YWx1ZTonMScsbGFiZWw6XCIgUGFybmVyXCJ9LFxuICAgICAgICB7dmFsdWU6JzInLGxhYmVsOlwiIFZpcFwifSxcbiAgICBdO1xuXG4gICAgcHVibGljIHR5cGVMaXN0PVtcbiAgICAgICAge3ZhbHVlOicxJyxsYWJlbDpcIiBEdSBMaWNoXCJ9LFxuICAgICAgICB7dmFsdWU6JzInLGxhYmVsOlwiIFRodW9uZyBNYWlcIn0sXG4gICAgICAgIHt2YWx1ZTonMycsbGFiZWw6XCIgVHUgTmhhblwifSxcbiAgICAgICAge3ZhbHVlOic0JyxsYWJlbDpcIiBOaGEgbnVvY1wifSxcbiAgICBdO1xuXG4gICAgY291bnRyeUxpc3Q9W1xuICAgICAgICB7dmFsdWU6JzEnLGxhYmVsOlwiIFR5cGUgMVwifSxcbiAgICAgICAge3ZhbHVlOicyJyxsYWJlbDpcIiBUeXBlIDJcIn0sXG4gICAgICAgIHt2YWx1ZTonMycsbGFiZWw6XCIgVHlwZSAzXCJ9LFxuICAgICAgICB7dmFsdWU6JzQnLGxhYmVsOlwiIFR5cGUgNFwifSxcbiAgICBdO1xuXG59XG5cbmludGVyZmFjZSBJQ29tcGFueSB7XG4gICAgQ29kZTogc3RyaW5nO1xuICAgIE5hbWU6IHN0cmluZztcbiAgICBGdWxsTmFtZTogc3RyaW5nO1xuICAgIENvbnRhY3Q6IHN0cmluZztcbiAgICBBZGRyZXNzOiBzdHJpbmc7XG4gICAgTWFpbDogc3RyaW5nO1xuICAgIFdlYlNpdGU6IHN0cmluZztcbiAgICBQaG9uZTogc3RyaW5nO1xuICAgIEZheDogc3RyaW5nO1xuICAgIERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgQmlydGhkYXk6IHN0cmluZztcbiAgICBTdGF0ZTogc3RyaW5nO1xuICAgIE1vYmlsZTogc3RyaW5nO1xuICAgIENvdW50cnk6IHN0cmluZztcbiAgICBUeXBlOnN0cmluZztcbiAgICBUYXhDb2RlOnN0cmluZztcbiAgICBCYW5rQ29kZTpzdHJpbmc7XG4gICAgQmFua05hbWU6c3RyaW5nO1xuICAgIFN0YXR1czpzdHJpbmc7XG4gICAgTGV2ZWQ6c3RyaW5nO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
