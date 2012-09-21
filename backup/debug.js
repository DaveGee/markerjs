
var DebugController = function() {
	this.controllerName = "debug";
	this.viewEngine = require("../app/view").engine;
}

DebugController.prototype.logs = function(httpResponse, urlQuery) {
	
try {
	require("../lib/log.js").debug("Display log file");
} catch(e) { 
	this.viewEngine.renderJson(this, "logs", e, httpResponse);
}	
	// readfile and write it to output

	require("fs").readFile(require("../config/conf").app.tmpDir + require("../lib/log").debugFile(), 
		"utf-8",
		function(err, data) {
		
		if(err) {
			this.viewEngine.renderJson(this, "logs", err, httpResponse);
		} else {

			httpResponse.writeHead(200, { "Content-Type": "text/plain" });
			httpResponse.write(data);
			httpResponse.end();
		}
	});
}

exports.controller = new DebugController();
