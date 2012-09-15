var home = require("../controllers/home.js");
var marker = require("../controllers/marker.js");
var error = require("../controllers/error.js");

exports.handles = {
	"/":            home.controller.index,
    "/mark":        marker.controller.searchMarks,
	"/mark/add":    marker.controller.addMark,
	
    "404":          error.controller.notFound,
	"500":          error.controller.serverError
};
