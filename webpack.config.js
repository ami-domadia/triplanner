const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        publicPath: __dirname + "/public",
    }
}