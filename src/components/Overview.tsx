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
import mist from "../SVGs/mist-svgrepo-com.svg"
import calculateTemperature from "../utils/calculateTemperature";
import getLocation from "../utils/getLocation";
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
  } else if (id == "50d" || id == "50n") {
    return mist
  }
}

export default function Overview() {
  const { locationData, ForecastData, temperatureUnit, setForecastData, setLocationData } = useContext<WeatherContextType>(
    WeatherContext
  );
  const temperature = ForecastData ? calculateTemperature(temperatureUnit, ForecastData.current.temp) : null;
  const weatherStatus = ForecastData ? ForecastData.current.weather[0].description : null;
  const weekday = ForecastData
    ? getWeekday(ForecastData.current.dt, ForecastData.timezone)
    : null;
  const timeOfDay = ForecastData
    ? getTime(ForecastData.current.dt, ForecastData.timezone)
    : null;
  const location = locationData
    ? `${locationData[0].local_names ? (locationData[0].local_names.de ? locationData[0].local_names.de : locationData[0].name) : locationData[0].name } , ${locationData[0].country}`
    : null;
  
  const icon = ForecastData ? pickIcon(ForecastData.current.weather[0].icon) : null;
  
  function SearchforCity(e) {
    const placeholder = e.target.value
    if (e.keyCode === 13) {
    getLocation(e.target.value).then((data) => {
      if (data == false) {
        alert(`Die Stadt "${placeholder}" konnte nicht gefunden werden`)
        return
      } else {
      setLocationData(data);
      getWeatherForecast(data[0].lon, data[0].lat).then((data) =>
        setForecastData(data)
      )}
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
        {ForecastData ? "Bewölkung - " + ForecastData.hourly[0].clouds + "%" : null}
      </p>
      <p className="overview-wrapper">
      <img src={showerRain} />
      {ForecastData ? "Regen - " + Math.floor(ForecastData.hourly[0].pop * 100) + "%" : null}</p>
      <div className="overview-location">{location}</div>
    </div>
  );
}
