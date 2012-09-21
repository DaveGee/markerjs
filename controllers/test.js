
var TestController = function() { 
    this.controllerName = "test";
    this.viewEngine = require("../app/view").engine;
}

TestController.prototype.test = function(httpResponse, queryStr) {
    console.log("testings utils 200...");
 
    require("../lib/utils").twohundred(httpResponse, "<h1>Hello World<h1>");
}

TestController.prototype.testJson = function(httpResponse, queryStr) {
    console.log("testing utils 200 json...");
   
    var envTest = {
    	"VCAP_SERVICES": process.env.VCAP_SERVICES,
	"MJS_NAME": process.env.MJS_NAME
    };
 
    require("../lib/utils").twohundredJson(httpResponse, "");
}

TestController.prototype.testView = function(httpResponse, queryStr) {
    console.log("testing view engine render...");
    
    this.viewEngine.render(this, "viewengine", {"Name": "Dumb data", "Data": [1, 3, 4, 5, 6, 7, 8, 9, 0]}, httpResponse);
}

TestController.prototype.testViewJson = function(httpResponse, queryStr) {
    console.log("testing view engine render in Json...");
    
    this.viewEngine.renderJson(this, "viewengine", {"Name": "Dumb data", "Data": [1, 3, 4, 5, 6, 7, 8, 9, 0]}, httpResponse);
}

TestController.prototype.stats = function(httpResponse, queryStr) {
	console.log("testing db...");

//	this.viewEngine.renderJson(this, "stats", require("../config/conf").db, httpResponse); return;

	var visits = require("../lib/webRecord").visits(httpResponse);

//	visits = visits ? visits : {};

//	require("../lib/utils").twohundredJson(httpResponse, visits);
}


exports.controller = new TestController();
