
var MarkerController = function() {

	this.marks = [
	{ id: 1, url: "http://www.google.com", text: "Google!", date: "2012-09-12" },
	{ id: 2, url: "http://www.microsoft.com", text: "Microsoft", date: "2012-09-01" }
	];
};

MarkerController.prototype.searchMarks = function(httpResponse, urlQuery) {
	
};

MarkerController.prototype.addMark = function(httpResponse, urlQuery) {

	// push new bookmark
};

module.exports.controller = new MarkerController();
