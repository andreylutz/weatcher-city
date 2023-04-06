import './style.css';
import { useSelector } from 'react-redux';

export default function MainBox({ children }) {
  const dataWeatcher = useSelector((state) => state.weatcher.data);

  return (
    <div className="field">
      {children}
      <div className="field__detail">
        <p>Today</p>
        <p>
          Temp: max {dataWeatcher.main.temp_max} / min {dataWeatcher.main.temp_min}
        </p>
        <p>Pressure: {dataWeatcher.main.pressure}</p>
        <p>Visibility: {dataWeatcher.visibility}</p>
        <p>Wind: {dataWeatcher.wind.speed} m/s</p>
        <p>Sunrise: {dataWeatcher.sys.sunrise}</p>
        <p>Sunset: {dataWeatcher.sys.sunrise}</p>
      </div>
    </div>
  );
}
