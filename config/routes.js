var home = require("../controllers/home.js");
var marker = require("../controllers/marker.js");
var error = require("../controllers/error.js");

exports.handles = {
	"/":            [home, "index"],
    "/mark":        [marker, "searchMarks"],
	"/mark/add":    [marker, "addMark"],
	
    "404":          [error, "notFound"],
	"500":          [error, "serverError"]
};
