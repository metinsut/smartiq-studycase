import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { dataReducer } from './data.reducer';

const reducers = {
  data: dataReducer
};

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = () =>
  createStore(combineReducers(reducers), bindMiddleware([thunkMiddleware]));

const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper };
