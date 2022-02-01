import React, { useState } from "react";


const MyContext = React.createContext();




function ComponentA() {
    return (<MyContext.Consumer>
        {(value) => <ComponentB {...value} />}
    </MyContext.Consumer>)
}


function ComponentB(props) {
    const { name, msg, age = 19 } = props;
    return (
        <div>
            <div>hello,{name}</div>
            &nbsp;
            <div>{msg}</div>
            &nbsp;
            <div>code:{age}</div>
        </div>
    )
}


export default function Index() {
    const [value,] = useState({ name: 'taotao', msg: '你爸喊你回家吃饭' });
    return (<MyContext.Provider value={value}>
        <ComponentA />
    </MyContext.Provider>)
}