const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin(["dist"])],
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
