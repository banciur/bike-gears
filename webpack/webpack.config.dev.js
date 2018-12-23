const merge = require("webpack-merge");

const configCommon = require("./webpack.config.common");

module.exports = merge(configCommon, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },
});
