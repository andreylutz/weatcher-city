import './style.css';
import { useSelector } from 'react-redux';
import { dateConverter } from '../../helpers';

export default function WeatchCard() {
  const dataWeatcher = useSelector((state) => state.weatcher.data);

  const toDay = dateConverter(dataWeatcher.dt);

  let statusWeatcher;

  if (dataWeatcher.weather[0].main === 'Clouds') {
    statusWeatcher = 'cloudy';
  }

  if (dataWeatcher.weather[0].main === 'Clear') {
    statusWeatcher = 'sunny';
  }

  if (dataWeatcher.weather[0].main === 'Rain') {
    statusWeatcher = 'rainy';
  }

  if (dataWeatcher.weather[0].main === 'Mist') {
    statusWeatcher = 'mist';
  }

  if (dataWeatcher.weather[0].main === 'Snow') {
    statusWeatcher = 'snowy';
  }

  return (
    <>
      <div className="card">
        <div className="container">
          <div className={statusWeatcher}></div>
        </div>
        <div className="card-header">
          <span>{toDay}</span>
          <span>{dataWeatcher.weather[0].description}</span>
          <span>humidity {dataWeatcher.main.humidity} %</span>
          <span>wind {dataWeatcher.wind.speed} m/s</span>
        </div>
        <span className="temp">{Math.floor(dataWeatcher.main.temp)}°</span>
      </div>
    </>
  );
}
