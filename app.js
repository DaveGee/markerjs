var server = require("./app/server");
var router = require("./app/router");
var handles = require("./config/routes");

server.start(router.route, handles);
