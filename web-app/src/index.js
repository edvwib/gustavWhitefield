import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './components/globals/context';
import 'core-js/fn/string/includes';
import 'core-js/fn/promise';
import 'core-js/fn/array/find-index';
import 'core-js/fn/array/values';
import 'core-js/fn/array/from';
import 'core-js/fn/object/values';
import 'core-js/fn/object/assign';
import 'core-js/fn/dom-collections';
import 'whatwg-fetch';
import './index.css';
import './App.css';
import * as Sentry from '@sentry/browser';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import App from './App';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: "https://0a69789a45e948e88fa480fdc162388a@sentry.io/1726807" });

  LogRocket.init('g3kcgp/gustav-whitefield-fe');
  setupLogRocketReact(LogRocket);
  LogRocket.getSessionURL(sessionURL => {
    Sentry.configureScope(scope => {
      scope.setExtra("sessionURL", sessionURL);
    });
  });
}

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </BrowserRouter>
  , document.getElementById('root'));

if(process.env.NODE_ENV === 'production')
  serviceWorker.register();
else
  serviceWorker.unregister();
