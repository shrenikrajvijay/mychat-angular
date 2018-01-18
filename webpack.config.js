var debug = process.env.NODE_ENV !== "production"
var glob = require('glob')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    app: [
      "./app/styles/main.scss",
      "bootstrap/dist/css/bootstrap.min.css",
      "angular",
      "angular-mocks",
      "angular-route",
      "./app/scripts/configs/routeConfig.js",
      "./app/scripts/configs/constantsConfig.js",
      "./app/scripts/directives/scrollBottomDirective.js",
      "./app/scripts/directives/reactionDirective.js",
      "./app/scripts/directives/reactionSelectorDirective.js",
      "./app/scripts/controllers/ChatCtrl.js",
      "./app/scripts/controllers/LoginCtrl.js",
      "./app/scripts/factories/chatFactory.js",
      "./app/scripts/factories/userFactory.js",

    ]
  },
  output: {
    path: __dirname + "/app/",
    filename: "bundle.min.js"
  },

  devServer: {
    inline: true,
    hot: true,
    contentBase: './app'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
    ]
  },
  plugins: debug ? [
    new ExtractTextPlugin('style.css'),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
