var server = require("./app/server");
var router = require("./app/router");
var requestHandle = require("./config/routes.js");

server.start(router.route, requestHandle.handles);