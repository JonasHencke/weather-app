import React from "react"
import Overview from "./Overview"
import Header from "./Header"
import Week from "./week"
import Highlight from "./Highlight"

export default function Layout() {
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

