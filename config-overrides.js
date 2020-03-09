const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    erc: path.resolve(__dirname, 'src'),
  })
);

exports = module.exports;

// eslint-disable-next-line no-shadow
exports.paths = function paths(paths, env) {
  paths.appBuild = path.resolve(__dirname, 'www');
  return paths;
};
