import React from 'react';
import CatImg from './cat.jpg'
import withMouse from './Mouse'

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={CatImg} alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

export default withMouse(Cat)