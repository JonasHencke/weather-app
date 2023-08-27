import React from "react";
import clouds from "../SVGs/cloudy.svg";
import sunny from "../SVGs/cloudy-day-3.svg";
import rainy from "../SVGs/rainy-3.svg";
import night from "../SVGs/night.svg";
import thunder from "../SVGs/thunder.svg";
import { useContext } from "react";
import { WeatherContextType } from "./Layout";
import { WeatherContext } from "./Layout";

export default function Week() {
  const { weatherData, ForecastData } =
    useContext<WeatherContextType | null>(WeatherContext);
  return (
    <div className="week-component">
      <div className="weekday">
        So
        <img src={clouds} />
        <p>15°C / -3°C</p>
      </div>
      <div className="weekday">
        Mo
        <img src={rainy} />
        <p>15°C / -3°C</p>
      </div>
      <div className="weekday">
        Di
        <img src={sunny} />
        <p>15°C / -3°C</p>
      </div>
      <div className="weekday">
        Mi
        <img src={clouds} />
        <p>15°C / -3°C</p>
      </div>
      <div className="weekday">
        Do
        <img src={clouds} />
        <p>15°C / -3°C</p>
      </div>
      <div className="weekday">
        Fr
        <img src={thunder} />
        <p>15°C / -3°C</p>
      </div>
      <div className="weekday">
        Sa
        <img src={night} />
        <p>15°C / -3°C</p>
      </div>
    </div>
  );
}
