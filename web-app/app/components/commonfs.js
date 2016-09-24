System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Datetime;
    return {
        setters:[],
        execute: function() {
            class Datetime {
                constructor() {
                }
                getCurDate() {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    if (mm < 10) {
                        mm = '0' + mm;
                    }
                    today = mm + '/' + dd + '/' + yyyy;
                    return today;
                }
                addDate(date, days) {
                    date = new Date();
                    var currentDate = date.getDate();
                    date.setDate(currentDate + days);
                    var dd = date.getDate();
                    var mm = date.getMonth() + 1; //January is 0!
                    var yyyy = date.getFullYear();
                    if (dd < 10) {
                        dd = '0' + dd;
                    }
                    if (mm < 10) {
                        mm = '0' + mm;
                    }
                    date = mm + '/' + dd + '/' + yyyy;
                    return date;
                }
                getYearMonth(date) {
                    return date.substr(0, 3) + date.substr(6, 4);
                }
                getDate(date) {
                    return date.substr(3, 2);
                }
                getMonth(date) {
                    return date.substr(0, 3);
                }
                getYear(date) {
                    return date.substr(6, 4);
                }
            }
            exports_1("Datetime", Datetime);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUtBO2dCQUNJO2dCQUVBLENBQUM7Z0JBRUQsVUFBVTtvQkFFTixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUN2QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO29CQUM1QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRS9CLEVBQUUsQ0FBQSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNQLEVBQUUsR0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFBO29CQUNiLENBQUM7b0JBRUQsRUFBRSxDQUFBLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsRUFBRSxHQUFDLEdBQUcsR0FBQyxFQUFFLENBQUE7b0JBQ2IsQ0FBQztvQkFDRCxLQUFLLEdBQUcsRUFBRSxHQUFDLEdBQUcsR0FBQyxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztvQkFFM0IsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxPQUFPLENBQUMsSUFBSSxFQUFDLElBQUk7b0JBRWIsSUFBSSxHQUFDLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2hCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7b0JBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFOUIsRUFBRSxDQUFBLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsRUFBRSxHQUFDLEdBQUcsR0FBQyxFQUFFLENBQUE7b0JBQ2IsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDUCxFQUFFLEdBQUMsR0FBRyxHQUFDLEVBQUUsQ0FBQTtvQkFDYixDQUFDO29CQUNELElBQUksR0FBRyxFQUFFLEdBQUMsR0FBRyxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDO29CQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELFlBQVksQ0FBQyxJQUFXO29CQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsT0FBTyxDQUFDLElBQVc7b0JBRWYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELFFBQVEsQ0FBQyxJQUFXO29CQUVoQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsT0FBTyxDQUFDLElBQVc7b0JBRWYsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBQ0wsQ0FBQztZQWhFRCwrQkFnRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbW1vbmZzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDUvMTQvMTYuXG4gKi9cbmltcG9ydCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBnZXRDdXJEYXRlKClcbiAgICB7XG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBkZCA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgdmFyIG1tID0gdG9kYXkuZ2V0TW9udGgoKSsxOyAvL0phbnVhcnkgaXMgMCFcbiAgICAgICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmKGRkPDEwKSB7XG4gICAgICAgICAgICBkZD0nMCcrZGRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1tPDEwKSB7XG4gICAgICAgICAgICBtbT0nMCcrbW1cbiAgICAgICAgfVxuICAgICAgICB0b2RheSA9IG1tKycvJytkZCsnLycreXl5eTtcblxuICAgICAgICByZXR1cm4gdG9kYXk7XG4gICAgfVxuXG4gICAgYWRkRGF0ZShkYXRlLGRheXMpXG4gICAge1xuICAgICAgICBkYXRlPW5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBkYXRlLnNldERhdGUoY3VycmVudERhdGUgKyBkYXlzKTtcbiAgICAgICAgdmFyIGRkID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtbSA9IGRhdGUuZ2V0TW9udGgoKSsxOyAvL0phbnVhcnkgaXMgMCFcbiAgICAgICAgdmFyIHl5eXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYoZGQ8MTApIHtcbiAgICAgICAgICAgIGRkPScwJytkZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYobW08MTApIHtcbiAgICAgICAgICAgIG1tPScwJyttbVxuICAgICAgICB9XG4gICAgICAgIGRhdGUgPSBtbSsnLycrZGQrJy8nK3l5eXk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgZ2V0WWVhck1vbnRoKGRhdGU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuc3Vic3RyKDAsIDMpK2RhdGUuc3Vic3RyKDYsIDQpO1xuICAgIH1cblxuICAgIGdldERhdGUoZGF0ZTpzdHJpbmcpXG4gICAge1xuICAgICAgICByZXR1cm4gZGF0ZS5zdWJzdHIoMywgMik7XG4gICAgfVxuXG4gICAgZ2V0TW9udGgoZGF0ZTpzdHJpbmcpXG4gICAge1xuICAgICAgICByZXR1cm4gZGF0ZS5zdWJzdHIoMCwgMyk7XG4gICAgfVxuXG4gICAgZ2V0WWVhcihkYXRlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHJldHVybiBkYXRlLnN1YnN0cig2LCA0KTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
