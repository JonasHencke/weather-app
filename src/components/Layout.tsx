import React, {useState, useEffect} from "react"
import Overview from "./Overview"
import Header from "./Header"
import Week from "./week"
import Highlight from "./Highlight"
import example from "../example.json"
import getWeather from "../utils/GetWeatherData"

export default function Layout() {
    type Weather = null | object
    const [weatherData, setWeatherData] = useState<Weather>(null)

    useEffect(() => {
        setWeatherData(getWeather("berlin"))
        console.log(weatherData)
    }, [])
    return (
    <div className="flex-layout">
    <div className="flex-left">
        <Overview/>
    </div>
    <div className="flex-right">
        <Header/>
        <Week/>
        <Highlight/>
    </div>
    </div>
    )
}

