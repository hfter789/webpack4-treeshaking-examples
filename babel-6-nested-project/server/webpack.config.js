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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["env", { modules: false, shippedProposals: true }],
            ]
          }
        }
      }
    ]
  },
};
