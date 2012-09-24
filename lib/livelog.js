
var LiveLog = function() {

    this.logs = "";
    this.logObjects = [];

    this.log("Live logging started");
}

LiveLog.prototype.log = function(msg) {

    this.logObjects.push({"time": new Date().toUTCString(), "msg": msg});
    this.logs = this.newLog(msg) + this.logs;

    if(require("../config/conf").app.debug) console.log(msg);
}

LiveLog.prototype.newLog = function(msg) {

    return (new Date().toUTCString()) + " [LIVELOG] " + msg + "\n";
}

LiveLog.prototype.logRequest = function(httpRequest) {

    this.log(httpRequest.connection.remoteAddress + ": " + httpRequest.url)
}

LiveLog.prototype.getLogs = function(strFormat) {

    if(strFormat) return this.logs;
    return this.logObjects;
}

exports.logger = new LiveLog();