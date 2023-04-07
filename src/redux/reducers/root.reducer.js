import { combineReducers } from 'redux';
import weatcherReducer from './weatcher.reducer';
import errorReducer from './error.reducer';

const rootReducer = combineReducers({
  weatcher: weatcherReducer,
  error: errorReducer,
});

export default rootReducer;
