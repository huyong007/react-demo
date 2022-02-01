import React, { memo, useState } from 'react'


function TextMemo() {
    console.log('子组件渲染');
    return <div>Hello,world!</div>

}

const memoControlRender = (pre, next) => {
    console.log(pre, next, 'pre,next');

    if (pre.number !== next.number && next.number <= 5) {
        return false;
    } else {
        return true;
    }
}

const CurrentTextMemo = memo(TextMemo, memoControlRender)

export default function Index() {
    let [number, setNumber] = useState(0);


    return (
        <>
            <button onClick={() => setNumber(number + 1)}>click</button>
            <div>{number}</div>
            <CurrentTextMemo number={number} />
        </>
    )
}

