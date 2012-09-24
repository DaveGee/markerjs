
for(var func in require("./webUtils")) {
    exports[func] = require("./webUtils")[func];
}

for(var func in require("./../backup/webPageUtils.js")) {
    exports[func] = require("./../backup/webPageUtils")[func];
}


