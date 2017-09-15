const path = require('path');

module.exports = {
	title: 'DXP Componets',
	components: 'src/**/*.{js,jsx}',
	webpackConfig: require('./webpack.config'),
  getExampleFilename(componentPath) {
		console.log('componentPath', componentPath.replace(/\.(jsx|js)?$/, '.styleguide.md'));
    return componentPath.replace(/\.(jsx|js)?$/, '.styleguide.md');
  }
};