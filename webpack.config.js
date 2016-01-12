var path = require("path")

module.exports = {
  entry: {
    main: path.join(__dirname,"js/app.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  resolve: {
    root: path.join(__dirname, "js"),
    extensions: ["", ".js"],
    moduleDirectories: ["node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  debug: true
}