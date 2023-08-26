import React, { useState, useEffect, createContext } from "react";
import Overview from "./Overview";
import Header from "./Header";
import Week from "./week";
import Highlight from "./Highlight";
import example from "../example.json";
import getWeather from "../utils/getWeatherData";
import getWeatherForecast from "../utils/getWeatherForecast";

export const WeatherContext = createContext(null);

export default function Layout() {
  type Weather = null | object;

  const [weatherData, setWeatherData] = useState<Weather>(null);
  const [ForecastData, setForecastData] = useState<Weather>(null);

  useEffect(() => {
    getWeather("berlin").then((data) => {
      setWeatherData(data);
      getWeatherForecast(data.coord.lon, data.coord.lat).then((data) =>
        setForecastData(data)
      );
      console.log(ForecastData);
    });
  }, []);

  return (
    <WeatherContext.Provider value={weatherData}>
      <div className="flex-layout">
        <div className="flex-left">
          <Overview />
        </div>
        <div className="flex-right">
          <Header />
          <Week />
          <Highlight />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}
