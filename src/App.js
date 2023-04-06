import './styles/app.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatcher } from './redux/async-action-creators/weatcherAsyncAction';

import Form from './components/Form/Form';
import WeatchCard from './components/WeatchCard/WeatchCard';
import MainBox from './components/MainBox/MainBox';

function App() {
  const responseWeatcher = useSelector((state) => state.weatcher.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatcher());
  }, [dispatch]);

  if (responseWeatcher === undefined) {
    return;
  }

  return (
    <div className="app">
      <Form />
      <MainBox children={<WeatchCard />} />
    </div>
  );
}

export default App;
