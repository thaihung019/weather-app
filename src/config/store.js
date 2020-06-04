import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import rootReducers from '../store';
import rootSaga from '../store/sagas';
import deps from './dependencies';

export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const getRootSaga = rootSaga();
  const dependencies = deps();

  const getSagaMiddleware = () => {
    if (process.env.NODE_ENV === 'development') {
      return [sagaMiddleware, createLogger({collapsed: true})];
    } else {
      return [sagaMiddleware];
    }
  };

  const store = createStore(
    rootReducers(history),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        ...getSagaMiddleware(),
      )
    )
  );

  getRootSaga.forEach(saga => {
    sagaMiddleware.run(saga(dependencies));
  });

  return store;
}
