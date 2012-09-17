// http://docs.appfog.com/services/mongodb

    if(process.env.VCAP_SERVICES) {
        var env = JSON.parse(process.env.VCAP_SERVICES);
	var mongo = env["mongodb-1.8"][0]["credentials"];
    }
    else {
	var mongo = {
		"hostname": "localhost",
		"port": 27017,
		"username": "",
		"password": "",
		"name": "",
		"db": "db",
		"url": "",
	};

//	mongo["url"] = generateMongoUrl(mongo);
    }

var generateMongoUrl = function(obj) {

	obj.hostname = (obj.hostname || "localhost");
	obj.port = (obj.port || 27017);
	obj.db = (obj.db || "test");

	if(obj.username && obj.password) {
		return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
	else {
		return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
	}
}

exports.dbConfig = mongo;
