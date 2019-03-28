import React, { Component } from 'react';
import Reset from './Reset';

class SizeSetting extends Component {
    changeSize = (value) => {
        this.props.onChangeSize(value)
    }
    
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header bg-warning">Size : {this.props.fontSize}px</div>
                <div className="card-body">
                  <button type="button" className="btn btn-primary mr-2" onClick={() => this.changeSize(2)}> Tăng </button>
                  <button type="button" className="btn btn-warning mr-2" onClick={() => this.changeSize(-2)}> Giảm </button>
                  <Reset onDefault={this.props.onDefault}/>
                </div>
              </div>
          </div>
        );
    }
}

export default SizeSetting;