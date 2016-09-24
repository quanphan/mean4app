/**
 * Created by phanquan on 3/30/16.
 */
System.register(['@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var contentHeaders;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("contentHeaders", contentHeaders = new http_1.Headers());
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
            contentHeaders.append('token-access', localStorage.getItem('jwt'));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7O1FBSVUsY0FBYzs7Ozs7OztZQUFkLDRCQUFBLGNBQWMsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFBLENBQUM7WUFDNUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNwRCxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFELGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJoZWFkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHBoYW5xdWFuIG9uIDMvMzAvMTYuXG4gKi9cblxuaW1wb3J0IHsgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5leHBvcnQgY29uc3QgY29udGVudEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuY29udGVudEhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuY29udGVudEhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuY29udGVudEhlYWRlcnMuYXBwZW5kKCd0b2tlbi1hY2Nlc3MnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0JykpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
