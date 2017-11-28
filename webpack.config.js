let Encore = require('@symfony/webpack-encore');
let webpack = require('webpack');
let path = require('path');

Encore
	.setOutputPath("./dist/")
	.setPublicPath("/dist")
	.cleanupOutputBeforeBuild()

	.addEntry('app', './src/glue.ts')
	.addStyleEntry('style', './less/glue.less')

	.autoProvidejQuery()

	.enableTypeScriptLoader()
	.enableLessLoader()

	.createSharedEntry('vendor', [
		'bootstrap/dist/js/bootstrap.bundle.js',
		// 'moment',
		// 'lodash',
		// '',
		'jquery',
		// 'zone.js',
		// 'reflect-metadata',
	])

	.addLoader({ test: /\.html/, loader: 'html-loader' })
	// .addLoader({ test:  /component\.less/, loader: 'raw-loader!less-loader' })
	// .addLoader({ test: /\.twig/, loader: 'twig-loader' })

	// .addPlugin(new webpack.ContextReplacementPlugin(
	// 	/angular(\\|\/)core(\\|\/)@angular/,
	// 	root('./src') // location of your src
	// ))

	.enableSourceMaps(!Encore.isProduction())
	.enableVersioning(Encore.isProduction())
;

function root(__path) {
	return path.join(__dirname, __path);
}

module.exports = Encore.getWebpackConfig();