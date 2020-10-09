const { resolve } = require('path')

module.exports = {
	entry: resolve('./src/App.js'),
	output: {
		path: resolve('./dist'),
		filename: 'bundle.min.js'
	},
	watch: false,
	mode: "development",
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
				test: /\.(jpg|png)$/,
				use: {
					loader: "url-loader"
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	}
}