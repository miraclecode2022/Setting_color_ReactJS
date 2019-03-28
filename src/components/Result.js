import React, { Component } from 'react';


class Result extends Component {
    setStyle () {
        return {
            color : this.props.color,
            borderColor : this.props.color,
            fontSize : this.props.fontSize
        } 
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-10">
              <p className="text-uppercase"> Color : <span style={this.setStyle()}> {this.props.color} </span>  FontSize : {this.props.fontSize}px</p>
              <div id="content" style={this.setStyle()}>
                Nội dung setting
              </div>
          </div>
        );
    }
}

export default Result;