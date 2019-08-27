const path = require('path');

module.exports = {
  entry: './src/index.ts',
//   devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'hg-date.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'HgDate',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this'
  }
}