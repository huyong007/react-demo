import React from 'react'


function Father({ children }) {
    const newChildren = React.cloneElement(children, { age: 15 });
    return newChildren
}

function Son(props){
    console.log(props,'props---son')
    return <div>I am son</div>
}

export default class Index extends React.Component{
    render(){
        return(
            <Father>
                <Son></Son>
            </Father>
        )
    }
}