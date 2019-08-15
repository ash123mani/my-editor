import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

import reducer from './redux/reducer';
import './index.css';

import './static/scss/index.scss';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      serialize: {
        options: {
          undefined: true,
          function: function(fn) {
            return fn.toString();
          },
        },
      },
    }),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
