import { timers } from 'jquery';
import { Component, useEffect, useState } from 'react';



function functionHoc(WrapedComponent) {
    return function Index(props) {

        const [state, setState] = useState({ name: 'hulingjun' })
        return <WrapedComponent {...props} {...state} />
    }
}


function classHOC(WrappedComponent) {
    return class Index extends Component {
        constructor() {
            super();
            this.state = {
                name: 'hulingjun',
                visible: true,
            }
        }

        changeName(name) {
            this.setState({ name });
        }

        setVisible() {
            this.setState((prevState) => {
                return {
                    visible: !prevState.visible
                }
            })
        }

        render() {
            const { visible } = this.state;

            return <div className='box'>
                <button onClick={this.setVisible.bind(this)}>{visible ? '隐藏' : '显示'}</button>
                {visible && <WrappedComponent {...this.props} {...this.state} changeName={this.changeName.bind(this)} setVisible={this.setVisible.bind(this)} />}
            </div>
        }
    }
}

function Index(props) {
    const [value, setValue] = useState(null);
    const { name, changeName, setVisible } = props;


    return <>
        <div>
            hello,world,my name is {name}
        </div>
        改变name <input onChange={(e) => { setValue(e.target.value) }} />
        <button onClick={() => changeName(value)}>改变name</button>
        <img style={{ display: 'block' }} src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&fm=26&gp=0.jpg' />
        <button onClick={() => setVisible()}>卸载当前组件</button>
    </>

}


export default classHOC(Index);