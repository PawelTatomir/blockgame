const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
    process: require.resolve('process/browser'),
    url: require.resolve('url/'),
    querystring: require.resolve('querystring-es3'),
    assert: require.resolve('assert/'),
    util: require.resolve('util/'),
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
    https: require.resolve('https-browserify'),
    http: require.resolve('http-browserify'),
    fs: false,
    net: false,
    tls: false,
    child_process: false,
  };

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ];

  return config;
};
