import { RLS } from 'meteor/marvin:reactive-local-store';
import { deviceIdKey } from './device-id-key.js';

export function get() {
  return RLS.get(deviceIdKey);
}

export function gen(callback) {
  console.log('RLS#get');
  console.log(get());
  if(!get()) {
    // create random var
    const deviceId = Random.id();

    console.log(deviceId);
    // save on server
    Meteor.call("deviceId.store", deviceId, (error, result) => {
      if(error) {
        console.log("error", error);
      }
      if(result) {
        RLS.set(deviceIdKey, deviceId);

        if(callback)
          callback(error, result);
      }
    });
  }
}

export function regen(callback) {
  console.log('DeviceId#regen');
  RLS.remove(deviceIdKey);
  gen(callback);
}
