import React from "react";
import { useContext } from "react";
import { WeatherContext } from "./Layout";
import getTime from "../utils/getTime";
import getWeekday from "../utils/getWeekday";
import { WeatherContextType } from "./Layout";
import day from "../SVGs/day.svg";
import cloudyDay from "../SVGs/cloudy-day-3.svg";
import cloudy from "../SVGs/cloudy.svg";
import showerRain from "../SVGs/rainy-6.svg";
import rain from "../SVGs/rainy-3.svg";
import thunder from "../SVGs/thunder.svg";
import snow from "../SVGs/snowy-6.svg";
import night from "../SVGs/night.svg";
import cloudyNight from "../SVGs/cloudy-night-3.svg";
import calculateTemperature from "../utils/calculateTemperature";
import getWeather from "../utils/getWeatherData";
import getWeatherForecast from "../utils/getWeatherForecast";

function pickIcon(id: string) {
  if (id == "01d") {
    return day;
  } else if (id == "02d") {
    return cloudyDay;
  } else if (id == "03d" || id == "04d" || id == "03n" || id == "04n") {
    return cloudy;
  } else if (id == "09d" || id == "09n") {
    return showerRain;
  } else if (id == "10d" || id == "10n") {
    return rain;
  } else if (id == "11d" || id == "11n") {
    return thunder;
  } else if (id == "13d" || id == "13n") {
    return snow;
  } else if (id == "01n") {
    return night;
  } else if (id == "02n") {
    return cloudyNight;
  }
}

export default function Overview() {
  const { weatherData, ForecastData, temperatureUnit, setForecastData, setWeatherData } = useContext<WeatherContextType>(
    WeatherContext
  );
  const temperature = weatherData ? calculateTemperature(temperatureUnit, weatherData.main.temp) : null;
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
  const icon = weatherData ? pickIcon(weatherData.weather[0].icon) : null;
  
  function SearchforCity(e) {
    if (e.keyCode === 13) {
    getWeather(e.target.value).then((data) => {
      setWeatherData(data);
      getWeatherForecast(data.coord.lon, data.coord.lat).then((data) =>
        setForecastData(data)
      )
    })
    e.target.value = ""
  }}

  return (
    <div className="overview-component">
      <input className="searchbar" placeholder="Stadt eingeben" onKeyDown={SearchforCity}/>
      <img className="overview-image" src={icon} />
      <p className="overview-temperature">{temperature}</p>
      <p className="overview-date">
        {weekday}, {timeOfDay}
      </p>
      <p className="overview-wrapper">
        <img src={cloudy} />
        {weatherStatus}
      </p>
      <p className="overview-wrapper"></p>
      <div className="overview-location">{location}</div>
    </div>
  );
}
