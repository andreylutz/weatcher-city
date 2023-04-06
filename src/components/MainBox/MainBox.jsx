import './style.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { timeConverter } from '../../helpers';

import {
  ThermometerHalf,
  Sunrise,
  SunsetFill,
  Wind,
  EyeFill,
  CloudDownloadFill,
} from 'react-bootstrap-icons';

export default function MainBox({ children }) {
  const responseWeatcher = useSelector((state) => state.weatcher.data);

  const sunsetDate = timeConverter(responseWeatcher.sys.sunset);
  const sunriseDate = timeConverter(responseWeatcher.sys.sunrise);

  const dataWeatcher = [
    {
      title: 'Temperature',
      data: `max ${Math.floor(responseWeatcher.main.temp_max)} °C / min ${Math.floor(
        responseWeatcher.main.temp_min,
      )} °C`,
      icon: <ThermometerHalf />,
    },
    {
      title: 'Pressure',
      data: `${responseWeatcher.main.pressure} mm Hg`,
      icon: <CloudDownloadFill />,
    },
    {
      title: 'Visibility',
      data: `${Math.floor(responseWeatcher.visibility / 100)} %`,
      icon: <EyeFill />,
    },
    {
      title: 'Wind',
      data: `${responseWeatcher.wind.speed} m/s`,
      icon: <Wind />,
    },
    {
      title: 'Sunrise',
      data: `${sunriseDate}`,
      icon: <Sunrise />,
    },
    {
      title: 'Sunset',
      data: `${sunsetDate}`,
      icon: <SunsetFill />,
    },
  ];

  return (
    <div className="field">
      {children}
      <div className="field__detail">
        <p className="field__name">{responseWeatcher.name.toUpperCase()}</p>
        {dataWeatcher.map((weatcher) => (
          <p className="field__weatcher" key={uuidv4()}>
            {weatcher.icon}{' '}
            <p>
              {weatcher.title}: {weatcher.data}
            </p>
          </p>
        ))}
      </div>
    </div>
  );
}
