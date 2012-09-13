//index
//server
//router
//httphandlers

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/": requestHandlers.start,
    "/mark": requestHandlers.listMarks,
    error: requestHandlers.error
};

server.start(router.route, handle);
