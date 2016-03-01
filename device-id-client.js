var storedName = "___deviceId"

_.extend(DeviceId, {
  isSet(callback) {
    if(!DeviceId.get())
      return callback(undefined, false);

    // Make sure present on server too
    Meteor.call('deviceId/isClaimed', this.get(), callback)
  },

  get() {
    return window.localStorage.getItem(storedName);
  },

  store(deviceId) {
    Session.set('device-id-ready', true)
    window.localStorage.setItem(storedName, deviceId)
  },

  gen(callback) {
    console.log('deviceID gen');
    this.isSet(function(error, isSet) {
      console.log('deviceID isSet');
      console.log(isSet);
      if(!isSet) {
        console.log('deviceID not set');
        // Meteor.call('deviceId/gen', function(error, deviceId) {
        //   if(error)
        //     return callback(error);
          var deviceId = Random.id()
          DeviceId.store(deviceId);
          callback(undefined, deviceId);
        // })
      } else {
        console.log('deviceID is set');
        Session.set('device-id-ready', true)
        callback(undefined, DeviceId.get());
      }
    })
  },

  simpleGen() {
    DeviceId.gen(function(e, d) { });
  }
})
