import React from "react"
import { useContext } from "react";
import { WeatherContextType } from "./Layout";
import { WeatherContext } from "./Layout";

export default function Hour() {
    const { weatherData, ForecastData } =
    useContext<WeatherContextType | null>(WeatherContext);
    return (<div>Hour</div>)
}