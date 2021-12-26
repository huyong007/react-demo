import React from 'react';

export default class CounterButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { count1: 1, count2: 1 };

    }
    // componentDidMount() {
    //     console.log('CounterButton did mount');
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('CounterButton should update');
    //     if (nextState.count % 2) {
    //         console.log(nextProps, nextState, 'nextProps, nextState')
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('CounterButton did update');
    // }
    // componentDidCatch(error, info) {
    //     console.log('CounterButton did catch');
    // }
    // componentWillUnmount() {
    //     console.log('CounterButton will unmount');
    // }
    onClick1 = () => {
        const { count } = this.state
        this.setState({ count: count + 1 }, () => {
            console.log('onClick1', this.state.count1)
        })
        this.setState({ count: count + 1 }, () => {
            console.log('onClick1', this.state.count1)
        })
        this.setState({ count: count + 1 }, () => {
            console.log('onClick1', this.state.count1)
        })
    }
    onClick2 = () => {
        this.setState((prevState, props) => {
            return {
                count2: prevState.count2 + 1
            }
        }, () => {
            console.log('onClick2', Date.now(), this.state.count2)
        })
        this.setState((prevState, props) => {
            return {
                count2: prevState.count2 + 1
            }
        }, () => {
            console.log('onClick2', Date.now(), this.state.count2)
        })
        this.setState((prevState, props) => {
            return {
                count2: prevState.count2 + 1
            }
        }, () => {
            console.log('onClick2', Date.now(), this.state.count2)
        })
        this.setState((prevState, props) => {
            return {
                count2: prevState.count2 + 1
            }
        }, () => {
            console.log('onClick2', Date.now(), this.state.count2)
        })
        this.setState((prevState, props) => {
            return {
                count2: prevState.count2 + 1
            }
        }, () => {
            console.log('onClick2', Date.now(), this.state.count2)
        })
        this.setState((prevState, props) => {
            return {
                count2: prevState.count2 + 1
            }
        }, () => {
            console.log('onClick2', Date.now(), this.state.count2)
        })
        setTimeout(() => {
            this.setState((prevState, props) => {
                return {
                    count2: prevState.count2 + 1
                }
            }, () => {
                console.log('onClick2', Date.now(), this.state.count2)
            })
            console.log('onClick2', Date.now(), this.state.count2)
        })
    }
    render() {
        console.log('render')
        return (
            <>
                <button
                    color={this.props.color}
                    onClick={() => this.onClick1()} >
                    Count1: {this.state.count1}
                </button>
                <button
                    color={this.props.color}
                    onClick={() => this.onClick2()} >
                    Count2: {this.state.count2}
                </button>
            </>

        )

    }
}