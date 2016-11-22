const webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const ifProd = (plugin) => addPlugin(env.prod, plugin);
  const removeEmptyPlugin = (array) => array.filter(p => !!p);

  return {
    entry: './src/index',
    resolve: {
      extensions: ['.js', 'css', 'scss'],
      alias: {
        react: Path.resolve('./node_modules/react'),
        classnames: Path.resolve('./node_modules/classnames'),
      }
    },
    externals: {
      'react': 'react',
      'classnames': 'classnames'
    },
    output: {
      path: Path.join(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'mdlReact'
    },
    devtool: 'source-map',
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
          { test: /\.scss$/, loader: env.prod ? ExtractTextPlugin.extract('css-loader?minimize!postcss-loader!sass-loader') : ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader') }
      ]
    },
    plugins: removeEmptyPlugin([
      new ExtractTextPlugin({
        filename: env.prod ? 'style.min.css' : 'style.css',
        allChunks: true
      }),
      ifProd(new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }))
    ])
  };
};
