// import React from "react"
// import boxes from "./boxes"

// export default function App() {
//     /**
//      * Challenge part 1:
//      * 1. Initialize state with the default value of the
//      *    array pulled in from boxes.js
//      * 2. Map over that state array and display each one
//      *    as an empty square (black border, transparent bg color)
//      *    (Don't worry about using the "on" property yet)
//      */
    


let [boxArr, setBoxArr] = React.useState(boxes)
    
    let styledBox = boxArr.map(box =>{
        return(
            <div className="empty" key = {box.id}></div>
        )
    })
    
    return (
        <main>
            <h1>{styledBox}</h1>
        </main>
    )
}