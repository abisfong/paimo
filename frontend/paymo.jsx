import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as api from './util/api';
import * as actions from './actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function() {
  window.api = api;
  window.actions = actions;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.store = store;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});