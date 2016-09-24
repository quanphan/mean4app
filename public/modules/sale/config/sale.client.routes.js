'use strict';

// Setting up route
angular.module('sale').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listCompany', {
			url: '/sale',
			templateUrl: 'modules/sale/views/list-sale.client.view.html'
		}).	
		state('CreateCompany', {
			url: '/sale/create',
			templateUrl: 'modules/sale/views/create-sale.client.view.html'
		}).	
		state('viewCompany', {
			url: '/sale/:companyId',
			templateUrl: 'modules/sale/views/view-sale.client.view.html'
		});
		
	}
]);