import React from "react"


export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props);
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            {/* <span>Sold Out</span> */}
            <div className="card--stats">
            <img className="card--star" src={props.star}></img>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) • </span>
            <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
            
        </div>
    )
}