import React from "react";
import { useContext } from "react";
import { WeatherContext } from "./Layout";

export default function Highlight() {
  const weatherData = useContext(WeatherContext);
  const visibility = weatherData ? `${weatherData.visibility / 1000} km` : null
  const humidity = weatherData ? `${weatherData.main.humidity} %` : null
  const windSpeed = weatherData ? weatherData.wind.speed + " km/h" : null
  
  return (
    <div className="highlight-component">
      <div className="highlight">
        UV Index
      </div>
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
