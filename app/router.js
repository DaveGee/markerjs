
function route(handle, pathname, response, query) {

    if(typeof handle[pathname] === "function") {
        handle[pathname](response, query);
    } else {
        handle["404"](response, { path: pathname, error: "Handler not found", query: query});
    }
}

exports.route = route;