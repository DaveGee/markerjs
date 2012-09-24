
var HomeController = function() {
    this.viewEngine = require("../app/view.js").engine;
    this.controllerName = "home";
};

HomeController.prototype.index = function(httpResponse, urlQuery) {

    this.viewEngine.render(this, "index", {"welcomeMsg": "Hello world"}, httpResponse);
};

HomeController.prototype.logs = function(httpResponse, urlQuery) {

    this.viewEngine.render(this, "logs", {"logs": require("../lib/livelog").logger.logs.replace(/\n/g, "<br/>")}, httpResponse);
}

module.exports.controller = new HomeController();