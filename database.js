var dbUrl = "servicely";
var collections = ["providers"];
var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;