let Encore = require('@symfony/webpack-encore');
let webpack = require('webpack');
let path = require('path');

Encore
	.setOutputPath("./dist/")
	.setPublicPath("/dist")
	.cleanupOutputBeforeBuild()

	.addEntry('app', './src/glue.ts')
	.addStyleEntry('style', './sass/glue.scss')

	.autoProvidejQuery()

	.enableTypeScriptLoader()
	// .enableLessLoader()
	.enableSassLoader()

	.createSharedEntry('vendor', [
		'bootstrap/dist/js/bootstrap.bundle.js',
		// 'lodash',
		// 'font-awesome',
		'jquery',
		// 'zone.js',
		// 'reflect-metadata',
	])

	.addLoader({ test: /\.html/, loader: 'html-loader' })
	.addLoader({ test: require.resolve("pace-progress"), loader: "imports?define=>false" })
	// .addLoader({ test:  /component\.less/, loader: 'raw-loader!less-loader' })
	// .addLoader({ test: /\.twig/, loader: 'twig-loader' })

	// .addPlugin(new webpack.ContextReplacementPlugin(
	// 	/angular(\\|\/)core(\\|\/)@angular/,
	// 	root('./src') // location of your src
	// ))

	// .enableSourceMaps(!Encore.isProduction())
	// .enableVersioning(Encore.isProduction())
;

function root(__path) {
	return path.join(__dirname, __path);
}

module.exports = Encore.getWebpackConfig();