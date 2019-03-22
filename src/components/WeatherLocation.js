import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () =>( //Arrow Function

  <div> <Location city={"Puerto Ordaz"} />
        <WeatherData/>
  </div>

);

export default WeatherLocation;
