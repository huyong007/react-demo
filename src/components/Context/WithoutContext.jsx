import React from 'react';
import ProductList from './ProductList'

class WithoutContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            }
        }
    }
    incrementCarPrice = (selectedID) => {
        const cars = Object.assign({}, this.state.cars);
        cars[selectedID].price = cars[selectedID].price + 1;
        this.setState({ cars });
    }

    decrementCarPrice = (selectedID) => {
        const cars = Object.assign({}, this.state.cars);
        cars[selectedID].price = cars[selectedID].price - 1;
        this.setState({ cars });
    }

    render() {
        return (
            <div className="With-Context">
                <header className="with-context-header">
                    <h1 className="with-context-title">welcome to my web store</h1>
                </header>
                {/* {Pass props twice} */}
                <ProductList
                    cars={this.state.cars}
                    incrementCarPrice={this.incrementCarPrice}
                    decrementCarPrice={this.decrementCarPrice}
                />
            </div>
        )
    }
}

export default WithoutContext;