import React, { Component } from 'react';

import './Loading.css'
function ClassLoading(loadingCheck) {
    return function (WrappedComponent) {
        return class extends WrappedComponent {
            componentWillUpdate(nextProps, nextState) {
                console.log('withLoading将会更新');
            }
            render() {
                if (loadingCheck(this.props)) {
                    return (
                        <>
                            <div className='donut'></div>
                            {super.render()}
                        </>
                    )
                } else {
                    return (
                        super.render()
                    )
                }

            }
        }
    }
}

// 函数式组件在渲染之前拿不到任何内部信息，所以不能拿到props无法组合Loading

function FunLoading(loadingCheck) {
    return function (WrappedComponent) {
        console.log(WrappedComponent, 'WrappedComponent')
        if (loadingCheck(this.props.loading)) {
            return (
                <>
                    <div className='donut'></div>
                    <WrappedComponent {...this.props} />
                </>
            )
        } else {
            return (
                <WrappedComponent {...this.props} />
            )
        }



    }
}

export { FunLoading, ClassLoading }