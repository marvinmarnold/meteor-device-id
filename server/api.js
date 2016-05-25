import { DeviceIds } from '../common/device-ids.js';

Meteor.methods({
  'deviceId.store': (deviceId) => {
    check(deviceId, String);

    return !!DeviceIds.insert({deviceId: deviceId});
  }
});
