var webpack = require('webpack');
module.export = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style|css'},
			{test:/\.js?$/,loader:'babel',exclude:/node_modules/,query:{compact:false,presets:['es2015']}}
		]
	},
	plugins:[
		new webpack.BannerPlugin('//some css demo'),
		// new webpack.optimize.CommonChunkPlugin('common.js')
	],
	resolve:{
		alias:{
			jquery:'./js/jquery.js'
		}
	}
}
