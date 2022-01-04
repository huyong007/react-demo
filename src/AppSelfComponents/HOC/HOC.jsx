import React, { Component } from "react";


const HOC = (Component) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                name: "alien"
            }
        }
        render() {
            return (< Component {...this.props} {...this.state} />)
        }
    }

}



@HOC
class HocIndex extends Component {
    say() {
        const { name } = this.props;
        console.log(name);
    }
    render() {
        return <div>hello,world <button onClick={this.say.bind(this)}>点击</button></div>
    }
}

export default HocIndex;