var db = require("mongodb");
var conf = require("../config/conf.js");

exports.recordVisit = function(httpRequest) {

	db.connect(conf.db.development.url, function(err, conn) {
		if(err) throw err
		conn.collection(conf.db.connections, function(err, coll) {
			if(err) throw err;

			var newVisit = {
				"ip": httpRequest.connection.remoteAddress,
				"path": httpRequest.url,
				"ts": new Date()
			};
	
			coll.insert(newVisit, {safe:true}, function(err) {
				console.log(err ? "error trying to insert visit in db. " + JSON.stringify(err) : "new record in db");
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
