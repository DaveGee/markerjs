
for(var func in require("./webUtils")) {
    exports[func] = require("./webUtils")[func];
}

for(var func in require("./webPageUtils.js")) {
    exports[func] = require("./webPageUtils")[func];
}