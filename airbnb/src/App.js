import React from "react"
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card"
import StarPic from "./images1/StarPic.png"
import data from "./data"

export default function App() {
    let dataElements = data.map(x => {
        return(
        <Card 
            key = {x.id}
            item = {x}
            star={StarPic}
        />
        )
    })

    return (

        <div className="InfoContainer">
            <div className="content">
            <Navbar />
            {/* <Hero /> */}
            <section className="cards-list">
            {dataElements}
            </section>
            </div>
        </div>
    )
}