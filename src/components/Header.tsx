import React from "react"

export default function Header() {
    return (
    <div className="header-component">
        <div className="timeframe-container">
            <div className="today-active">Heute</div>
            <div className="week-inactive">Woche</div>
        </div>
        <div className="temperature-container">
            <div className="celsius-active"> C°</div>
            <div className="fahrenheidt-inactive"> F°</div>
        </div>
    </div>)
}