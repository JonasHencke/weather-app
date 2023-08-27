import React from "react";
import { useContext } from "react";
import { WeatherContext } from "./Layout";
import getTime from "../utils/getTime";
import { WeatherContextType } from "./Layout";

export default function Highlight() {
  const { weatherData, ForecastData } = useContext<WeatherContextType>(WeatherContext);
  const visibility: string | null = weatherData
    ? `${weatherData.visibility / 1000} km`
    : null;
  const humidity: string | null = weatherData
    ? `${weatherData.main.humidity} %`
    : null;
  const windSpeed: string | null = weatherData
    ? weatherData.wind.speed + " km/h"
    : null;
  const UVIndex: string | null = ForecastData ? ForecastData.current.uvi : null;
  const sunrise: string | null = ForecastData
    ? getTime(ForecastData.current.sunrise, ForecastData.timezone)
    : null;
  const sunset: string | null = ForecastData
    ? getTime(ForecastData.current.sunset, ForecastData.timezone)
    : null;
  const pressure: string | null = ForecastData
    ? ForecastData.current.pressure
    : null;

  return (
    <div className="highlight-component">
      <div className="highlight">UV-Index: {UVIndex}</div>
      <div className="highlight">
        Wind:
        {windSpeed}
      </div>
      <div className="highlight">
        Sonenaufgang {sunrise} <br />
        <br /> Sonnenuntergang {sunset}
      </div>
      <div className="highlight">
        <div>Feuchtigkeit:</div>
        {humidity}
      </div>
      <div className="highlight">
        Sichtbarkeit:
        {visibility}
      </div>
      <div className="highlight">Luftdruck: {pressure} hPA</div>
    </div>
  );
}
