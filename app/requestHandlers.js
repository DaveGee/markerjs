var staticWeb = require("./simpleStaticWeb.js");
var marker = require("./marker.js");

function listMarks(response, query) {

	response.writeHead(200, {"Content-type": "text/json" });
//	response.write("Hello World");
	response.write(JSON.stringify(
		marker.controller.searchMarks()));

	response.end();
}

function say(response, query) {
    
    if(query.what && query.user) {
        messages.push({ user: query.user, what: query.what });
    }
    
    poll(response, query);
}

function poll(response, query) {
    
    response.writeHead(200, {"Content-type": "text/html" });
    
    if(query.id) {
        response.write(JSON.stringify({
            newid: messages.length,
            messages : messages.slice(query.id)
        }));
    }
    
    response.end();
}

function start(response, query) {
    
    staticWeb.serveFile("./start.html", response);
}

function error(response, nb, msg) {
    
    staticWeb.error(nb, msg, response);
}

exports.listMarks = listMarks;
exports.error = error;
