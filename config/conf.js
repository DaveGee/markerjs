
exports.web = {
    port:   10000,//process.env.PORT,
    ip:     process.env.IP
};

exports.app = {
    name:   process.env.APP || "MarkerJs",
    env:    process.env.APP_ENV || "development",
    debug:  process.env.DEBUG || true
};

exports.db = {
    development: require("./db.js").dbConfig,
    production: require("./db.js").dbConfig,

    // db collections
    connections: "connections"
} 
