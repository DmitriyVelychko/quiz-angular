const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './app/app.js',

  output: {
    path: `${__dirname}/build/js`,
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },

  eslint: {
    failOnWarning: true,
    failOnError: true
  },

  devServer: {
    proxy: {
      '**': 'http://localhost:4444/'
    }
  },

  plugins: [],

  devtool:  NODE_ENV == 'development' ? 'source-map' : null

};
