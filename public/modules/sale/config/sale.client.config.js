'use strict';

// Configuring the Articles module
angular.module('sale').run(['Menus',
	function(Menus) {
		// Set top bar menu items		
		Menus.addMenuItem('topbar', 'Reception ', 'reception', '', '/reception(/create)?');
		Menus.addMenuItem('topbar', 'Finance ', 'cashier', '', '/cashier(/create)?');
		//Menus.addMenuItem('topbar', 'Sale marketting ', 'sale', 'dropdown', '/sale(/create)?');
		Menus.addMenuItem('topbar', 'Sale marketting ', 'sale', '', '/sale(/create)?');
		Menus.addMenuItem('topbar', 'House keeping ', 'housekeeper', '', '/housekeeper(/create)?');
		Menus.addMenuItem('topbar', 'Reports ', 'report', '', '/report(/create)?');
		Menus.addMenuItem('topbar', 'System setting ', 'setting', '', '/setting(/create)?');
		//sub menu
		Menus.addSubMenuItem('topbar', 'reception', 'Check in ', 'sale');
		Menus.addSubMenuItem('topbar', 'reception', 'Check in group ', 'sale');

		Menus.addSubMenuItem('topbar', 'sale', 'List Company', 'sale');
		Menus.addSubMenuItem('topbar', 'sale', 'New Company', 'sale/create');
	}
]);