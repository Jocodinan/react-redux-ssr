const baseConfig = require('./webpack.base.config.js');

module.exports = {
  output: {
    publicPath: "/"
  },
  ...baseConfig
};