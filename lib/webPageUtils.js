var fs = require("fs");
var path = require("path");

exports.view = function(viewName, httpResponse) {
    
    var filepath = "../views/" + viewName + ".html";
    
    path.exists(filepath, function(exists) {
    
        if(exists) {
            fs.readFile(filepath, function(error, content) {
                
                if(error) {
                    error(500, "Error serving file", httpResponse);
                }
                else {
                    httpResponse.writeHead(200, { "Content-type": "text/html" });
                    httpResponse.end(content, "utf-8");
                }
            });
        } else {
            throw new Error("The view '" + viewName + "' cannot be found");
        }
    });
}

exports.serveFile = function (pathname, httpResponse) {
    
    var filepath = pathname;
    
    path.exists(filepath, function(exists) {
    
        if(exists) {
            fs.readFile(filepath, function(error, content) {
                
                if(error) {
                    error(500, "Error serving file", httpResponse);
                }
                else {
                    httpResponse.writeHead(200, { "Content-type": "text/html" });
                    httpResponse.end(content, "utf-8");
                }
            });
        } else {
            throw new Error("The page '" + pathname + "' cannot be found");
        }
    });
}

exports.error = function(nb, message, httpResponse) {
    //console.log(nb + ": " + message);
    
    path.exists("./" + nb + ".html", function(exists) {
        if(exists) {
            fs.readFile("./" + nb + ".html", function(error, content) {
                if(error) {
                    httpResponse.writeHead(500, {"Content-type": "text/plain" });
                    httpResponse.write(nb + " " + message);
                    httpResponse.end();
                } else {
                    httpResponse.writeHead(200, {"Content-type": "text/html"});
                    httpResponse.end(content, "utf-8");
                }
                    
            });
        } else {
            httpResponse.writeHead(500, {"Content-type": "text/plain" });
            httpResponse.write(nb + " " + message);
            httpResponse.end();
        }
    });
}