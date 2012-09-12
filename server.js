var http = require("http");
var url = require("url");
var querystring = require("querystring");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = querystring.parse(url.parse(request.url).query);
        
        route(handle, pathname, response, query);
    }
    
    http.createServer(onRequest).listen(32001);
    console.log("Server started on port " + 32001);
}

exports.start = start;