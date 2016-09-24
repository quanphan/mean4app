'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Company = mongoose.model('Company'),
	_ = require('lodash'),
	crypto=require('./crypto');

var compCode='';

/**
 * Create a company
 */
exports.create = function(req, res) {
	var company = new Company(req.body);
	company.user = req.user;
	Company.findOne({ _id: company._id}).exec(function(err, doc) {
		if (!doc) {
			// Create new
			Company.findOne({ Code: company.Code}).exec(function(err, doc) {
				if (doc) {
					return res.status(400).send({
						message: 'This code do Exits'
					});
				}else {
					company.save(function(err) {
						if (err) {
							return res.status(400).send({
								message: errorHandler.getErrorMessage(err)
							});
						} else {
							res.json(company);
						}
					});
				}
			});
		}
		else {
			// Update current comp
			company = _.extend(doc, req.body);
			company.save(function(err) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					res.json(company);
				}
			});
		}
	});
};

/**
 * Show the current company
 */
exports.read = function(req, res) {
	res.json(req.company);
};

/**
 * Update a company
 */
exports.update = function(req, res) {
	var company = req.company;

	company = _.extend(company, req.body);

	company.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(company);
		}
	});
};

/**
 * Delete an company
 */
exports.delete = function(req, res) {
	var company = req.company;

	company.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(company);
		}
	});
};

/**
 * List of Company
 */
exports.list = function(req, res) {
	Company.find().sort('-created').populate('user', 'displayName').exec(function(err, company) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(company);
		}
	});
};

exports.findBy = function(req, res) {
	var filter = req.body;
	var search='';
	if(filter.Name!='')
	{
		var regex = new RegExp(filter.Name, "i")
		search={Name:regex};
		//search={$text: {$search: 'q'}};
	}
	Company.find(search).sort('-created').exec(function(err, company) {
		if (!company) {
			return res.status(404).send({
				message: 'Company not found'
			});
		}
		res.json(company);
	});
};

/**
 * Company middleware
 */
exports.companyByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Company is invalid'
		});
	}

	Company.findById(id).populate('user', 'displayName').exec(function(err, company) {
		if (err) return next(err);
		if (!company) {
			return res.status(404).send({
				message: 'Company not found'
			});
		}
		req.company = company;

		next();
	});
};

/**
 *  authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.company.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
