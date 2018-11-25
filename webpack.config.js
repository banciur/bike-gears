const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Bike gears",
    }),
  ],
  devServer: {
    contentBase: "./dist",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: false,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              camelCase: "dashesOnly",
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
