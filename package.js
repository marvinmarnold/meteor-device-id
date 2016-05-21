Package.describe({
  name: 'marvin:device-id',
  version: '0.0.1',
  summary: 'Facilitates anonymous data collection by allowing client to generate random ID and store on device through localStorage + sync w/ server.',
  git: 'https://github.com/marvinmarnold/meteor-device-id',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use([
    'ecmascript',
    'random',
    'mongo',
    'underscore',
    'check'
  ]);

  api.use('marvin:reactive-local-store@0.0.1');

  api.addFiles('server/main.js', 'server');

  api.mainModule('client/main.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marvin:device-id');
  api.addFiles('device-id-tests.js');
});
