import React, { useEffect, useRef } from 'react'


function Protal() {
    return (
        <div style={{ color: 'red'; fontSize: '40px'; }}>
            <span>hello,world!</span>
        </div >
    )
}


export default function CreateProtal(){
    const dom = useRef(null);
    useEffect(()=>{
        React.CreateProtal(WrapComponent,dom);
    })
}