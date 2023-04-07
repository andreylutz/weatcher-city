import { SET_ERROR } from '../actions-creators/error.action';

const initialState = null;

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};

export default errorReducer;
