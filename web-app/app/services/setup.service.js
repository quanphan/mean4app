System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var SetupService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let SetupService = class SetupService {
                constructor() {
                    this.rateType = [
                        { ID: '1', Code: 'BS', Name: 'Busiss', Active: '1' },
                        { ID: '2', Code: 'WI', Name: 'Walkin', Active: '1' },
                        { ID: '3', Code: 'PH', Name: 'Per house', Active: '1' },
                    ];
                    this.rates = [
                        { ID: '1', Code: 'R1', Name: 'Rate 1', RoomType: '1', RoomCategory: '1', RateType: '1', Rate: '20', RateVND: '300000', Active: '1' },
                        { ID: '2', Code: 'R2', Name: 'Rate 2', RoomType: '1', RoomCategory: '1', RateType: '1', Rate: '20', RateVND: '300000', Active: '1' },
                        { ID: '3', Code: 'R3', Name: 'Rate 3', RoomType: '1', RoomCategory: '1', RateType: '1', Rate: '20', RateVND: '300000', Active: '1' },
                    ];
                    this.roomList = [
                        { ID: 'R01', RoomNo: '101', Type: '1', Category: '1', Floor: '1', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R02', RoomNo: '102', Type: '1', Category: '1', Floor: '1', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R03', RoomNo: '103', Type: '1', Category: '1', Floor: '1', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R04', RoomNo: '104', Type: '1', Category: '1', Floor: '1', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R05', RoomNo: '105', Type: '1', Category: '1', Floor: '1', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R06', RoomNo: '201', Type: '1', Category: '1', Floor: '2', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R07', RoomNo: '202', Type: '1', Category: '1', Floor: '3', Status: '1', Active: '1', Etx: '1' },
                        { ID: 'R08', RoomNo: '203', Type: '1', Category: '1', Floor: '4', Status: '1', Active: '1', Etx: '1' },
                    ];
                    this.roomTypeList = [
                        { ID: '1', Code: 'DL', Name: 'Delux', Active: '1' },
                        { ID: '2', Code: 'DL1', Name: 'Delux1', Active: '1' },
                        { ID: '3', Code: 'DL2', Name: 'Delux2', Active: '1' },
                        { ID: '4', Code: 'DL3', Name: 'Delux3', Active: '1' },
                    ];
                    this.roomCategoryList = [
                        { ID: '1', Code: 'SG', Name: 'Single', Active: '1' },
                        { ID: '2', Code: 'DU', Name: 'Double', Active: '1' },
                        { ID: '3', Code: 'TR', Name: 'Trip', Active: '1' },
                    ];
                    this.packageCode = [
                        { ID: '1', Code: 'Min', Name: 'Minibar', Active: '1' },
                        { ID: '2', Code: 'Res', Name: 'Restaurent', Active: '1' },
                        { ID: '3', Code: 'Bar', Name: 'Bar', Active: '1' },
                        { ID: '4', Code: 'Rep', Name: 'Le tan', Active: '1' },
                        { ID: '5', Code: 'Oth', Name: 'Other', Active: '1' },
                    ];
                    this.packages = [
                        { ID: '1', PackageCode: 'Min', Code: 'Min', Name: 'Minibar', Active: '1' },
                        { ID: '2', PackageCode: 'Res', Code: 'Res', Name: 'Restaurent', Active: '1' },
                        { ID: '3', PackageCode: 'Bar', Code: 'Bar', Name: 'Bar', Active: '1' },
                        { ID: '4', PackageCode: 'Rep', Code: 'Room', Name: 'Doanh thu phong', Active: '1' },
                        { ID: '5', PackageCode: 'Rep', Code: 'Rob', Name: 'Phu thu phong', Active: '1' },
                        { ID: '6', PackageCode: 'Rep', Code: 'Pic', Name: 'Don tien', Active: '1' },
                        { ID: '7', PackageCode: 'Rep', Code: 'Tra', Name: 'Ban tua DL', Active: '1' },
                    ];
                }
            };
            SetupService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], SetupService);
            exports_1("SetupService", SetupService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NldHVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtvQkFDSSxhQUFRLEdBQUM7d0JBQ0wsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDO3dCQUMzQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUM7d0JBQzNDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQztxQkFDakQsQ0FBQTtvQkFFRCxVQUFLLEdBQUM7d0JBQ0YsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBQzt3QkFDbEgsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBQzt3QkFDbEgsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLEdBQUcsRUFBQztxQkFDckgsQ0FBQTtvQkFFRCxhQUFRLEdBQUM7d0JBQ0wsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUM7d0JBQ3JGLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDO3dCQUNyRixFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQzt3QkFDckYsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUM7d0JBQ3JGLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDO3dCQUNyRixFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQzt3QkFDckYsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUM7d0JBQ3JGLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDO3FCQUN4RixDQUFDO29CQUVGLGlCQUFZLEdBQUM7d0JBQ1QsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDO3dCQUMxQyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUM7d0JBQzVDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLEdB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Y2VzL3NldHVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgcGhhbnF1YW4gb24gNS8yLzE2LlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tICBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtjb250ZW50SGVhZGVyc30gZnJvbSAnLi4vaGVhZGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXR1cFNlcnZpY2Uge1xuICAgIHJhdGVUeXBlPVtcbiAgICAgICAge0lEOicxJyxDb2RlOidCUycsTmFtZTonQnVzaXNzJyxBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOicyJyxDb2RlOidXSScsTmFtZTonV2Fsa2luJyxBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOiczJyxDb2RlOidQSCcsTmFtZTonUGVyIGhvdXNlJyxBY3RpdmU6JzEnfSxcbiAgICBdXG5cbiAgICByYXRlcz1bXG4gICAgICAgIHtJRDonMScsQ29kZTonUjEnLE5hbWU6J1JhdGUgMScsUm9vbVR5cGU6JzEnLFJvb21DYXRlZ29yeTonMScsUmF0ZVR5cGU6JzEnLFJhdGU6JzIwJyxSYXRlVk5EOiczMDAwMDAnLCBBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOicyJyxDb2RlOidSMicsTmFtZTonUmF0ZSAyJyxSb29tVHlwZTonMScsUm9vbUNhdGVnb3J5OicxJyxSYXRlVHlwZTonMScsUmF0ZTonMjAnLFJhdGVWTkQ6JzMwMDAwMCcsIEFjdGl2ZTonMSd9LFxuICAgICAgICB7SUQ6JzMnLENvZGU6J1IzJyxOYW1lOidSYXRlIDMnLFJvb21UeXBlOicxJyxSb29tQ2F0ZWdvcnk6JzEnLFJhdGVUeXBlOicxJyxSYXRlOicyMCcsUmF0ZVZORDonMzAwMDAwJywgQWN0aXZlOicxJ30sXG4gICAgXVxuXG4gICAgcm9vbUxpc3Q9W1xuICAgICAgICB7SUQ6J1IwMScsUm9vbU5vOicxMDEnLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMScsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwMicsUm9vbU5vOicxMDInLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMScsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwMycsUm9vbU5vOicxMDMnLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMScsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwNCcsUm9vbU5vOicxMDQnLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMScsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwNScsUm9vbU5vOicxMDUnLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMScsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwNicsUm9vbU5vOicyMDEnLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMicsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwNycsUm9vbU5vOicyMDInLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonMycsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgICAgICB7SUQ6J1IwOCcsUm9vbU5vOicyMDMnLFR5cGU6JzEnLENhdGVnb3J5OicxJyxGbG9vcjonNCcsU3RhdHVzOicxJyxBY3RpdmU6JzEnLEV0eDonMSd9LFxuICAgIF07XG5cbiAgICByb29tVHlwZUxpc3Q9W1xuICAgICAgICB7SUQ6JzEnLENvZGU6J0RMJyxOYW1lOidEZWx1eCcsQWN0aXZlOicxJ30sXG4gICAgICAgIHtJRDonMicsQ29kZTonREwxJyxOYW1lOidEZWx1eDEnLEFjdGl2ZTonMSd9LFxuICAgICAgICB7SUQ6JzMnLENvZGU6J0RMMicsTmFtZTonRGVsdXgyJyxBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOic0JyxDb2RlOidETDMnLE5hbWU6J0RlbHV4MycsQWN0aXZlOicxJ30sXG4gICAgXVxuXG4gICAgcm9vbUNhdGVnb3J5TGlzdD1bXG4gICAgICAgIHtJRDonMScsQ29kZTonU0cnLE5hbWU6J1NpbmdsZScsQWN0aXZlOicxJ30sXG4gICAgICAgIHtJRDonMicsQ29kZTonRFUnLE5hbWU6J0RvdWJsZScsQWN0aXZlOicxJ30sXG4gICAgICAgIHtJRDonMycsQ29kZTonVFInLE5hbWU6J1RyaXAnLEFjdGl2ZTonMSd9LFxuICAgIF1cblxuICAgIHBhY2thZ2VDb2RlPVtcbiAgICAgICAge0lEOicxJyxDb2RlOidNaW4nLE5hbWU6J01pbmliYXInLEFjdGl2ZTonMSd9LFxuICAgICAgICB7SUQ6JzInLENvZGU6J1JlcycsTmFtZTonUmVzdGF1cmVudCcsQWN0aXZlOicxJ30sXG4gICAgICAgIHtJRDonMycsQ29kZTonQmFyJyxOYW1lOidCYXInLEFjdGl2ZTonMSd9LFxuICAgICAgICB7SUQ6JzQnLENvZGU6J1JlcCcsTmFtZTonTGUgdGFuJyxBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOic1JyxDb2RlOidPdGgnLE5hbWU6J090aGVyJyxBY3RpdmU6JzEnfSxcbiAgICBdXG5cbiAgICBwYWNrYWdlcz1bXG4gICAgICAgIHtJRDonMScsUGFja2FnZUNvZGU6J01pbicsQ29kZTonTWluJyxOYW1lOidNaW5pYmFyJyxBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOicyJyxQYWNrYWdlQ29kZTonUmVzJyxDb2RlOidSZXMnLE5hbWU6J1Jlc3RhdXJlbnQnLEFjdGl2ZTonMSd9LFxuICAgICAgICB7SUQ6JzMnLFBhY2thZ2VDb2RlOidCYXInLENvZGU6J0JhcicsTmFtZTonQmFyJyxBY3RpdmU6JzEnfSxcbiAgICAgICAge0lEOic0JyxQYWNrYWdlQ29kZTonUmVwJyxDb2RlOidSb29tJyxOYW1lOidEb2FuaCB0aHUgcGhvbmcnLEFjdGl2ZTonMSd9LFxuICAgICAgICB7SUQ6JzUnLFBhY2thZ2VDb2RlOidSZXAnLENvZGU6J1JvYicsTmFtZTonUGh1IHRodSBwaG9uZycsQWN0aXZlOicxJ30sXG4gICAgICAgIHtJRDonNicsUGFja2FnZUNvZGU6J1JlcCcsQ29kZTonUGljJyxOYW1lOidEb24gdGllbicsQWN0aXZlOicxJ30sXG4gICAgICAgIHtJRDonNycsUGFja2FnZUNvZGU6J1JlcCcsQ29kZTonVHJhJyxOYW1lOidCYW4gdHVhIERMJyxBY3RpdmU6JzEnfSxcbiAgICBdXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=