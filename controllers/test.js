
var TestController = function() { 
    
}

TestController.prototype.test = function(httpResponse, queryStr) {
    console.log("testing...");
    
    require("../lib/utils").twohundred(httpResponse, "<h1>Hello World<h1>");
}

TestController.prototype.testJson = function(httpResponse, queryStr) {
    console.log("testing json...");
    
    require("../lib/utils").twohundredJson(httpResponse, {"Greetings": "Hello World", "MyName": "David"});
}

exports.controller = new TestController();