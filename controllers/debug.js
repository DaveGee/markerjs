
var DebugController = function() {
	this.controllerName = "debug";
	this.viewEngine = require("../app/view").engine;
}

DebugController.prototype.logs = function(httpResponse, urlQuery) {
	
	require("../lib/log.js").debug("Display log file");
	
	// readfile and write it to output

	require("fs").readFile(require("../config/conf").app.tmpDir + require("../lib/log").debugFile(), 
		"utf-8",
		function(err, data) {
		
		if(err) throw err;

		httpResponse.writeHead(200, { "Content-Type": "text/plain" });
		httpResponse.write(data);
		httpResponse.end();
	});
}

exports.controller = new DebugController();
