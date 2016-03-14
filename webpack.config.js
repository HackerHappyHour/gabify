module.exports = {
  entry: './src/app/index.js',
  output: {
    filename:'bundle.js',
    path: './src/app'
  },
  devtool:'eval-source-map',
  module: {
    loaders: [
      {
        test:/\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
