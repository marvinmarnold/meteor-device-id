Meteor.methods({
  'deviceId/isClaimed': function(deviceId) {
    check(deviceId, String);

    return isClaimed(deviceId)
  },
  'deviceId/gen': function(deviceId) {
    return gen(deviceId)
  },
  'deviceId/store': function(deviceId) {
    check(deviceId, String);

    return store(deviceId);
  },
});

var isClaimed = function(deviceId) {
  return !!DeviceIds.findOne({deviceId: deviceId})
}

var gen = function(deviceId) {
  if(isClaimed(deviceId))
    throw new Meteor.Error('device-id-claimed', "DeviceId claimed")

  store(deviceId);
  return deviceId;
}

var store = function(deviceId) {
  if(isClaimed(deviceId))
    throw new Meteor.Error('device-already-exists', "That deviceId already exists.")

  return !!DeviceIds.insert({deviceId: deviceId})
}

_.extend(DeviceId, {
  isClaimed: isClaimed
})
