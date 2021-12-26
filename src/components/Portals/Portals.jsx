// import React from 'react';
// import ReactDOM from "react-dom";

// // const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');

// console.log(modalRoot,'modalRoot')

// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div');
//     }

//     componentDidMount() {
//         modalRoot.appendChild(this.el);
//     }

//     componentWillUnmount() {
//         modalRoot.removeChild(this.el);
//     }

//     render() {
//         return ReactDOM.createPortal(
//             this.props.children,
//             this.el
//         );
//     }
// }


// export default class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { clicks: 0 };
//         this.handClick = this.handClick.bind(this);
//     }

//     handClick() {
//         this.setState(state => ({
//             clicks: state.clicks + 1
//         }))
//     }
//     render() {
//         return (
//             <div onClick={this.handClick}>

//                 <p>Number of clicks:{this.state.click}</p>
//                 <p>Open up the browser DevTools
//                     to observe that the button
//                     is not a child of the div
//                     with the onClick handler.</p>
//                 <Modal><Child /></Modal>
//             </div>
//         )
//     }
// }

// function Child() {
//     return (
//         <div className='modal'>
//             <button>click</button>
//         </div>
//     )
// }