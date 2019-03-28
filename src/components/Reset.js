import React, { Component } from 'react';

class Reset extends Component {
    resetDefault = () => {
        return this.props.onDefault(true)
    }
    render() {
        return (
            <button type="button" className="btn btn-danger" onClick={() => this.resetDefault()}> Reset </button>
        );
    }
}

export default Reset;