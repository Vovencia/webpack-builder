import {root, source, dist} from "./_utils";
import {MODE, preprocessorOptions} from "./_config";

const pugIncludeGlob = require('pug-include-glob');

const preprocessor = `preprocess-loader?` + preprocessorOptions;

export default {
	rules: [
		{
			test: /\.(t|j)sx?$/,
			exclude: /(node_modules|bower_components)/,
			use: [
				{
					loader: "awesome-typescript-loader",
					options: {
						configFileName: root('initializers', 'tsconfig.json'),
					}
				},
				preprocessor
			],
		},
		{
			test: /\.styl$/,

				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'stylus-loader',
						options: {
							import: source('*.styl')
						},
					},
					preprocessor
				]

		},
		{
			test: /\.css$/,

				use: [
					'style-loader',
					'css-loader',
					preprocessor
				],

		},
		{
			test: /\.pug$/,
			use : [{
				loader: 'pug-loader',
				options: {
					plugins: [ pugIncludeGlob({ /* options */ }) ]
				}
			}]
		},
		{
			test: /((\/assets\/|\\assets\\)(\/data\/|\\data\\)|(\.(png|jpg|gif|svg)$))/,
			use: [
				{
					loader: 'file-loader',
					options: {
						useRelativePath: true,
						outputPath: function(path){
							path = path.replace('/source/', '');
							return path;
						},
						name: '[path][name].[ext]?[hash]',
					}
				}
			]
		}
	]
}