


// flip a state from yes to no
let [isGoingOut, setIsGoingOut] = React.useState(true)
function click(){
    setIsGoingOut(prevIsGoingOut => prevIsGoingOut = prevIsGoingOut ? false : true ) 
}
let funk = isGoingOut === true ? "yes" : "no"

return ({}
    <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div onClick={click} className="state--value">
            <h1>{funk}</h1>
        </div>
    </div>
)

