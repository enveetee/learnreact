//The video which sorted this out https://www.youtube.com/watch?v=WDpxqopXd9U
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //npm i --save-dev html-webpack-plugin
const mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
	
   devtool:'eval-source-map',
   entry:'./src/index.js',
   //entry:'./src/index.html',

   plugins:[
      new HtmlWebpackPlugin({
         inject:'body',
         template:'./src/index.html',
         filename:'index.html'
      })
   ],
   
   output: {
		path: path.join(__dirname, "dist"),
		filename: "main.js"
	},
	//This has to be in ints on devServer object!!!
	devServer: {
		//It would appear that contentBase was renamed to [static:'./']
      //contentBase: resolveAppPath('public'),
		//static:'./',
      
      //Has this been deprecated
      //watchContentBase: true,
		//if you want to specify a port otherwise its 8080
		//port: 3010,
      compress:true,
		open: true,
      
      hot:true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./assets/images/"
						}
					}
				]
			},
         {
            
            test:/\.html$/,
            use:[
               'html-loader'
               
            ]
         }
		]
	}
};
