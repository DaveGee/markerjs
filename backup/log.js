
var conf = require("../config/conf.js");
var fs = require("fs");

var debugFile = "debugoutput.log";

exports.debugFile = function() { return debugFile; }

exports.debug = function(msg) {

	if(conf.app.debug) {

		require("path").exists(conf.app.tmpDir, function(exists) {

			if(!exists) fs.mkdirSync(conf.app.tmpDir, "0777");
			
			var now = new Date().toUTCString();
	
			var stream = require("fs").createWriteStream(
				conf.app.tmpDir + debugFile,
				{ "flags": "a+", "encoding": "utf8", "mode": 0644 });
			stream.write(now + " ", "utf8");
			stream.write("[DEBUG] ", "utf8");
			stream.write(msg + "\n", "utf8");
			stream.end();

			console.log(msg);
		});
	}
}
