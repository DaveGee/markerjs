
var HomeController = function() {
    this.stuff = "My name is HomeController";
};

HomeController.prototype.index = function(httpResponse, urlQuery) {
	// do stuff
	httpResponse.writeHead(200, { "Content-Type": "text/html" });
    httpResponse.write("<h1>Hello World</h1> this is the controller's internal stuff: " + this.stuff);
    httpResponse.end();
};

module.exports.controller = new HomeController();