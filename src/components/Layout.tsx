import React, { useState, useEffect, createContext } from "react";
import Overview from "./Overview";
import Header from "./Header";
import Week from "./Week";
import Hour from "./Hour";
import Highlight from "./Highlight";
import getLocation from "../utils/getLocation";
import getWeatherForecast from "../utils/getWeatherForecast";
import getCityImage from "../utils/getCityImage";
import { locationDataInterface } from "../Interfaces/locationData";
import { ForecastDataInterface } from "../Interfaces/ForecastData";

export interface WeatherContextType {
  locationData: null | [locationDataInterface];
  ForecastData: null | ForecastDataInterface;
  setTemperatureUnit: React.Dispatch<
    React.SetStateAction<"Celsius" | "Fahrenheit">
  >;
  setTimeframe: React.Dispatch<React.SetStateAction<"Week" | "Hour">>;
  setLocationData: React.Dispatch<React.SetStateAction<[locationDataInterface] | null>>;
  setForecastData: React.Dispatch<React.SetStateAction<ForecastDataInterface | null>>;
  temperatureUnit: "Celsius" | "Fahrenheit";
  timeframe: "Week" | "Hour";
  cityImage: string | null;
  setCityImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialWeather: WeatherContextType = {
  locationData: null,
  ForecastData: null,
  setTemperatureUnit: () => {},
  setTimeframe: () => {},
  setLocationData: () => {},
  setForecastData: () => {},
  temperatureUnit: "Celsius",
  timeframe: "Week",
  cityImage: "",
  setCityImage: () => {},
};

export const WeatherContext = createContext<WeatherContextType>(initialWeather);

export default function Layout() {
  const [locationData, setLocationData] = useState<null | [locationDataInterface]>(null);
  const [ForecastData, setForecastData] = useState<null | ForecastDataInterface>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<
    "Celsius" | "Fahrenheit"
  >("Celsius");
  const [timeframe, setTimeframe] = useState<"Week" | "Hour">("Week");
  const [cityImage, setCityImage] = useState<null | string>(null)

  useEffect(() => {
    getLocation("halle").then((data) => {
      setLocationData(data);
      getWeatherForecast(data[0].lon, data[0].lat).then((data) =>
        data.current ? setForecastData(data) : console.log(data.message)
      );
      getCityImage((data[0].name).toLowerCase()).then((data) =>
      setCityImage(data.photos ? data.photos[0].image.web : null)
      );
    }
    );
  }, []);
  return (
    <WeatherContext.Provider
      value={{
        locationData,
        ForecastData,
        temperatureUnit,
        setTemperatureUnit,
        setTimeframe,
        timeframe,
        setLocationData,
        setForecastData,
        cityImage,
        setCityImage
      }}
    >
      <div className="flex-layout">
        <div className="flex-left">
          <Overview />
        </div>
        <div className="flex-right">
          <Header />
          {timeframe == "Week" ? <Week /> : <Hour />}
          <Highlight />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}
