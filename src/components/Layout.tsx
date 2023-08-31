import React, { useState, useEffect, createContext } from "react";
import Overview from "./Overview";
import Header from "./Header";
import Week from "./Week";
import Hour from "./Hour"
import Highlight from "./Highlight";
import getLocation from "../utils/getLocation";
import getWeatherForecast from "../utils/getWeatherForecast";

export interface WeatherContextType {
  locationData: null | object | string;
  ForecastData: null | object | string;
  setTemperatureUnit: React.Dispatch<React.SetStateAction<"Celsius" | "Fahrenheit">>;
  setTimeframe: React.Dispatch<React.SetStateAction<"Week" | "Hour">>;
  setLocationData: React.Dispatch<React.SetStateAction<object | null>>;
  setForecastData: React.Dispatch<React.SetStateAction<object | null>>;
  temperatureUnit: "Celsius" | "Fahrenheit";
  timeframe: "Week" | "Hour"
}

const initialWeather: WeatherContextType = {
  locationData: null,
  ForecastData: null,
  setTemperatureUnit: temperatureUnit => { },
  setTimeframe: timeframe => { },
  setLocationData: locationData => { },
  setForecastData: Data => { },
  temperatureUnit: "Celsius",
  timeframe: "Week",
}

export const WeatherContext = createContext<WeatherContextType>(initialWeather);

export default function Layout() {
  const [locationData, setLocationData] = useState<null | object>(null);
  const [ForecastData, setForecastData] = useState<null | object>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<"Celsius" | "Fahrenheit">("Celsius")
  const [timeframe, setTimeframe] = useState<"Week" | "Hour">("Week")

  useEffect(() => {
    getLocation("Leipzig").then((data) => {
      console.log(data)
      setLocationData(data);
      getWeatherForecast(data[0].lat, data[0].lon).then((data) =>
        setForecastData(data)
      )
    });
  }, []);
  return (
    <WeatherContext.Provider value={{locationData, ForecastData, temperatureUnit, setTemperatureUnit, setTimeframe, timeframe, setLocationData, setForecastData}}>
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
