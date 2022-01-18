import {Component} from 'react'


class Index extends Component{
    render(){
        return<div>hello, world </div>
    }
}

Index.say = function(){
    console.log('hello, world')
}

function HOC(Component){
    return class WrappedComponent extends Component{

    }
}

const newIndex = HOC(Index)
console.log(newIndex.say)
export default newIndex

