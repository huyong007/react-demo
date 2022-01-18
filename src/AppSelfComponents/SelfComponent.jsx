import { useParams } from 'react-router-dom';
import React, { Component } from 'react';


function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


const asyncComponent = (componentName) => (importComponent) => {
    return class Async extends Component {
        static displayName = `async(${getDisplayName(componentName)})`;
        state = {
            component: null
        }


        componentDidMount() {
            if (this.state.component) return;
            importComponent(componentName)
                .then(cmp => {
                    this.setState({ component: cmp.default ? cmp.default : cmp });
                });
        }

        render() {
            const C = this.state.component;
            return (
                <main style={{ padding: "1rem" }}>
                    <h2>Current component:{componentName}</h2>
                    {C ? <C {...this.props} /> : (<div>Loading....</div>)}
                </main>

            )
        }
    }
};




export function SelfComponent() {
    const path = useParams();
    const component = path.componentName.split('/').reduce((a, b) => a + b.split('-').map(item => item.replace(/^\S/, s => s.toUpperCase())).join(''), '')

    const loadComponent = (component) => {
        return import(`./${component}/${component}`);
    }


    const CurrentComponent = asyncComponent(component)(loadComponent);
    return (
        <CurrentComponent />
    )
}
