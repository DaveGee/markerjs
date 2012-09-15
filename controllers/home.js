
var controller = function() {
	
}

controller.prototype.index = function(httpResponse, urlQuery) {
	// do stuff
	console.log(urlQuery);
}

exports.controller = new controller();