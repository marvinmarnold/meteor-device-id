import { RLS } from 'meteor/marvin:reactive-local-store';
import { deviceIdKey } from './device-id-key.js';

export function get() {
  return RLS.get(deviceIdKey);
}

export function gen(callback) {
  console.log('gen');
  if(!get()) {
    console.log('!get');
    // create random var
    const deviceId = Random.id();

    // save on server
    Meteor.call("deviceId.store", deviceId, (error, result) => {
      console.log('deviceId.store');
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
  RLS.remove(deviceIdKey);
  gen(callback);
}
