var db = require("../database.js");

exports.providers = {};

exports.providers.all= function(req,res){
	db.providers.find({},function(err,providers){
		if(err){return;}
		var response = {
			providers:providers
		};
		res.json(response);
	});
};

exports.providers.one = function(req,res){
	var providerId = db.ObjectId(req.params.id);
	db.providers.findOne({'_id':providerId},function(err,provider){
		if(err){return;}
		var response = {
			provider:provider
		};
		res.json(response);
	});
};

exports.providers.create = function(req,res){
	res.json(req.body);
	db.providers.save(req.body);
};