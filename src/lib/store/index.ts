import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { repoReducer } from './repo/reducer';

export type { RootState, GetStateType } from './types';

export const reducers = {
  repo: repoReducer,
};

export const middleware = [thunkMiddleware];

// The store consists of one or more reducers and contains the app state
export const appReducer = combineReducers(reducers);

export const store = createStore(
  appReducer,
  process.env.REACT_APP_NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware)),
);
