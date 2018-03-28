var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: {
    pageA: ["./pageA"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false, shippedProposals: true }],
            ]
          }
        }
      }
    ]
  },
};
