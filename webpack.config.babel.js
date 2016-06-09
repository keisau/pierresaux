import webpack from 'webpack'
import path from 'path'

const srcPath = path.resolve(__dirname, 'src', 'js')
const buildPath = path.resolve(__dirname, 'dist')

const defineEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
  }
})
const plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  defineEnvPlugin
]

const output = {
  filename: 'bundle.js',
  libraryTarget: 'umd',
  path: buildPath,
  publicPath: '/'
}

const clientLoaders = [
  { test: /\.js$/, exclude: /(node_modules|raw\-js)/, loader: 'babel' },
  { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?name=assets/[hash:8].[ext]&limit=100000&minetype=application/font-woff' },
  { test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/[hash:8].[ext]' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=assets/[hash:8].[ext]' },
  { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=16384&name=assets/images/[hash:8].[ext]' },
  { test: /\.css$/, loader: 'style!css!postcss!resolve-url?name=[hash:8].[ext]' },
  { test: /\.scss$/, loader: 'style!css!sass!postcss!resolve-url?name=[hash:8].[ext]!sass?sourceMap' },
  { test: /\.json$/, loader: 'json' },
  { test: /\.hbs$/, loader: "handlebars" }
]

export const devServer = {
  entry: [ path.resolve(srcPath, 'index.js') ],
  output,
  module: {
    loaders: clientLoaders
  },
  devServer: {
    contentBase: buildPath,
    stats: {
      colors: true
    },
    inline: true,
    proxy: false,
    port: 8090,
    historyApiFallback: true
  },
  plugins: [ defineEnvPlugin ],
  debug: true,
  devtool: 'source-map'
}

export const client = {
  entry: {
    index: path.resolve(srcPath, 'index.js'),
  },
  output,
  module: {
    loaders: clientLoaders
  },
  plugins,
}

export default devServer
