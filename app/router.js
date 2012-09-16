var conf = require("../config/conf.js");

function route(handle, pathname, response, query) {

    if(handle[pathname] instanceof Array) {
        var ctrl = handle[pathname][0];
        var action = handle[pathname][1];
        
        ctrl[action](response, query);
        
    } else {
        
        if(conf.app.debug) {
            console.log("404 - " + pathname + " - " + JSON.stringify(query));
        }
        
        var ctrl = handle["404"][0];
        var action = handle["404"][1];
        
        ctrl[action](response, { path: pathname, error: "Handler not found", query: query});
    }
}

exports.route = route;