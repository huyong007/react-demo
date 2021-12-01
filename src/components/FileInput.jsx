import React from "react";
import logProps from './LogProps';

import FancyButton from './RefDom/FancyButton'

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.buttonRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.fileInput.current)
        console.log(this.buttonRef.current)
        this.fileInput.current.focus();

    }

    focusTextInput = (e)=>{
        e.preventDefault();
        console.log('focusTextInput')
        
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Upload File</label>
                    <input type="file" ref={this.fileInput} />
                    <br />
                    <button type="submit" >upload</button>
                    <FancyButton ref={this.buttonRef} >Click me!</FancyButton>
                </form>
                
            </>


        )

    }
}

export default logProps(FileInput);