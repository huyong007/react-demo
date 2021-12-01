import React from "react"

const FancyButton = React.forwardRef((props,ref)=>(
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));


export default FancyButton
// 首先通过react.forwardRef 对button进行包裹，其次在需要使用ref的地方使用creatRef创建变量进行绑定在该创建ref的组件中就可以获取到对应的dom了