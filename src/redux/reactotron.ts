import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga';

import { isDev } from '../utils/environment';

declare global {
  interface Console {
    tron: any
  }
}

let reactotron: any = null;
if (isDev()) {
  console.tron = Reactotron;

  reactotron = Reactotron
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();
}

export default reactotron;
