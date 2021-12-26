import React from "react";

const Car = props => (

    <React.Fragment>
        <p>Name:{props.name}</p>
        <p>Price:¥{props.price}</p>
        <button onClick={props.incrementCarPrice}>&uarr;</button>
        <button onClick={props.decrementCarPrice}>&darr;</button>
    </React.Fragment>
)

export default Car;