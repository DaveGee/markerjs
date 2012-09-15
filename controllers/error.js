
var controller = function() {
	this.staticFile = require("../lib/simpleStaticWeb.js");
}

controller.prototype.notFound = function(httpResponse, parameters) {
	this.staticFile = require("../lib/simpleStaticWeb.js");
	this.staticFile.error(parameters.error, "Not found", httpResponse);
}

controller.prototype.serverError = function(httpResponse, parameters) {
	this.staticFile.error(parameters.error, "Server error", httpResponse);
}

exports.controller = new controller();
