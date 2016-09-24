'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	company = require('../../app/controllers/company.server.controller');

module.exports = function(app) {
	// company  Routes
	app.route('/api/company')
		.get(users.hasTokenAccess,company.list)
		.post(users.requiresLogin, company.create);

	app.route('/api/companys').post(company.findBy);

	app.route('/api/company/:companyId')
		.get(company.read)
		.put(users.requiresLogin, company.hasAuthorization, company.update)
		.delete(users.requiresLogin, company.hasAuthorization, company.delete);

	// Finish by binding the  middleware
	app.param('companyId', company.companyByID);
};