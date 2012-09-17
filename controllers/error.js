
var ErrorController = function() {
	this.staticFile = require("../lib/utils");
    
    this.controllerName = "error";
};

ErrorController.prototype.notFound = function(httpResponse, parameters) {
    this.staticFile.error(404, parameters.error + "("+parameters.pathname+")", httpResponse);
};
    
ErrorController.prototype.serverError = function(httpResponse, parameters) {
    this.staticFile.error(500, parameters.error + "("+parameters.pathname+")", httpResponse);
};
    

module.exports.controller = new ErrorController();