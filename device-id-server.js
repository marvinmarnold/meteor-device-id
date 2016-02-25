Meteor.methods({
  'deviceId/isClaimed': function(deviceId) {
    check(deviceId, String);

    return isClaimed(deviceId)
  },
  'deviceId/gen': function() {
    return gen();
  },
  'deviceId/store': function(deviceId) {
    check(deviceId, String);

    return store(deviceId);
  },
});

var isClaimed = function(deviceId) {
  return !!DeviceIds.findOne({deviceId: deviceId})
}

var gen = function() {
  var deviceId = Random.id();

  if(isClaimed(deviceId))
    return gen();

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
