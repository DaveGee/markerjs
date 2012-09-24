var fs = require("fs");

exports.serveFile = function (pathname, httpResponse) {
    
    var filepath = pathname;
    
    require("path").exists(filepath, function(exists) {
    
        if(exists) {
            fs.readFile(filepath, function(error, content) {
                
                if(error) {
                    throw new Error("Error serving file '" + pathname + "'");
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
    
    require("path").exists("./" + nb + ".html", function(exists) {
        if(exists) {
            fs.readFile("./" + nb + ".html", function(error, content) {
                if(error) {
                    httpResponse.writeHead(500, {"Content-type": "text/plain" });
                    httpResponse.write(nb + " " + message);
                    httpResponse.end();
                } else {
                    httpResponse.writeHead(nb, {"Content-type": "text/html"});
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
