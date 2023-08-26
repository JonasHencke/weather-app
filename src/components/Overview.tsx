import React from "react";
import icon from "../SVGs/night.svg";
import cloud from "../SVGs/cloudy.svg";
import rain from "../SVGs/rain-svgrepo-com.svg";
import { useContext } from "react";
import { WeatherContext } from "./Layout";

export default function Overview() {
  const weatherData = useContext(WeatherContext);
  const temperature = weatherData
    ? Math.floor(weatherData.main.temp - 273.15)
    : null;
  const weatherStatus = weatherData ? weatherData.weather[0].description : null;
  const DateObj =
    weatherData && new Date((weatherData.dt + weatherData.timezone) * 1000);
  const Hours = weatherData && DateObj.getUTCHours();
  const Minutes = weatherData && DateObj.getUTCMinutes();
  return (
    <div className="overview-component">
      <div className="searchbar">Search</div>
      <img className="overview-image" src={icon} />
      <p className="overview-temperature">{temperature}°C</p>
      <p className="overview-date">
        Montag, {Hours}:{Minutes}
      </p>
      <p className="overview-wrapper">
        <img src={cloud} />
        {weatherStatus}
      </p>
      <p className="overview-wrapper">
        <img src={rain} />
        Regenwahrscheinlichkeit: <br /> 30%{" "}
      </p>
      <div className="overview-location">Leipzig, Sachsen, Deutschland</div>
    </div>
  );
}
