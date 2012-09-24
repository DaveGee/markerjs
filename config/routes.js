var home = require("../controllers/home.js").controller;
var marker = require("../controllers/marker.js").controller;
var error = require("../backup/error.js").controller;
var test = require("../controllers/test.js").controller;

exports.handles = {
	"/":            [home, "index"],
    "/home/logs":   [home, "logs"],
	"/mark":        [marker, "searchMarks"],
	"/mark/add":    [marker, "addMark"],
	"/test":        [test, "test"],
	"/test/json":   [test, "testJson"],
	"/test/view":   [test, "testView"],
	"/test/viewj":  [test, "testViewJson"],
	"/test/stats":	[test, "stats"]
};
