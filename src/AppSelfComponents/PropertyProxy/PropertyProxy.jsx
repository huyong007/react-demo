import React, { Component } from 'react';
function classHOC(WrapComponent) {
    return class Idex extends Component {
        state = {
            name: "alien"
        }
        componentDidMount() {
            console.log("HOC");
        }

        render() {
            return <WrapComponent {...this.props} {...this.state} />
        }
    }
}