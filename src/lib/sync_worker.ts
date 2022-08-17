import {expose, proxy} from 'comlink';

class SampleWorker {

  doStuff() {
    return proxy({
      hello: {
        foo: 'bar'
      }
    });
  }

}

expose(new SampleWorker());

export type WorkerType = SampleWorker;
