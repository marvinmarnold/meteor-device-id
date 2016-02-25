Package.describe({
  name: 'marvin:device-id',
  version: '0.0.1',
  summary: 'Facilitates anonymous data collection by allowing client to generate random ID and store on device through localStorage + sync w/ server.',
  git: 'https://github.com/marvinmarnold/meteor-device-id',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'random', 'mongo', 'underscore', 'check']);

  api.addFiles('device-id.js');
  api.addFiles('device-id-server.js', 'server');
  api.addFiles('device-id-client.js', 'client');

  api.export('DeviceId')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marvin:device-id');
  api.addFiles('device-id-tests.js');
});
