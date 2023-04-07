import './style.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatcher } from '../../redux/async-action-creators/weatcherAsyncAction';
import { useForm } from 'react-hook-form';
import { actionsErrors } from '../../redux/actions-creators/error.action';

import Loader from '../Loader/Loader';

export default function Form() {
  const [load, setLoad] = useState(false);
  const dataError = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  });

  const addCity = (data) => {
    setLoad(true);
    setTimeout(() => {
      const { city } = data;

      dispatch(getWeatcher(city)).then((res) => setLoad(false));
      dispatch(actionsErrors.setError(null));

      reset();
    }, 700);
  };

  return (
    <form className="form" onSubmit={handleSubmit(addCity)}>
      <div>
        <div className="errors">
          {errors?.city && (
            <p className="errors__text">{errors?.city?.message || 'Error!'}</p>
          )}
          {dataError && <p className="errors__text">{dataError.message}</p>}
        </div>
        <input
          {...register('city', {
            required: 'field cannot be empty',
          })}
          className="form__input"
          type="text"
          name="city"
          placeholder="Enter city"
        />
      </div>
      <div className="btn btn__secondary">
        <button type="submit">{load ? <Loader /> : <p>Check the weather</p>}</button>
      </div>
    </form>
  );
}
