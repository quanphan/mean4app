/**
 * Created by phanquan on 3/4/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            class User {
                constructor() {
                }
                get UserID() {
                    return this.userId;
                }
                set UserID(value) {
                    this.userId = value;
                }
                get UserName() {
                    return this.userName;
                }
                set UserName(value) {
                    this.userName = value;
                }
                get FullName() {
                    return this.fullName;
                }
                set FullName(value) {
                    this.fullName = value;
                }
                get PassWord() {
                    return this.passWord;
                }
                set PassWord(value) {
                    this.passWord = value;
                }
            }
            exports_1("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7OztZQUVIO2dCQUtJO2dCQUVBLENBQUM7Z0JBRUQsSUFBSSxNQUFNO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQUNELElBQUksTUFBTSxDQUFDLEtBQVk7b0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVELElBQUksUUFBUTtvQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFZO29CQUNyQixJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxJQUFJLFFBQVE7b0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsSUFBSSxRQUFRLENBQUMsS0FBWTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQsSUFBSSxRQUFRO29CQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUNELElBQUksUUFBUSxDQUFDLEtBQVk7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO2dCQUN4QixDQUFDO1lBRUwsQ0FBQztZQXJDRCx1QkFxQ0MsQ0FBQSIsImZpbGUiOiJtb2RlbHMvdXNlci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBwaGFucXVhbiBvbiAzLzQvMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIHByaXZhdGUgdXNlcklkOnN0cmluZztcbiAgICBwcml2YXRlIHVzZXJOYW1lOnN0cmluZztcbiAgICBwcml2YXRlIGZ1bGxOYW1lOnN0cmluZztcbiAgICBwcml2YXRlIHBhc3NXb3JkOnN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgZ2V0IFVzZXJJRCgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkO1xuICAgIH1cbiAgICBzZXQgVXNlcklEKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMudXNlcklkPXZhbHVlO1xuICAgIH1cblxuICAgIGdldCBVc2VyTmFtZSgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlck5hbWU7XG4gICAgfVxuICAgIHNldCBVc2VyTmFtZSh2YWx1ZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnVzZXJOYW1lPXZhbHVlO1xuICAgIH1cblxuICAgIGdldCBGdWxsTmFtZSgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVsbE5hbWU7XG4gICAgfVxuICAgIHNldCBGdWxsTmFtZSh2YWx1ZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLmZ1bGxOYW1lPXZhbHVlO1xuICAgIH1cblxuICAgIGdldCBQYXNzV29yZCgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc1dvcmQ7XG4gICAgfVxuICAgIHNldCBQYXNzV29yZCh2YWx1ZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnBhc3NXb3JkPXZhbHVlO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
