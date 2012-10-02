
exports.web = {
    port:   process.env.PORT || 10000,
    ip:     process.env.IP || "localhost"
};

exports.app = {
    name:   process.env.APP || "MarkerJs",
    env:    process.env.APP_ENV || "development",
    debug:  process.env.DEBUG || true,
    tmpDir: "./tmp/"
};

exports.db = {
    development: require("./db.js").dbConfig,
    production: require("./db.js").dbConfig,

    // db collections
    connections: "connections"
} 
