
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
    
    require("../lib/utils").twohundredJson(httpResponse, {"Greetings": "Hello World", "MyName": "David"});
}

TestController.prototype.testView = function(httpResponse, queryStr) {
    console.log("testing view engine...");
    
    this.viewEngine.render(this, "viewengine", {"Name": "Dumb data", "Data": [1, 3, 4, 5, 6, 7, 8, 9, 0]}, httpResponse);
}

TestController.prototype.testViewJson = function(httpResponse, queryStr) {
    console.log("testing view engine in Json...");
    
    this.viewEngine.renderJson(this, "viewengine", {"Name": "Dumb data", "Data": [1, 3, 4, 5, 6, 7, 8, 9, 0]}, httpResponse);
}

exports.controller = new TestController();