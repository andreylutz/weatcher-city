import { SET_WEATCHER } from '../actions-creators/weatcher.action';

const initialState = {};

const weatcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATCHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weatcherReducer;
