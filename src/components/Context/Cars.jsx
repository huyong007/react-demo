import React from 'react';
import Car from './Car'


const Cars = props => (
    <React.Fragment>
        <h4>Cars:</h4>
        {/* {Finally we can use data} */}
        {Object.keys(props.cars).map(carID => (
            <Car
                key={carID}
                name={props.cars[carID].name}
                price={props.cars[carID].price}
                incrementCarPrice={() => props.incrementCarPrice(carID)}
                decrementCarPrice={() => props.decrementCarPrice(carID)}
            />
        ))}
    </React.Fragment>
)

export default Cars;