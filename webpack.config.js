module.exports = {
  entry: './src/index.js',
  output: {path: './build', pathName: '/build/', filename: 'bundle.js'},
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        devtool: 'inline-source-map',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}