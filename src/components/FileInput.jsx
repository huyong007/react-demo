import React from "react";
import logProps from './LogProps';
class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.fileInput)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Upload File</label>
                <input type="file" ref={this.fileInput} />
                <br />
                <button type="submit" >upload</button>
            </form>
        )

    }
}

export default logProps(FileInput);