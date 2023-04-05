import { api } from '../../api/index';
import { actionsWeatcher } from '../actions-creators/weatcher.action';

export const getWeatcher = (eventCity = 'Moscow') => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `/data/2.5/weather?q=${eventCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
      );

      dispatch(actionsWeatcher.setWeatcher(res));
    } catch (e) {
      console.log(e.response.data);
    }
  };
};
