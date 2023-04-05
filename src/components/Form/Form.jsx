import './style.css';
import { useDispatch } from 'react-redux';
import { getWeatcher } from '../../redux/async-action-creators/weatcherAsyncAction';

export default function Form() {
  const dispatch = useDispatch();

  const addCity = (e) => {
    e.preventDefault();
    const eventCity = e.target.city.value;

    dispatch(getWeatcher(eventCity));

    e.target.reset();
  };

  return (
    <form className="form" onSubmit={addCity}>
      <input className="form__input" type="text" name="city" placeholder="Enter city" />
      <div className="btn btn__secondary">
        <button type="submit">
          <p>Check the weather</p>
        </button>
      </div>
    </form>
  );
}
