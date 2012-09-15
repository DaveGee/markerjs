var http = require("http");
var url = require("url");
var querystring = require("querystring");
var conf = require("../config/conf.js");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = querystring.parse(url.parse(request.url).query);

        route(handle, pathname, response, query);
    }
    
    http.createServer(onRequest).listen(conf.web.port);
    console.log("Server started on port " + conf.web.port);
}

exports.start = start;