const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./public/src/index.js",
    loginPage: "./public/src/loginPage.js",
    registerPage: "./public/src/registerPage.js",
    actionPage: "./public/src/action.js",
    sessionValidation: "./public/src/sessionValidation.js",
    logout:  "./public/src/logout.js",
    utils: "./public/src/utils.js",
    search: "./public/src/search.js",
    play: "./public/src/play.js",
    contactPage: "./public/src/contactPage.js",
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "[name].bundle.js",
  },
  watch: true,
};
