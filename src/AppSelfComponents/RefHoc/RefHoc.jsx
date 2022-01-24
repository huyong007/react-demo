
import React, { useEffect, useRef } from 'react'

function HOC(Component) {
    class Wrap extends React.Component {
        render() {
            const { forwardRef, ...restProps } = this.props
            return <Component ref={forwardRef} {...restProps} />
        }
    }
    return React.forwardRef((props, ref) => <Wrap {...props} forwardRef={ref} />)
}


class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = (e) => {
        console.log('dom.current', 'props', this.props)
    }
    componentDidMount() {
        console.log('componentDidMount' , this.props)
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}>class click</button>
            </div>
        )
    }
}

const RefHocIndex = HOC(Index)
export default () => {
    const ref = useRef(null)
    const handleClick = () => {
        console.log(ref.current, 'dom.current', 'props')
    }
    useEffect(() => {
        console.log(ref.current, ref.current.componentDidMount)
    }, [])
    return <RefHocIndex ref={ref} />
}