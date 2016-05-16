var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'perfswitch': "./src/index.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    //libraryTarget: 'commonjs2',
    filename: '[name].js'
  },
  externals: {'react': 'React', 'react-dom': 'ReactDOM'},
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015"]
        }
      },
    ]
  }
};

