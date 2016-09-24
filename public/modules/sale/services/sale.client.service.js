'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('sale').factory('Company', ['$resource',
	function($resource) {
		return $resource('sale/:companyId', {
			articleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);