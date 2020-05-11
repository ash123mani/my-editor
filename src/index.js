import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import App from './App';

import pReducer from './redux/reducer';
import './index.scss';

import './static/scss/index.scss';

const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      serialize: {
        options: {
          undefined: true,
          function(fn) {
            return fn.toString();
          },
        },
      },
    }),
);

export const persistor = persistStore(store);

ReactDOM.render(
  store && persistor ? (
    <Provider store={store}>
      <PersistGate loading={<div>...loading</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  ) : (
    <div>...Loading</div>
  ),
  document.getElementById('root'),
);
