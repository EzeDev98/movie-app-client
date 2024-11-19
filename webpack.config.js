const { watch } = require("fs");
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        loginPage: "./public/src/loginPage.js",
        registerPage: "./public/src/registerPage.js",
        
    },
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "[name].bundle.js"
    },
    watch: true,

};