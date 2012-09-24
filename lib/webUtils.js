
exports.twohundred = function(httpResponse, html) {
    
    httpResponse.writeHead(200, { "Content-Type": "text/html" });
    httpResponse.write(html);
    httpResponse.end();
}

exports.twohundredJson = function(httpResponse, jsonObject) {
    
    httpResponse.writeHead(200, { "Content-Type": "application/json" });
    httpResponse.write(JSON.stringify(jsonObject));
    httpResponse.end();
}

exports.fivehundred = function(httpResponse, errorMsg) {

    httpResponse.writeHead(500, {});
    httpResponse.write("Oups! some complicated error occurred.. soo sorry...");
    httpResponse.end();
}