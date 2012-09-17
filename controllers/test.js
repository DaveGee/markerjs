
var TestController = function() { 
    this.controllerName = "test";
    this.viewEngine = require("../app/view").engine;
}

TestController.prototype.test = function(httpResponse, queryStr) {
    console.log("testing...");
 
    require("../lib/utils").twohundred(httpResponse, "<h1>Hello World<h1>");
}

TestController.prototype.testJson = function(httpResponse, queryStr) {
    console.log("testing json...");
   
    var envTest = {
    	"VCAP_SERVICES": process.env.VCAP_SERVICES,
	"MJS_NAME": process.env.MJS_NAME
    };
 
    require("../lib/utils").twohundredJson(httpResponse, "");
}

TestController.prototype.testView = function(httpResponse, queryStr) {
    console.log("testing view engine...");
    
    this.viewEngine.render(this, "viewengine", {"Name": "Dumb data", "Data": [1, 3, 4, 5, 6, 7, 8, 9, 0]}, httpResponse);
}

TestController.prototype.testViewJson = function(httpResponse, queryStr) {
    console.log("testing view engine in Json...");
    
    this.viewEngine.renderJson(this, "viewengine", {"Name": "Dumb data", "Data": [1, 3, 4, 5, 6, 7, 8, 9, 0]}, httpResponse);
}

TestController.prototype.stats = function(httpResponse, queryStr) {
	console.log("testing db...");

	var visits = require("../lib/trace").visits();

	require("../lib/utils").twohundredJson(httpResponse, visits);
}

exports.controller = new TestController();
