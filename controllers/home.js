
var home = function() {
	
};

home.prototype.index = function(httpResponse, urlQuery) {
	// do stuff
	console.log(urlQuery);
};

exports.controller = new home();