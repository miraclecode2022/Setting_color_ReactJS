import React, { Component } from 'react';

import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color : 'red',
      fontSize : 12
    }
  }
  onSetColor = (params) => {
    this.setState({
      color : params
    })
  }
  onChangeSize = (value) => {
    // điều kiên > 8 và < 36
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
      this.setState({
        fontSize : this.state.fontSize + value
      })
    }
  }
  onDefault = (value) => {
    if(value){
      this.setState({
        color : 'red',
        fontSize : 16
      })
    }
  }
  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
          <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} onDefault={this.onDefault} />
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
