import React from 'react';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({ x: event.clientX, y: event.clientY })
    }

    render() {
        return (
            <div style={{ width: '100vw', height: '40vh' }} onMouseMove={this.handleMouseMove} >
                {this.props.render(this.state)}
            </div>
        )
    }
}


export default function withMouse(Component) {
    return class extends React.Component {
      render() {
        return (
          <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse} />
          )}/>
        );
      }
    }
  }


// export { WithMouse, Mouse }