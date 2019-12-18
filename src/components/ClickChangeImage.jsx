import React, {Component} from 'react';

const green = require('../img/test.jpg');
const yellow = require('../img/test2.jpg');

export class ClickChangeImage extends Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div>
        <div className="img-400-400">
            <img src={this.state.color} alt="" className="img-small"/>
        </div>
        <button onClick={this.changeColor}>
  			Change image
		</button>
      </div>
    );
  }
}