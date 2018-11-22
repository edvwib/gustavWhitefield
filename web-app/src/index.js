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
import 'core-js/fn/dom-collections';
import 'whatwg-fetch';
import cssVars from 'css-vars-ponyfill';
import './index.css';
import './App.css';

import App from './App';

cssVars({
  variables: {
    darkGreen: '#314D30',
    lightGreen: '#ADD7CD',
    anotherGreen: '#4d9e8b',
  }
});

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
