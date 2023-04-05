import './style.css';
import { useSelector } from 'react-redux';

export default function WeatchCard() {
  const responseWeatcher = useSelector((state) => state.weatcher);

  const dataWeatcher = responseWeatcher.data;

  return (
    <>
      <div className="card">
        <div className="container">
          <div className="cloud front">
            <span className="left-front"></span>
            <span className="right-front"></span>
          </div>
          <span className="sun sunshine"></span>
          <span className="sun"></span>
          <div className="cloud back">
            <span className="left-back"></span>
            <span className="right-back"></span>
          </div>
        </div>
        <div className="card-header">
          <span>{dataWeatcher.name}</span>
          <span>Today</span>
        </div>
        <span className="temp">{Math.floor(dataWeatcher.main.temp)}°</span>
      </div>
    </>
  );
}
