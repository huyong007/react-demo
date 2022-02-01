import React from 'react'


class Son extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>Son Component</div>
                <div ref={this.props.forwardRef}>I am a component which Ref want to get</div>
            </>
        )
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Son forwardRef={this.props.dom} />
        )
    }
}

const CurrentFather = React.forwardRef((props, ref) => <Father {...props} dom={ref} />)


export default class GrandFather extends React.Component {
    constructor(props) {
        super(props)
    }
    node = null;
    componentDidMount() {
        console.log(this.node, 'GrandFather');
    }

    render() {
        return (
            <CurrentFather ref={(node) => this.node = node} />
        )
    }
}