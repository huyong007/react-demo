import Cars from "./Cars"


const ProductList = props => (
    <div className="product-list">
        <h2>Product List:</h2>
        {/* {Pass props twice} */}
        <Cars
            cars={props.cars}
            incrementCarPrice={props.incrementCarPrice}
            decrementCarPrice={props.decrementCarPrice}
        />
        {/* {Other potential produce categories which we will skip for this demo:  */}
        {/* {Electronics} */}
        {/* {Clothes} */}
        {/* {Shoes} */}
    </div>
);

export default ProductList;