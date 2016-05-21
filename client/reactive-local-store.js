import { RLS } from 'meteor/marvin:reactive-local-store';
import { deviceIdKey } from './device-id-key.js';

RLS.setRegisteredKeys([
  deviceIdKey
]);

RLS.init();
