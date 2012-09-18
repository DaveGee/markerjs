var db = require("mongodb");
var conf = require("../config/conf.js");
var log = require("./log").debug;

exports.recordVisit = function(httpRequest) {

	db.connect(conf.db.development.url, function(err, conn) {
		if(err) { require("../lib/log").debug(err); return; }
		conn.collection(conf.db.connections, function(err, coll) {
			if(err) { require("../lib/log").debug(err); return; }

			var newVisit = {
				"ip": httpRequest.connection.remoteAddress,
				"path": httpRequest.url,
				"ts": new Date()
			};
	
			coll.insert(newVisit, {safe:true}, function(err) {
				console.log(err ? "new visit in db" : "error trying to insert visit in db");
			});
			
		});
	});
}

exports.visits = function(httpResponse) {
	db.connect(conf.db.development.url, function(err, conn) {
		if(err) throw err;
		conn.collection(conf.db.connections, function(err, coll) {
			if(err) throw err;
			coll.find({}, {limit: 10, sort:[["_id", "desc"]]}, function(err, cursor) {
				if(err) throw err;
					    
				 cursor.toArray(function(err, items) {
					 require("./utils").twohundredJson(httpResponse, items);
				 });					    
			});
		});
	});
}
