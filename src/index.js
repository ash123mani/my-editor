import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';

import pReducer from './redux/reducer';
import './index.scss';

import './static/scss/index.scss';

const logger = store => next => action => {
  console.log('<---- @@@@@ --->');
  console.log('dispatching', action);
  console.log('prev state', store.getState());
  let result = next(action);
  console.log('next state', store.getState());
};

// export const store = createStore(pReducer)

const store = createStore(
  pReducer,
  compose(
    applyMiddleware(logger),
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
  ),
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
