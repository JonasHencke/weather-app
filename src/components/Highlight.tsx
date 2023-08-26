import React from "react";
import { useContext } from "react";
import { WeatherContext } from "./Layout";

export default function Highlight() {
  const { weatherData, ForecastData } = useContext(WeatherContext);
  const visibility: string | null  = weatherData ? `${weatherData.visibility / 1000} km` : null;
  const humidity: string | null  = weatherData ? `${weatherData.main.humidity} %` : null;
  const windSpeed: string | null  = weatherData ? weatherData.wind.speed + " km/h" : null;
  const UVIndex: string | null = ForecastData ? ForecastData.current.uvi : null
  return (
    <div className="highlight-component">
      <div className="highlight">{UVIndex}</div>
      <div className="highlight">
        Wind:
        {windSpeed}
      </div>
      <div className="highlight">Sonenaufgang & Sonnenuntergang</div>
      <div className="highlight">
        <div>Luftfeuchtigkeit:</div>
        {humidity}
      </div>
      <div className="highlight">
        Sichtbarkeit:
        {visibility}
      </div>
      <div className="highlight">Luftqualität</div>
    </div>
  );
}
