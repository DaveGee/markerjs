var controllers = {};
require("fs").readdirSync("./controllers").forEach(function (file) {
	controllers[file] = require("./controllers/" + file);
});

exports.routes = function() {
	return {
	"/": controllers["home.js"].controller.index,
    "/mark": controllers["marker.js"].controller.searchMarks,
	"/mark/add": controllers["marker.js"].controller.addMark,
	
    "404": controllers["error.js"].controller.notFound,
	"500": controllers["error.js"].controller.serverError
}}
