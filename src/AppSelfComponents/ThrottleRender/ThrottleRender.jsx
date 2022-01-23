import React, { useMemo } from "react"




const HOC = (rule) => (WrappedComponent) => function WrapComponent(props) {
    const prop = rule(props)
    const RenderedComponent = useMemo(() => <WrappedComponent {...props} />, [prop])
    return RenderedComponent
}

@HOC(props => props['num'])
class ThrottleRender extends React.Component {
    render() {
        return (
            <div>
                <h1>ThrottleRender</h1>
                <p>{this.props.num}</p>
            </div>
        )
    }
}

@HOC(props => props['num1'])
class ThrottleRender1 extends React.Component {
    render() {
        return (
            <div>
                <h1>ThrottleRender1</h1>
                <p>{this.props.num1}</p>
            </div>
        )
    }
}


export default () => {
    const [num, setNum] = React.useState(0)
    const [num1, setNum1] = React.useState(0)
    const [num2, setNum2] = React.useState(0)
    return <div>
        < ThrottleRender num={num} num1={num1} num2={num2} />
        < ThrottleRender1 num={num} num1={num1} num2={num2} />
        <button onClick={() => setNum(num + 1)} >setNum++</button>
        <button onClick={() => setNum1(num1 + 1)} >setNum1++</button>
        <button onClick={() => setNum2(num2 + 1)} >setNum2++</button>
    </div>

}