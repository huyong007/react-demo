
import React from "react";
function LogProps(WrappedComponent) {
    class ClogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }
        render() {
            const { forwardedRef, ...rest } = this.props;
            return <WrappedComponent ref={forwardedRef} {...rest} />
        }
    }
    return React.forwardRef((props, ref) => {
        return <ClogProps {...props} forwardedRef={ref} />;
    });
}


class FancyButton extends React.Component {
    focus(e) {
        console.log(e, 'e');
    }
    render() {
        return (
            <input ref={ref => this.input = ref} type="text" onFocus={this.focus} />
        )
    }
}

export default LogProps(FancyButton);