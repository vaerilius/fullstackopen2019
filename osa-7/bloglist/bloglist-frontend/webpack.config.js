const path = require('path')
const webpack = require('webpack')
   
    // "start": "webpack-dev-server --mode=development",
    // "build": "webpack --mode=production",
    // "@babel/core": "^7.6.2",
    // "@babel/polyfill": "^7.6.0",
    // "@babel/preset-env": "^7.6.2",
    // "@babel/preset-react": "^7.0.0",
    // "babel-loader": "^8.0.6",
    // "css-loader": "^3.2.0",
    // "style-loader": "^1.0.0",
    // "webpack": "^4.40.2",
    // "webpack-cli": "^3.3.9",
    // "webpack-dev-server": "^3.8.1"
const config = (env, argv) => {
  console.log('argv', argv.mode)

  const backend_url = argv.mode === 'production'
  ? 'http://localhost:3001/'
  : 'http://localhost:3001/'

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url)
      })
    ]
  }
}
module.exports = config