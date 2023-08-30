import React from "react";
import { useContext } from "react";
import { WeatherContext, WeatherContextType } from "./Layout";

export default function Header() {
  const { setTemperatureUnit, setTimeframe } =
  useContext<WeatherContextType>(WeatherContext);
  return (
    <div className="header-component">
      <div className="timeframe-container">
        <div className="today-active" onClick={() => setTimeframe("Hour")}>Heute</div>
        <div className="week-inactive" onClick={() => setTimeframe("Week")}>Woche</div>
      </div>
      <div className="temperature-container">
        <div className="celsius-active" onClick={() => setTemperatureUnit("Celsius")}> C°</div>
        <div className="fahrenheidt-inactive" onClick={() => setTemperatureUnit("Fahrenheit")}> F°</div>
      </div>
    </div>
  );
}