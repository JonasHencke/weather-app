import React from "react";
import { useContext } from "react"
import { WeatherContext } from "./Layout";

export default function Highlight() {
  const weatherData = useContext(WeatherContext)

  return (
    <div className="highlight-component">
      <div className="highlight">{weatherData ? weatherData.coord.lon : null}</div>
      <div className="highlight">Wind</div>
      <div className="highlight">Sonenaufgang & Sonnenuntergang</div>
      <div className="highlight">Luftfeuchtigkeit</div>
      <div className="highlight">Sichtbarkeit</div>
      <div className="highlight">Luftqualität</div>
    </div>
  );
}
