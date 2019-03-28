import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : ['red', 'green', 'blue', 'pink']
        }
    }
    showColor = (color) => {
        return {
            backgroundColor : color // dòng này set background color bằng với từng đối tượng màu trong mảng
        }
    }
    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }
    render() {
        var elementColor = this.state.colors.map((color, index) => {
            return <span 
            key={index} 
            style={this.showColor(color)}
            className={ this.props.color === color ? 'active' : '' }
            onClick={ () => this.setActiveColor(color) }
            > </span>
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header bg-primary">Color Picker</div>
                <div className="card-body">
                    {elementColor}
                </div>
              </div>
          </div>
        );
    }
}

export default ColorPicker;