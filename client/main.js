import './reactive-local-store';
import { get, gen, regen } from './api.js';

export const DeviceId = {
  get: get,
  gen: gen,
  regen: regen
};
