import React, { useState, useEffect, createContext } from "react";
import Overview from "./Overview";
import Header from "./Header";
import Week from "./Week";
import Hour from "./Hour"
import Highlight from "./Highlight";
import getWeather from "../utils/getWeatherData";
import getWeatherForecast from "../utils/getWeatherForecast";

export interface WeatherContextType {
  weatherData: null | object | string;
  ForecastData: null | object | string;
  setTemperatureUnit: React.Dispatch<React.SetStateAction<"Celsius" | "Fahrenheit">>;
  setTimeframe: React.Dispatch<React.SetStateAction<"Week" | "Hour">>;
  setWeatherData: React.Dispatch<React.SetStateAction<object | null>>;
  setForecastData: React.Dispatch<React.SetStateAction<object | null>>;
  temperatureUnit: "Celsius" | "Fahrenheit";
  timeframe: "Week" | "Hour"
}

const initialWeather: WeatherContextType = {
  weatherData: null,
  ForecastData: null,
  setTemperatureUnit: temperatureUnit => { },
  setTimeframe: timeframe => { },
  setWeatherData: weatherData => { },
  setForecastData: Data => { },
  temperatureUnit: "Celsius",
  timeframe: "Week",
}

export const WeatherContext = createContext<WeatherContextType>(initialWeather);

export default function Layout() {
  const [weatherData, setWeatherData] = useState<null | object>(null);
  const [ForecastData, setForecastData] = useState<null | object>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<"Celsius" | "Fahrenheit">("Celsius")
  const [timeframe, setTimeframe] = useState<"Week" | "Hour">("Week")

  useEffect(() => {
    getWeather("leipzig").then((data) => {
      setWeatherData(data);
      getWeatherForecast(data.coord.lon, data.coord.lat).then((data) =>
        setForecastData(data)
      )
    })
  }, []);
  return (
    <WeatherContext.Provider value={{weatherData, ForecastData, temperatureUnit, setTemperatureUnit, setTimeframe, timeframe, setWeatherData, setForecastData}}>
      <div className="flex-layout">
        <div className="flex-left">
          <Overview />
        </div>
        <div className="flex-right">
          <Header />
          {timeframe == "Week" ? <Week/> : <Hour/> }
          <Highlight />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}
