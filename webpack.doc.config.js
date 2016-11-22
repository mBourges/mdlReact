const webpack = require('webpack');
const Path = require('path');

module.exports = (env) => {
  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const ifProd = (plugin) => addPlugin(env.prod, plugin);
  const removeEmptyPlugin = (array) => array.filter(p => !!p);

  return {
    entry: [
        './node_modules/material-design-lite/dist/material.min.js',
        './docs/src/index.js',
        ],
     resolve: {
        extensions: ['.scss', '.css', '.js', '.jsx']
    },
    output: {
      filename: 'bundle.js',
      path: Path.resolve(__dirname, 'docs'),
    //   pathinfo: !env.prod,
    //   publicPath: '/',
    },
    // context: Path.resolve(__dirname, './docs/src'),
    devtool: env.prod ? 'source-map' : 'eval',
    // bail: env.prod,
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]
    },
    plugins: removeEmptyPlugin([
      ifProd(new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }))
    ])
  };
};
