var db = require("mongodb");
var conf = require("../config/conf.js");

exports.recordVisit = function(httpRequest) {
    
	db.connect(conf.db.development.url, function(err, conn) {
		if(!err) {
		conn.collection(conf.db.connections, function(err, coll) {
			if(!err) {	
			var newVisit = {
				"ip": httpRequest.connection.remoteAddress,
				"path": httpRequest.url,
				"ts": new Date()
			};

			coll.insert(newVisit, {safe:true}, function(err) {
				console.log(err ? "new visit in db" : "error trying to insert visit in db");
			});
			} else {
				console.log(err);
			}
		});
		} else {
			console.log(err);
		}
	});
}
