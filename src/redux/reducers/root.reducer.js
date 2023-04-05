import { combineReducers } from 'redux';
import weatcherReducer from './weatcher.reducer';

const rootReducer = combineReducers({
  weatcher: weatcherReducer,
});

export default rootReducer;
