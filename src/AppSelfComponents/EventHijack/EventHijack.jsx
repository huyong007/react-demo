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
    return <div ref={dom}>
        <Component {...props} />
    </div>
}



function EventHijack(props) {

    const [num, setNum] = React.useState(0)
    return (
        <div>
            <h1>EventHijack</h1>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>function click</button>
        </div>
    )

}

// @HOC
// class EventHijack1 extends React.Component {
//     handleClick = (e) => {
//         console.log('click');
//         e.stopPropagation();
//     }

//     render() {
//         return (
//             <button onClick={(e) => this.handleClick(e)}>class click</button>
//         )
//     }
// }

export default () => {
    return <div>
        <EventHijack />
        &nbsp;
        {/* <EventHijack1 /> */}
    </div>
};