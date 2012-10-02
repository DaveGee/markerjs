var http = require("http"),
    url = require("url"),
    querystring = require("querystring"),
    conf = require("../config/conf.js"),
    llog = require("../lib/livelog").logger,
    static = require("../lib/node-static");

var fileServer = new static.Server("./public", { cache: (3600 * !conf.app.debug) });
var vmServer = new static.Server("./viewmodels", { cache: (3600 * !conf.app.debug) });

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = querystring.parse(url.parse(request.url).query);

		if(conf.app.debug) llog.logRequest(request); //require("../lib/webRecord").recordVisit(request);

        if(pathname.match(/[0-9a-z_-]*\.vm\.(js|css)/gi)) {

            vmServer.serve(request, response, function(err) {
                if(err)
                    notFound(pathname, request, response);
            });

        } else {

            route(handle, pathname, response, query, function() {   // do error

                notFound(pathname, request, response);
            });
        }
    }
    
    http.createServer(onRequest).listen(conf.web.port, conf.web.ip);
    console.log("Server started on port " + conf.web.port);
}

var notFound = function(pathname, request, response) {
    if(conf.app.debug) llog.log(pathname + ": no handler found, trying static file in public...");
    //try the static file

    fileServer.serveFile(pathname, 200, {}, request, response).addListener("error", function(err) {

        if(err) {
            var errorServer = new static.Server("./views/errors", { cache: (3600 * !conf.app.debug) });

            if(conf.app.debug) {
                llog.log(err);
                llog.log(pathname + ": no static file: 404");
            }
            errorServer.serveFile("404.html", 404, {}, request, response).addListener("error", function(err2) {
                if(err2) {
                    if(conf.app.debug) llog.log(pathname + ": critical error 500 - " + JSON.stringify(err2));
                    require("../lib/webUtils").fivehundred(response);
                }
            })
        }

    });
}

exports.start = start;
