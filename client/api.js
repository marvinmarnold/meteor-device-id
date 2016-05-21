import { RLS } from 'meteor/marvin:reactive-local-store';
import { deviceIdKey } from './device-id-key.js';

export function get() {
  return RLS.get(deviceIdKey);
}

export function gen() {
  // create random var
  const deviceId = Random.id();

  // save on server
  Meteor.call("deviceId.store", deviceId, (error, result) => {
    if(error) {
      console.log("error", error);
    }
    if(result) {
      RLS.store(deviceIdKey, deviceId);
    }
  });
}
