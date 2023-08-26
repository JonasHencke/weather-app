import React, { useState, useEffect, createContext } from "react";
import Overview from "./Overview";
import Header from "./Header";
import Week from "./Week";
import Highlight from "./Highlight";
import getWeather from "../utils/getWeatherData";
import getWeatherForecast from "../utils/getWeatherForecast";

type Weather = null | object;
export const WeatherContext = createContext<Weather>(null);

export default function Layout() {
  const [weatherData, setWeatherData] = useState<Weather>(null);
  const [ForecastData, setForecastData] = useState<Weather>(null);

  useEffect(() => {
    getWeather("leipzig").then((data) => {
      setWeatherData(data);
      getWeatherForecast(data.coord.lon, data.coord.lat).then((data) =>
        setForecastData(data)
      )
    })
  }, []);

  return (
    <WeatherContext.Provider value={{weatherData, ForecastData}}>
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
