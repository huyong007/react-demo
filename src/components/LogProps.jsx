import React from "react";


function logProps(Component) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props', prevProps);
            console.log('new props', this.props);
        }
        render() {
            const { forwardedRef, ...rest } = this.props;
            return <Component {...rest} ref={forwardedRef} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardRef={ref} />;
    })
}

export default logProps;