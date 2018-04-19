'use strict';

module.exports = function buildMinaraiPreset(context, options) {
  var modules = (options && (typeof options.modules === 'boolean' || typeof options.modules === 'string')) ? options.modules : false;
  return {
    presets: [
      [require('babel-preset-env').default, {
        targets: { browsers: ['last 2 versions'] },
        modules: modules
      }],
      require.resolve('babel-preset-react'),
      require.resolve('babel-preset-stage-0')
    ],
    plugins: [
      require.resolve('babel-plugin-transform-decorators-legacy'),
      [require('babel-plugin-root-import').default, [{
        rootPathPrefix: '~',
        rootPathSuffix: 'src/js/'
      }]],
      require.resolve('babel-plugin-import-glob')
    ]
  };
};
