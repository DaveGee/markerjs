
var error = function() {
	this.staticFile = require("../lib/simpleStaticWeb.js");
    this.test = "test";
};

error.prototype.notFound = function(httpResponse, parameters) {
    console.log("..." + this.test);
	//this.staticFile.error(parameters.error, "Not found", httpResponse);
};

error.prototype.serverError = function(httpResponse, parameters) {
	this.staticFile.error(parameters.error, "Server error", httpResponse);
};

exports.controller = new error();
