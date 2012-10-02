
var MarkerController = function() {

    this.controllerName = "marker";
    this.viewEngine = require("../app/view").engine;
    this.viewModel = "marker.vm.js";

	this.marks = [
        { id: 1, url: "http://www.google.com", text: "Google!", date: "2012-09-12" },
        { id: 2, url: "http://www.microsoft.com", text: "Microsoft", date: "2012-09-01" }
	];

    this.categories = ["Dev", "Misc", "Travel", "Photo", "Job", "Fun"];
};

MarkerController.prototype.list = function(httpResponse, urlQuery) {
	this.viewEngine.render(this, "list", { 
        "controller" : this.controllerName, 
        "markers": this.marks,
        "pageTitle": "Marker list"
    }, httpResponse)
};

MarkerController.prototype.addMark = function(httpResponse, urlQuery) {

	// push new bookmark
};

MarkerController.prototype.showMarker = function(httpResponse, urlQuery) {

    this.viewEngine.renderJson(this, "marker", { "categories": this.categories }, httpResponse);
};

module.exports.controller = new MarkerController();
