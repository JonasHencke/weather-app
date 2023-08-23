import React from "react"
import icon from "../SVGs/night.svg"
import cloud from "../SVGs/cloudy.svg"
import rain from "../SVGs/rain-svgrepo-com.svg"

export default function Overview() {
    return (
    <div className="overview-component">
        <div className="searchbar">Search</div>
        <img className="overview-image" src={icon}/>
        <p className="overview-temperature">16°C</p>
        <p className="overview-date">Montag, 16:00</p>
        <p className="overview-wrapper"><img src={cloud}/>leicht bewölkt</p>
        <p className="overview-wrapper"><img src={rain}/>Regenwahrscheinlichkeit: <br/> 30% </p>
        <div className="overview-location">Leipzig, Sachsen, Deutschland</div>
    </div>
    )
}