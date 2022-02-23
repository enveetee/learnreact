//The video which sorted this out https://www.youtube.com/watch?v=WDpxqopXd9U
//const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin"); //npm i --save-dev html-webpack-plugin
//const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
	mode:"development",
   devServer:{
      contentBase:"./dist"
   }};
