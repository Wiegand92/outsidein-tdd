import {createStore, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import api from '../utils/api';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(api)), devToolsEnhancer()),
);

export default store;
