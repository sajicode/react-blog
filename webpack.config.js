// entry -> output
const devMode = process.env.NODE_ENV !== 'production';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';

	console.log('env', env);
	return {
		mode: devMode ? 'development' : 'production',
		entry: {
			app: [ '@babel/polyfill', './src/app.js' ]
		},
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		target: 'web',
		module: {
			rules: [
				{
					use: {
						loader: 'babel-loader'
					},
					test: /\.js$/,
					include: [ path.resolve(__dirname, 'src') ],
					exclude: /node_modules/
				},
				{
					test: /\.s?css?/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css'
			})
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	};
};
