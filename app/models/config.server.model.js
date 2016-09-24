'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var appConfigSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	hotel: {
		type: Schema.ObjectId,
		ref: 'Hotel'
	},
	code: {
		type: String,
		default: 'APP',
		trim: true
	},
	currency: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	vat: {
		type: String,
		default: 'APP',
		trim: true
	},
	service: {
		type: String,
		default: '',
		trim: true
	},
	isvat: {
		type: String,
		default: '',
		trim: true
	},
	isservice: {
		type: String,
		default: '',
		trim: true
	},
	ispricenet: {
		type: String,
		default: '',
		trim: true
	},
	dateformat: {
		type: String,
		default: '',
		trim: true
	},
	timeformat: {
		type: String,
		default: '',
		trim: true
	},
	guestintime: {
		type: String,
		default: '',
		trim: true
	},
	guestouttime: {
		type: String,
		default: '',
		trim: true
	},
	groupintime: {
		type: String,
		default: '',
		trim: true
	},
	groupouttime: {
		type: String,
		default: '',
		trim: true
	},
	isAutoOverTime: {
		type: String,
		default: '',
		trim: true
	},
	a: {
		type: String,
		default: '',
		trim: true
	},
	a1: {
		type: String,
		default: '',
		trim: true
	},
	a2: {
		type: String,
		default: '',
		trim: true
	},
	a3: {
		type: String,
		default: '',
		trim: true
	},
});
mongoose.model('AppConfig', appConfigSchema);

