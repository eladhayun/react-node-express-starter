process.env.NODE_ENV = 'production';

var webpack = require('webpack');
var config = require('../config/webpack.config.server.prod');

webpack(config).run((err, stats) => {
  if (err) {
    console.error('Failed to compile.', err);
    process.exit(1);
  }

  if (stats.compilation.errors.length) {
    console.error('Failed to compile.', stats.compilation.errors);
    process.exit(1);
  }

  if (process.env.CI && stats.compilation.warnings.length) {
    console.error('Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.', stats.compilation.warnings);
    process.exit(1);
  }
  console.log('Compiled successfully.');
})
