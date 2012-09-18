var home = require("../controllers/home.js").controller;
var marker = require("../controllers/marker.js").controller;
var error = require("../controllers/error.js").controller;
var test = require("../controllers/test.js").controller;
var debug = require("../controllers/debug").controller;

exports.handles = {
	"/":            [home, "index"],
	"/mark":        [marker, "searchMarks"],
	"/mark/add":    [marker, "addMark"],
	"/test":        [test, "test"],
	"/test/json":   [test, "testJson"],
	"/test/view":   [test, "testView"],
	"/test/viewj":  [test, "testViewJson"],
	"/test/stats":	[test, "stats"],
	"/debug":	[debug, "logs"],
	
	"404":          [error, "notFound"],
	"500":          [error, "serverError"]
};
