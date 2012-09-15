
function route(handle, pathname, response, query) {
    
    if(typeof handle.routes()[pathname] === "function") {
        handle.routes()[pathname](response, query);
    } else {
        handle.routes()["404"](response, { path: pathname, error: "Handler not found", query: query});
    }
}

exports.route = route;