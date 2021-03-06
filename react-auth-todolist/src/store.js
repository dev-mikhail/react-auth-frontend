// store.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  // compose(applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__())
  applyMiddleware(thunk)
);

export default store;
