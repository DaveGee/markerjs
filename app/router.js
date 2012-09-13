
function route(handle, pathname, response, query) {
    
    if(typeof handle[pathname] === "function") {
        handle[pathname](response, query);
    } else {
        handle.error(response, 404, "Handler not found for path: " + pathname);
    }
}

exports.route = route;