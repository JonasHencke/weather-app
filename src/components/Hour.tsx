import { useContext } from "react";
import { WeatherContextType } from "./Layout";
import { WeatherContext } from "./Layout";
import getTime from "../utils/getTime";
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

export default function Week() {
  const { ForecastData, temperatureUnit } =
    useContext<WeatherContextType>(WeatherContext);
  return (
    <div className="week-component">
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[1].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[1].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[1].temp) : null}</p>
      </div>
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[2].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[2].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[2].temp) : null}</p>
      </div>
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[3].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[3].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[3].temp) : null}</p>
      </div>
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[4].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[4].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[4].temp) : null}</p>
      </div>
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[5].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[5].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[5].temp) : null}</p>
      </div>
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[6].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[6].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[6].temp) : null}</p>
      </div>
      <div className="weekday">
        {ForecastData ? getTime(ForecastData.hourly[7].dt, ForecastData.timezone).slice(0,2) : null} Uhr
        <img src={ForecastData ? pickIcon(ForecastData.hourly[7].weather[0].icon) : null} />
        <p>{ForecastData ? calculateTemperature(temperatureUnit , ForecastData.hourly[7].temp) : null}</p>
      </div>
    </div>
  );
}
