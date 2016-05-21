Meteor.methods({
  'deviceId.store': () => {
    check(deviceId, String);

    return !!DeviceIds.insert({deviceId: deviceId});
  }
});
