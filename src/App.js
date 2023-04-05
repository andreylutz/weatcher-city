import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatcher } from './redux/async-action-creators/weatcherAsyncAction';

function App() {
  const responseWeatcher = useSelector((state) => state.weatcher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatcher());
  }, [dispatch]);

  if (responseWeatcher.data === undefined) {
    return;
  }

  console.log(responseWeatcher);

  return <div className="app">{responseWeatcher.data.data}</div>;
}

export default App;
