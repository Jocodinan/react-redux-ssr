const package = require("./package.json");
const baseConfig = require('./webpack.base.config.js');

module.exports = {
  output: {
    publicPath: `https://s.latamstatic.com/apps/mybookings/${ package.version }/dist/js/`
  },
  ...baseConfig
};