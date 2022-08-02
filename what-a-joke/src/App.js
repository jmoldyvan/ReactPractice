import React from "react"
import Joke1 from "./components/Joke1"
import jokesData from "./jokesData"


export default function App() {
    const jokeElements = jokesData.map((x) => {
        return <Joke1 setup={x.setup} punchline={x.punchline} />
    })
    return (

        <div className="InfoContainer">
           {jokeElements}
        </div>
    )
}
