const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const configCommon = require("./webpack.config.common");

module.exports = merge(configCommon, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.template.dev",
    }),
  ],
  devServer: {
    contentBase: "./dist",
  },
});
