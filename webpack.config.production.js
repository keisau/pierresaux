require('babel-register')
require('babel-polyfill')
var path = require('path')
module.exports = require(path.resolve('.', 'webpack.config.production'))
