process.env.NODE_ENV = 'production'

const fs = require('fs')
const gracefulFs = require('graceful-fs')
const paths = require('./paths')
const nodeExternals = require('webpack-node-externals');

gracefulFs.gracefulify(fs)

module.exports = {
  target: 'node',
  entry: {
    main: paths.appServer
  },
  output: {
    path: paths.appBuild,
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  resolve: {
    modules: [
      paths.appServer, paths.appNodeModules
    ],
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  }
}
