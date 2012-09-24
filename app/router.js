var conf = require("../config/conf.js"),
    llog = require("../lib/livelog").logger;

function route(handle, pathname, response, query, handleError) {

    if(handle[pathname] instanceof Array) {
        var ctrl = handle[pathname][0];
        var action = handle[pathname][1];
        
        ctrl[action](response, query);
        
    } else {

        handleError();
        return;
    }
}

exports.route = route;