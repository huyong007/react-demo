import React from 'react';
import Mouse from './Mouse'
import Cat from './Cat';

export default class MouseTracker extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>移动鼠标</h1>
                <Cat />
            </React.Fragment>
        )
    }
}

