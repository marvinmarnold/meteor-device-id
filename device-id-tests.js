if(Meteor.isServer) {
  DeviceId.DeviceIds.remove({});
}

if(Meteor.isClient) {
  Tinytest.addAsync('gen', function (test, done) {
    DeviceId.gen(function(error, deviceId) {
      test.isUndefined(error);
      test.isTrue(typeof deviceId === 'string');
      test.equal(DeviceId.get(), deviceId);

      done();
    })
  });

  Tinytest.addAsync('deviceId/gen', function (test, done) {
    Meteor.call('deviceId/gen', function(error, deviceId) {
      test.isUndefined(error, "Error calling deviceId/gen");
      test.isTrue(typeof deviceId === 'string');

      Meteor.call('deviceId/isClaimed', deviceId, function(error, isClaimed) {
        test.isTrue(isClaimed);

        done();
      })
    })
  });

  Tinytest.addAsync('deviceId/isClaimed', function (test, done) {
    Meteor.call('deviceId/store', 'car', function(error, wasStored) {
      test.isTrue(wasStored);

      done();
    })
  });

  Tinytest.addAsync('cant store duplicates', function (test, done) {
    Meteor.call('deviceId/store', 'car2', function(error, wasStored) {
      test.isTrue(wasStored);

      Meteor.call('deviceId/store', 'car2', function(error, wasStored) {
        test.isFalse(wasStored);

        done();
      })
    })
  });
}
