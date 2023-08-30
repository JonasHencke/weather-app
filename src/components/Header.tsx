import React from "react";
import { useContext } from "react";
import { WeatherContext, WeatherContextType } from "./Layout";

export default function Header() {
  const { setTemperatureUnit, setTimeframe, temperatureUnit, timeframe } =
  useContext<WeatherContextType>(WeatherContext);
  return (
    <div className="header-component">
      <div className="timeframe-container">
        <div className={timeframe == "Hour" ? "timeframe-active" : "timeframe-inactive"} onClick={() => setTimeframe("Hour")}>Heute</div>
        <div className={timeframe == "Week" ? "timeframe-active" : "timeframe-inactive"} onClick={() => setTimeframe("Week")}>Woche</div>
      </div>
      <div className="temperature-container">
        <div className={temperatureUnit == "Celsius" ? "temperature-active" : "temperature-inactive"} onClick={() => setTemperatureUnit("Celsius")}> C°</div>
        <div className={temperatureUnit == "Fahrenheit" ? "temperature-active" : "temperature-inactive"} onClick={() => setTemperatureUnit("Fahrenheit")}> F°</div>
      </div>
    </div>
  );
}