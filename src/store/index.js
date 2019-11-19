import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import freeze from 'redux-freeze';
import { reducers } from '../reducers';
import rootSaga from '../sagas';

let middlewares = [];

if (process.env.NODE_ENV !== 'production')
  middlewares.push(freeze);

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(...middlewares, sagaMiddleware);

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension)
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

export default store;