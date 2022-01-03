import { useParams } from 'react-router-dom';

import React, { Component } from 'react';


const asyncComponent = (importComponent,component) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent(component)
                .then(cmp => {
                    this.setState({ component: cmp.default });
                });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};




export default function SelfComponent() {
    const path = useParams();
    console.log(path, 'path');
    const component = path.componentName.split('-').map(item => item.replace(/^\S/, s => s.toUpperCase())).join('')
    console.log(component, 'component');
    
    const loadComponent = (component) => {
        return import(`./${component}`);
    }
    const CurrentComponent = asyncComponent(loadComponent,component)
    return (

        <main style={{ padding: "1rem" }}>
            <h2>Current component:{component}</h2>
            <CurrentComponent />
        </main>

    )
}
