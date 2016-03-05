Package.describe({
    name:          'mrunleaded:typescript',
    version:       '0.0.9',
    summary:       'Typescript compiler for Meteor 1.2',
    git:           'https://github.com/kthompson/meteor-typescript',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use('isobuild:compiler-plugin@1.0.0');
    api.use('pbastowski:systemjs@0.0.1', 'client', { weak: true });
});

Package.registerBuildPlugin({
  name: 'typescript',
  sources : [
    'plugin/typescript.js'
  ],
  npmDependencies : {
    'typescript' : '1.7.5'
  }
});

