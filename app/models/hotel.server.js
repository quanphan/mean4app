'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Company Schema
 */
var hotelSchema = new Schema({
	code: {
		type: String,
		default: '',
		trim: true,
		required: 'Code cannot be blank'
	},
	name: {
		type: String,
		default: '',
		trim: true
	},
	taxcode: {
		type: String,
		default: '',
		trim: true
	},
	address: {
		type: String,
		default: '',
		trim: true
	},
	bankname:{
		type:String,
		default:'',
		trim:true
	},
	bankno:{
		type:String,
		default:'',
		trim:true
	},
	contactname:{
		type:String,
		default:'',
		trim:true
	},
	phone:{
		type:String,
		default:'',
		trim:true
	},
	mail:{
		type:String,
		default:'',
		trim:true
	},
	website:{
		type:String,
		default:'',
		trim:true
	},
	nationalid:{
		type:String,
		default:'',
		trim:true
	},
	stateid:{
		type:String,
		default:'',
		trim:true
	}

});
mongoose.model('Hotel', hotelSchema);

