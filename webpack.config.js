const devMode = process.env.NODE_ENV !== "production";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  mode: devMode ? "development" : "production",
  devtool: devMode ? "inline-source-map" : "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Government Slogan Validator",
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
