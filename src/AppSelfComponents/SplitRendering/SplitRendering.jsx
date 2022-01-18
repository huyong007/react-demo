
import { useState, useEffect, Component } from "react";

const renderQueue = [];
let isFirstRender = false;


const tryRender = () => {
    const render = renderQueue.shift();
    if (!render) return;
    setTimeout(() => { render() }, 1000)
}


function renderHOC(WrappedComponent) {
    return function Index(props) {
        const [isRender, setRender] = useState(false);
        useEffect(() => {
            renderQueue.push(() => {
                setRender(true)
            })
            if ((!isFirstRender)) {
                tryRender();
                isFirstRender = true
            }
        }, [])
        return isRender
            ? <WrappedComponent tryRender={tryRender} {...props} />
            : <div className="box">loading...</div>
    }
}

class Index extends Component {
    componentDidMount() {
        const { name, tryRender } = this.props;

        tryRender()
        console.log(name + '渲染')
    }
    render() {
        return <div>
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&amp;fm=26&amp;gp=0.jpg" />
        </div>
    }

}

const Item = renderHOC(Index);

export default () => {
    return <>
        <Item name="hulingjun1" />
        <Item name="hulingjun2" />
        <Item name="hulingjun3" />
    </>

}