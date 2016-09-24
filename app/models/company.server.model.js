'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Company Schema
 */
var CompanySchema = new Schema({
	CreatedDts: {
		type: Date,
		default: Date.now
	},
	UpdateDts: {
		type: Date,
		default: Date.now
	},
	User: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	UserEdit: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	ClientID: {
		type: String,
		default: '1',
		trim: true,
	},
	CompanyID: {
		type: String,
		default: '',
		trim: true,
	},

	Code: {
		type: String,
		default: '',
		trim: true,
		required: 'Code cannot be blank'
	},
	Name: {
		type: String,
		default: '',
		trim: true
	},
	FullName: {
		type: String,
		default: '',
		trim: true
	},
	TaxCode: {
		type: String,
		default: '',
		trim: true
	},
	Address: {
		type: String,
		default: '',
		trim: true
	},
	AddressTax: {
		type: String,
		default: '',
		trim: true
	},
	Mail:{
		type:String,
		default:'',
		trim:true
	},
	WebSite:{
		type:String,
		default:'',
		trim:true
	},
	State:{
		type:String,
		default:'',
		trim:true
	},
	Phone:{
		type:String,
		default:'',
		trim:true
	},
	Fax:{
		type:String,
		default:'',
		trim:true
	},
	Description:{
		type:String,
		default:'',
		trim:true
	},
	Birthday:{
		type:String,
		default:'',
		trim:true
	},
	Contact:{
		type:String,
		default:'',
		trim:true
	},
	Mobile:{
		type:String,
		default:'',
		trim:true
	},
	Country:{
		type:String,
		default:'',
		trim:true
	},
	Type:{
		type:String,
		default:'',
		trim:true
	},
	Leved:{
		type:String,
		default:'',
		trim:true
	},
	BankCode:{
		type:String,
		default:'N/A',
		trim:true
	},
	BankName:{
		type:String,
		default:'N/A',
		trim:true
	},
	Status:{
		type:String,
		default:'',
		trim:true
	}
});

mongoose.model('Company', CompanySchema);
