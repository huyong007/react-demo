import React, { useEffect, useRef } from "react";


const HOC = (Component) => function WrapComponent(props) {
    const dom = useRef(null)
    const handleClick = () => {
        console.log(dom.current, 'dom.current', 'props', props)
    }
    useEffect(() => {
        const { current } = dom
        current.addEventListener('click', handleClick)
        return () => {
            current.removeEventListener('click', handleClick)
        }
    })
    return <span ref={dom}>
        <Component {...props} />
    </span>
}



function EventHijack(props) {

    const [num, setNum] = React.useState(0)
    return (
        <button onClick={() => setNum(num + 1)}>function click</button>
    )

}

@HOC
class EventHijack1 extends React.Component {
    handleClick = (e) => {
        console.log('click');
        e.stopPropagation();
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>class click</button>
        )
    }
}
const FunctionEventHijack = HOC(EventHijack)
export default () => {
    return <div>
        <FunctionEventHijack />
        &nbsp;
        <EventHijack1 />
    </div>
};