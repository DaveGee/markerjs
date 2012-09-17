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

exports.visits = function(httpResponse) {
	db.connect(conf.db.development.url, function(err, conn) {
		if(err) console.log(err);
		else {
			conn.collection(conf.db.connections, function(err, coll) à
				if(err) console.log(err);
				else {
					coll.find({}, {limit: 10, sort:[["_id", "desc"]]}, function(err, cursor) {
					if(err) console.log(err);
					else {
						cursor.toArray(function(err, items)) {
							require("./utils").twohundredJson(httpResponse, items);
						}
					}
				}
			}
		}
	}
}
