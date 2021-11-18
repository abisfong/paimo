import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import * as api from './util/api';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', function() {
  // const newTodos = [{ id: 1, title: 'job1'}, { id: 2, title: 'job2' }]
  const store = configureStore();
  window.store = store;
  window.api = api;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});