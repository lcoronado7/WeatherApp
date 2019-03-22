import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData =()=>(
  <div>
    <h2>Weather Data</h2>
    <WeatherTemperature/>
    <WeatherExtraInfo/>
  </div>
);

export default WeatherData;
