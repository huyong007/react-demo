import React, { Component } from 'react';

import './Loading.css'
export default function (loadingCheck) {
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