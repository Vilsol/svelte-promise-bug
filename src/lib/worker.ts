import {browser} from '$app/env';
import SyncWorker from './sync_worker?worker';
import * as Comlink from 'comlink';
import type {WorkerType} from './sync_worker';

function getWorker(): { syncWorker: Worker; syncWrap: Comlink.Remote<WorkerType> } {
  const theWorker = new SyncWorker();
  return {syncWorker: theWorker, syncWrap: Comlink.wrap<WorkerType>(theWorker)};
}

export const { syncWorker, syncWrap } = browser ? getWorker() : { syncWorker: null, syncWrap: null };
