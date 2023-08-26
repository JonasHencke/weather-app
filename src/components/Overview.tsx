import React from "react";
import icon from "../SVGs/night.svg";
import cloud from "../SVGs/cloudy.svg";
import { useContext } from "react";
import { WeatherContext } from "./Layout";
import getTime from "../utils/getTime";
import getWeekday from "../utils/getWeekday";

export default function Overview() {
  const { weatherData, ForecastData } = useContext(WeatherContext);
  const temperature = weatherData
    ? Math.floor(weatherData.main.temp - 273.15)
    : null;
  const weatherStatus = weatherData ? weatherData.weather[0].description : null;
  const weekday = ForecastData
    ? getWeekday(ForecastData.current.dt, ForecastData.timezone)
    : null;
  const timeOfDay = ForecastData
    ? getTime(ForecastData.current.dt, ForecastData.timezone)
    : null;
  const location = weatherData
    ? `${weatherData.name} , ${weatherData.sys.country}`
    : null;

  return (
    <div className="overview-component">
      <div className="searchbar">Search</div>
      <img className="overview-image" src={icon} />
      <p className="overview-temperature">{temperature}°C</p>
      <p className="overview-date">
        {weekday}, {timeOfDay}
      </p>
      <p className="overview-wrapper">
        <img src={cloud} />
        {weatherStatus}
      </p>
      <p className="overview-wrapper"></p>
      <div className="overview-location">{location}</div>
    </div>
  );
}
