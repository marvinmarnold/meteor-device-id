import './reactive-local-store';
import { get, gen, refresh } from './api.js';

export const DeviceId = {
  get: get,
  gen: gen,
  refresh: refresh
};
