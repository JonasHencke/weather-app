import React from "react";
import { useContext } from "react";
import { WeatherContext } from "./Layout";
import getTime from "../utils/getTime";
import { WeatherContextType } from "./Layout";
import sunriseSVG from "../SVGs/sunrise-cropped.svg"
import sunsetSVG from "../SVGs/sunset-cropped.svg"
import sunprotectionMessage from "../utils/sunProtectionMessage";
import returnWindDirection from "../utils/returnWindDirection";
import visibilityMessage from "../utils/VisibilityMessage";
import returnPressure from "../utils/returnPressure";
import calculateTemperature from "../utils/calculateTemperature";

export default function Highlight() {
  const { weatherData, ForecastData, temperatureUnit } =
    useContext<WeatherContextType>(WeatherContext);
  const visibility: number = ForecastData
    ? ForecastData.current.visibility / 1000
    : null;
  const humidity: string | null = ForecastData
    ? ForecastData.current.humidity
    : null;
  const windSpeed: string | null = ForecastData
    ? ForecastData.current.wind_speed
    : null;
  const UVIndex: string | null = ForecastData ? ForecastData.current.uvi : null;
  const sunrise: string | null = ForecastData
    ? getTime(ForecastData.current.sunrise, ForecastData.timezone)
    : null;
  const sunset: string | null = ForecastData
    ? getTime(ForecastData.current.sunset, ForecastData.timezone)
    : null;
  const pressure: string | null = ForecastData
    ? ForecastData.current.pressure
    : null;
    const dew_point: string | null = ForecastData
    ? calculateTemperature( temperatureUnit , ForecastData.current.dew_point)
    : null;

  return (
    <div className="highlight-component">
      <div className="highlight">
        <div className="highlight-heading">UV Index</div>
        <div className="highlight-body">
          <div className="highlight-number">{UVIndex}</div>
          <div className="highlight-message">{sunprotectionMessage(UVIndex)}</div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlight-heading">Wind</div>
        <div className="highlight-body">
          <div className="highlight-number">{windSpeed} <span className="unit">km/h</span></div>
          <div className="highlight-message">Windrichtung: {ForecastData ? returnWindDirection(ForecastData.current.wind_deg) : null} 🍃</div>
          </div>
      </div>
      <div className="highlight">
        <div className="highlight-heading">Sonnenauf- & untergang</div>
        <div className="highlight-body sunrise-sunset">
          <div className="hightlight-sunrise"><img src={sunriseSVG}/><div>{sunrise}</div></div>
          <div className="hightlight-sunrise"><img src={sunsetSVG}/><div>{sunset}</div></div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlight-heading">Feuchtigkeit</div>
        <div className="highlight-body">
          <div className="highlight-number">{humidity} <span className="unit">%</span></div>
          <div className="highlight-message"> der Taupunkt liegt bei {dew_point} 💧</div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlight-heading">Sichtbarkeit</div>
        <div className="highlight-body">
        <div className="highlight-number">{visibility} <span className="unit">km</span></div>
        <div className="highlight-message">{visibilityMessage(visibility)}</div>
        </div>
      </div>
      <div className="highlight">
        <div className="highlight-heading">Luftdruck</div>
        <div className="highlight-body">
        <div className="highlight-number">{pressure} <span className="unit">hPA</span></div>
        <div className="highlight-message">{returnPressure(pressure)}</div>
        </div>
      </div>
    </div>
  );
}
