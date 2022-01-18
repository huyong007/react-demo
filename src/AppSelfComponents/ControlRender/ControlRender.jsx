import React, { Component } from 'react'



class Index extends Component {
    render() {
        return <div>
            <ul>
                <li>react</li>
                <li>vue</li>
                <li>Angular</li>
            </ul>
        </div>
    }
}


function HOC(Component) {
    return class Advance extends Component {
        render() {
            const element = super.render();
            const otherProps = {
                name: 'huyong'
            }
            console.log(element,'element')

            const appendElement = React.createElement('li', {}, `hello world,my name is ${otherProps.name}`);
            const newChild = React.Children.map(element.props.children.props.children, (child, index) => {
                if (index === 2) return appendElement;
                return child;
            })
            return React.cloneElement(element, element.props, newChild)
        }
    }
}


export default HOC(Index);