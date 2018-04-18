'use strict';

module.exports = {
  presets: [
    require('babel-preset-env').default(null, {
      targets: { browsers: ['last 2 versions'] },
      modules: false
    }),
    require('babel-preset-react'),
    require('babel-preset-stage-0')
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy'),
    [require('babel-plugin-root-import'), [{
      rootPathPrefix: '~',
      rootPathSuffix: 'src/js/'
    }]],
    require('babel-plugin-import-glob')
  ]
};
