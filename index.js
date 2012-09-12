//index
//server
//router
//httphandlers

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/say": requestHandlers.say,
    "/poll": requestHandlers.poll,
    error: requestHandlers.error
};

server.start(router.route, handle);